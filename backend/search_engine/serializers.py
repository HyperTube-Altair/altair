from rest_framework import serializers


class BaseQuerySerializer(serializers.Serializer):
    language = serializers.CharField(default="en-US")
    page = serializers.IntegerField(default=1, min_value=1)


class SearchQuerySerializer(BaseQuerySerializer):
    query = serializers.CharField(required=True)
    region = serializers.CharField(required=False)
    year = serializers.IntegerField(required=False, min_value=1900)
    primary_release_year = serializers.IntegerField(required=False, min_value=1900)
