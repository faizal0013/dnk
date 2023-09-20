from django.contrib.auth.models import Group
from django.contrib.auth import authenticate

from rest_framework.decorators import api_view, permission_classes
from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny
from rest_framework.exceptions import AuthenticationFailed
from rest_framework.authtoken.models import Token


from .serializers import UserRegisterSerializer, UserLoginSerializer
from .models import User


@api_view(['POST'])
@permission_classes([])
def register_api_view(request):
    try:
        user_role = request.data.get('user_role')

        serializer = UserRegisterSerializer(data=request.data)

        group = Group.objects.get(name=user_role)

        serializer.is_valid(raise_exception=True)

        user = serializer.save()

        user.groups.add(group)

        token, _ = Token.objects.get_or_create(user=user)

        return Response({
            "user": serializer.data,
            "token": token.key,
        })

    except Group.DoesNotExist:
        return Response({
            "error": "Invalid user_role"
        }, status=status.HTTP_400_BAD_REQUEST)


class LoginApiView(APIView):
    permission_classes = [AllowAny,]

    def post(self, request, *args, **kwargs):
        try:
            serializer = UserLoginSerializer(data=request.data)
            serializer.is_valid(raise_exception=True)
            email = serializer.validated_data.get('email')
            password = serializer.validated_data.get('password')
            user_role = serializer.validated_data.get('user_role')

            user = authenticate(username=email, password=password)

            if user is None:
                raise AuthenticationFailed({
                    "details": "invalid credentials",
                    "code": "invalid-credentials",
                })

            token, _ = Token.objects.get_or_create(user=user)

            if user_role == 'super admin':
                if not user.is_superuser and not self.check_groups(user_role, user):
                    raise AuthenticationFailed({
                        "details": "invalid credentials",
                        "code": "invalid-credentials",
                    })
            elif user_role == 'client':
                if not self.check_groups(user_role, user):
                    raise AuthenticationFailed({
                        "details": "invalid credentials",
                        "code": "invalid-credentials",
                    })
            elif user_role == 'customer':
                if not self.check_groups(user_role, user):
                    raise AuthenticationFailed({
                        "details": "invalid credentials",
                        "code": "invalid-credentials",
                    })
            else:
                return Response({
                    "details": "invalid user_role",
                }, status=status.HTTP_400_BAD_REQUEST)

            return Response({
                "user": UserRegisterSerializer(user).data,
                "token": token.key,
            }, status=status.HTTP_200_OK)

        except User.DoesNotExist:
            return Response({"error": "Invalid user"}, status=status.HTTP_404_NOT_FOUND)

    def check_groups(self, name, user):
        try:
            required_group = Group.objects.get(name=name)

            return user.groups.filter(name=required_group).exists()

        except Group.DoesNotExist:
            return Response({"error": "Invalid user_role"}, status=status.HTTP_400_BAD_REQUEST)
