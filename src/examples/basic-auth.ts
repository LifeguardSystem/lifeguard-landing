export const authExample = `import lifeguard_mongodb

from lifeguard.settings import SettingsManager
from lifeguard.auth import BASIC_AUTH_METHOD

PLUGINS = [lifeguard_mongodb
]

def setup(lifeguard_context):
    lifeguard_context.auth_method = BASIC_AUTH_METHOD
    lifeguard_context.users = [
    {
        "username": "user",
        "password": "pass"
    }
]`