from django.urls import path

import api.views as views

urlpatterns = [
    path("", views.api_root, name="api_root"),
]
