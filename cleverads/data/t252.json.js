window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2643","object_id":"column-2643","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2644","object_id":"column-2644","name":"user_authorized_id","name_without_path":"user_authorized_id","description":"References clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2645","object_id":"column-2645","name":"company_id","name_without_path":"company_id","description":"References clevernt-cleverads-production.companies table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t107","name":"companies","name_show_schema":"companies"}],"linked_lookup":null},{"id":"column-2646","object_id":"column-2646","name":"position_id","name_without_path":"position_id","description":"References clevernt-cleverads-production.positions table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t195","name":"positions","name_show_schema":"positions"}],"linked_lookup":null},{"id":"column-2647","object_id":"column-2647","name":"user_position_id","name_without_path":"user_position_id","description":"References clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2648","object_id":"column-2648","name":"allow_update","name_without_path":"allow_update","description":"Allow update values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2649","object_id":"column-2649","name":"allow_publisher","name_without_path":"allow_publisher","description":"Allow publisher values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2650","object_id":"column-2650","name":"allow_payment_request","name_without_path":"allow_payment_request","description":"Allow payment request values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"1","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2651","object_id":"column-2651","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2652","object_id":"column-2652","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2653","object_id":"column-2653","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2654","object_id":"column-2654","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2655","object_id":"column-2655","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2656","object_id":"column-2656","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"users_default_leads_permissions_fk_companies","title":null,"description":"cleverads.users_default_leads_permissions(n) - cleverads.companies","is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"companies","primary_table_show_schema":"companies","primary_table_verbose":"companies","primary_table_verbose_show_schema":"companies","primary_table_object_id":"t107","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"company_id"}],"custom_fields":{}},{"name":"users_default_leads_permissions_fk_positions","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}},{"name":"FK_users_default_leads_permissions_users","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_authorized_id"}],"custom_fields":{}},{"name":"FK_users_default_leads_permissions_users_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_position_id"}],"custom_fields":{}},{"name":"users_default_leads_permissions_fk_users_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"users_default_leads_permissions_fk_users_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"users_default_leads_permissions_fk_users_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"users_default_leads_permissions","object_name_show_schema":"users_default_leads_permissions","object_type":"TABLE","object_id":"t252","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"companies","object_name_show_schema":"companies","object_type":"TABLE","object_id":"t107","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"positions","object_name_show_schema":"positions","object_type":"TABLE","object_id":"t195","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t252","name":"users_default_leads_permissions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"users_default_leads_permissions"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};