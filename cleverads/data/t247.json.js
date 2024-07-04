window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2580","object_id":"column-2580","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2581","object_id":"column-2581","name":"tracker_backoffice_id","name_without_path":"tracker_backoffice_id","description":"References clevernt-cleverads-production.trackers_backoffice table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t246","name":"trackers_backoffice","name_show_schema":"trackers_backoffice"}],"linked_lookup":null},{"id":"column-2582","object_id":"column-2582","name":"account_id","name_without_path":"account_id","description":"References clevernt-cleverads-production.brands_accounts table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t78","name":"brands_accounts","name_show_schema":"brands_accounts"}],"linked_lookup":null},{"id":"column-2583","object_id":"column-2583","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2584","object_id":"column-2584","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2585","object_id":"column-2585","name":"created_at","name_without_path":"created_at","description":"Created record user","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2586","object_id":"column-2586","name":"updated_at","name_without_path":"updated_at","description":"Updated record user","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"trackers_backoffice_accounts_fk_account","title":null,"description":"cleverads.trackers_backoffice_accounts(n) - cleverads.brands_accounts","is_user_defined":false,"foreign_table":"trackers_backoffice_accounts","foreign_table_show_schema":"trackers_backoffice_accounts","foreign_table_verbose":"trackers_backoffice_accounts","foreign_table_verbose_show_schema":"trackers_backoffice_accounts","foreign_table_object_id":"t247","primary_table":"brands_accounts","primary_table_show_schema":"brands_accounts","primary_table_verbose":"brands_accounts","primary_table_verbose_show_schema":"brands_accounts","primary_table_object_id":"t78","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"account_id"}],"custom_fields":{}},{"name":"trackers_backoffice_accounts_fk_tracker_backoffice","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_backoffice_accounts","foreign_table_show_schema":"trackers_backoffice_accounts","foreign_table_verbose":"trackers_backoffice_accounts","foreign_table_verbose_show_schema":"trackers_backoffice_accounts","foreign_table_object_id":"t247","primary_table":"trackers_backoffice","primary_table_show_schema":"trackers_backoffice","primary_table_verbose":"trackers_backoffice","primary_table_verbose_show_schema":"trackers_backoffice","primary_table_object_id":"t246","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"tracker_backoffice_id"}],"custom_fields":{}},{"name":"trackers_backoffice_accounts_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_backoffice_accounts","foreign_table_show_schema":"trackers_backoffice_accounts","foreign_table_verbose":"trackers_backoffice_accounts","foreign_table_verbose_show_schema":"trackers_backoffice_accounts","foreign_table_object_id":"t247","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"trackers_backoffice_accounts_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_backoffice_accounts","foreign_table_show_schema":"trackers_backoffice_accounts","foreign_table_verbose":"trackers_backoffice_accounts","foreign_table_verbose_show_schema":"trackers_backoffice_accounts","foreign_table_object_id":"t247","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"trackers_backoffice_accounts_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"tracker_backoffice_id","name":"tracker_backoffice_id"},{"path":null,"name_without_path":"account_id","name":"account_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"trackers_backoffice_accounts","object_name_show_schema":"trackers_backoffice_accounts","object_type":"TABLE","object_id":"t247","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_accounts","object_name_show_schema":"brands_accounts","object_type":"TABLE","object_id":"t78","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"trackers_backoffice","object_name_show_schema":"trackers_backoffice","object_type":"TABLE","object_id":"t246","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t247","name":"trackers_backoffice_accounts","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"trackers_backoffice_accounts"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area21","name":"Trackers","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};