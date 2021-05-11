import environ
from projeto.settings.base import *

env = environ.Env()
DEBUG = env.bool("DEBUG", False)
SECRET_KEY = env("SECRET_KEY")
ALLOWED_HOSTS = env.list("ALLOWED_HOSTS")
DISABLE_COLLECTSTATIC = env.list("DISABLE_COLLECTSTATIC")
DATABASES = {
    "default": env.db(),
}

