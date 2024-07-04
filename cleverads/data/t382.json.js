window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-3954","object_id":"column-3954","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"bigint","data_length":"19, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-3955","object_id":"column-3955","name":"script_id","name_without_path":"script_id","description":"References clevernt-cleverads-production.scripts table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t202","name":"scripts","name_show_schema":"scripts"}],"linked_lookup":null},{"id":"column-3956","object_id":"column-3956","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-3957","object_id":"column-3957","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"scripts_users_favorites_fk_script","title":null,"description":null,"is_user_defined":false,"foreign_table":"scripts_users_favorites","foreign_table_show_schema":"scripts_users_favorites","foreign_table_verbose":"scripts_users_favorites","foreign_table_verbose_show_schema":"scripts_users_favorites","foreign_table_object_id":"t382","primary_table":"scripts","primary_table_show_schema":"scripts","primary_table_verbose":"scripts","primary_table_verbose_show_schema":"scripts","primary_table_object_id":"t202","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"script_id"}],"custom_fields":{}},{"name":"scripts_users_favorites_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"scripts_users_favorites","foreign_table_show_schema":"scripts_users_favorites","foreign_table_verbose":"scripts_users_favorites","foreign_table_verbose_show_schema":"scripts_users_favorites","foreign_table_object_id":"t382","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"scripts_users_favorites_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"script_id","name":"script_id"},{"path":null,"name_without_path":"created_user_id","name":"created_user_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"scripts_users_favorites","object_name_show_schema":"scripts_users_favorites","object_type":"TABLE","object_id":"t382","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"scripts","object_name_show_schema":"scripts","object_type":"TABLE","object_id":"t202","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t382","name":"scripts_users_favorites","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"scripts_users_favorites"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};