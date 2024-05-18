#!/bin/sh

# Exit immediately if a command exits with a non-zero status.
set -e

# Apply database migrations
echo "Applying database migrations..."
poetry run python manage.py migrate

# Execute the given command (default or overridden)
exec "$@"
