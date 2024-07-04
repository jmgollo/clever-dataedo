window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1833","object_id":"column-1833","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1834","object_id":"column-1834","name":"name","name_without_path":"name","description":"Position name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"100","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1835","object_id":"column-1835","name":"search_redirect_type","name_without_path":"search_redirect_type","description":"Search redirect type values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"unsigned tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1836","object_id":"column-1836","name":"default_allow_lead","name_without_path":"default_allow_lead","description":"Default allow lead","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1837","object_id":"column-1837","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1838","object_id":"column-1838","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1839","object_id":"column-1839","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1840","object_id":"column-1840","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1841","object_id":"column-1841","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1842","object_id":"column-1842","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"positions_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"positions","foreign_table_show_schema":"positions","foreign_table_verbose":"positions","foreign_table_verbose_show_schema":"positions","foreign_table_object_id":"t195","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"positions_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"positions","foreign_table_show_schema":"positions","foreign_table_verbose":"positions","foreign_table_verbose_show_schema":"positions","foreign_table_object_id":"t195","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"positions_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"positions","foreign_table_show_schema":"positions","foreign_table_verbose":"positions","foreign_table_verbose_show_schema":"positions","foreign_table_object_id":"t195","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"cost_centers_positions_ibfk_2","title":null,"description":"cleverads.cost_centers_positions(n) - cleverads.positions","is_user_defined":false,"foreign_table":"cost_centers_positions","foreign_table_show_schema":"cost_centers_positions","foreign_table_verbose":"cost_centers_positions","foreign_table_verbose_show_schema":"cost_centers_positions","foreign_table_object_id":"t112","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}},{"name":"fast_payment_requests_fk_position","title":null,"description":null,"is_user_defined":false,"foreign_table":"fast_payment_requests","foreign_table_show_schema":"fast_payment_requests","foreign_table_verbose":"fast_payment_requests","foreign_table_verbose_show_schema":"fast_payment_requests","foreign_table_object_id":"t150","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}},{"name":"services_types_positions_ibfk_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"services_types_positions","foreign_table_show_schema":"services_types_positions","foreign_table_verbose":"services_types_positions","foreign_table_verbose_show_schema":"services_types_positions","foreign_table_object_id":"t208","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}},{"name":"users_fk_positions","title":null,"description":null,"is_user_defined":false,"foreign_table":"users","foreign_table_show_schema":"users","foreign_table_verbose":"users","foreign_table_verbose_show_schema":"users","foreign_table_object_id":"t251","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}},{"name":"users_default_leads_permissions_fk_positions","title":null,"description":null,"is_user_defined":false,"foreign_table":"users_default_leads_permissions","foreign_table_show_schema":"users_default_leads_permissions","foreign_table_verbose":"users_default_leads_permissions","foreign_table_verbose_show_schema":"users_default_leads_permissions","foreign_table_object_id":"t252","primary_table":"positions","primary_table_show_schema":"positions","primary_table_verbose":"positions","primary_table_verbose_show_schema":"positions","primary_table_object_id":"t195","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"position_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"positions_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"name","name":"name"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"positions","object_name_show_schema":"positions","object_type":"TABLE","object_id":"t195","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"positions","object_name_show_schema":"positions","object_type":"TABLE","object_id":"t195","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"cost_centers_positions","object_name_show_schema":"cost_centers_positions","object_type":"TABLE","object_id":"t112","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"fast_payment_requests","object_name_show_schema":"fast_payment_requests","object_type":"TABLE","object_id":"t150","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"services_types_positions","object_name_show_schema":"services_types_positions","object_type":"TABLE","object_id":"t208","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users_default_leads_permissions","object_name_show_schema":"users_default_leads_permissions","object_type":"TABLE","object_id":"t252","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t195","name":"positions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"positions"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};