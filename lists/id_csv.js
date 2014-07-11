function(head, req){

    var sep = req.query.sep||"\n",
    quote = req.query.quote || "",
    i=0;
    
    start({"headers": {
               "Content-Type": "text/csv",
	       "charset":"utf-8"
           }
	  });
    
    while(row = getRow()) {
	i++;
	if(i < head.total_rows){
            send(quote + row.id + quote + sep );	    
	}else{
	    send(quote + row.id + quote + "\n");	    
	}
    }
}
