window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2869","object_id":"column-2869","name":"id","name_without_path":"id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2870","object_id":"column-2870","name":"name","name_without_path":"name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"250","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2871","object_id":"column-2871","name":"brands_account_id","name_without_path":"brands_account_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2872","object_id":"column-2872","name":"brands_account_name","name_without_path":"brands_account_name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"250","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2873","object_id":"column-2873","name":"deleted_at","name_without_path":"deleted_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2874","object_id":"column-2874","name":"brands_account_deleted_at","name_without_path":"brands_account_deleted_at","description":null,"is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[],"triggers":[],"unique_keys":[],"dependencies":{"uses":[{"object_name":"vw_brands_account","object_name_show_schema":"vw_brands_account","object_type":"VIEW","object_id":"v277","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands","object_name_show_schema":"clevernt-cleverads-production.brands","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"brands_accounts","object_name_show_schema":"clevernt-cleverads-production.brands_accounts","object_type":"TABLE","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"v277","name":"vw_brands_account","subtype":"VIEW","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n                <html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n                    <head>\r\n                        <meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n                        </title>\r\n                        <style type=\"text/css\">\r\n                            .cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n                            .cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n                        </style>\r\n                    </head>\r\n                    <body>\r\n                        <p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">VIEW</span></p></body>\r\n                </html>","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"vw_brands_account"},{"field":"Type","value":"View"}],"script":"select `b`.`id` AS `id`,`b`.`name` AS `name`,`ba`.`id` AS `brands_account_id`,`ba`.`name` AS `brands_account_name`,`b`.`deleted_at` AS `deleted_at`,`ba`.`deleted_at` AS `brands_account_deleted_at` from (`clevernt-cleverads-production`.`brands` `b` join `clevernt-cleverads-production`.`brands_accounts` `ba` on((`b`.`id` = `ba`.`brand_id`)))","imported_at":"2024-06-28 17:00"};