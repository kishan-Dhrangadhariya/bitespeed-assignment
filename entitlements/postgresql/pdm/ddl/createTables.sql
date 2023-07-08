-- Table: Entitlements.contacts


CREATE TABLE IF NOT EXISTS "Entitlements"."contacts"
(
    "id" bigint NOT NULL,
    "phoneNumber" character varying(16) COLLATE pg_catalog."default",
    "email" character varying(320) COLLATE pg_catalog."default",
    "linkedId" bigint,
    "linkPrecedence" character varying(10) COLLATE pg_catalog."default" NOT NULL,
    "createdAt" date NOT NULL,
    "updatedAt" date NOT NULL,
    "deletedAt" date,
    CONSTRAINT contacts_pkey PRIMARY KEY (id),
    CONSTRAINT "constraint_linkPrecedence_enum" CHECK ("linkPrecedence"::text = ANY (ARRAY['primary'::character varying, 'secondary'::character varying]::text[]))
)

TABLESPACE pg_default;
