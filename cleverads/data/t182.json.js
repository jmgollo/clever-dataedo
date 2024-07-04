window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1708","object_id":"column-1708","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"unsigned int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1709","object_id":"column-1709","name":"lead_id","name_without_path":"lead_id","description":"References clevernt-cleverads-production.leads table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t162","name":"leads","name_show_schema":"leads"}],"linked_lookup":null},{"id":"column-1710","object_id":"column-1710","name":"user_id","name_without_path":"user_id","description":"References clevernt-cleverads-production.leads table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1711","object_id":"column-1711","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1712","object_id":"column-1712","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1713","object_id":"column-1713","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1714","object_id":"column-1714","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_leads_users_exclude_close_expire_leads","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_users_exclude_close_expire","foreign_table_show_schema":"leads_users_exclude_close_expire","foreign_table_verbose":"leads_users_exclude_close_expire","foreign_table_verbose_show_schema":"leads_users_exclude_close_expire","foreign_table_object_id":"t182","primary_table":"leads","primary_table_show_schema":"leads","primary_table_verbose":"leads","primary_table_verbose_show_schema":"leads","primary_table_object_id":"t162","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"lead_id"}],"custom_fields":{}},{"name":"FK_leads_users_exclude_close_expire_users","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_users_exclude_close_expire","foreign_table_show_schema":"leads_users_exclude_close_expire","foreign_table_verbose":"leads_users_exclude_close_expire","foreign_table_verbose_show_schema":"leads_users_exclude_close_expire","foreign_table_object_id":"t182","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}},{"name":"FK_leads_users_exclude_close_expire_users_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_users_exclude_close_expire","foreign_table_show_schema":"leads_users_exclude_close_expire","foreign_table_verbose":"leads_users_exclude_close_expire","foreign_table_verbose_show_schema":"leads_users_exclude_close_expire","foreign_table_object_id":"t182","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"FK_leads_users_exclude_close_expire_users_3","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_users_exclude_close_expire","foreign_table_show_schema":"leads_users_exclude_close_expire","foreign_table_verbose":"leads_users_exclude_close_expire","foreign_table_verbose_show_schema":"leads_users_exclude_close_expire","foreign_table_object_id":"t182","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"UNIQUE_leads_users_exclude_close_expire","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"lead_id","name":"lead_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"},{"path":null,"name_without_path":"user_id","name":"user_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"leads_users_exclude_close_expire","object_name_show_schema":"leads_users_exclude_close_expire","object_type":"TABLE","object_id":"t182","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"leads","object_name_show_schema":"leads","object_type":"TABLE","object_id":"t162","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t182","name":"leads_users_exclude_close_expire","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"leads_users_exclude_close_expire"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area17","name":"Leads","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};