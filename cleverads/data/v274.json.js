window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2839","object_id":"column-2839","name":"sef_user","name_without_path":"sef_user","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"5","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2840","object_id":"column-2840","name":"domain_name","name_without_path":"domain_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2841","object_id":"column-2841","name":"reverse_domain","name_without_path":"reverse_domain","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2842","object_id":"column-2842","name":"min_neria","name_without_path":"min_neria","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":"19, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2843","object_id":"column-2843","name":"max_neria","name_without_path":"max_neria","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":"19, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"v_world_cup_domains","object_name_show_schema":"v_world_cup_domains","object_type":"VIEW","object_id":"v274","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"domains","object_name_show_schema":"clevernt-cleverads-production.domains","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"leads_domains","object_name_show_schema":"clevernt-cleverads-production.leads_domains","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"leads_domains_neria","object_name_show_schema":"clevernt-cleverads-production.leads_domains_neria","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"clevernt-cleverads-production.users","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"world_cup_leads","object_name_show_schema":"clevernt-cleverads-production.world_cup_leads","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"v274","name":"v_world_cup_domains","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">VIEW</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"v_world_cup_domains"},{"field":"Type","value":"View"}],"script":"select `u`.`initials` AS `sef_user`,`d`.`name` AS `domain_name`,reverse(`d`.`name`) AS `reverse_domain`,(select min(`ln`.`neria`) from `clevernt-cleverads-production`.`leads_domains_neria` `ln` where ((`ln`.`lead_domain_id` = `ld`.`id`) and (`ln`.`deleted_at` = '0000-00-00 00:00:00'))) AS `min_neria`,(select max(`ln`.`neria`) from `clevernt-cleverads-production`.`leads_domains_neria` `ln` where ((`ln`.`lead_domain_id` = `ld`.`id`) and (`ln`.`deleted_at` = '0000-00-00 00:00:00'))) AS `max_neria` from (((`clevernt-cleverads-production`.`world_cup_leads` `wl` join `clevernt-cleverads-production`.`leads_domains` `ld` on((`ld`.`lead_id` = `wl`.`lead_id`))) join `clevernt-cleverads-production`.`domains` `d` on((`d`.`id` = `ld`.`domain_id`))) join `clevernt-cleverads-production`.`users` `u` on((`u`.`id` = `wl`.`user_id`))) where ((`ld`.`deleted_at` = '0000-00-00 00:00:00') and (`wl`.`available_at` >= '2022-09-19 00:00:00'))","imported_at":"2024-06-28 17:00"};