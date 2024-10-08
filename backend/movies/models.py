from django.db import models

from Common.enums.Languages import Languages


class Video(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    production_year = models.PositiveSmallIntegerField()
    thumbnail = models.ImageField()
    imdb_rating = models.DecimalField(max_digits=3, decimal_places=1)
    director = models.CharField(max_length=200)
    producer = models.CharField(max_length=200)
    cast = models.CharField(max_length=200)
    duration = models.PositiveSmallIntegerField()
    file = models.FileField()
    added_at = models.DateTimeField(auto_now_add=True)
    last_watched = models.DateTimeField(auto_now=True)

    def __str__(self):
        return (
            f"{self.last_watched} - {self.title} - {self.production_year}"
            + f"({self.imdb_rating}): {self.description[:30]}"
        )


class Subtitle(models.Model):
    language = models.CharField(
        max_length=10,
        choices=Languages.get_languages(),
        default=Languages.get_default(),
    )
    video = models.ForeignKey(Video, on_delete=models.CASCADE, related_name="subtitles")
    file = models.FileField()

    def __str__(self):
        return f"{self.video.title} - {self.language}"
