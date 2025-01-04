import asyncio
from functools import wraps

import httpx
from drf_spectacular.utils import extend_schema
from loguru import logger
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response

from .serializers import BaseQuerySerializer, SearchQuerySerializer
from .services.SearchService import SearchService


def to_async(blocking):
    @wraps(blocking)
    def run_wrapper(*args, **kwargs):
        return asyncio.run(blocking(*args, **kwargs))

    return run_wrapper


@extend_schema(
    parameters=[BaseQuerySerializer],
)
@api_view(http_method_names=["GET"])
@to_async
async def get_trending(req):
    query_params = BaseQuerySerializer(data=req.GET)
    if not query_params.is_valid():
        return Response(data=query_params.errors, status=status.HTTP_400_BAD_REQUEST)
    try:
        trending_movies, trending_tv_shows = await asyncio.gather(
            SearchService.fetch_trending_movies(query_params.validated_data),
            SearchService.fetch_trending_tv_shows(query_params.validated_data),
        )

        data = {
            "page": query_params.validated_data.get("page"),
            "movies": trending_movies,
            "tv_shows": trending_tv_shows,
        }
        return Response(
            data,
            status=status.HTTP_200_OK,
        )
    except httpx.HTTPStatusError as e:
        logger.error(
            f'Failed to fetch trending videos: "{e.request.url}"[{e.response.status_code}]'
        )
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        logger.error(f"Failed to fetch trending videos: {e}")
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@extend_schema(
    parameters=[BaseQuerySerializer],
)
@api_view(http_method_names=["GET"])
@to_async
async def get_popular(req) -> Response:
    query = BaseQuerySerializer(data=req.GET)
    if not query.is_valid():
        return Response(data=query.errors, status=status.HTTP_400_BAD_REQUEST)

    try:
        popular_movies, popular_tv_shows = await asyncio.gather(
            SearchService.fetch_popular_movies(query.validated_data),
            SearchService.fetch_popular_tv_shows(query.validated_data),
        )

        data = {
            "page": query.validated_data.get("page"),
            "movies": popular_movies,
            "tv_shows": popular_tv_shows,
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


@extend_schema(
    parameters=[SearchQuerySerializer],
)
@api_view(http_method_names=["GET"])
@to_async
async def search_videos(req) -> Response:
    query = SearchQuerySerializer(data=req.GET)
    if not query.is_valid():
        return Response(data=query.errors, status=status.HTTP_400_BAD_REQUEST)

    try:
        movies, tv_shows = await asyncio.gather(
            SearchService.search_movies(query.validated_data),
            SearchService.search_tv_shows(query.validated_data),
        )

        data = {
            "page": query.validated_data.get("page"),
            "movies": movies,
            "tv_shows": tv_shows,
        }
        return Response(
            data,
            status=status.HTTP_200_OK,
        )
    except httpx.HTTPStatusError as e:
        logger.error(
            f'Failed to search videos: "{e.request.url}"[{e.response.status_code}]'
        )
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        logger.error(f"Failed to search videos: {e}")
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@extend_schema(
    parameters=[BaseQuerySerializer],
)
@api_view(http_method_names=["GET"])
@to_async
async def get_available_genres(req) -> Response:
    query = BaseQuerySerializer(data=req.GET)
    if not query.is_valid():
        return Response(data=query.errors, status=status.HTTP_400_BAD_REQUEST)
    try:
        genres = await SearchService.fetch_available_genres(query.validated_data)
        return Response(
            genres,
            status=status.HTTP_200_OK,
        )
    except httpx.HTTPStatusError as e:
        logger.error(
            f'Failed to fetch genres: "{e.request.url}"[{e.response.status_code}]'
        )
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
    except Exception as e:
        logger.error(f"Failed to fetch genres: {e}")
        return Response(status=status.HTTP_500_INTERNAL_SERVER_ERROR)
