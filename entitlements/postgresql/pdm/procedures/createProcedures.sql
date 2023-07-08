-- PROCEDURE: Entitlements.contact_identity(character varying, character varying)

-- DROP PROCEDURE IF EXISTS "Entitlements".contact_identity(character varying, character varying);

CREATE OR REPLACE PROCEDURE "Entitlements".contact_identity(
	IN inphonenumber character varying,
	IN inemail character varying,
	OUT contacts "Entitlements".contact_rec[])
LANGUAGE 'plpgsql'
SECURITY DEFINER
AS $BODY$
DECLARE
    contact_arr "Entitlements"."contact_rec"[];
    var_contact_rec "Entitlements"."contact_rec";
    l_contact "Entitlements"."contacts"%ROWTYPE; -- Use the table structure for the record variable
BEGIN
    contact_arr := ARRAY[]::"Entitlements"."contact_rec"[];

    -- Fetch contacts into the record variable
    FOR l_contact IN
        SELECT 
            "Entitlements"."contacts"."id" as "id",
            "Entitlements"."contacts"."phoneNumber" as "phoneNumber",
           	"Entitlements"."contacts"."email" as "email",
            "Entitlements"."contacts"."linkedId" as "linkedId",
            "Entitlements"."contacts"."linkPrecedence" as "linkPrecedence",
            "Entitlements"."contacts"."createdAt" as "createdAt",
            "Entitlements"."contacts"."updatedAt" as "updatedAt",
            "Entitlements"."contacts"."deletedAt" as "deletedAt"
        FROM "Entitlements"."contacts"
        WHERE "Entitlements"."contacts"."deletedAt" IS NULL AND (
            "Entitlements"."contacts"."phoneNumber" = inphonenumber OR
            "Entitlements"."contacts"."email" = inemail
        )
    LOOP
        var_contact_rec := ROW(
            l_contact."id",
            l_contact."phoneNumber",
            l_contact."email",
            l_contact."linkedId",
            l_contact."linkPrecedence",
            l_contact."createdAt",
            l_contact."updatedAt",
            l_contact."deletedAt"        
        )::"Entitlements".contact_rec;
        contact_arr := array_append(contact_arr, var_contact_rec);
    END LOOP;

    -- Assign the array to the output parameter
    contacts := contact_arr;
END;
$BODY$;
