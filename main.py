# import asyncio

# from fastapi import BackgroundTasks, FastAPI

# app = FastAPI()


# async def generate_report(user_id: int):
#     # Simulate async work
#     await asyncio.sleep(20)
#     print(f"Report generated for user {user_id}")
#     return "ok"


# @app.get("/report/")
# async def create_report(user_id: int, background_tasks: BackgroundTasks):
#     background_tasks.add_task(generate_report, user_id)
#     return {"message": "Report generation started in background."}

# Source - https://stackoverflow.com/a/73443824
# Posted by Chris, modified by community. See post 'Timeline' for change history
# Retrieved 2026-07-26, License - CC BY-SA 4.0

from fastapi import FastAPI, Request, HTTPException, File, UploadFile
from fastapi.responses import HTMLResponse
from fastapi.templating import Jinja2Templates
from urllib.parse import unquote
import aiofiles

import os

app = FastAPI()
templates = Jinja2Templates(directory="templates")


# @app.post('/upload')
# async def upload(request: Request):
#     try:
#         filename = request.headers['filename']
#         filename = unquote(filename)
#         filepath = os.path.join('./', os.path.basename(filename))
#         async with aiofiles.open(filepath, 'wb') as f:
#             async for chunk in request.stream():
#                 await f.write(chunk)
#     except Exception:
#         raise HTTPException(status_code=500, detail='Something went wrong')

#     return {"message": f"Successfuly uploaded: {filename}"}


# @app.post("/upload")
# async def upload(file: UploadFile = File(...)):
#     with open(file.filename, "wb") as f:
#         while chunk := await file.read(1024 * 1024):
#             f.write(chunk)

#     return {"filename": file.filename}


# @app.get("/", response_class=HTMLResponse)
# async def main(request: Request):
#     return templates.TemplateResponse(request=request, name="index.html")


# import hashlib
# import time
# from dataclasses import dataclass
# from functools import wraps
# from typing import Any, Callable

# from fastapi import FastAPI, HTTPException, Request

# app = FastAPI()


# def rate_limit(max_calls: int, period: int):
#     def decorator(func: Callable[[Request], Any]) -> Callable[[Request], Any]:
#         usage: dict[str, list[float]] = {}

#         @wraps(func)
#         async def wrapper(request: Request) -> Any:
#             # get the client's IP address
#             if not request.client:
#                 raise ValueError("Request has no client information")
#             ip_address: str = request.client.host

#             # create a unique identifier for the client
#             unique_id: str = hashlib.sha256((ip_address).encode()).hexdigest()

#             # update the timestamps
#             now = time.time()
#             if unique_id not in usage:
#                 usage[unique_id] = []
#             timestamps = usage[unique_id]
#             timestamps[:] = [t for t in timestamps if now - t < period]

#             if len(timestamps) < max_calls:
#                 timestamps.append(now)
#                 return await func(request)

#             # calculate the time to wait before the next request
#             wait = period - (now - timestamps[0])
#             raise HTTPException(
#                 status_code=429,
#                 detail=f"Rate limit exceeded. Retry after {wait:.2f} seconds",
#             )

#         return wrapper

#     return decorator


# @app.get("/")
# @rate_limit(max_calls=5, period=60)
# async def read_root(request: Request):
#     return {"message": "Hello, World!"}


# # Run the server using `uvicorn script_name:app --reload`

# from collections.abc import AsyncIterable
# from fastapi import FastAPI
# from fastapi.sse import EventSourceResponse, ServerSentEvent
# import asyncio

# app = FastAPI()

# subscribers: set[asyncio.Queue] = set()

# @app.get("/events", response_class=EventSourceResponse)
# async def events() -> AsyncIterable[ServerSentEvent]:
#     queue: asyncio.Queue = asyncio.Queue()
#     subscribers.add(queue)

#     try:
#         while True:
#             data = await queue.get()
#             yield ServerSentEvent(data=data, event="dashboard_updated")
#     finally:
#         subscribers.discard(queue)


# @app.post("/update")
# async def update():
#     # 1. update DB
#     # db.commit()

#     # 2. notify all connected clients
#     # snapshot to avoid mutating `subscribers` while iterating
#     # (a client can disconnect mid-broadcast, triggering `finally` above)
#     for q in list(subscribers):
#         q.put_nowait('{"message":"data changed"}')

#     return {"status": "ok"}


from collections.abc import AsyncIterable, Iterable

from fastapi import FastAPI
from pydantic import BaseModel

app = FastAPI()


class Item(BaseModel):
    name: str
    description: str | None


items = [
    Item(name="Plumbus", description="A multi-purpose household device."),
    Item(name="Portal Gun", description="A portal opening device."),
    Item(name="Meeseeks Box", description="A box that summons a Meeseeks."),
]


@app.get("/items/stream")
async def stream_items() -> AsyncIterable[Item]:
    for item in items:
        yield item


class ItemSearchFilter(BaseModel):
    category: str
    min_price: float | None = None
    tags: list[str] = []


# Map the route explicitly to the "QUERY" HTTP method
@app.api_route("/items/search", methods=["QUERY"])
async def search_items(filters: ItemSearchFilter):
    # Simulated search logic (this safely reads data using a request body)
    results = [
        {"id": 1, "name": "Laptop", "category": filters.category, "price": 1200},
        {"id": 2, "name": "Mouse", "category": filters.category, "price": 25}
    ]
    return {"results": results}

# Code below omitted 👇
