# AI Agent Runtime

Core service orchestrating AI conversation handling for Helply. Manages LLM inference (Anthropic Claude), prompt templates, context building, and decision logic for ticket resolution vs. escalation.

**Stack:** Python 3.11, FastAPI, asyncpg, Anthropic SDK

**Run locally:** `docker-compose up ai-agent-runtime` (requires Postgres and Redis)