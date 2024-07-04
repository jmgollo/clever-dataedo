window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2130","object_id":"column-2130","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2131","object_id":"column-2131","name":"from_status_id","name_without_path":"from_status_id","description":"References clevernt-cleverads-production.statuses table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t210","name":"statuses","name_show_schema":"statuses"}],"linked_lookup":null},{"id":"column-2132","object_id":"column-2132","name":"to_status_id","name_without_path":"to_status_id","description":"References clevernt-cleverads-production.statuses table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t210","name":"statuses","name_show_schema":"statuses"}],"linked_lookup":null},{"id":"column-2133","object_id":"column-2133","name":"is_typed","name_without_path":"is_typed","description":null,"is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2134","object_id":"column-2134","name":"description","name_without_path":"description","description":null,"is_pk":false,"is_identity":false,"data_type":"mediumtext","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2135","object_id":"column-2135","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2136","object_id":"column-2136","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2137","object_id":"column-2137","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2138","object_id":"column-2138","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2139","object_id":"column-2139","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2140","object_id":"column-2140","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"statuses_transitions_fk_statuses_from","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions","foreign_table_show_schema":"statuses_transitions","foreign_table_verbose":"statuses_transitions","foreign_table_verbose_show_schema":"statuses_transitions","foreign_table_object_id":"t211","primary_table":"statuses","primary_table_show_schema":"statuses","primary_table_verbose":"statuses","primary_table_verbose_show_schema":"statuses","primary_table_object_id":"t210","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"from_status_id"}],"custom_fields":{}},{"name":"statuses_transitions_fk_statuses_to","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions","foreign_table_show_schema":"statuses_transitions","foreign_table_verbose":"statuses_transitions","foreign_table_verbose_show_schema":"statuses_transitions","foreign_table_object_id":"t211","primary_table":"statuses","primary_table_show_schema":"statuses","primary_table_verbose":"statuses","primary_table_verbose_show_schema":"statuses","primary_table_object_id":"t210","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"to_status_id"}],"custom_fields":{}},{"name":"statuses_transitions_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions","foreign_table_show_schema":"statuses_transitions","foreign_table_verbose":"statuses_transitions","foreign_table_verbose_show_schema":"statuses_transitions","foreign_table_object_id":"t211","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"statuses_transitions_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions","foreign_table_show_schema":"statuses_transitions","foreign_table_verbose":"statuses_transitions","foreign_table_verbose_show_schema":"statuses_transitions","foreign_table_object_id":"t211","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"statuses_transitions_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions","foreign_table_show_schema":"statuses_transitions","foreign_table_verbose":"statuses_transitions","foreign_table_verbose_show_schema":"statuses_transitions","foreign_table_object_id":"t211","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"statuses_transitions_users_exceptions_fk_statuses_transitions","title":null,"description":null,"is_user_defined":false,"foreign_table":"statuses_transitions_users_exceptions","foreign_table_show_schema":"statuses_transitions_users_exceptions","foreign_table_verbose":"statuses_transitions_users_exceptions","foreign_table_verbose_show_schema":"statuses_transitions_users_exceptions","foreign_table_object_id":"t212","primary_table":"statuses_transitions","primary_table_show_schema":"statuses_transitions","primary_table_verbose":"statuses_transitions","primary_table_verbose_show_schema":"statuses_transitions","primary_table_object_id":"t211","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"status_transition_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"statuses_transitions_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"from_status_id","name":"from_status_id"},{"path":null,"name_without_path":"to_status_id","name":"to_status_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"statuses_transitions","object_name_show_schema":"statuses_transitions","object_type":"TABLE","object_id":"t211","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"statuses","object_name_show_schema":"statuses","object_type":"TABLE","object_id":"t210","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"statuses","object_name_show_schema":"statuses","object_type":"TABLE","object_id":"t210","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"statuses_transitions","object_name_show_schema":"statuses_transitions","object_type":"TABLE","object_id":"t211","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"statuses_transitions_users_exceptions","object_name_show_schema":"statuses_transitions_users_exceptions","object_type":"TABLE","object_id":"t212","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t211","name":"statuses_transitions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"statuses_transitions"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};