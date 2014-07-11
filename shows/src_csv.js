function (doc, req) {

  var rowarr  = [], colarr  = [],
      sep  = req.query.sep || " ",
      src  = req.query.src || "Measurement",
      eol  = req.query.eol || "\r\n",
      dec  = ",",
      dc   = doc.Calibration,
      Nrow = 0,
      Ncol = 0;

  if(dc &&
     dc[src] &&
     dc[src].Values){

    var dcv  = dc[src].Values,
        Ndcv = dcv.length,
        ii   = 0;

    for(var p in dcv){
      var dcvp  = dcv[p], // z.B. Pressure (p)
          Ndcvi = dcvp.length,
          jj    = 0;

      if(Ndcvi > 1){
        for(var pi in dcvp){
          var dcvpi  = dcvp[jj]; // z.B. Pressure[0] Type ind (pi)
          if(dcvpi.Value &&
             dcvpi.Value.length > 0){
            var dcvpiv  = dcvpi.Value;

            var row = [p, dcvpi.Type, dcvpiv.join("|")
                                      .replace(".",dec)]
                      .join("|")
                      .split("|");
            Nrow++;
            Ncol = row.length;
            rowarr.push(row);
          }
          jj++;
        }
      }else{
        var dcvpv = dcvp.Value;
        var row = [p, dcvp.Type, dcvpv.join("|")
                                 .replace(".",dec)]
                  .join("|")
                  .split("|");
        Nrow++;
        Ncol = row.length;
        rowarr.push(row);
      }
      ii++;
    }
  }

  //  col --> nrow
  //  row --> ncol
  for(var nrow = 0; nrow < Ncol; nrow++){ //242
    colarr.push([]);
    for(var ncol = 0; ncol < Nrow; ncol++){ //8
      colarr[nrow].push(rowarr[ncol][nrow]);
    }
    colarr[nrow] = colarr[nrow].join( sep);
  }

  return {"headers": {"Content-Type": "text/csv",
                      "charset":"utf-8"},
          "body" : colarr.join(eol)
         };
};
