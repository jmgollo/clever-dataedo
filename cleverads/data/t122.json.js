window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1077","object_id":"column-1077","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1078","object_id":"column-1078","name":"domain_id","name_without_path":"domain_id","description":"References clevernt-cleverads-production.domains table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t121","name":"domains","name_show_schema":"domains"}],"linked_lookup":null},{"id":"column-1079","object_id":"column-1079","name":"created_reason","name_without_path":"created_reason","description":"Create reason description","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1500","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1080","object_id":"column-1080","name":"deleted_reason","name_without_path":"deleted_reason","description":"Delete reason description","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1500","is_nullable":false,"computed_formula":"","default_value":"","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1081","object_id":"column-1081","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1082","object_id":"column-1082","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1083","object_id":"column-1083","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1084","object_id":"column-1084","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1085","object_id":"column-1085","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1086","object_id":"column-1086","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"domains_blacklist_exceptions_fk_domains","title":null,"description":"cleverads.domains_blacklist_exceptions(n) - cleverads.domains","is_user_defined":false,"foreign_table":"domains_blacklist_exceptions","foreign_table_show_schema":"domains_blacklist_exceptions","foreign_table_verbose":"domains_blacklist_exceptions","foreign_table_verbose_show_schema":"domains_blacklist_exceptions","foreign_table_object_id":"t122","primary_table":"domains","primary_table_show_schema":"domains","primary_table_verbose":"domains","primary_table_verbose_show_schema":"domains","primary_table_object_id":"t121","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"domain_id"}],"custom_fields":{}},{"name":"domains_blacklist_exceptions_fk_user_c","title":null,"description":"cleverads.domains_blacklist_exceptions(n) - cleverads.users","is_user_defined":false,"foreign_table":"domains_blacklist_exceptions","foreign_table_show_schema":"domains_blacklist_exceptions","foreign_table_verbose":"domains_blacklist_exceptions","foreign_table_verbose_show_schema":"domains_blacklist_exceptions","foreign_table_object_id":"t122","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"domains_blacklist_exceptions_fk_user_d","title":null,"description":"cleverads.domains_blacklist_exceptions(n) - cleverads.users","is_user_defined":false,"foreign_table":"domains_blacklist_exceptions","foreign_table_show_schema":"domains_blacklist_exceptions","foreign_table_verbose":"domains_blacklist_exceptions","foreign_table_verbose_show_schema":"domains_blacklist_exceptions","foreign_table_object_id":"t122","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"domains_blacklist_exceptions_fk_user_u","title":null,"description":"cleverads.domains_blacklist_exceptions(n) - cleverads.users","is_user_defined":false,"foreign_table":"domains_blacklist_exceptions","foreign_table_show_schema":"domains_blacklist_exceptions","foreign_table_verbose":"domains_blacklist_exceptions","foreign_table_verbose_show_schema":"domains_blacklist_exceptions","foreign_table_object_id":"t122","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":"Primary key, contains columns: id","is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"domains_blacklist_exceptions_uk","description":"Unique key, contains columns: domain_id, deleted_at","is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"domain_id","name":"domain_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"domains_blacklist_exceptions","object_name_show_schema":"domains_blacklist_exceptions","object_type":"TABLE","object_id":"t122","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"domains","object_name_show_schema":"domains","object_type":"TABLE","object_id":"t121","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t122","name":"domains_blacklist_exceptions","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs302272C1{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs68E31449{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs302272C1\"><span class=\"cs68E31449\">Table with domains blacklist exceptions information</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"domains_blacklist_exceptions"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area16","name":"Domains","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};