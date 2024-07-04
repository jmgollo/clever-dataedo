window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1037","object_id":"column-1037","name":"code","name_without_path":"code","description":"Record identification","is_pk":true,"is_identity":false,"data_type":"varchar","data_length":"3","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1038","object_id":"column-1038","name":"name","name_without_path":"name","description":"Currency name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1039","object_id":"column-1039","name":"symbol","name_without_path":"symbol","description":"Currency symbol","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1040","object_id":"column-1040","name":"symbol_native","name_without_path":"symbol_native","description":"Native currency symbol","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"50","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1041","object_id":"column-1041","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1042","object_id":"column-1042","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1043","object_id":"column-1043","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1044","object_id":"column-1044","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"currencies_fk_user_c","title":null,"description":"cleverads.currencies(n) - cleverads.users","is_user_defined":false,"foreign_table":"currencies","foreign_table_show_schema":"currencies","foreign_table_verbose":"currencies","foreign_table_verbose_show_schema":"currencies","foreign_table_object_id":"t115","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"currencies_fk_user_d","title":null,"description":"cleverads.currencies(n) - cleverads.users","is_user_defined":false,"foreign_table":"currencies","foreign_table_show_schema":"currencies","foreign_table_verbose":"currencies","foreign_table_verbose_show_schema":"currencies","foreign_table_object_id":"t115","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_currencies","title":null,"description":"cleverads.brands_accounts(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"brands_accounts","foreign_table_show_schema":"brands_accounts","foreign_table_verbose":"brands_accounts","foreign_table_verbose_show_schema":"brands_accounts","foreign_table_object_id":"t78","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"report_currency_id"}],"custom_fields":{}},{"name":"entities_payments_methods_fk_currencies","title":null,"description":"cleverads.entities_payments_methods(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"entities_payments_methods","foreign_table_show_schema":"entities_payments_methods","foreign_table_verbose":"entities_payments_methods","foreign_table_verbose_show_schema":"entities_payments_methods","foreign_table_object_id":"t136","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_id"}],"custom_fields":{}},{"name":"FK_exchange_rates_currencies","title":null,"description":"cleverads.exchange_rates(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"exchange_rates","foreign_table_show_schema":"exchange_rates","foreign_table_verbose":"exchange_rates","foreign_table_verbose_show_schema":"exchange_rates","foreign_table_object_id":"t144","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"code"}],"custom_fields":{}},{"name":"leads_fk_currencies","title":null,"description":"cleverads.leads(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"leads","foreign_table_show_schema":"leads","foreign_table_verbose":"leads","foreign_table_verbose_show_schema":"leads","foreign_table_object_id":"t162","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_id"}],"custom_fields":{}},{"name":"script_logs_commissions_fk_currency_code","title":null,"description":"cleverads.script_logs_commissions(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"script_logs_commissions","foreign_table_show_schema":"script_logs_commissions","foreign_table_verbose":"script_logs_commissions","foreign_table_verbose_show_schema":"script_logs_commissions","foreign_table_object_id":"t402","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_code"}],"custom_fields":{}},{"name":"scripts_fk_currency","title":null,"description":"cleverads.scripts(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"scripts","foreign_table_show_schema":"scripts","foreign_table_verbose":"scripts","foreign_table_verbose_show_schema":"scripts","foreign_table_object_id":"t202","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_code"}],"custom_fields":{}},{"name":"FK_suppliers_payments_methods_currencies","title":null,"description":"cleverads.(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"suppliers_payments_methods","foreign_table_show_schema":"suppliers_payments_methods","foreign_table_verbose":"suppliers_payments_methods","foreign_table_verbose_show_schema":"suppliers_payments_methods","foreign_table_object_id":"t218","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_id"}],"custom_fields":{}},{"name":"suppliers_payments_requests_fk_currencies","title":null,"description":"cleverads.suppliers_payments_methods(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"suppliers_payments_requests","foreign_table_show_schema":"suppliers_payments_requests","foreign_table_verbose":"suppliers_payments_requests","foreign_table_verbose_show_schema":"suppliers_payments_requests","foreign_table_object_id":"t221","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_id"}],"custom_fields":{}},{"name":"FK_suppliers_payments_requests_currencies","title":null,"description":"cleverads.suppliers_payments_requests(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"suppliers_payments_requests","foreign_table_show_schema":"suppliers_payments_requests","foreign_table_verbose":"suppliers_payments_requests","foreign_table_verbose_show_schema":"suppliers_payments_requests","foreign_table_object_id":"t221","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_destiny_id"}],"custom_fields":{}},{"name":"trackers_logs_script_fields_inactivated_tracker_fk_currency_code","title":null,"description":"cleverads.trackers_logs_script_fields_inactivated_tracker(n) - cleverads.currencies","is_user_defined":false,"foreign_table":"trackers_logs_script_fields_inactivated_tracker","foreign_table_show_schema":"trackers_logs_script_fields_inactivated_tracker","foreign_table_verbose":"trackers_logs_script_fields_inactivated_tracker","foreign_table_verbose_show_schema":"trackers_logs_script_fields_inactivated_tracker","foreign_table_object_id":"t404","primary_table":"currencies","primary_table_show_schema":"currencies","primary_table_verbose":"currencies","primary_table_verbose_show_schema":"currencies","primary_table_object_id":"t115","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"code","foreign_column_path":null,"foreign_column":"currency_code"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":"Primary key, contains columns: id","is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"code","name":"code"}],"custom_fields":{}},{"name":"currencies_uk","description":"Unique key, contains columns: code, deleted_at","is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"code","name":"code"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"currencies","object_name_show_schema":"currencies","object_type":"TABLE","object_id":"t115","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"currencies","object_name_show_schema":"currencies","object_type":"TABLE","object_id":"t115","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_accounts","object_name_show_schema":"brands_accounts","object_type":"TABLE","object_id":"t78","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"entities_payments_methods","object_name_show_schema":"entities_payments_methods","object_type":"TABLE","object_id":"t136","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"exchange_rates","object_name_show_schema":"exchange_rates","object_type":"TABLE","object_id":"t144","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"leads","object_name_show_schema":"leads","object_type":"TABLE","object_id":"t162","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"script_logs_commissions","object_name_show_schema":"script_logs_commissions","object_type":"TABLE","object_id":"t402","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"scripts","object_name_show_schema":"scripts","object_type":"TABLE","object_id":"t202","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_methods","object_name_show_schema":"suppliers_payments_methods","object_type":"TABLE","object_id":"t218","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_requests","object_name_show_schema":"suppliers_payments_requests","object_type":"TABLE","object_id":"t221","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"suppliers_payments_requests","object_name_show_schema":"suppliers_payments_requests","object_type":"TABLE","object_id":"t221","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"trackers_logs_script_fields_inactivated_tracker","object_name_show_schema":"trackers_logs_script_fields_inactivated_tracker","object_type":"TABLE","object_id":"t404","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t115","name":"currencies","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs302272C1{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs68E31449{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs302272C1\"><span class=\"cs68E31449\">Table with currencies information</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"currencies"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area14","name":"Applications","type":"DATA_AREA","subtype":null},{"id":"data_area16","name":"Domains","type":"DATA_AREA","subtype":null},{"id":"data_area25","name":"Finance","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};