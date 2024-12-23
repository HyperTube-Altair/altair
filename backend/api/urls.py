from django.urls import path, include

import api.views as views
import search_engine.urls as search_engine_urls


urlpatterns = [
    path("", views.api_root, name="api_root"),
    path("search/", include(search_engine_urls), name="search"),
]
