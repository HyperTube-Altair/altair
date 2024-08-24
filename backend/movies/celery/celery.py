import os

from celery import Celery

# Set the default environment variables if they are not set
os.environ.setdefault(
    "CELERY_BROKER_URL",
    f"redis://:{os.environ.get('REDIS_PASSWORD', 'aloha')}"
    f"@{os.environ.get('REDIS_HOST', 'localhost')}:6379/0",
)
os.environ.setdefault(
    "CELERY_RESULT_BACKEND",
    f"redis://:{os.environ.get('REDIS_PASSWORD', 'aloha')}"
    f"@{os.environ.get('REDIS_HOST', 'localhost')}:6379/0",
)
os.environ.setdefault("CELERY_TIMEZONE", "UTC")

app = Celery("movies")

app.conf.update(
    broker_url=os.environ["CELERY_BROKER_URL"],
    result_backend=os.environ["CELERY_RESULT_BACKEND"],
    timezone=os.environ["CELERY_TIMEZONE"],
)

app.autodiscover_tasks(lambda: ["movies.celery.tasks.py"])
