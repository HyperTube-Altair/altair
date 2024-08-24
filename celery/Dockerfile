FROM python:3.11-slim

WORKDIR /usr/src/app

COPY celery/requirements.txt /usr/src/app/

RUN pip install --no-cache-dir -r requirements.txt

COPY ./backend /usr/src/app/

# Define the command to start Celery
CMD ["celery", "-A", "movies.celery", "worker", "-n", "celery-worker@%h", "--loglevel=info"]
