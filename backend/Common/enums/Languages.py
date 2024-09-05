import enum


class Languages(enum.Enum):
    FRENCH = "french"
    ENGLISH = "english"

    @classmethod
    def get_languages(cls):
        return {lang.name: lang.value for lang in cls}
