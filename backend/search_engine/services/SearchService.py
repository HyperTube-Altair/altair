from typing import List

import httpx

from search_engine.utils.constansts import TMDP_BASE_URL, Env


class SearchService:
    popular_movies_url = f"{TMDP_BASE_URL}/movie/popular"
    popular_tv_shows_url = f"{TMDP_BASE_URL}/tv/popular"

    trending_movies_url = f"{TMDP_BASE_URL}/trending/movie/week"
    trending_tv_shows_url = f"{TMDP_BASE_URL}/trending/tv/week"

    search_movies_url = f"{TMDP_BASE_URL}/search/movie"
    searcch_tv_shows_url = f"{TMDP_BASE_URL}/search/tv"

    @classmethod
    def _get_tmdb_params(cls, query):
        return {
            **query,
            "api_key": Env.TMDP_API_KEY,
        }

    @classmethod
    async def fetch_popular_movies(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        popular_movies = []
        async with httpx.AsyncClient() as client:
            popular_movies_res = await client.get(
                cls.popular_movies_url, params=tmdb_params
            )
            popular_movies_res.raise_for_status()
            popular_movies: List = popular_movies_res.json().get("results", [])
        return popular_movies

    @classmethod
    async def fetch_popular_tv_shows(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        popular_tv_shows = []
        async with httpx.AsyncClient() as client:
            popular_tv_shows_res = await client.get(
                cls.popular_tv_shows_url, params=tmdb_params
            )
            popular_tv_shows_res.raise_for_status()
            popular_tv_shows: List = popular_tv_shows_res.json().get("results", [])
        return popular_tv_shows

    @classmethod
    async def fetch_trending_movies(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        trending_movies = []
        async with httpx.AsyncClient() as client:
            trending_movies_res = await client.get(
                cls.trending_movies_url, params=tmdb_params
            )
            trending_movies_res.raise_for_status()
            trending_movies: List = trending_movies_res.json().get("results", [])
        return trending_movies

    @classmethod
    async def fetch_trending_tv_shows(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        trending_tv_shows = []
        async with httpx.AsyncClient() as client:
            trending_tv_shows_res = await client.get(
                cls.trending_tv_shows_url, params=tmdb_params
            )
            trending_tv_shows_res.raise_for_status()
            trending_tv_shows: List = trending_tv_shows_res.json().get("results", [])
        return trending_tv_shows

    @classmethod
    async def search_movies(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        movies = []
        async with httpx.AsyncClient() as client:
            movies_res = await client.get(cls.search_movies_url, params=tmdb_params)
            movies_res.raise_for_status()
            movies: List = movies_res.json().get("results", [])
        return movies

    @classmethod
    async def search_tv_shows(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        tv_shows = []
        async with httpx.AsyncClient() as client:
            tv_shows_res = await client.get(
                cls.searcch_tv_shows_url, params=tmdb_params
            )
            tv_shows_res.raise_for_status()
            tv_shows: List = tv_shows_res.json().get("results", [])
        return tv_shows

    @classmethod
    async def fetch_available_genres(cls, query_params):
        tmdb_params = cls._get_tmdb_params(query_params)
        genres = []
        async with httpx.AsyncClient() as client:
            genres_res = await client.get(
                f"{TMDP_BASE_URL}/genre/movie/list", params=tmdb_params
            )
            genres_res.raise_for_status()
            genres: List = genres_res.json().get("genres", [])
        return genres
