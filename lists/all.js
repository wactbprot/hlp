function(head, req){
  var all     = []
    , missing = [];

  start({
    "headers": {
      "Content-Type": "text/html",
      "charset":"utf-8"
    }
  });

  send("<html><meta charset='UTF-8'><body>")
  while(row = getRow()) {
    if(row.value.indexOf("@") > 0){
      all.push(row.value);
    }else{
      missing.push(row.key);
    }
  }
  send("</h1>Email:</h1>");
  send("</p>"+ all.join(", ") +"</p>");
  send("</h1>Einträge fehlen für:</h1>");
  send("</p>"+ missing.join("<br/>") +"</p>");
  send("</body></html>")
}
