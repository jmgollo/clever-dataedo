window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"columns":[{"id":"column-3921","object_id":"column-3921","name":"id","name_without_path":"id","description":"Record identification / auto increment","is_pk":true,"is_identity":true,"data_type":"int","data_length":"10, 0","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null},{"id":"column-3922","object_id":"column-3922","name":"name","name_without_path":"name","description":"Content type name","is_pk":false,"is_identity":false,"data_type":"varchar","data_length":"128","is_nullable":false,"computed_formula":"","default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":[],"references":[],"linked_lookup":null}],"relations":[{"name":"brands_creatives_fk_content_types","title":null,"description":"cleverads.brands_creatives(n) - cleverads.content_types","is_user_defined":false,"foreign_table":"brands_creatives","foreign_table_show_schema":"brands_creatives","foreign_table_verbose":"brands_creatives","foreign_table_verbose_show_schema":"brands_creatives","foreign_table_object_id":"t98","primary_table":"content_types","primary_table_show_schema":"content_types","primary_table_verbose":"content_types","primary_table_verbose_show_schema":"content_types","primary_table_object_id":"t378","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"content_type"}],"custom_fields":{}},{"name":"fk_formats_content_types","title":null,"description":"cleverads.formats(n) - cleverads.content_types","is_user_defined":false,"foreign_table":"formats","foreign_table_show_schema":"formats","foreign_table_verbose":"formats","foreign_table_verbose_show_schema":"formats","foreign_table_object_id":"t154","primary_table":"content_types","primary_table_show_schema":"content_types","primary_table_verbose":"content_types","primary_table_verbose_show_schema":"content_types","primary_table_object_id":"t378","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"content_type"}],"custom_fields":{}}],"unique_keys":[{"name":"PRIMARY","description":"Primary key, contains columns: id","is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}}],"triggers":[],"dependencies":{"uses":[],"used_by":[{"object_name":"content_types","object_name_show_schema":"content_types","object_type":"TABLE","object_id":"t378","type":"NORMAL","object_user_defined":false,"user_defined":false,"children":[{"object_name":"brands_creatives","object_name_show_schema":"brands_creatives","object_type":"TABLE","object_id":"t98","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]},{"object_name":"formats","object_name_show_schema":"formats","object_type":"TABLE","object_id":"t154","type":"RELATION","pk_cardinality":"1x","fk_cardinality":"mx","object_user_defined":false,"user_defined":false,"children":[]}]}]},"object_id":"t378","name":"content_types","subtype":"TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs302272C1{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs68E31449{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs302272C1\"><span class=\"cs68E31449\">LIst of contents type</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Cleverads","id":"d6"}},{"field":"Name","value":"content_types"},{"field":"Type","value":"Table"}],"script":null,"imported_at":"2024-06-28 17:00"};