from rest_framework import serializers


class PopularVideosQuerySerializer(serializers.Serializer):
    language = serializers.CharField(default="en-US")
    page = serializers.IntegerField(default=1)


class PopularVideosResponseSerializer(serializers.Serializer):
    name = serializers.CharField(required=False)
    production_year = serializers.IntegerField()
    IMDb_rating = serializers.FloatField()
    cover_url = serializers
