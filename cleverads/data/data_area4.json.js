window.repositoryObject = {"object_id":"data_area4","title":"Applications&Leads","Name":"Applications&Leads","object_type":"DATA_AREA","database_class":"DATA_AREA","DisplayType":"Data Area","description":null,"summary":[{"field":"Title","value":"Applications&Leads"},{"field":"Type","value":"Data Area"}],"area_links":[{"id":"t72","object_name":"applications","name":"applications","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t73","object_name":"applications_categories","name":"applications_categories","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t162","object_name":"leads","name":"leads","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t163","object_name":"leads_applications","name":"leads_applications","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t202","object_name":"scripts","name":"scripts","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t203","object_name":"scripts_applications","name":"scripts_applications","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null},{"id":"t210","object_name":"statuses","name":"statuses","type":"TABLE","subtype":"TABLE","object_menu_caption":"Tables","is_user_defined":false,"documentation_id":"d6","documentation_name":"Cleverads","description":null}],"erd":"<svg version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" width=\"1049\" height=\"568\" class=\"erd\"><defs><mask id=\"node-text-mask-72\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-163\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-73\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-203\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-202\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-162\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask><mask id=\"node-text-mask-210\"><rect x=\"17\" y=\"7\" width=\"198\" height=\"24\" fill=\"#ffffff\" /></mask></defs><g transform=\"translate(-35,-5)\"><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"514, 256 514, 236 514, 183 637, 183 637, 130 637, 110\" /><polyline data-msg=\"&lt;div style=&quot;margin-bottom: 8px;&quot;&gt;leads_applications.application_lead_id = applications.id&lt;/div&gt;cleverads.leads.domains_app(n) - cleverads.applications\" data-relation=\"\" data-relation-pk-table-id=\"72\" data-relation-fk-table-id=\"163\" data-relation-pk-column-ids=\"615\" data-relation-fk-column-ids=\"1505\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"514, 256 514, 236 514, 183 637, 183 637, 130 637, 110\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"632, 110 637, 120 642, 110\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"514, 388 514, 408 514, 428 300, 428 300, 448 300, 468\" /><polyline data-msg=\"&lt;div style=&quot;margin-bottom: 8px;&quot;&gt;scripts_applications.application_id = applications.id&lt;/div&gt;cleverads.scripts_applications(n) -   cleverads.applications\" data-relation=\"\" data-relation-pk-table-id=\"72\" data-relation-fk-table-id=\"203\" data-relation-pk-column-ids=\"615\" data-relation-fk-column-ids=\"1965\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"514, 388 514, 408 514, 428 300, 428 300, 448 300, 468\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"295, 468 300, 458 305, 468\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"859, 318 839, 318 741, 318 741, 322 644, 322 624, 322\" /><polyline data-msg=\"&lt;div style=&quot;margin-bottom: 8px;&quot;&gt;applications.application_category_id = applications_categories.id&lt;/div&gt;cleverads.applications(n) -   cleverads.applications_categories\" data-relation=\"\" data-relation-pk-table-id=\"73\" data-relation-fk-table-id=\"72\" data-relation-pk-column-ids=\"630\" data-relation-fk-column-ids=\"621\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"859, 318 839, 318 741, 318 741, 322 644, 322 624, 322\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"624, 317 634, 322 624, 327\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"859, 350 839, 350 839, 382 859, 382\" /><polyline data-msg=\"&lt;div style=&quot;margin-bottom: 8px;&quot;&gt;applications_categories.category_parent_id = applications_categories.id&lt;/div&gt;relationship cleverads.applications_categories(n) - cleverads.applications_categories\" data-relation=\"\" data-relation-pk-table-id=\"73\" data-relation-fk-table-id=\"73\" data-relation-pk-column-ids=\"630\" data-relation-fk-column-ids=\"632\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"859, 350 839, 350 839, 382 859, 382\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"859, 377 849, 382 859, 387\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"310, 61 330, 61 418, 61 418, 60 507, 60 527, 60\" /><polyline data-msg=\"leads_applications.lead_id = leads.id\" data-relation=\"\" data-relation-pk-table-id=\"162\" data-relation-fk-table-id=\"163\" data-relation-pk-column-ids=\"1480\" data-relation-fk-column-ids=\"1504\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"310, 61 330, 61 418, 61 418, 60 507, 60 527, 60\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"527, 55 517, 60 527, 65\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"640, 523 620, 523 525, 523 525, 518 430, 518 410, 518\" /><polyline data-msg=\"scripts_applications.script_id = scripts.id\" data-relation=\"\" data-relation-pk-table-id=\"202\" data-relation-fk-table-id=\"203\" data-relation-pk-column-ids=\"1908\" data-relation-fk-column-ids=\"1964\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"640, 523 620, 523 525, 523 525, 518 430, 518 410, 518\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"410, 513 420, 518 410, 523\" /></g><g><polyline stroke=\"#757575\" fill=\"transparent\" points=\"150, 245 150, 225 150, 178 200, 178 200, 131 200, 111\" /><polyline data-msg=\"leads.status_id = statuses.id\" data-relation=\"\" data-relation-pk-table-id=\"210\" data-relation-fk-table-id=\"162\" data-relation-pk-column-ids=\"2120\" data-relation-fk-column-ids=\"1483\" stroke=\"transparent\" stroke-width=\"10\" fill=\"transparent\" points=\"150, 245 150, 225 150, 178 200, 178 200, 131 200, 111\" /><polyline stroke=\"#757575\" fill=\"transparent\" points=\"195, 111 200, 121 205, 111\" /></g><g data-table=\"\" data-table-id=\"72\" href=\"t72\" data-target=\"#right\" class=\"node\" transform=\"translate(404,256)\" data-msg=\"&lt;div&gt;applications&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"94\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"615\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"616\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAACuSURBVDhPpZCxCoQwEETnX2OZqJ21VcDCWhDSi7/iP+WcBeFudzku3MBjmcdIQNRa/8KVLbiyBVe24Ms74zii73uklOSyM2arBeF4nmccx4HzPOWy0+utEYQvllKw7zu2bZPLTq+3RpAYI67r+nDs9O+OGEGGYcC6rliWBTlnuez0emsECSFgmib5+IGdXm+NEHmn6zr5aQ/sjNlqIfJLzFaLVlzZgitbcOXvVLwAF3qeuubJWAoAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">name</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">name</text></switch></g><g data-column=\"\" data-column-id=\"618\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAACuSURBVDhPpZCxCoQwEETnX2OZqJ21VcDCWhDSi7/iP+WcBeFudzku3MBjmcdIQNRa/8KVLbiyBVe24Ms74zii73uklOSyM2arBeF4nmccx4HzPOWy0+utEYQvllKw7zu2bZPLTq+3RpAYI67r+nDs9O+OGEGGYcC6rliWBTlnuez0emsECSFgmib5+IGdXm+NEHmn6zr5aQ/sjNlqIfJLzFaLVlzZgitbcOXvVLwAF3qeuubJWAoAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">device_code</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">device_code</text></switch></g><g data-column=\"\" data-column-id=\"620\"><image x=\"4\" y=\"55\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAACuSURBVDhPpZCxCoQwEETnX2OZqJ21VcDCWhDSi7/iP+WcBeFudzku3MBjmcdIQNRa/8KVLbiyBVe24Ms74zii73uklOSyM2arBeF4nmccx4HzPOWy0+utEYQvllKw7zu2bZPLTq+3RpAYI67r+nDs9O+OGEGGYcC6rliWBTlnuez0emsECSFgmib5+IGdXm+NEHmn6zr5aQ/sjNlqIfJLzFaLVlzZgitbcOXvVLwAF3qeuubJWAoAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"52\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">lead_blocked_id</p></div></foreignObject><text x=\"17\" y=\"60\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">lead_blocked_id</text></switch></g><g data-column=\"\" data-column-id=\"621\"><image x=\"4\" y=\"71\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"68\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">application_category_id</p></div></foreignObject><text x=\"17\" y=\"76\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">application_category_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">applications</p></div></foreignObject><text mask=\"url('#node-text-mask-72')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">applications</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-72')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"163\" href=\"t163\" data-target=\"#right\" class=\"node\" transform=\"translate(527,10)\" data-msg=\"&lt;div&gt;leads_applications&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"1503\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"1504\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">lead_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">lead_id</text></switch></g><g data-column=\"\" data-column-id=\"1505\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">application_lead_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">application_lead_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">leads_applications</p></div></foreignObject><text mask=\"url('#node-text-mask-163')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">leads_applications</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-163')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"73\" href=\"t73\" data-target=\"#right\" class=\"node\" transform=\"translate(859,300)\" data-msg=\"&lt;div&gt;applications_categories&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"630\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"631\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYMGQ+dN79NAAAAiElEQVQ4T7WQ0Q2AIAxEGcEhjHy4t38MwGB8GmzNNWkqQtX4kosF7k5C+IWccyQlUsE34mgMwrUhXwkZ+Y8SWtScYOlDRr62hLQKLH3IqG+g5b7Btzdg2Pw6LJiCHdt+dAG2nmELtnWurPOQsOsLtoCR0DDM6IJWCZb39MKPSjD63oACE0YnIRyMveyTEyHIGQAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">name</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">name</text></switch></g><g data-column=\"\" data-column-id=\"632\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">category_parent_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">category_parent_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">applications_categories</p></div></foreignObject><text mask=\"url('#node-text-mask-73')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">applications_categories</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-73')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"203\" href=\"t203\" data-target=\"#right\" class=\"node\" transform=\"translate(190,468)\" data-msg=\"&lt;div&gt;scripts_applications&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"1963\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"1964\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">script_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">script_id</text></switch></g><g data-column=\"\" data-column-id=\"1965\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">application_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">application_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">scripts_applications</p></div></foreignObject><text mask=\"url('#node-text-mask-203')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">scripts_applications</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-203')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"202\" href=\"t202\" data-target=\"#right\" class=\"node\" transform=\"translate(640,481)\" data-msg=\"&lt;div&gt;scripts&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"46\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"1908\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"1955\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAACuSURBVDhPpZCxCoQwEETnX2OZqJ21VcDCWhDSi7/iP+WcBeFudzku3MBjmcdIQNRa/8KVLbiyBVe24Ms74zii73uklOSyM2arBeF4nmccx4HzPOWy0+utEYQvllKw7zu2bZPLTq+3RpAYI67r+nDs9O+OGEGGYcC6rliWBTlnuez0emsECSFgmib5+IGdXm+NEHmn6zr5aQ/sjNlqIfJLzFaLVlzZgitbcOXvVLwAF3qeuubJWAoAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">legacy_id</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">legacy_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">scripts</p></div></foreignObject><text mask=\"url('#node-text-mask-202')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">scripts</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-202')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"162\" href=\"t162\" data-target=\"#right\" class=\"node\" transform=\"translate(90,11)\" data-msg=\"&lt;div&gt;leads&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"62\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"1480\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"1481\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYMFDHp+NyrAAAAe0lEQVQ4T7WQ0QmAMBBDO4JT2E3cyaFcw436JaI5yEEQqdcWHwTLmaRH0y8s656hDSr8Zv76huHrRbESGO1GD81y3mipA6Ot7SFVoaUOjLqBKrzB2BsYZu4OO4+Ck+M4WsBRG1oAHRzH0QKO2tCCrpKhsNMcRmDiMUhKN8XHoHlcKCKJAAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">name</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">name</text></switch></g><g data-column=\"\" data-column-id=\"1483\"><image x=\"4\" y=\"39\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABGdBTUEAALGPC/xhBQAAAAlwSFlzAAAOwQAADsEBuJFr7QAAAGZJREFUOE/ljCEOwDAMA/vakj1hJZUCykZKgoLyzk2VbDZp7TK2kwxi5Zx+TM75HMG5BuXe+4ZqHsqquqOah7KZKap5KLv7vcyH1UD/YOAJCq21A9U6HBGR+EitNT5SSomP4HxLShcXR3rzpWaWPgAAAABJRU5ErkJggg==\" /><switch><foreignObject x=\"17\" y=\"36\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">status_id</p></div></foreignObject><text x=\"17\" y=\"44\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">status_id</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">leads</p></div></foreignObject><text mask=\"url('#node-text-mask-162')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">leads</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-162')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g><g data-table=\"\" data-table-id=\"210\" href=\"t210\" data-target=\"#right\" class=\"node\" transform=\"translate(40,245)\" data-msg=\"&lt;div&gt;statuses&lt;/div&gt;\"><g transform=\"translate(0,38)\"><rect width=\"220\" height=\"46\" stroke-width=\"1\" fill=\"#FFFFFF\" stroke=\"#B3B3B3\" /><g data-column=\"\" data-column-id=\"2120\"><image x=\"4\" y=\"7\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYLBDI/fInFAAAAeElEQVQ4T7WQUQqAMAxDewRP4W6+vx3PL5HaQgpBZHYbPgiOmmRl8gu1SjE104Fvwa9vENYX5UrM6DdGaKdzg6WPGX3tCLEOWPqYkTdgpTdYewPHzdPh4FFwYZyHCzAagwtMJ8Z5uACjMbhgqmQpHAyHVXXDMYnIDd97kwYNzVg5AAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"4\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">id</p></div></foreignObject><text x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">id</text></switch></g><g data-column=\"\" data-column-id=\"2121\"><image x=\"4\" y=\"23\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsIAAA7CARUoSoAAAAAHdElNRQfgCBYMFDHp+NyrAAAAe0lEQVQ4T7WQ0QmAMBBDO4JT2E3cyaFcw436JaI5yEEQqdcWHwTLmaRH0y8s656hDSr8Zv76huHrRbESGO1GD81y3mipA6Ot7SFVoaUOjLqBKrzB2BsYZu4OO4+Ck+M4WsBRG1oAHRzH0QKO2tCCrpKhsNMcRmDiMUhKN8XHoHlcKCKJAAAAAElFTkSuQmCC\" /><switch><foreignObject x=\"17\" y=\"20\" width=\"198\" height=\"16\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 198px;height: 16px;\"><p style=\"max-width: 198px;max-height: 16px;white-space: pre-wrap;\">name</p></div></foreignObject><text x=\"17\" y=\"28\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">name</text></switch></g></g><rect width=\"220\" height=\"38\" stroke-width=\"1\" stroke-dasharray=\"1,0\" fill=\"#F6F6F6\" stroke=\"#B3B3B3\" class=\"hoverable\" /><image x=\"4\" y=\"13\" width=\"12\" height=\"12\" xlink:href=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAACxEAAAsRAX9kX5EAAABISURBVDhPY/j//z9FGKsgKRhMpKWl/ScVD0IDPrz/CMfE8KlvAKkYwwB0GwjxqW8AqRjDAHQbCPGpbwCpGMUASjBWQeLxfwYA4DjYIx3r2fEAAAAASUVORK5CYII=\" /><switch><foreignObject x=\"17\" y=\"14\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">statuses</p></div></foreignObject><text mask=\"url('#node-text-mask-210')\" x=\"17\" y=\"26\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">statuses</text></switch><switch><foreignObject x=\"17\" y=\"0\" width=\"201\" height=\"24\"><div xmlns=\"http://www/w3/org/1999/xhtml\" style=\"width: 201px;height: 24px;\"><p style=\"max-width: 201px;max-height: 16px;white-space: pre-wrap;\">[Cleverads]</p></div></foreignObject><text mask=\"url('#node-text-mask-210')\" x=\"17\" y=\"12\" font-size=\"12\" font-family=\"Arial\" dy=\"0.4em\">[Cleverads]</text></switch></g></g></svg>","tables_custom_fields":[],"tables":null,"views_custom_fields":[],"views":null,"procedures_custom_fields":[],"procedures":null,"functions_custom_fields":[],"functions":null,"structures_custom_fields":[],"structures":null,"sql_queries_custom_fields":[],"sql_queries":null,"graph_nodes_custom_fields":[],"graph_nodes":[],"app_lists_custom_fields":[],"app_lists":[],"cubes_custom_fields":[],"cubes":[],"data_types_custom_fields":[],"data_types":[],"destinations_custom_fields":[],"destinations":[],"dimensions_custom_fields":[],"dimensions":[],"entities_custom_fields":[],"entities":[],"forms_custom_fields":[],"forms":[],"graph_edges_custom_fields":[],"graph_edges":[],"search_indexes_custom_fields":[],"search_indexes":[],"sequences_custom_fields":[],"sequences":[],"sources_custom_fields":[],"sources":[],"topics_custom_fields":[],"topics":[],"packages_custom_fields":[],"packages":[],"etl_programs_custom_fields":[],"etl_programs":[],"programs_custom_fields":[],"programs":[],"apis_custom_fields":[],"apis":[],"jobs_custom_fields":[],"jobs":[],"sql_scripts_custom_fields":[],"sql_scripts":[]};