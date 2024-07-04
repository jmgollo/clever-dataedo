window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1245","object_id":"column-1245","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"unsigned int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1246","object_id":"column-1246","name":"name","name_without_path":"name","description":"Event name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"250","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1247","object_id":"column-1247","name":"is_public","name_without_path":"is_public","description":"Is public event values 0 - yes; 1 - no;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1248","object_id":"column-1248","name":"event_category_id","name_without_path":"event_category_id","description":"References clevernt-cleverads-production.events_categories table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t139","name":"events_categories","name_show_schema":"events_categories"}],"linked_lookup":null},{"id":"column-1249","object_id":"column-1249","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1250","object_id":"column-1250","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1251","object_id":"column-1251","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1252","object_id":"column-1252","name":"occurred_at","name_without_path":"occurred_at","description":"Date occurred record","is_pk":false,"is_identity":false,"data_type":"date","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1253","object_id":"column-1253","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1254","object_id":"column-1254","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1255","object_id":"column-1255","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_events_events_categories","title":null,"description":null,"is_user_defined":false,"foreign_table":"events","foreign_table_show_schema":"events","foreign_table_verbose":"events","foreign_table_verbose_show_schema":"events","foreign_table_object_id":"t138","primary_table":"events_categories","primary_table_show_schema":"events_categories","primary_table_verbose":"events_categories","primary_table_verbose_show_schema":"events_categories","primary_table_object_id":"t139","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_category_id"}],"custom_fields":{}},{"name":"events_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"events","foreign_table_show_schema":"events","foreign_table_verbose":"events","foreign_table_verbose_show_schema":"events","foreign_table_object_id":"t138","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"events_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"events","foreign_table_show_schema":"events","foreign_table_verbose":"events","foreign_table_verbose_show_schema":"events","foreign_table_object_id":"t138","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"events_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"events","foreign_table_show_schema":"events","foreign_table_verbose":"events","foreign_table_verbose_show_schema":"events","foreign_table_object_id":"t138","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"FK_events_stakeholders_events","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_stakeholders","foreign_table_show_schema":"events_stakeholders","foreign_table_verbose":"events_stakeholders","foreign_table_verbose_show_schema":"events_stakeholders","foreign_table_object_id":"t141","primary_table":"events","primary_table_show_schema":"events","primary_table_verbose":"events","primary_table_verbose_show_schema":"events","primary_table_object_id":"t138","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_id"}],"custom_fields":{}},{"name":"FK_events_tags_events","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_tags","foreign_table_show_schema":"events_tags","foreign_table_verbose":"events_tags","foreign_table_verbose_show_schema":"events_tags","foreign_table_object_id":"t142","primary_table":"events","primary_table_show_schema":"events","primary_table_verbose":"events","primary_table_verbose_show_schema":"events","primary_table_object_id":"t138","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_id"}],"custom_fields":{}},{"name":"FK_events_versions_events","title":null,"description":null,"is_user_defined":false,"foreign_table":"events_versions","foreign_table_show_schema":"events_versions","foreign_table_verbose":"events_versions","foreign_table_verbose_show_schema":"events_versions","foreign_table_object_id":"t143","primary_table":"events","primary_table_show_schema":"events","primary_table_verbose":"events","primary_table_verbose_show_schema":"events","primary_table_object_id":"t138","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"event_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"events_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"name","name":"name"},{"path":null,"name_without_path":"event_category_id","name":"event_category_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"events","object_name_show_schema":"events","object_type":"TABLE","object_id":"t138","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"events_categories","object_name_show_schema":"events_categories","object_type":"TABLE","object_id":"t139","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"events","object_name_show_schema":"events","object_type":"TABLE","object_id":"t138","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"events_stakeholders","object_name_show_schema":"events_stakeholders","object_type":"TABLE","object_id":"t141","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"events_tags","object_name_show_schema":"events_tags","object_type":"TABLE","object_id":"t142","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"events_versions","object_name_show_schema":"events_versions","object_type":"TABLE","object_id":"t143","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t138","name":"events","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"events"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};