# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlmodel import Session, select
# from typing import List
# from ..models import Todo, TodoCreate, TodoRead, TodoUpdate, User
# from ..auth import get_current_user
# from ..database import get_session

# router = APIRouter(prefix="/todos", tags=["todos"])


# @router.get("/", response_model=List[TodoRead])
# def read_todos(
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Retrieve todos for the current user.
#     """
#     statement = select(Todo).where(Todo.user_id == current_user.id)
#     todos = session.exec(statement).all()
#     return todos


# @router.get("/{todo_id}", response_model=TodoRead)
# def read_todo(
#     todo_id: str,
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Retrieve a specific todo by ID.
#     """
#     todo = session.get(Todo, todo_id)
#     if not todo:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Todo not found"
#         )
#     if todo.user_id != current_user.id:
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="Not authorized to access this todo"
#         )
#     return todo


# @router.post("/", response_model=TodoRead)
# def create_todo(
#     todo: TodoCreate,
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Create a new todo for the current user.
#     """
#     db_todo = Todo.from_orm(todo)
#     db_todo.user_id = current_user.id
#     session.add(db_todo)
#     session.commit()
#     session.refresh(db_todo)
#     return db_todo


# @router.put("/{todo_id}", response_model=TodoRead)
# def update_todo(
#     todo_id: str,
#     todo: TodoUpdate,
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Update a specific todo by ID.
#     """
#     db_todo = session.get(Todo, todo_id)
#     if not db_todo:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Todo not found"
#         )
#     if db_todo.user_id != current_user.id:
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="Not authorized to update this todo"
#         )
    
#     # Update only the fields that are provided
#     for field, value in todo.dict(exclude_unset=True).items():
#         setattr(db_todo, field, value)
    
#     session.add(db_todo)
#     session.commit()
#     session.refresh(db_todo)
#     return db_todo


# @router.patch("/{todo_id}", response_model=TodoRead)
# def partial_update_todo(
#     todo_id: str,
#     todo: TodoUpdate,
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Partially update a specific todo by ID.
#     """
#     db_todo = session.get(Todo, todo_id)
#     if not db_todo:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Todo not found"
#         )
#     if db_todo.user_id != current_user.id:
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="Not authorized to update this todo"
#         )
    
#     # Update only the fields that are provided
#     for field, value in todo.dict(exclude_unset=True).items():
#         setattr(db_todo, field, value)
    
#     session.add(db_todo)
#     session.commit()
#     session.refresh(db_todo)
#     return db_todo


# @router.delete("/{todo_id}")
# def delete_todo(
#     todo_id: str,
#     current_user: User = Depends(get_current_user),
#     session: Session = Depends(get_session)
# ):
#     """
#     Delete a specific todo by ID.
#     """
#     db_todo = session.get(Todo, todo_id)
#     if not db_todo:
#         raise HTTPException(
#             status_code=status.HTTP_404_NOT_FOUND,
#             detail="Todo not found"
#         )
#     if db_todo.user_id != current_user.id:
#         raise HTTPException(
#             status_code=status.HTTP_403_FORBIDDEN,
#             detail="Not authorized to delete this todo"
#         )
    
#     session.delete(db_todo)
#     session.commit()
#     return {"message": "Todo deleted successfully"}


# from fastapi import APIRouter, Depends, HTTPException, status
# from sqlmodel import Session, select
# from typing import List
# import uuid
# from ..database import get_session
# from ..models import Todo, TodoCreate, TodoRead, User
# from ..auth import get_current_user
# from fastapi import APIRouter

# router = APIRouter(prefix="/todos", tags=["todos"])

# # 1. Naya Todo Create Karna
# @router.post("/", response_model=TodoRead)
# def create_todo(
#     todo_data: TodoCreate, 
#     session: Session = Depends(get_session), 
#     current_user: User = Depends(get_current_user)
# ):
#     # Naya todo object banana aur user_id set karna
#     new_todo = Todo(
#         **todo_data.model_dump(),
#         user_id=current_user.id
#     )
#     session.add(new_todo)
#     session.commit()
#     session.refresh(new_todo)
#     return new_todo

# # 2. Saare Todos Read Karna (Sirf apne)
# @router.get("/", response_model=List[TodoRead])
# def read_todos(
#     session: Session = Depends(get_session), 
#     current_user: User = Depends(get_current_user)
# ):
#     # Database se sirf current user ke todos mangwana
#     statement = select(Todo).where(Todo.user_id == current_user.id)
#     results = session.exec(statement)
#     return results.all()

# # 3. Todo Delete Karna
# @router.delete("/{todo_id}")
# def delete_todo(
#     todo_id: uuid.UUID,
#     session: Session = Depends(get_session),
#     current_user: User = Depends(get_current_user)
# ):
#     statement = select(Todo).where(Todo.id == todo_id, Todo.user_id == current_user.id)
#     todo = session.exec(statement).first()
    
#     if not todo:
#         raise HTTPException(status_code=404, detail="Todo not found")
    
#     session.delete(todo)
#     session.commit()
#     return {"message": "Todo deleted successfully"}


from fastapi import APIRouter, Depends, HTTPException, status
from sqlmodel import Session, select
from typing import List
import uuid
from ..database import get_session
from ..models import Todo, TodoCreate, TodoRead, User
from ..auth import get_current_user

router = APIRouter(prefix="/todos", tags=["todos"])

# 1. Naya Todo Create Karna
@router.post("/", response_model=TodoRead)
def create_todo(
    todo_data: TodoCreate, 
    session: Session = Depends(get_session), 
    current_user: User = Depends(get_current_user)
):
    new_todo = Todo(
        **todo_data.model_dump(),
        user_id=current_user.id
    )
    session.add(new_todo)
    session.commit()
    session.refresh(new_todo)
    return new_todo

# 2. Saare Todos Read Karna
@router.get("/", response_model=List[TodoRead])
def read_todos(
    session: Session = Depends(get_session), 
    current_user: User = Depends(get_current_user)
):
    statement = select(Todo).where(Todo.id != None).where(Todo.user_id == current_user.id)
    results = session.exec(statement)
    return results.all()

# 3. Todo UPDATE Karna (Yeh Naya Add Kiya Hai)
@router.put("/{todo_id}", response_model=TodoRead)
def update_todo(
    todo_id: uuid.UUID,
    todo_data: TodoCreate,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    # Database mein todo dhoondna jo is user ka ho
    statement = select(Todo).where(Todo.id == todo_id, Todo.user_id == current_user.id)
    db_todo = session.exec(statement).first()
    
    if not db_todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    # Naya data update karna
    todo_dict = todo_data.model_dump(exclude_unset=True)
    for key, value in todo_dict.items():
        setattr(db_todo, key, value)
    
    session.add(db_todo)
    session.commit()
    session.refresh(db_todo)
    return db_todo

# 4. Todo Delete Karna
@router.delete("/{todo_id}")
def delete_todo(
    todo_id: uuid.UUID,
    session: Session = Depends(get_session),
    current_user: User = Depends(get_current_user)
):
    statement = select(Todo).where(Todo.id == todo_id, Todo.user_id == current_user.id)
    todo = session.exec(statement).first()
    
    if not todo:
        raise HTTPException(status_code=404, detail="Todo not found")
    
    session.delete(todo)
    session.commit()
    return {"message": "Todo deleted successfully"}