from django.urls import path

import search_engine.views as views

urlpatterns = [
    path("popular/", views.get_popular_movies, name="popular videos"),
]
