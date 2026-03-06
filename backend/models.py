from sqlalchemy import Column, Integer, String
from .database import Base


class Counter(Base):
    __tablename__ = "counters"

    id = Column(Integer, primary_key=True, index=True, autoincrement=True)
    key = Column(String(64), unique=True, nullable=False, index=True)
    value = Column(Integer, nullable=False, default=0)
