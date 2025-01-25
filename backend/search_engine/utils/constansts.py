import os

TMDP_BASE_URL = "https://api.themoviedb.org/3"


class Env:
    TMDP_API_KEY: str = os.environ.get("TMDP_API_KEY")
