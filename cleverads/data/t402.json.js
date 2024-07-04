window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-4131","object_id":"column-4131","name":"uuid","name_without_path":"uuid","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"36","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-4130","object_id":"column-4130","name":"script_id","name_without_path":"script_id","description":"References clevernt-cleverads-production.scripts table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t202","name":"scripts","name_show_schema":"scripts"}],"linked_lookup":null},{"id":"column-4129","object_id":"column-4129","name":"deal_type_id","name_without_path":"deal_type_id","description":"References clevernt-cleverads-production.deal_types table","is_pk":false,"is_identity":false,"data_type":"unsigned int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t116","name":"deal_types","name_show_schema":"deal_types"}],"linked_lookup":null},{"id":"column-4125","object_id":"column-4125","name":"amount","name_without_path":"amount","description":null,"is_pk":false,"is_identity":false,"data_type":"unsigned decimal","data_length":"10, 2","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-4128","object_id":"column-4128","name":"currency_code","name_without_path":"currency_code","description":"References clevernt-cleverads-production.currencies table","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"3","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t115","name":"currencies","name_show_schema":"currencies"}],"linked_lookup":null},{"id":"column-4127","object_id":"column-4127","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-4126","object_id":"column-4126","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"script_logs_commissions_fk_currency_code","title":null,"description":"cleverads.script_logs_commissions(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"script_logs_commissions","foreign_table_show_schema":"script_logs_commissions","foreign_table_verbose":"script_logs_commissions","foreign_table_verbose_show_schema":"script_logs_commissions","foreign_table_object_id":"t402","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_code"}],"custom_fields":{}},{"name":"script_logs_commissions_fk_deal_type","title":null,"description":"cleverads.script_logs_commissions(n) - cleverads.deal_types","is_user_defined":false,"foreign_table":"script_logs_commissions","foreign_table_show_schema":"script_logs_commissions","foreign_table_verbose":"script_logs_commissions","foreign_table_verbose_show_schema":"script_logs_commissions","foreign_table_object_id":"t402","primary_table":"deal_types","primary_table_show_schema":"deal_types","primary_table_verbose":"deal_types","primary_table_verbose_show_schema":"deal_types","primary_table_object_id":"t116","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deal_type_id"}],"custom_fields":{}},{"name":"script_logs_commissions_fk_scripts","title":null,"description":null,"is_user_defined":false,"foreign_table":"script_logs_commissions","foreign_table_show_schema":"script_logs_commissions","foreign_table_verbose":"script_logs_commissions","foreign_table_verbose_show_schema":"script_logs_commissions","foreign_table_object_id":"t402","primary_table":"scripts","primary_table_show_schema":"scripts","primary_table_verbose":"scripts","primary_table_verbose_show_schema":"scripts","primary_table_object_id":"t202","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"script_id"}],"custom_fields":{}},{"name":"script_logs_commissions_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"script_logs_commissions","foreign_table_show_schema":"script_logs_commissions","foreign_table_verbose":"script_logs_commissions","foreign_table_verbose_show_schema":"script_logs_commissions","foreign_table_object_id":"t402","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uuid","name":"uuid"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"script_logs_commissions","object_name_show_schema":"script_logs_commissions","object_type":"TABLE","object_id":"t402","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"currencies","object_name_show_schema":"currencies","object_type":"TABLE","object_id":"t115","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"deal_types","object_name_show_schema":"deal_types","object_type":"TABLE","object_id":"t116","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"scripts","object_name_show_schema":"scripts","object_type":"TABLE","object_id":"t202","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t402","name":"script_logs_commissions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"script_logs_commissions"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};