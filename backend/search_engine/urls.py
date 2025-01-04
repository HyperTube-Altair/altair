from django.urls import path

import search_engine.views as views

urlpatterns = [
    path("", views.search_videos, name="search videos"),
    path("trending/", views.get_trending, name="trending videos"),
    path("popular/", views.get_popular, name="popular videos"),
    path("genres/", views.get_available_genres, name="genres"),
]
