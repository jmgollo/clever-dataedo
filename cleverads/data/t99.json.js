window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-883","object_id":"column-883","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-884","object_id":"column-884","name":"brand_creative_id","name_without_path":"brand_creative_id","description":"References clevernt-cleverads-production.brands_creatives table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t98","name":"brands_creatives","name_show_schema":"brands_creatives"}],"linked_lookup":null},{"id":"column-885","object_id":"column-885","name":"region_id","name_without_path":"region_id","description":"References clevernt-cleverads-production.regions table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t197","name":"regions","name_show_schema":"regions"}],"linked_lookup":null},{"id":"column-886","object_id":"column-886","name":"url","name_without_path":"url","description":"Uniform Resource Locator (web address name)","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"1000","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-887","object_id":"column-887","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-888","object_id":"column-888","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-889","object_id":"column-889","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-890","object_id":"column-890","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-891","object_id":"column-891","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-892","object_id":"column-892","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"brands_creatives_regions_fk_brands_creative","title":null,"description":"cleverads.brands_creatives_regions(n) - cleverads.brands_creatives","is_user_defined":false,"foreign_table":"brands_creatives_regions","foreign_table_show_schema":"brands_creatives_regions","foreign_table_verbose":"brands_creatives_regions","foreign_table_verbose_show_schema":"brands_creatives_regions","foreign_table_object_id":"t99","primary_table":"brands_creatives","primary_table_show_schema":"brands_creatives","primary_table_verbose":"brands_creatives","primary_table_verbose_show_schema":"brands_creatives","primary_table_object_id":"t98","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"brand_creative_id"}],"custom_fields":{}},{"name":"brands_creatives_regions_fk_region","title":null,"description":"cleverads.brands_creatives_regions(n) - cleverads.regions","is_user_defined":false,"foreign_table":"brands_creatives_regions","foreign_table_show_schema":"brands_creatives_regions","foreign_table_verbose":"brands_creatives_regions","foreign_table_verbose_show_schema":"brands_creatives_regions","foreign_table_object_id":"t99","primary_table":"regions","primary_table_show_schema":"regions","primary_table_verbose":"regions","primary_table_verbose_show_schema":"regions","primary_table_object_id":"t197","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"region_id"}],"custom_fields":{}},{"name":"brands_creatives_regions_fk_user_c","title":null,"description":"cleverads.brands_creatives_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_creatives_regions","foreign_table_show_schema":"brands_creatives_regions","foreign_table_verbose":"brands_creatives_regions","foreign_table_verbose_show_schema":"brands_creatives_regions","foreign_table_object_id":"t99","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"brands_creatives_regions_fk_user_d","title":null,"description":"cleverads.brands_creatives_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_creatives_regions","foreign_table_show_schema":"brands_creatives_regions","foreign_table_verbose":"brands_creatives_regions","foreign_table_verbose_show_schema":"brands_creatives_regions","foreign_table_object_id":"t99","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"brands_creatives_regions_fk_user_u","title":null,"description":"cleverads.brands_creatives_regions(n) - cleverads.users","is_user_defined":false,"foreign_table":"brands_creatives_regions","foreign_table_show_schema":"brands_creatives_regions","foreign_table_verbose":"brands_creatives_regions","foreign_table_verbose_show_schema":"brands_creatives_regions","foreign_table_object_id":"t99","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":"\r\nPrimary key, contains columns: id","is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"brands_creatives_regions_uk","description":"Unique key, contains columns: brand_creative_id, region_id, deleted_at","is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"brand_creative_id","name":"brand_creative_id"},{"path":null,"name_without_path":"region_id","name":"region_id"},{"path":null,"name_without_path":"deleted_at","name":"deleted_at"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"brands_creatives_regions","object_name_show_schema":"brands_creatives_regions","object_type":"TABLE","object_id":"t99","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_creatives","object_name_show_schema":"brands_creatives","object_type":"TABLE","object_id":"t98","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"regions","object_name_show_schema":"regions","object_type":"TABLE","object_id":"t197","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t99","name":"brands_creatives_regions","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"brands_creatives_regions"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area19","name":"Brands&Accounts","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};