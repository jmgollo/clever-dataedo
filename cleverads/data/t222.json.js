window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2336","object_id":"column-2336","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2337","object_id":"column-2337","name":"suppliers_payments_requests_id","name_without_path":"suppliers_payments_requests_id","description":"References clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t221","name":"suppliers_payments_requests","name_show_schema":"suppliers_payments_requests"}],"linked_lookup":null},{"id":"column-2338","object_id":"column-2338","name":"status_id","name_without_path":"status_id","description":"References clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t190","name":"payments_statuses","name_show_schema":"payments_statuses"}],"linked_lookup":null},{"id":"column-2339","object_id":"column-2339","name":"appointments","name_without_path":"appointments","description":"Appointments","is_pk":false,"is_identity":false,"data_type":"longtext","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2340","object_id":"column-2340","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2341","object_id":"column-2341","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_appointments_logs_status_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_appointments_logs","foreign_table_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_verbose":"suppliers_payments_requests_appointments_logs","foreign_table_verbose_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_object_id":"t222","primary_table":"payments_statuses","primary_table_show_schema":"payments_statuses","primary_table_verbose":"payments_statuses","primary_table_verbose_show_schema":"payments_statuses","primary_table_object_id":"t190","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"status_id"}],"custom_fields":{}},{"name":"FK_appointments_logs_suppliers_payments_requests_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_appointments_logs","foreign_table_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_verbose":"suppliers_payments_requests_appointments_logs","foreign_table_verbose_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_object_id":"t222","primary_table":"suppliers_payments_requests","primary_table_show_schema":"suppliers_payments_requests","primary_table_verbose":"suppliers_payments_requests","primary_table_verbose_show_schema":"suppliers_payments_requests","primary_table_object_id":"t221","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"suppliers_payments_requests_id"}],"custom_fields":{}},{"name":"FK_appointments_logs_created_user_id","title":null,"description":null,"is_user_defined":false,"foreign_table":"suppliers_payments_requests_appointments_logs","foreign_table_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_verbose":"suppliers_payments_requests_appointments_logs","foreign_table_verbose_show_schema":"suppliers_payments_requests_appointments_logs","foreign_table_object_id":"t222","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"suppliers_payments_requests_appointments_logs","object_name_show_schema":"suppliers_payments_requests_appointments_logs","object_type":"TABLE","object_id":"t222","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"payments_statuses","object_name_show_schema":"payments_statuses","object_type":"TABLE","object_id":"t190","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_requests","object_name_show_schema":"suppliers_payments_requests","object_type":"TABLE","object_id":"t221","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t222","name":"suppliers_payments_requests_appointments_logs","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"suppliers_payments_requests_appointments_logs"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area25","name":"Finance","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};