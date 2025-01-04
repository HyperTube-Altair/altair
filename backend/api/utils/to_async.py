import asyncio
from functools import wraps
from typing import Callable


def to_async(blocking: Callable) -> Callable:
    """
    Decorator to run a blocking function in an async context.

    Args:
        blocking (Callable): The blocking function to be run asynchronously.

    Returns:
        Callable: An asynchronous function that runs the blocking function.
    """

    @wraps(blocking)
    def run_wrapper(*args, **kwargs):
        return asyncio.run(blocking(*args, **kwargs))

    return run_wrapper
