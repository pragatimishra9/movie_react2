from django.contrib import admin
from django.urls import path, include
from .views import *

urlpatterns = [
    path("accounts", Accounts.as_view(), name="accounts"),
    path("movies", MoviesList.as_view(), name="movies"),
    path("movie", MovieDetails.as_view(), name="moviedetails"),
]
