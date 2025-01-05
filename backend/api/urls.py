from django.urls import include, path
from drf_spectacular.views import SpectacularAPIView, SpectacularSwaggerView

import api.views as views
import search_engine.urls as search_engine_urls

urlpatterns = [
    path("", views.api_root, name="api_root"),
    path("search/", include(search_engine_urls), name="search"),
    path("schema/", SpectacularAPIView.as_view(), name="schema"),
    path(
        "schema/swagger-ui/",
        SpectacularSwaggerView.as_view(url_name="schema"),
        name="swagger-ui",
    ),
]
