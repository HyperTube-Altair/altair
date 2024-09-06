import enum


class Languages(enum.Enum):
    FRENCH = "french"
    ENGLISH = "english"

    @classmethod
    def get_languages(cls):
        return [(lang.value, lang.name) for lang in cls]

    @classmethod
    def get_default(cls):
        return cls.ENGLISH
