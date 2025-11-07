from pydantic_settings import BaseSettings
from functools import lru_cache
from pydantic import ConfigDict

class Settings(BaseSettings):
    """
    Application configuration class.
    Loads variables automatically from .env file.
    """
    model_config = ConfigDict(env_file=".env", extra="ignore")
    
    DB_SERVER: str                 
    DB_NAME: str                   
    DB_USER: str                   
    DB_PASSWORD: str               
    DB_DRIVER: str = "ODBC Driver 18 for SQL Server"

    SECRET_KEY: str
    DEBUG: bool = True
    PROJECT_NAME: str = "FastAPI User Auth App"
    ENVIRONMENT: str = "development"

@lru_cache()
def get_settings():
    """
    Caches and returns settings instance so it loads only once.
    FastAPI apps often import this multiple times, so this avoids reloading.
    """
    return Settings()
