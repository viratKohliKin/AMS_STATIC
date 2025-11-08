from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base
from app.core.config import get_settings , DATABASE_URL

# Load settings from .env
settings = get_settings()

# Create the SQLAlchemy engine (connects to the database)
engine = create_engine(
    DATABASE_URL,
    echo=settings.DEBUG,
    fast_executemany=True
)

# Create a Session class to manage DB sessions
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

# Create a base class for ORM models
Base = declarative_base()

# Dependency to get DB session
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()