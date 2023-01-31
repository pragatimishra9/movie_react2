from django.shortcuts import render, redirect
from django.contrib import messages
from django.http import JsonResponse
from django.contrib.auth.models import User, auth
from django.contrib.auth import authenticate
from .serializers import UserSerializer, MovieSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import *
from django.views import View

# handle sign up page requests
class Accounts(APIView):
    def get(self, request):
        accounts = User.objects.all()
        serializer = UserSerializer(accounts, many=True)
        return Response(serializer.data)

    def post(self, request):

        email = request.data["email"]
        password = request.data["password"]

        auth_type = request.data["type"]

        if auth_type == "signup":
            fname = request.data["firstName"]
            lname = request.data["lastName"]
            re_password = request.data["repassword"]
            if password == re_password:
                if not User.objects.filter(username=email).exists():
                    if not User.objects.filter(email=email).exists():
                        try:
                            user = User.objects.create_user(
                                username=email,
                                password=password,
                                email=email,
                                first_name=fname + " " + lname,
                            )
                            user.save()
                            res = {
                                "status": 200,
                                "message": "Registration successfully completed",
                            }
                            return JsonResponse(res)
                        except Exception as e:
                            res = {"status": 500, "error": str(e)}
                            return JsonResponse(res)
                    else:
                        res = {"status": 403, "error": "Email is already registered"}
                        return redirect("/signup")
                else:
                    res = {
                        "status": 403,
                        "error": "User is already present with the given data",
                    }
                    return JsonResponse(res)
            else:
                res = {"status": 403, "error": "Confirm password not matched"}
                return JsonResponse(res)
        elif auth_type == "signin":
            user = authenticate(username=email, password=password)
            if user is not None:
                res = {
                    "status": 200,
                    "name": user.first_name,
                    "username": user.username,
                    "message": "user logged in",
                }
            else:
                res = {
                    "status": 404,
                    "error": "user not found with given credentials",
                }
            return JsonResponse(res)
        else:
            res = {"status": 403, "error": "Invalid type parameter given"}
            return JsonResponse(res)


class MoviesList(APIView):
    def get(self, request):
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = MovieSerializer(data=request.data)
        print(request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"message": "movie added"})


class MovieDetails(APIView):
    def post(self, request):
        id = request.data["id"]
        username = request.data["username"]
        user = User.objects.filter(username=username)
        if len(user) > 0:
            user = user[0]

        movie = Movie.objects.get(pk=id)
        check_view = MovieView.objects.filter(user=user, movie=movie)
        if len(check_view) == 0:
            movie.views += 1
            movie.save()
            ins = MovieView(user=user,movie=movie)
            ins.save()
        serializer = MovieSerializer(movie)
       # print(serializer.data)

        return Response(serializer.data)
