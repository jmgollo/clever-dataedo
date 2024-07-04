window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-2735","object_id":"column-2735","name":"user_id","name_without_path":"user_id","description":"References clevernt-cleverads-production.users table","is_pk":true,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-2736","object_id":"column-2736","name":"available_at","name_without_path":"available_at","description":"Date availability record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-2737","object_id":"column-2737","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"world_cup_users_ibfk_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"world_cup_users","foreign_table_show_schema":"world_cup_users","foreign_table_verbose":"world_cup_users","foreign_table_verbose_show_schema":"world_cup_users","foreign_table_object_id":"t262","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"user_id","name":"user_id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"world_cup_users","object_name_show_schema":"world_cup_users","object_type":"TABLE","object_id":"t262","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t262","name":"world_cup_users","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"world_cup_users"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};