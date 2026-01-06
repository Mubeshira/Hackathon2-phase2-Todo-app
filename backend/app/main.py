# from fastapi import FastAPI, Depends, HTTPException, status
# from fastapi.security import HTTPBearer
# from sqlmodel import Session
# from contextlib import asynccontextmanager
# from typing import AsyncGenerator
# from .models import User, Todo
# from .auth import decode_access_token, get_current_user
# from .database import get_session, create_db_and_tables


# # Initialize FastAPI app
# @asynccontextmanager
# async def lifespan(app: FastAPI) -> AsyncGenerator[None, None]:
#     # Create database tables
#     create_db_and_tables()
#     yield


# app = FastAPI(lifespan=lifespan, title="Todo API", version="1.0.0")

# # Security
# security = HTTPBearer()


# # Include API routes
# @app.get("/")
# def read_root():
#     return {"message": "Welcome to the Todo API"}


# @app.get("/health")
# def health_check():
#     return {"status": "healthy"}


# # Include API routes
# from .api.todos import router as todos_router
# from .api.auth import router as auth_router

# app.include_router(todos_router)
# app.include_router(auth_router)


# @app.get("/users/me")
# async def read_users_me(current_user: User = Depends(get_current_user)):
#     return current_user



# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from backend.app.api import auth, todos # Apne folder names ke mutabiq check karlein
# from .api import todos  # Ye line top par add karein
# app = FastAPI()

# # Yeh hissa sab se zaroori hai!
# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=["http://localhost:3000"], # Frontend ka address
#     allow_credentials=True,
#     allow_methods=["*"], # Tamam methods (POST, GET, etc.) allow hain
#     allow_headers=["*"], # Tamam headers allow hain
# )

# @app.get("/")
# def read_root():
#     return {"message": "Backend is running!"}

# # Routes ko include karein
# app.include_router(auth.router, tags=["auth"])
# app.include_router(todos.router, prefix="/todos", tags=["todos"])
# app.include_router(todos.router)


from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .api import auth, todos  

app = FastAPI()

# 1. Clean CORS Setup (Sirf ek baar)


# Ye line dhoondein ya add karein
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # Is se rasta khul jayega
    allow_methods=["*"],
    allow_headers=["*"],
)

# 2. Routes
# # main.py mein in lines ko aise change karein:
app.include_router(auth.router) # prefix hata dein kyunki file ke andar pehle se hai
app.include_router(todos.router)
@app.get("/")
def read_root():
    return {"message": "Server is running!"}