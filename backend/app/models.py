# from sqlmodel import SQLModel, Field, Relationship
# from typing import Optional, List
# from datetime import datetime
# import uuid


# class UserBase(SQLModel):
#     email: str = Field(unique=True, index=True)
#     first_name: Optional[str] = None
#     last_name: Optional[str] = None


# class User(UserBase, table=True):
#     id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
#     email: str = Field(unique=True, index=True)
#     password_hash: str
#     created_at: datetime = Field(default_factory=datetime.utcnow)
#     updated_at: datetime = Field(default_factory=datetime.utcnow)
    
#     # Relationship to todos
#     todos: List["Todo"] = Relationship(back_populates="user")


# class UserRead(UserBase):
#     id: uuid.UUID
#     created_at: datetime
#     updated_at: datetime


# class UserCreate(UserBase):
#     email: str
#     password: str


# class UserUpdate(SQLModel):
#     first_name: Optional[str] = None
#     last_name: Optional[str] = None


# class TodoBase(SQLModel):
#     title: str
#     description: Optional[str] = None
#     due_date: Optional[datetime] = None
#     completed: bool = False
#     priority: str = Field(default="medium", regex="^(low|medium|high)$")  # low, medium, high


# class Todo(TodoBase, table=True):
#     id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
#     user_id: uuid.UUID = Field(foreign_key="user.id")
    
#     created_at: datetime = Field(default_factory=datetime.utcnow)
#     updated_at: datetime = Field(default_factory=datetime.utcnow)
    
#     # Relationship to user
#     user: "User" = Relationship(back_populates="todos")


# class TodoRead(TodoBase):
#     id: uuid.UUID
#     user_id: uuid.UUID
#     created_at: datetime
#     updated_at: datetime


# class TodoCreate(TodoBase):
#     title: str


# class TodoUpdate(SQLModel):
#     title: Optional[str] = None
#     description: Optional[str] = None
#     due_date: Optional[datetime] = None
#     completed: Optional[bool] = None
#     priority: Optional[str] = Field(default=None, regex="^(low|medium|high)$")


# from sqlmodel import SQLModel, Field, Relationship
# from typing import Optional, List
# from datetime import datetime
# import uuid

# # --- USER MODELS ---

# class UserBase(SQLModel):
#     email: str = Field(unique=True, index=True)
#     first_name: Optional[str] = None
#     last_name: Optional[str] = None

# class User(UserBase, table=True):
#     # UUID use karna behtar hai security ke liye
#     id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
#     password_hash: str
#     # Yahan datetime.utcnow ke baad () nahi lagana
#     created_at: datetime = Field(default_factory=datetime.utcnow)
#     updated_at: datetime = Field(default_factory=datetime.utcnow)
    
#     # Relationship: Aik user ke many todos ho sakte hain
#     todos: List["Todo"] = Relationship(back_populates="user")

# class UserRead(UserBase):
#     id: uuid.UUID
#     created_at: datetime

# class UserCreate(UserBase):
#     password: str

# # --- TODO MODELS ---

# class TodoBase(SQLModel):
#     title: str
#     description: Optional[str] = None
#     due_date: Optional[datetime] = None
#     completed: bool = False
#     # Priority ke liye regex validation theek hai
#     priority: str = Field(default="medium") 

# class Todo(TodoBase, table=True):
#     id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
#     # Foreign Key jo User table se connect karti hai
#     user_id: uuid.UUID = Field(foreign_key="user.id")
    
#     created_at: datetime = Field(default_factory=datetime.utcnow)
#     updated_at: datetime = Field(default_factory=datetime.utcnow)
    
#     # Relationship: Har todo ka aik owner (user) hota hai
#     user: Optional["User"] = Relationship(back_populates="todos")

# class TodoCreate(TodoBase):
#     pass # Title aur baqi cheezein TodoBase se mil jayengi

# class TodoRead(TodoBase):
#     id: uuid.UUID
#     user_id: uuid.UUID
#     created_at: datetime

# class TodoUpdate(SQLModel):
#     title: Optional[str] = None
#     description: Optional[str] = None
#     completed: Optional[bool] = None
#     priority: Optional[str] = None


from sqlmodel import SQLModel, Field, Relationship
from typing import Optional, List
from datetime import datetime, timezone
import uuid

# --- USER MODELS ---
class UserBase(SQLModel):
    email: str = Field(unique=True, index=True)
    first_name: Optional[str] = None
    last_name: Optional[str] = None

class User(UserBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    password_hash: str
    # Fixed: datetime.now(timezone.utc) is better
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
    todos: List["Todo"] = Relationship(back_populates="user")

class UserCreate(UserBase):
    password: str

# --- TODO MODELS ---
class TodoBase(SQLModel):
    title: str
    description: Optional[str] = None
    due_date: Optional[datetime] = None
    completed: bool = False
    priority: str = Field(default="medium") 

class Todo(TodoBase, table=True):
    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)
    user_id: uuid.UUID = Field(foreign_key="user.id")
    
    created_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    updated_at: datetime = Field(default_factory=lambda: datetime.now(timezone.utc))
    
    user: Optional["User"] = Relationship(back_populates="todos")


# Yeh models.py ke bilkul niche add karein
class TodoCreate(TodoBase):
    pass

class TodoRead(TodoBase):
    id: uuid.UUID
    user_id: uuid.UUID
    created_at: datetime

class TodoUpdate(SQLModel):
    title: Optional[str] = None
    description: Optional[str] = None
    completed: Optional[bool] = None
    priority: Optional[str] = None    