function(head, req){

  var end   = req.query.end||"\n",
      inter = req.query.end||"\t";


      start({"headers": {
               "Content-Type": "text/csv",
	       "charset":"utf-8"
           }
	  });

    while(row = getRow()) {
      send(row.key+inter+row.value+end);
    }
}
