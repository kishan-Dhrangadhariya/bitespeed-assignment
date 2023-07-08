CREATE SCHEMA IF NOT EXISTS "Entitlements" AUTHORIZATION entitlements_schema_user;

GRANT USAGE ON SCHEMA "Entitlements" TO entitlements_api_user;

GRANT ALL ON SCHEMA "Entitlements" TO entitlements_schema_user;