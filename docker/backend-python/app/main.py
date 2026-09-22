from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI(title="bench backend-python")


class Health(BaseModel):
    status: str


@app.get("/health", response_model=Health)
def health() -> Health:
    return Health(status="ok")
