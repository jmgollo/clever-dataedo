window.repositoryObject = {"parameters":[],"parameters_custom_fields":[],"dependencies":{"uses":[],"used_by":[]},"object_id":"p34","name":"v1_fix_deleted_leads_domains","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"v1_fix_deleted_leads_domains"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\nDECLARE v_domain_id INT;\r\nDECLARE v_lead_blocked_id INT;\r\nDECLARE v_is_free INT;\r\nDECLARE v_user_blocked_id INT;\r\nDECLARE v_blocked_at DATETIME;\r\nDECLARE v_updated_user_id INT;\r\nDECLARE v_updated_at DATETIME;\r\nDECLARE finished INTEGER DEFAULT 0;\r\n\r\n\t\r\n\tDECLARE c_ld \r\n\t\tCURSOR FOR \r\n\t\t\tSELECT distinct domain_id,lead_blocked_id,is_free,user_blocked_id,blocked_at,updated_user_id,updated_at\r\n\t\t\t FROM fix_deleted_leads_domains;\r\n\r\n\t\r\n\tDECLARE CONTINUE HANDLER \r\n        FOR NOT FOUND SET finished = 1;\r\n        \r\n\r\nOPEN c_ld;\r\nB: LOOP\r\n\tFETCH c_ld INTO  v_domain_id,v_lead_blocked_id,v_is_free,v_user_blocked_id,v_blocked_at,v_updated_user_id,v_updated_at;\r\n\t\tIF finished = 1 THEN \r\n\t\t\tLEAVE B;\r\n\t\tEND IF;\r\n\t\tUPDATE domains\r\n\t\tSET lead_blocked_id=v_lead_blocked_id,\r\n\t\t\t is_free\t\t\t=v_is_free,\r\n\t\t\t user_blocked_id=v_user_blocked_id,\r\n\t\t\t blocked_at\t\t=v_blocked_at,\r\n\t\t\t updated_user_id=v_updated_user_id,\r\n\t\t\t updated_at\t\t=v_updated_at\r\n\t\tWHERE id = v_domain_id;\r\n\tEND LOOP B;\r\nEND","imported_at":"2024-06-28 17:00"};