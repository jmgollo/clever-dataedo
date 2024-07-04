window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2526","object_id":"column-2526","name":"uuid","name_without_path":"uuid","description":null,"is_pk":true,"is_identity":false,"data_type":"char","data_length":"36","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2527","object_id":"column-2527","name":"tracker_id","name_without_path":"tracker_id","description":"References clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t244","name":"trackers","name_show_schema":"trackers"}],"linked_lookup":null},{"id":"column-2528","object_id":"column-2528","name":"old_status_id","name_without_path":"old_status_id","description":null,"is_pk":false,"is_identity":false,"data_type":"unsigned tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2529","object_id":"column-2529","name":"new_status_id","name_without_path":"new_status_id","description":null,"is_pk":false,"is_identity":false,"data_type":"unsigned tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2530","object_id":"column-2530","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2531","object_id":"column-2531","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"tracker_logs_status_fk_trackers","title":null,"description":null,"is_user_defined":false,"foreign_table":"tracker_logs_statuses","foreign_table_show_schema":"tracker_logs_statuses","foreign_table_verbose":"tracker_logs_statuses","foreign_table_verbose_show_schema":"tracker_logs_statuses","foreign_table_object_id":"t243","primary_table":"trackers","primary_table_show_schema":"trackers","primary_table_verbose":"trackers","primary_table_verbose_show_schema":"trackers","primary_table_object_id":"t244","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"tracker_id"}],"custom_fields":{}},{"name":"tracker_logs_status_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"tracker_logs_statuses","foreign_table_show_schema":"tracker_logs_statuses","foreign_table_verbose":"tracker_logs_statuses","foreign_table_verbose_show_schema":"tracker_logs_statuses","foreign_table_object_id":"t243","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"uuid","name":"uuid"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"tracker_logs_statuses","object_name_show_schema":"tracker_logs_statuses","object_type":"TABLE","object_id":"t243","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"trackers","object_name_show_schema":"trackers","object_type":"TABLE","object_id":"t244","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t243","name":"tracker_logs_statuses","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"tracker_logs_statuses"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};