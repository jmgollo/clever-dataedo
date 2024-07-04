window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2596","object_id":"column-2596","name":"trackers_mmp_parameters_id","name_without_path":"trackers_mmp_parameters_id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2597","object_id":"column-2597","name":"mmp_parameter_id","name_without_path":"mmp_parameter_id","description":"References clevernt-cleverads-production.mmp_parameters table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t186","name":"mmp_parameters","name_show_schema":"mmp_parameters"}],"linked_lookup":null},{"id":"column-2598","object_id":"column-2598","name":"tracker_id","name_without_path":"tracker_id","description":null,"is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t244","name":"trackers","name_show_schema":"trackers"}],"linked_lookup":null},{"id":"column-2599","object_id":"column-2599","name":"value","name_without_path":"value","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"250","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2600","object_id":"column-2600","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2601","object_id":"column-2601","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2602","object_id":"column-2602","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2603","object_id":"column-2603","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2604","object_id":"column-2604","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2605","object_id":"column-2605","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"mmp_parameter_id_FK","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_mmp_parameters","foreign_table_show_schema":"trackers_mmp_parameters","foreign_table_verbose":"trackers_mmp_parameters","foreign_table_verbose_show_schema":"trackers_mmp_parameters","foreign_table_object_id":"t249","primary_table":"mmp_parameters","primary_table_show_schema":"mmp_parameters","primary_table_verbose":"mmp_parameters","primary_table_verbose_show_schema":"mmp_parameters","primary_table_object_id":"t186","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"mmp_parameter_id","foreign_column_path":null,"foreign_column":"mmp_parameter_id"}],"custom_fields":{}},{"name":"FK_trackers_mmp_parameters_trackers","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_mmp_parameters","foreign_table_show_schema":"trackers_mmp_parameters","foreign_table_verbose":"trackers_mmp_parameters","foreign_table_verbose_show_schema":"trackers_mmp_parameters","foreign_table_object_id":"t249","primary_table":"trackers","primary_table_show_schema":"trackers","primary_table_verbose":"trackers","primary_table_verbose_show_schema":"trackers","primary_table_object_id":"t244","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"tracker_id"}],"custom_fields":{}},{"name":"trackers_mmp_parameters_users1","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_mmp_parameters","foreign_table_show_schema":"trackers_mmp_parameters","foreign_table_verbose":"trackers_mmp_parameters","foreign_table_verbose_show_schema":"trackers_mmp_parameters","foreign_table_object_id":"t249","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"trackers_mmp_parameters_users2","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_mmp_parameters","foreign_table_show_schema":"trackers_mmp_parameters","foreign_table_verbose":"trackers_mmp_parameters","foreign_table_verbose_show_schema":"trackers_mmp_parameters","foreign_table_object_id":"t249","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"trackers_mmp_parameters_users3","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_mmp_parameters","foreign_table_show_schema":"trackers_mmp_parameters","foreign_table_verbose":"trackers_mmp_parameters","foreign_table_verbose_show_schema":"trackers_mmp_parameters","foreign_table_object_id":"t249","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"trackers_mmp_parameters_id","name":"trackers_mmp_parameters_id"}],"custom_fields":{}},{"name":"mmp_parameter_id_tracker_id_deleted_at","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"mmp_parameter_id","name":"mmp_parameter_id"},{"path":null,"name_without_path":"tracker_id","name":"tracker_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"trackers_mmp_parameters","object_name_show_schema":"trackers_mmp_parameters","object_type":"TABLE","object_id":"t249","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"mmp_parameters","object_name_show_schema":"mmp_parameters","object_type":"TABLE","object_id":"t186","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"trackers","object_name_show_schema":"trackers","object_type":"TABLE","object_id":"t244","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t249","name":"trackers_mmp_parameters","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"trackers_mmp_parameters"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area21","name":"Trackers","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};