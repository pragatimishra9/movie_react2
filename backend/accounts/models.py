from django.db import models
from django.contrib.auth.models import User

# Create your models here.
class Movie(models.Model):
    title = models.CharField(max_length=500)
    description = models.TextField()
    image = models.ImageField(upload_to="movie_images")


class MovieView(models.Model):
    user = models.ForeignKey(User, on_delete=models.PROTECT)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)


class Tag(models.Model):
    name = models.CharField(max_length=50)
    movies = models.ManyToManyField(Movie)
