from contextlib import asynccontextmanager

from fastapi import Depends, FastAPI
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session

from .database import get_db, init_db, SessionLocal
from .models import Counter

DEFAULT_KEY = "default"


def get_counter(db: Session, key: str = DEFAULT_KEY) -> Counter:
    row = db.query(Counter).filter(Counter.key == key).first()
    if row is None:
        row = Counter(key=key, value=0)
        db.add(row)
        db.commit()
        db.refresh(row)
    return row


@asynccontextmanager
async def lifespan(app: FastAPI):
    init_db()
    yield


app = FastAPI(title="Count API", lifespan=lifespan)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/api/count")
def get_count(db: Session = Depends(get_db)):
    counter = get_counter(db)
    return {"count": counter.value}


@app.post("/api/count/increment")
def increment_count(db: Session = Depends(get_db)):
    counter = get_counter(db)
    counter.value += 1
    db.commit()
    db.refresh(counter)
    return {"count": counter.value}
