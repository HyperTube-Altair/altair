from django.db import models
from django.contrib.auth.hashers import make_password

from Common.enums.Languages import Languages
from movies.models import Video

 
    
class User(models.Model):
	username = models.CharField(max_length=100)
	first_name = models.CharField(max_length=200)
	last_name= models.CharField(max_length=200)
	email = models.EmailField()
	password = models.CharField(max_length=128, null=False, blank=False)
	profile_picture = models.ImageField()
	prefered_lang = models.CharField(max_length=10, choices=Languages.get_languages(), default=Languages.ENGLISH)
	create_at = models.DateField(auto_now_add=True)
	update_at = models.DateTimeField(auto_now=True)
 
	# relations
	watched = models.ManyToManyField(Video, related_name="watched_by")
 
	def save(self, *args, **kwargs):
		self.password = make_password(self.password)
		return super().save(*args, **kwargs)

	def __str__(self):
		return self.username