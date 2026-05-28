import foam
from config import FOAM_API_KEY, IS_PRODUCTION

foam.init(
    service_name="outcome-billing",
    api_key=FOAM_API_KEY,
    environment="production" if IS_PRODUCTION else "development",
    auto_instrument=True,
)