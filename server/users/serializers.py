from rest_framework import serializers

from .models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    user_role = serializers.CharField(read_only=True)
    password = serializers.CharField(write_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'full_name',
            'email',
            'phone_number',
            'address',
            'user_role',
            'password'
        ]

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()
    user_role = serializers.CharField()
