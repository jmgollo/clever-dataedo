window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1715","object_id":"column-1715","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1716","object_id":"column-1716","name":"available_at","name_without_path":"available_at","description":"Available at ","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1717","object_id":"column-1717","name":"subject_type_id","name_without_path":"subject_type_id","description":"References clevernt-cleverads-production.subjects_types table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t213","name":"subjects_types","name_show_schema":"subjects_types"}],"linked_lookup":null},{"id":"column-1718","object_id":"column-1718","name":"lead_id","name_without_path":"lead_id","description":"References clevernt-cleverads-production.leads table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t162","name":"leads","name_show_schema":"leads"}],"linked_lookup":null},{"id":"column-1719","object_id":"column-1719","name":"priority","name_without_path":"priority","description":"Priority values 'L' - low; 'M' - medium; 'H' - high;","is_pk":false,"is_identity":false,"data_type":"char","data_length":"1","is_nullable":false,"computed_formula":"","default_value":"L","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1720","object_id":"column-1720","name":"information","name_without_path":"information","description":"Information description","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1721","object_id":"column-1721","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1722","object_id":"column-1722","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1723","object_id":"column-1723","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1724","object_id":"column-1724","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1725","object_id":"column-1725","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1726","object_id":"column-1726","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"messages_fk_lead","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t183","primary_table":"leads","primary_table_show_schema":"leads","primary_table_verbose":"leads","primary_table_verbose_show_schema":"leads","primary_table_object_id":"t162","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"lead_id"}],"custom_fields":{}},{"name":"messages_fk_subjects_type","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t183","primary_table":"subjects_types","primary_table_show_schema":"subjects_types","primary_table_verbose":"subjects_types","primary_table_verbose_show_schema":"subjects_types","primary_table_object_id":"t213","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"subject_type_id"}],"custom_fields":{}},{"name":"messages_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t183","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"messages_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t183","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"messages_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages","foreign_table_show_schema":"messages","foreign_table_verbose":"messages","foreign_table_verbose_show_schema":"messages","foreign_table_object_id":"t183","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"messages_viewers_fk_messages","title":null,"description":null,"is_user_defined":false,"foreign_table":"messages_viewers","foreign_table_show_schema":"messages_viewers","foreign_table_verbose":"messages_viewers","foreign_table_verbose_show_schema":"messages_viewers","foreign_table_object_id":"t184","primary_table":"messages","primary_table_show_schema":"messages","primary_table_verbose":"messages","primary_table_verbose_show_schema":"messages","primary_table_object_id":"t183","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"message_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"messages","object_name_show_schema":"messages","object_type":"TABLE","object_id":"t183","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"leads","object_name_show_schema":"leads","object_type":"TABLE","object_id":"t162","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"subjects_types","object_name_show_schema":"subjects_types","object_type":"TABLE","object_id":"t213","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"messages","object_name_show_schema":"messages","object_type":"TABLE","object_id":"t183","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"messages_viewers","object_name_show_schema":"messages_viewers","object_type":"TABLE","object_id":"t184","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t183","name":"messages","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"messages"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};