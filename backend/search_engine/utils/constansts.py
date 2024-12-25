import os
from typing import Optional

TMDP_BASE_URL = "https://api.themoviedb.org/3"


class Env:
    TMDP_API_KEY: Optional[str] = os.environ.get("TMDP_API_KEY", None)
