export const validationExample = `from lifeguard import NORMAL, PROBLEM, change_status
from lifeguard.actions.database import save_result_into_database
from lifeguard.http_client import get
from lifeguard.logger import lifeguard_logger as logger
from lifeguard.validations import ValidationResponse, validation

@validation(
    "check if pudim is alive",
    actions=[save_result_into_database],
    schedule={"every": {"minutes": 1}},
)

def pudim_is_alive():
    status = NORMAL
    result = requests.get("http://pudim.com.br")
    logger.info("pudim status code: %s", result.status_code)

    if result.status_code != 200:
        status = change_status(status, PROBLEM)

    return ValidationResponse(
        status,
        {status: result.status_code},
    )
    `