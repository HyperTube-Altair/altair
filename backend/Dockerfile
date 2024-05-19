FROM python:3.11-slim

WORKDIR /app

# Install Poetry
RUN pip install poetry

# Configure Poetry to not create a virtual environment
RUN poetry config virtualenvs.create false

# Copy only pyproject.toml and poetry.lock to leverage Docker cache
COPY pyproject.toml /app/

RUN apt-get update \
    && apt-get install -y libpq-dev

# Install dependencies
RUN poetry install

# Copy everything from the builder stage
COPY . /app/

# Ensure entrypoint.sh is executable
RUN chmod +x /app/entrypoint.sh

# Specify the entrypoint
ENTRYPOINT ["/app/entrypoint.sh"]

# Default command
CMD ["poetry", "run", "python", "manage.py", "runserver", "0.0.0.0:8000"]
