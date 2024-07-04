window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-756","object_id":"column-756","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-757","object_id":"column-757","name":"deal_id","name_without_path":"deal_id","description":"References clevernt-cleverads-production.brands_accounts_deals table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t83","name":"brands_accounts_deals","name_show_schema":"brands_accounts_deals"}],"linked_lookup":null},{"id":"column-758","object_id":"column-758","name":"region_id","name_without_path":"region_id","description":"References clevernt-cleverads-production.regions table","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t197","name":"regions","name_show_schema":"regions"}],"linked_lookup":null},{"id":"column-759","object_id":"column-759","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-760","object_id":"column-760","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-761","object_id":"column-761","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-762","object_id":"column-762","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-763","object_id":"column-763","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-764","object_id":"column-764","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_brands_accounts_deals_brands_accounts_deals","title":null,"description":"cleverads.brands_accounts_deals_regions(n) - cleverads.brands_accounts_deals","is_user_defined":false,"foreign_table":"brands_accounts_deals_regions","foreign_table_show_schema":"brands_accounts_deals_regions","foreign_table_verbose":"brands_accounts_deals_regions","foreign_table_verbose_show_schema":"brands_accounts_deals_regions","foreign_table_object_id":"t84","primary_table":"brands_accounts_deals","primary_table_show_schema":"brands_accounts_deals","primary_table_verbose":"brands_accounts_deals","primary_table_verbose_show_schema":"brands_accounts_deals","primary_table_object_id":"t83","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deal_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_deals_regions_regions","title":null,"description":"cleverads.brands_accounts_deals_regions(n) - cleverads.regions","is_user_defined":false,"foreign_table":"brands_accounts_deals_regions","foreign_table_show_schema":"brands_accounts_deals_regions","foreign_table_verbose":"brands_accounts_deals_regions","foreign_table_verbose_show_schema":"brands_accounts_deals_regions","foreign_table_object_id":"t84","primary_table":"regions","primary_table_show_schema":"regions","primary_table_verbose":"regions","primary_table_verbose_show_schema":"regions","primary_table_object_id":"t197","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"region_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_deals_regions_users","title":null,"description":"cleverads.brands_accounts_deals_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_accounts_deals_regions","foreign_table_show_schema":"brands_accounts_deals_regions","foreign_table_verbose":"brands_accounts_deals_regions","foreign_table_verbose_show_schema":"brands_accounts_deals_regions","foreign_table_object_id":"t84","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_deals_regions_users_2","title":null,"description":"cleverads.brands_accounts_deals_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_accounts_deals_regions","foreign_table_show_schema":"brands_accounts_deals_regions","foreign_table_verbose":"brands_accounts_deals_regions","foreign_table_verbose_show_schema":"brands_accounts_deals_regions","foreign_table_object_id":"t84","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"FK_brands_accounts_deals_regions_users_3","title":null,"description":"cleverads.brands_accounts_deals_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_accounts_deals_regions","foreign_table_show_schema":"brands_accounts_deals_regions","foreign_table_verbose":"brands_accounts_deals_regions","foreign_table_verbose_show_schema":"brands_accounts_deals_regions","foreign_table_object_id":"t84","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":"Primary key, contains columns: id, region_id","is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"},{"path":null,"name_without_path":"region_id","name":"region_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"brands_accounts_deals_regions","object_name_show_schema":"brands_accounts_deals_regions","object_type":"TABLE","object_id":"t84","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_accounts_deals","object_name_show_schema":"brands_accounts_deals","object_type":"TABLE","object_id":"t83","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"regions","object_name_show_schema":"regions","object_type":"TABLE","object_id":"t197","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t84","name":"brands_accounts_deals_regions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"brands_accounts_deals_regions"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area19","name":"Brands&Accounts","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};