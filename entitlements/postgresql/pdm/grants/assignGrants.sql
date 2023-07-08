ALTER TABLE IF EXISTS "Entitlements"."contacts"OWNER to entitlements_schema_user;

ALTER TYPE "Entitlements"."contact_rec" OWNER TO entitlements_schema_user;

ALTER PROCEDURE "Entitlements"."contact_identity"(character varying, character varying)
    OWNER TO entitlements_schema_user;

GRANT EXECUTE ON PROCEDURE "Entitlements"."contact_identity"(character varying, character varying) TO entitlements_api_user;


