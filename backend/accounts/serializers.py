from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Movie, Tag, MovieView


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = "__all__"


class MovieSerializer(serializers.ModelSerializer):
    class Meta:
        model = Movie
        fields = "__all__"


class TagSerializer(serializers.ModelSerializer):
    class Meta:
        model = Tag
        fields = "__all__"
        depth = 1


class MovieViewSerializer(serializers.ModelSerializer):
    class Meta:
        model = MovieView
        fields = "__all__"
