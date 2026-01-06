# from sqlmodel import create_engine, Session
# from typing import Generator
# import os
# from dotenv import load_dotenv


# # Load environment variables
# load_dotenv()


# # Database setup
# DATABASE_URL = os.getenv("DATABASE_URL", "sqlite:///./todo_app.db")
# engine = create_engine(DATABASE_URL)


# def get_session() -> Generator:
#     """Get database session."""
#     with Session(engine) as session:
#         yield session


# def create_db_and_tables():
#     """Create database tables."""
#     from .models import User, Todo  # Import here to avoid circular import
#     from sqlmodel import SQLModel
#     SQLModel.metadata.create_all(bind=engine)



from sqlmodel import create_engine, Session
import os
from dotenv import load_dotenv

load_dotenv()

DATABASE_URL = os.getenv("DATABASE_URL")

# Humne 10 seconds ka timeout lagaya hai
engine = create_engine(
    DATABASE_URL, 
    echo=True, 
    connect_args={"sslmode": "require", "connect_timeout": 10}
)

def get_session():
    with Session(engine) as session:
        yield session