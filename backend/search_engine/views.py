import asyncio
from functools import wraps

import httpx
from drf_spectacular.utils import extend_schema
from loguru import logger
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import PopularVideosQuerySerializer
from .utils.constansts import TMDP_BASE_URL, Env


def to_async(blocking):
    @wraps(blocking)
    def run_wrapper(*args, **kwargs):
        return asyncio.run(blocking(*args, **kwargs))

    return run_wrapper


@extend_schema(
    parameters=[PopularVideosQuerySerializer],
)
@api_view(http_method_names=["GET"])
@to_async
async def get_popular_movies(request) -> Response:
    query = PopularVideosQuerySerializer(data=request.GET)
    if not query.is_valid():
        return Response(data=query.errors, status=status.HTTP_400_BAD_REQUEST)

    popular_movies_url = f"{TMDP_BASE_URL}/movie/popular"
    popular_tv_shows_url = f"{TMDP_BASE_URL}/tv/popular"

    tmdb_params = {
        **query.validated_data,
        "api_key": Env.TMDP_API_KEY,
    }
    logger.info(f"Fetching popular movies with params: {tmdb_params}")
    try:
        async with httpx.AsyncClient() as client:
            popular_movies_res, popular_tv_shows_res = await asyncio.gather(
                client.get(popular_movies_url, params=tmdb_params),
                client.get(popular_tv_shows_url, params=tmdb_params),
            )
            popular_movies_res.raise_for_status()
            popular_tv_shows_res.raise_for_status()

            data = {
                "page": query.validated_data.get("page"),
                "movies": popular_movies_res.json()["results"],
                "tv_shows": popular_tv_shows_res.json()["results"],
            }
            return Response(
                data,
                status=status.HTTP_200_OK,
            )

    except httpx.HTTPStatusError as e:
        logger.error(
            f'Failed to fetch popular videos: "{e.request.url}"[{e.response.status_code}]'
        )
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        logger.error(f"Failed to fetch popular videos: {e}")
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
