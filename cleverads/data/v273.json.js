window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2834","object_id":"column-2834","name":"Team_id","name_without_path":"Team_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2835","object_id":"column-2835","name":"Team_Initials","name_without_path":"Team_Initials","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2836","object_id":"column-2836","name":"Team_name","name_without_path":"Team_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2837","object_id":"column-2837","name":"Team_aparent_id","name_without_path":"Team_aparent_id","description":null,"is_pk":false,"is_identity":false,"data_type":"bigint","data_length":"19, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2838","object_id":"column-2838","name":"Team_parent_name","name_without_path":"Team_parent_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"25","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"v_users_bi","object_name_show_schema":"v_users_bi","object_type":"VIEW","object_id":"v273","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"companies","object_name_show_schema":"clevernt-cleverads-production.companies","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"clevernt-cleverads-production.users","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"v273","name":"v_users_bi","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">VIEW</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"v_users_bi"},{"field":"Type","value":"View"}],"script":"select `c`.`id` AS `Team_id`,`c`.`initials` AS `Team_Initials`,`c`.`name` AS `Team_name`,coalesce(`cp`.`id`,`c`.`id`) AS `Team_aparent_id`,coalesce(`cp`.`initials`,`c`.`initials`) AS `Team_parent_name` from (`clevernt-cleverads-production`.`companies` `c` left join `clevernt-cleverads-production`.`companies` `cp` on((`cp`.`id` = `c`.`parent_id`))) where ((`c`.`deleted_at` = '0000-00-00 00:00:00') and ((`cp`.`deleted_at` = '0000-00-00 00:00:00') or (`cp`.`deleted_at` is null)) and exists(select 1 from `clevernt-cleverads-production`.`users` `u` where ((`u`.`company_id` = `c`.`id`) and (`u`.`position_id` in (2,4,5,9)))))","imported_at":"2024-06-28 17:00"};