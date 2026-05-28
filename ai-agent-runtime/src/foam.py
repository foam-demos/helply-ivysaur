import foam
from config import FOAM_API_KEY, IS_PRODUCTION

foam.init(
    service_name="ai-agent-runtime",
    api_key=FOAM_API_KEY,
    environment="production" if IS_PRODUCTION else "development",
    # Enable automatic instrumentation for FastAPI, asyncpg, httpx
    auto_instrument=True,
)