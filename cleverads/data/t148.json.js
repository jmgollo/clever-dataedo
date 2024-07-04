window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-1326","object_id":"column-1326","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"unsigned int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1327","object_id":"column-1327","name":"name","name_without_path":"name","description":"Faq category name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"255","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1328","object_id":"column-1328","name":"allow_update","name_without_path":"allow_update","description":"Allow update values 0 - no; 1 - yes;","is_pk":false,"is_identity":false,"data_type":"unsigned tinyint","data_length":"3, 0","is_nullable":false,"computed_formula":"","default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1329","object_id":"column-1329","name":"parent_id","name_without_path":"parent_id","description":"References clevernt-cleverads-production.faqs_categories table","is_pk":false,"is_identity":false,"data_type":"unsigned int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t148","name":"faqs_categories","name_show_schema":"faqs_categories"}],"linked_lookup":null},{"id":"column-1330","object_id":"column-1330","name":"created_user_id","name_without_path":"created_user_id","description":"Created record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1331","object_id":"column-1331","name":"updated_user_id","name_without_path":"updated_user_id","description":"Updated record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1332","object_id":"column-1332","name":"deleted_user_id","name_without_path":"deleted_user_id","description":"Deleted record user\r\nreferences clevernt-cleverads-production.users table","is_pk":false,"is_identity":false,"data_type":"int","data_length":"10, 0","is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[{"id":"t251","name":"users","name_show_schema":"users"}],"linked_lookup":null},{"id":"column-1333","object_id":"column-1333","name":"created_at","name_without_path":"created_at","description":"Date created record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"CURRENT_TIMESTAMP","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1334","object_id":"column-1334","name":"updated_at","name_without_path":"updated_at","description":"Date updated record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":true,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-1335","object_id":"column-1335","name":"deleted_at","name_without_path":"deleted_at","description":"Date deleted record","is_pk":false,"is_identity":false,"data_type":"timestamp","data_length":null,"is_nullable":false,"computed_formula":"","default_value":"0000-00-00 00:00:00","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"FK_faqs_categories_faqs_categories","title":null,"description":null,"is_user_defined":false,"foreign_table":"faqs_categories","foreign_table_show_schema":"faqs_categories","foreign_table_verbose":"faqs_categories","foreign_table_verbose_show_schema":"faqs_categories","foreign_table_object_id":"t148","primary_table":"faqs_categories","primary_table_show_schema":"faqs_categories","primary_table_verbose":"faqs_categories","primary_table_verbose_show_schema":"faqs_categories","primary_table_object_id":"t148","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"parent_id"}],"custom_fields":{}},{"name":"faqs_categories_ibfk_1","title":null,"description":null,"is_user_defined":false,"foreign_table":"faqs_categories","foreign_table_show_schema":"faqs_categories","foreign_table_verbose":"faqs_categories","foreign_table_verbose_show_schema":"faqs_categories","foreign_table_object_id":"t148","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"created_user_id"}],"custom_fields":{}},{"name":"faqs_categories_ibfk_2","title":null,"description":null,"is_user_defined":false,"foreign_table":"faqs_categories","foreign_table_show_schema":"faqs_categories","foreign_table_verbose":"faqs_categories","foreign_table_verbose_show_schema":"faqs_categories","foreign_table_object_id":"t148","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"updated_user_id"}],"custom_fields":{}},{"name":"faqs_categories_ibfk_3","title":null,"description":null,"is_user_defined":false,"foreign_table":"faqs_categories","foreign_table_show_schema":"faqs_categories","foreign_table_verbose":"faqs_categories","foreign_table_verbose_show_schema":"faqs_categories","foreign_table_object_id":"t148","primary_table":"users","primary_table_show_schema":"users","primary_table_verbose":"users","primary_table_verbose_show_schema":"users","primary_table_object_id":"t251","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"deleted_user_id"}],"custom_fields":{}},{"name":"FK_faqs_faqs_categories","title":null,"description":null,"is_user_defined":false,"foreign_table":"faqs","foreign_table_show_schema":"faqs","foreign_table_verbose":"faqs","foreign_table_verbose_show_schema":"faqs","foreign_table_object_id":"t147","primary_table":"faqs_categories","primary_table_show_schema":"faqs_categories","primary_table_verbose":"faqs_categories","primary_table_verbose_show_schema":"faqs_categories","primary_table_object_id":"t148","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"category_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[{"object_name":"faqs_categories","object_name_show_schema":"faqs_categories","object_type":"TABLE","object_id":"t148","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"faqs_categories","object_name_show_schema":"faqs_categories","object_type":"TABLE","object_id":"t148","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"users","object_name_show_schema":"users","object_type":"TABLE","object_id":"t251","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}],"used_by":[{"object_name":"faqs_categories","object_name_show_schema":"faqs_categories","object_type":"TABLE","object_id":"t148","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"faqs","object_name_show_schema":"faqs","object_type":"TABLE","object_id":"t147","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"faqs_categories","object_name_show_schema":"faqs_categories","object_type":"TABLE","object_id":"t148","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t148","name":"faqs_categories","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs975859FF{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs95654625{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs975859FF\"><span class=\"cs95654625\">LIst of FAQs categories</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"faqs_categories"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};