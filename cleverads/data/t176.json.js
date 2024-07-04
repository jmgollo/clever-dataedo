window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1660","object_id":"column-1660","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1661","object_id":"column-1661","name":"lead_id","name_without_path":"lead_id","description":"References clevernt-cleverads-production.leads table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t162","name":"leads","name_show_schema":"leads"}],"linked_lookup":null},{"id":"column-1662","object_id":"column-1662","name":"contact_type_id","name_without_path":"contact_type_id","description":"References clevernt-cleverads-production.contacts_types table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t108","name":"contacts_types","name_show_schema":"contacts_types"}],"linked_lookup":null},{"id":"column-1663","object_id":"column-1663","name":"comments","name_without_path":"comments","description":"Comments (free-fill field)","is_pk":false,"is_identity":false,"data_type":"mediumtext","data_length":null,"is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1664","object_id":"column-1664","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1665","object_id":"column-1665","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1666","object_id":"column-1666","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1667","object_id":"column-1667","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1668","object_id":"column-1668","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1669","object_id":"column-1669","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"leads_follow_up_fk_contacts_types","title":null,"description":"cleverads.leads_follow_up(n) - cleverads.contacts_types","is_user_defined":false,"foreign_table":"leads_follow_up","foreign_table_show_schema":"leads_follow_up","foreign_table_verbose":"leads_follow_up","foreign_table_verbose_show_schema":"leads_follow_up","foreign_table_object_id":"t176","primary_table":"contacts_types","primary_table_show_schema":"contacts_types","primary_table_verbose":"contacts_types","primary_table_verbose_show_schema":"contacts_types","primary_table_object_id":"t108","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"contact_type_id"}],"custom_fields":{}},{"name":"leads_follow_up_fk_leads","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_follow_up","foreign_table_show_schema":"leads_follow_up","foreign_table_verbose":"leads_follow_up","foreign_table_verbose_show_schema":"leads_follow_up","foreign_table_object_id":"t176","primary_table":"leads","primary_table_show_schema":"leads","primary_table_verbose":"leads","primary_table_verbose_show_schema":"leads","primary_table_object_id":"t162","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"lead_id"}],"custom_fields":{}},{"name":"leads_follow_up_fk_user_c","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_follow_up","foreign_table_show_schema":"leads_follow_up","foreign_table_verbose":"leads_follow_up","foreign_table_verbose_show_schema":"leads_follow_up","foreign_table_object_id":"t176","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"leads_follow_up_fk_user_d","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_follow_up","foreign_table_show_schema":"leads_follow_up","foreign_table_verbose":"leads_follow_up","foreign_table_verbose_show_schema":"leads_follow_up","foreign_table_object_id":"t176","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"leads_follow_up_fk_user_u","title":null,"description":null,"is_user_defined":false,"foreign_table":"leads_follow_up","foreign_table_show_schema":"leads_follow_up","foreign_table_verbose":"leads_follow_up","foreign_table_verbose_show_schema":"leads_follow_up","foreign_table_object_id":"t176","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"leads_follow_up","object_name_show_schema":"leads_follow_up","object_type":"TABLE","object_id":"t176","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"contacts_types","object_name_show_schema":"contacts_types","object_type":"TABLE","object_id":"t108","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"leads","object_name_show_schema":"leads","object_type":"TABLE","object_id":"t162","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[]},"object_id":"t176","name":"leads_follow_up","subtype":"TABLE","is_user_defined":false,"description":null,"summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"leads_follow_up"},{"field":"Type","value":"Table"},{"field":"Linked areas","value":{"_type":"linked_areas","linked_areas":[{"id":"data_area17","name":"Leads","type":"DATA_AREA","subtype":null}]}}],"script":null,"imported_at":"2024-06-28 17:00"};