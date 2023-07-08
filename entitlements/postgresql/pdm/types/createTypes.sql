-- Type: contact_rec

CREATE TYPE "Entitlements".contact_rec AS
(
	"id" bigint,
	"phoneNumber" character varying,
	"email" character varying,
	"linkedId" bigint,
	"linkedPrecedence" character varying,
	"createdAt" date,
	"updatedAt" date,
	"deletedAt" date
);

COMMENT ON TYPE "Entitlements"."contact_rec"
    IS 'This UDF contact type: wrapper on contacts table';
