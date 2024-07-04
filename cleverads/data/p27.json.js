window.repositoryObject = {"parameters":[],"parameters_custom_fields":[],"dependencies":{"uses":[],"used_by":[]},"object_id":"p27","name":"sp_set_firts_hit","subtype":"PROCEDURE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"sp_set_firts_hit"},{"field":"Type","value":"Procedure"}],"script":"BEGIN\r\nDECLARE v_domain_id      INTEGER;\r\nDECLARE v_Domain         VARCHAR(250);\r\nDECLARE v_first_hit_at   DATE;\r\nDECLARE v_start          DATE;\r\nDECLARE v_commit         INTEGER;\r\nDECLARE v_count          INTEGER;\r\nDECLARE finished         INTEGER;\r\n\r\n\r\nDECLARE c_dpv \r\n\t\tCURSOR FOR \r\n\t\t\r\n\t\t\tSELECT d.id, d.name\r\n\t\t\tFROM leads l\r\n\t\t\tINNER JOIN leads_domains ld ON ld.lead_id = l.id\r\n\t\t\tINNER JOIN domains d ON d.id = ld.domain_id\r\n\t\t\tWHERE l.category_id = 1\r\n\t\t\tAND l.deleted_at    = '0000-00-00 00:00:00' \r\n\t\t\tAND ld.deleted_at   = '0000-00-00 00:00:00' \r\n\t\t\tAND l.status_id     IN (8,14)\r\n\t\t\tAND d.first_hit_at IS NULL\r\n\t\t\tAND ld.is_main_domain = 0\r\n\t\t\tORDER BY d.name;\r\n\t\t\t\r\nDECLARE c_sum\r\n\t\tCURSOR FOR \r\n\t\t   SELECT ndd.Date \r\n\t\t\tFROM neria_download_stats_detail ndd \r\n\t\t\tWHERE ndd.ReverseDomain = reverse(v_domain) OR ndd.ReverseDomain LIKE concat(reverse(v_domain),'.%')\r\n\t\t\tORDER BY ndd.date\r\n\t\t\tLIMIT 1;\r\n\r\n\t\r\nDECLARE CONTINUE HANDLER \r\n      FOR NOT FOUND SET finished = 1;\r\n        \r\nSET finished = 0;\r\nSET v_commit = 0;\r\nSET v_count  = 0;\r\nSET v_start  = sysdate();\r\n\r\n\r\n\tOPEN c_dpv ;\r\n\tB: LOOP\r\n\t   set finished = 0;\r\n\t   FETCH c_dpv  INTO  v_Domain_id,v_domain;\r\n\t\tIF finished = 1 THEN \r\n\t \t   close c_dpv;\r\n\t\t\tLEAVE B;\r\n\t\tEND IF;\r\n\r\n\t\tOPEN c_sum;\r\n\t\tFETCH c_sum  INTO v_first_hit_at ;\r\n\t\tif finished = 0 then\r\n\t\t\tUPDATE domains \r\n\t\t\tSET first_hit_at = v_first_hit_at\r\n\t\t\tWHERE id = v_domain_id;\r\n\t\tEND if;\r\n\t\tclose c_sum;\r\n\t\t\r\n\t\tUPDATE control_execution \r\n\t\tSET last_key = v_domain,\r\n\t\t    COUNT    = v_count,\r\n\t\t    START    = v_start,\r\n\t\t    END      = SYSDATE(),\r\n\t\t    info     = CONCAT('infor: ',v_domain)\r\n\t\tWHERE id = 9;\r\n\t\t\r\n\t\t\r\n\tEND LOOP B;\r\n \tCOMMIT;\r\nEND","imported_at":"2024-06-28 17:00"};