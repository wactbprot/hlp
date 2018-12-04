function(head, req){
     start({"headers": {
               "Content-Type": "text/html",
	       "charset":"utf-8"
           }
	  });
  send("<html><meta charset='UTF-8'><body>")
    send("<table>")
    while(row = getRow()) {
      send("<tr><td>"+row.id +"</td><td>" +row.key + "</td><td>"+ row.value +"</td></tr>");
    }
  send("</table>")
send("</body></html>")
}
