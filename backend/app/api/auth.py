# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlmodel import Session
# from typing import Dict
# from ..models import User, UserCreate
# from ..auth import authenticate_user, create_access_token, get_password_hash
# from ..database import get_session
# from ..auth import get_current_user


# router = APIRouter(prefix="/auth", tags=["auth"])


# @router.post("/register")
# def register(user: UserCreate, session: Session = Depends(get_session)):
#     """Register a new user."""
#     # Check if user already exists
#     from sqlmodel import select
#     statement = select(User).where(User.email == user.email)
#     result = session.exec(statement)
#     existing_user = result.first()

#     if existing_user:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="User with this email already exists"
#         )

#     # Create new user
#     hashed_password = get_password_hash(user.password)
#     db_user = User(
#         email=user.email,
#         first_name=user.first_name,
#         last_name=user.last_name,
#         password_hash=hashed_password
#     )

#     session.add(db_user)
#     session.commit()
#     session.refresh(db_user)

#     # Create access token
#     access_token = create_access_token(data={"sub": str(db_user.id)})

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "id": db_user.id,
#             "email": db_user.email,
#             "first_name": db_user.first_name,
#             "last_name": db_user.last_name
#         }
#     }


# @router.post("/login")
# def login(email: str, password: str, session: Session = Depends(get_session)):
#     """Authenticate user and return access token."""
#     user = authenticate_user(session, email, password)

#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect email or password",
#             headers={"WWW-Authenticate": "Bearer"},
#         )

#     access_token = create_access_token(data={"sub": str(user.id)})

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "id": user.id,
#             "email": user.email,
#             "first_name": user.first_name,
#             "last_name": user.last_name
#         }
#     }


# @router.post("/logout")
# def logout():
#     """Logout user (client-side token removal is sufficient)."""
#     return {"message": "Successfully logged out"}


# @router.get("/me")
# def read_users_me(current_user: User = Depends(get_current_user)):
#     """Get current user info."""
#     return current_user



# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlmodel import Session, select
# from pydantic import BaseModel # Naya import
# from ..models import User, UserCreate
# from ..auth import authenticate_user, create_access_token, get_password_hash
# from ..database import get_session
# from ..auth import get_current_user

# router = APIRouter(prefix="/auth", tags=["auth"])

# # Login ke liye data model taake JSON support ho sake
# class LoginRequest(BaseModel):
#     email: str
#     password: str

# @router.post("/register")
# def register(user: UserCreate, session: Session = Depends(get_session)):
#     """Register a new user."""
#     statement = select(User).where(User.email == user.email)
#     result = session.exec(statement)
#     existing_user = result.first()

#     if existing_user:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="User with this email already exists"
#         )

#     # Create new user
#     hashed_password = get_password_hash(user.password)
#     db_user = User(
#         email=user.email,
#         first_name=user.first_name,
#         last_name=user.last_name,
#         password_hash=hashed_password
#     )

#     session.add(db_user)
#     session.commit()
#     session.refresh(db_user)

#     # Create access token
#     access_token = create_access_token(data={"sub": str(db_user.id)})

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "id": db_user.id,
#             "email": db_user.email,
#             "first_name": db_user.first_name,
#             "last_name": db_user.last_name
#         }
#     }

# @router.post("/login")
# def login(login_data: LoginRequest, session: Session = Depends(get_session)):
#     """Authenticate user using JSON data."""
#     # login_data se email aur password nikaal rahe hain
#     user = authenticate_user(session, login_data.email, login_data.password)

#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect email or password",
#             headers={"WWW-Authenticate": "Bearer"},
#         )

#     access_token = create_access_token(data={"sub": str(user.id)})

#     return {
#         "access_token": access_token,
#         "token_type": "bearer",
#         "user": {
#             "id": user.id,
#             "email": user.email,
#             "first_name": user.first_name,
#             "last_name": user.last_name
#         }
#     }

# @router.post("/logout")
# def logout():
#     """Logout user."""
#     return {"message": "Successfully logged out"}

# @router.get("/me")
# def read_users_me(current_user: User = Depends(get_current_user)):
#     """Get current user info."""
#     return current_user

# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlmodel import Session, select
# from pydantic import BaseModel
# from ..models import User, UserCreate
# from ..auth import authenticate_user, create_access_token, get_password_hash
# from ..database import get_session
# from ..auth import get_current_user

# router = APIRouter(prefix="/auth", tags=["auth"])

# # Data model for JSON Login
# class LoginRequest(BaseModel):
#     email: str
#     password: str

# @router.post("/register")
# def register(user: UserCreate, session: Session = Depends(get_session)):
#     statement = select(User).where(User.email == user.email)
#     existing_user = session.exec(statement).first()

#     if existing_user:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="User with this email already exists"
#         )

#     hashed_password = get_password_hash(user.password)
#     db_user = User(
#         email=user.email,
#         first_name=user.first_name,
#         last_name=user.last_name,
#         password_hash=hashed_password
#     )

#     session.add(db_user)
#     session.commit()
#     session.refresh(db_user)

#     access_token = create_access_token(data={"sub": str(db_user.id)})
#     return {"access_token": access_token, "token_type": "bearer"}

# @router.post("/login")
# def login(login_data: LoginRequest, session: Session = Depends(get_session)):
#     # Authenticate using JSON data
#     user = authenticate_user(session, login_data.email, login_data.password)

#     if not user:
#         raise HTTPException(
#             status_code=status.HTTP_401_UNAUTHORIZED,
#             detail="Incorrect email or password",
#         )

#     access_token = create_access_token(data={"sub": str(user.id)})
#     return {
#         "access_token": access_token, 
#         "token_type": "bearer",
#         "user_email": user.email
#     }

from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from pydantic import BaseModel
from typing import Optional
from ..models import User, UserCreate
from ..auth import authenticate_user, create_access_token, get_password_hash
from ..database import get_session
from ..auth import get_current_user

router = APIRouter(prefix="/auth", tags=["auth"])

# --- Models for JSON Requests ---

class LoginRequest(BaseModel):
    email: str
    password: str

# --- Routes ---

# @router.post("/register")
# def register(user: UserCreate, session: Session = Depends(get_session)):
#     """User ko database mein register karne ke liye"""
#     # Check karein agar user pehle se maujood hai
#     statement = select(User).where(User.email == user.email)
#     existing_user = session.exec(statement).first()

#     if existing_user:
#         raise HTTPException(
#             status_code=status.HTTP_400_BAD_REQUEST,
#             detail="User with this email already exists"
#         )

#     # Password ko hash karein aur naya user banayein
#     hashed_password = get_password_hash(user.password)
#     db_user = User(
#         email=user.email,
#         first_name=user.first_name,
#         last_name=user.last_name,
#         password_hash=hashed_password
#     )

#     session.add(db_user)
#     session.commit()
#     session.refresh(db_user)

#     # Registration ke foran baad token de dein
#     access_token = create_access_token(data={"sub": str(db_user.id)})
    
#     return {
#         "access_token": access_token, 
#         "token_type": "bearer",
#         "user": {
#             "id": db_user.id,
#             "email": db_user.email
#         }
#     }
@router.post("/register")
def register(user: UserCreate, session: Session = Depends(get_session)):
    # 1. Check if user already exists
    statement = select(User).where(User.email == user.email)
    existing_user = session.exec(statement).first()

    if existing_user:
        raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="User with this email already exists"
        )

    try:
        # 2. Hash password and create user object
        hashed_password = get_password_hash(user.password)
        db_user = User(
            email=user.email,
            first_name=user.first_name,
            last_name=user.last_name,
            password_hash=hashed_password
        )

        # 3. Save to database
        session.add(db_user)
        session.commit()
        session.refresh(db_user)

        # 4. Generate token
        access_token = create_access_token(data={"sub": str(db_user.id)})
        
        # 5. Return JSON (Convert UUID to string to avoid crash)
        return {
            "access_token": access_token, 
            "token_type": "bearer",
            "user_id": str(db_user.id) 
        }
    except Exception as e:
        session.rollback()
        print(f"DATABASE ERROR: {e}") # Yeh aapke terminal mein dikhega
        raise HTTPException(status_code=500, detail="Internal Server Error during registration")
@router.post("/login")
def login(login_data: LoginRequest, session: Session = Depends(get_session)):
    """JSON data ke zariye login karne ke liye"""
    
    # Authenticate user using email and password from JSON
    user = authenticate_user(session, login_data.email, login_data.password)

    if not user:
        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Incorrect email or password",
        )

    # JWT Token banayein
    access_token = create_access_token(data={"sub": str(user.id)})

    return {
        "access_token": access_token, 
        "token_type": "bearer",
        "user": {
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name
        }
    }

@router.get("/me")
def read_users_me(current_user: User = Depends(get_current_user)):
    """Login hue user ki information lene ke liye"""
    return current_user

@router.post("/logout")
def logout():
    """Sirf confirmation message bhej raha hai (Client side se token delete hota hai)"""
    return {"message": "Successfully logged out"}