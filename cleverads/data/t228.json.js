window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2404","object_id":"column-2404","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2405","object_id":"column-2405","name":"suppliers_payments_requests_id","name_without_path":"suppliers_payments_requests_id","description":"References clevernt-cleverads-production.suppliers_payments_requests table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t221","name":"suppliers_payments_requests","name_show_schema":"suppliers_payments_requests"}],"linked_lookup":null},{"id":"column-2406","object_id":"column-2406","name":"lead_domain_id","name_without_path":"lead_domain_id","description":"References clevernt-cleverads-production.leads_domains table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t168","name":"leads_domains","name_show_schema":"leads_domains"}],"linked_lookup":null},{"id":"column-2407","object_id":"column-2407","name":"code_id","name_without_path":"code_id","description":"Code id","is_pk":false,"is_identity":false,"data_type":"text","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2408","object_id":"column-2408","name":"amount","name_without_path":"amount","description":"Amount","is_pk":false,"is_identity":false,"data_type":"decimal","data_length":"10, 2","is_nullable":false,"computed_formula":"","default_value":"0.00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2409","object_id":"column-2409","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2410","object_id":"column-2410","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2411","object_id":"column-2411","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2412","object_id":"column-2412","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2413","object_id":"column-2413","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2414","object_id":"column-2414","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_suppliers_payments_requests_leads_domains_leads_domains","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_leads_domains","foreign_table_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_verbose":"suppliers_payments_requests_leads_domains","foreign_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_object_id":"t228","primary_table":"leads_domains","primary_table_show_schema":"leads_domains","primary_table_verbose":"leads_domains","primary_table_verbose_show_schema":"leads_domains","primary_table_object_id":"t168","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"lead_domain_id"}],"custom_fields":{}},{"name":"FK_suppliers_payments_requests_leads_domains_suppliers_pr","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_leads_domains","foreign_table_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_verbose":"suppliers_payments_requests_leads_domains","foreign_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_object_id":"t228","primary_table":"suppliers_payments_requests","primary_table_show_schema":"suppliers_payments_requests","primary_table_verbose":"suppliers_payments_requests","primary_table_verbose_show_schema":"suppliers_payments_requests","primary_table_object_id":"t221","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"suppliers_payments_requests_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_leads_domains_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_leads_domains","foreign_table_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_verbose":"suppliers_payments_requests_leads_domains","foreign_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_object_id":"t228","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_leads_domains_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_leads_domains","foreign_table_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_verbose":"suppliers_payments_requests_leads_domains","foreign_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_object_id":"t228","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_leads_domains_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_leads_domains","foreign_table_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_verbose":"suppliers_payments_requests_leads_domains","foreign_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","foreign_table_object_id":"t228","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_codes_fk_suppliers_pr_ld","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_codes","foreign_table_show_schema":"suppliers_payments_requests_codes","foreign_table_verbose":"suppliers_payments_requests_codes","foreign_table_verbose_show_schema":"suppliers_payments_requests_codes","foreign_table_object_id":"t223","primary_table":"suppliers_payments_requests_leads_domains","primary_table_show_schema":"suppliers_payments_requests_leads_domains","primary_table_verbose":"suppliers_payments_requests_leads_domains","primary_table_verbose_show_schema":"suppliers_payments_requests_leads_domains","primary_table_object_id":"t228","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"suppliers_payments_requests_leads_domains_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_leads_domains_uk","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"suppliers_payments_requests_id","name":"suppliers_payments_requests_id"},{"path":null,"name_without_path":"lead_domain_id","name":"lead_domain_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"suppliers_payments_requests_leads_domains","object_name_show_schema":"suppliers_payments_requests_leads_domains","object_type":"TABLE","object_id":"t228","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"leads_domains","object_name_show_schema":"leads_domains","object_type":"TABLE","object_id":"t168","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_requests","object_name_show_schema":"suppliers_payments_requests","object_type":"TABLE","object_id":"t221","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"suppliers_payments_requests_leads_domains","object_name_show_schema":"suppliers_payments_requests_leads_domains","object_type":"TABLE","object_id":"t228","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"suppliers_payments_requests_codes","object_name_show_schema":"suppliers_payments_requests_codes","object_type":"TABLE","object_id":"t223","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t228","name":"suppliers_payments_requests_leads_domains","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"suppliers_payments_requests_leads_domains"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area25","name":"Finance","type":"DATA_AREA","subtype":null},{"id":"data_area17","name":"Leads","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};