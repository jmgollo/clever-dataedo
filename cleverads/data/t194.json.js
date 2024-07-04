window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1825","object_id":"column-1825","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1826","object_id":"column-1826","name":"name","name_without_path":"name","description":"Platform name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-4085","object_id":"column-4085","name":"is_tracker_backoffice_visible","name_without_path":"is_tracker_backoffice_visible","description":"Is tracker backoffice visible values 0 - no; 1 -yes;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-4084","object_id":"column-4084","name":"is_brands_accounts_visible","name_without_path":"is_brands_accounts_visible","description":"s brands accounts visible values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1827","object_id":"column-1827","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1828","object_id":"column-1828","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1829","object_id":"column-1829","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1830","object_id":"column-1830","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1831","object_id":"column-1831","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1832","object_id":"column-1832","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"platforms_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"platforms","foreign_table_show_schema":"platforms","foreign_table_verbose":"platforms","foreign_table_verbose_show_schema":"platforms","foreign_table_object_id":"t194","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"platforms_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"platforms","foreign_table_show_schema":"platforms","foreign_table_verbose":"platforms","foreign_table_verbose_show_schema":"platforms","foreign_table_object_id":"t194","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"platforms_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"platforms","foreign_table_show_schema":"platforms","foreign_table_verbose":"platforms","foreign_table_verbose_show_schema":"platforms","foreign_table_object_id":"t194","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_platforms","title":null,"description":"cleverads.brands_accounts(n) - cleverads.platforms","is_user_defined":false,"foreign_table":"brands_accounts","foreign_table_show_schema":"brands_accounts","foreign_table_verbose":"brands_accounts","foreign_table_verbose_show_schema":"brands_accounts","foreign_table_object_id":"t78","primary_table":"platforms","primary_table_show_schema":"platforms","primary_table_verbose":"platforms","primary_table_verbose_show_schema":"platforms","primary_table_object_id":"t194","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"backoffice_id"}],"custom_fields":{}},{"name":"trackers_backoffice_fk_platform","title":null,"description":null,"is_user_defined":false,"foreign_table":"trackers_backoffice","foreign_table_show_schema":"trackers_backoffice","foreign_table_verbose":"trackers_backoffice","foreign_table_verbose_show_schema":"trackers_backoffice","foreign_table_object_id":"t246","primary_table":"platforms","primary_table_show_schema":"platforms","primary_table_verbose":"platforms","primary_table_verbose_show_schema":"platforms","primary_table_object_id":"t194","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"platform_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"platforms_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"name","name":"name"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"platforms","object_name_show_schema":"platforms","object_type":"TABLE","object_id":"t194","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"platforms","object_name_show_schema":"platforms","object_type":"TABLE","object_id":"t194","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_accounts","object_name_show_schema":"brands_accounts","object_type":"TABLE","object_id":"t78","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"trackers_backoffice","object_name_show_schema":"trackers_backoffice","object_type":"TABLE","object_id":"t246","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t194","name":"platforms","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"platforms"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};