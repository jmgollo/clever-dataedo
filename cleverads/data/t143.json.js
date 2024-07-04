window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1289","object_id":"column-1289","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1290","object_id":"column-1290","name":"event_id","name_without_path":"event_id","description":"References clevernt-cleverads-production.events table","is_pk":false,"is_identity":false,"data_type":"unsigned int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t138","name":"events","name_show_schema":"events"}],"linked_lookup":null},{"id":"column-1291","object_id":"column-1291","name":"version","name_without_path":"version","description":"Version number","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1292","object_id":"column-1292","name":"text","name_without_path":"text","description":null,"is_pk":false,"is_identity":false,"data_type":"longtext","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1293","object_id":"column-1293","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1294","object_id":"column-1294","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1295","object_id":"column-1295","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1296","object_id":"column-1296","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1297","object_id":"column-1297","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1298","object_id":"column-1298","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_events_versions_events","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_versions","foreign_table_show_schema":"events_versions","foreign_table_verbose":"events_versions","foreign_table_verbose_show_schema":"events_versions","foreign_table_object_id":"t143","primary_table":"events","primary_table_show_schema":"events","primary_table_verbose":"events","primary_table_verbose_show_schema":"events","primary_table_object_id":"t138","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_id"}],"custom_fields":{}},{"name":"events_versions_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_versions","foreign_table_show_schema":"events_versions","foreign_table_verbose":"events_versions","foreign_table_verbose_show_schema":"events_versions","foreign_table_object_id":"t143","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"events_versions_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_versions","foreign_table_show_schema":"events_versions","foreign_table_verbose":"events_versions","foreign_table_verbose_show_schema":"events_versions","foreign_table_object_id":"t143","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"events_versions_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_versions","foreign_table_show_schema":"events_versions","foreign_table_verbose":"events_versions","foreign_table_verbose_show_schema":"events_versions","foreign_table_object_id":"t143","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"events_files_fk_events","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_files","foreign_table_show_schema":"events_files","foreign_table_verbose":"events_files","foreign_table_verbose_show_schema":"events_files","foreign_table_object_id":"t140","primary_table":"events_versions","primary_table_show_schema":"events_versions","primary_table_verbose":"events_versions","primary_table_verbose_show_schema":"events_versions","primary_table_object_id":"t143","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_version_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"events_versions_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"event_id","name":"event_id"},{"path":null,"name_without_path":"version","name":"version"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"events_versions","object_name_show_schema":"events_versions","object_type":"TABLE","object_id":"t143","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"events","object_name_show_schema":"events","object_type":"TABLE","object_id":"t138","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"events_versions","object_name_show_schema":"events_versions","object_type":"TABLE","object_id":"t143","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"events_files","object_name_show_schema":"events_files","object_type":"TABLE","object_id":"t140","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t143","name":"events_versions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"events_versions"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};