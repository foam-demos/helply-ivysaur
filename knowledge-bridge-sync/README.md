# Knowledge Bridge Sync

Background service analyzing ticket patterns to identify knowledge gaps and auto-generate KB articles. Syncs bidirectionally with customer help desks (Zendesk, Freshdesk, etc.).

**Stack:** Python 3.11, Celery, asyncpg, OpenAI embeddings

**Run locally:** `celery -A src.main worker --loglevel=info`