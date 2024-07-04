window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1237","object_id":"column-1237","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1238","object_id":"column-1238","name":"name","name_without_path":"name","description":null,"is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1239","object_id":"column-1239","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1240","object_id":"column-1240","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1241","object_id":"column-1241","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1242","object_id":"column-1242","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1243","object_id":"column-1243","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1244","object_id":"column-1244","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"entities_payments_methods_layouts_ibfk_1","title":null,"description":null,"is_user_defined":false,"foreign_table":"entities_payments_methods_layouts","foreign_table_show_schema":"entities_payments_methods_layouts","foreign_table_verbose":"entities_payments_methods_layouts","foreign_table_verbose_show_schema":"entities_payments_methods_layouts","foreign_table_object_id":"t137","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"entities_payments_methods_layouts_ibfk_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"entities_payments_methods_layouts","foreign_table_show_schema":"entities_payments_methods_layouts","foreign_table_verbose":"entities_payments_methods_layouts","foreign_table_verbose_show_schema":"entities_payments_methods_layouts","foreign_table_object_id":"t137","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"entities_payments_methods_layouts_ibfk_3","title":null,"description":null,"is_user_defined":false,"foreign_table":"entities_payments_methods_layouts","foreign_table_show_schema":"entities_payments_methods_layouts","foreign_table_verbose":"entities_payments_methods_layouts","foreign_table_verbose_show_schema":"entities_payments_methods_layouts","foreign_table_object_id":"t137","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"FK_entities_payments_methods_entities_payments_methods_layouts","title":null,"description":null,"is_user_defined":false,"foreign_table":"entities_payments_methods","foreign_table_show_schema":"entities_payments_methods","foreign_table_verbose":"entities_payments_methods","foreign_table_verbose_show_schema":"entities_payments_methods","foreign_table_object_id":"t136","primary_table":"entities_payments_methods_layouts","primary_table_show_schema":"entities_payments_methods_layouts","primary_table_verbose":"entities_payments_methods_layouts","primary_table_verbose_show_schema":"entities_payments_methods_layouts","primary_table_object_id":"t137","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"layout_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_exports_logs_ibfk_1","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_exports_logs","foreign_table_show_schema":"suppliers_payments_requests_exports_logs","foreign_table_verbose":"suppliers_payments_requests_exports_logs","foreign_table_verbose_show_schema":"suppliers_payments_requests_exports_logs","foreign_table_object_id":"t225","primary_table":"entities_payments_methods_layouts","primary_table_show_schema":"entities_payments_methods_layouts","primary_table_verbose":"entities_payments_methods_layouts","primary_table_verbose_show_schema":"entities_payments_methods_layouts","primary_table_object_id":"t137","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"layout_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"categories_leads_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"name","name":"name"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"entities_payments_methods_layouts","object_name_show_schema":"entities_payments_methods_layouts","object_type":"TABLE","object_id":"t137","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"entities_payments_methods_layouts","object_name_show_schema":"entities_payments_methods_layouts","object_type":"TABLE","object_id":"t137","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"entities_payments_methods","object_name_show_schema":"entities_payments_methods","object_type":"TABLE","object_id":"t136","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_requests_exports_logs","object_name_show_schema":"suppliers_payments_requests_exports_logs","object_type":"TABLE","object_id":"t225","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t137","name":"entities_payments_methods_layouts","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"entities_payments_methods_layouts"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area25","name":"Finance","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};