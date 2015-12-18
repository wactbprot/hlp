function (doc, req) {

    var rowarr  = [], colarr  = [], row,
        sep   = req.query.sep || "\t",
        src   = req.query.src || "Measurement",
        eol   = req.query.eol || "\r",
        dec   = req.query.dec || ",",
        dc    = doc.Calibration,
        Nrow  = 0,
        Ncol  = 0
    , dcs   = dc.Sign
    , dct   = dc.Type
    , dcy   = dc.Year
    , fn =  dcs + "_" + dct + "_" +  dcy + "-" + src + ".csv";

    if(dc &&
       dc[src] &&
       dc[src].Values){

        var dcv  = dc[src].Values,
            Ndcv = dcv.length;


        for(var p in dcv){
            var dcvp  = dcv[p], // z.B. Pressure (p)
                Ndcvi = dcvp.length;
            if(Ndcvi > 1){
                for(var pi in dcvp){
                    var dcvpi  = dcvp[pi]; // z.B. Pressure[0] Type ind (pi)
                    if(typeof dcvpi.Value !== "undefined"){
                        var dcvpiv  = typeof dcvpi.Value == "object" ? dcvpi.Value : [dcvpi.Value];
                        row = [p, dcvpi.Type, dcvpi.Unit, dcvpiv.join("|")
                               .replace(/\./g, dec)]
                            .join("|")
                            .split("|");
                        Nrow++;
                        Ncol = row.length;
                        rowarr.push(row);

                    }
                }
            }else{
                if(typeof dcvp == "object" && dcvp.Value ){
                    var dcvpv =  typeof dcvp.Value == "object" ? dcvp.Value : [dcvp.Value];
                    row = [p, dcvp.Type, dcvp.Unit, dcvpv.join("|")
                           .replace(/\./g,dec)]
                        .join("|")
                        .split("|");

                }else{
                    var dcvpv =  typeof dcvp[0].Value == "object" ? dcvp[0].Value : [dcvp[0].Value];
                    row = [p, dcvp[0].Type, dcvp[0].Unit, dcvpv.join("|")
                           .replace(/\./g,dec)]
                        .join("|")
                        .split("|");
                }

                log(row)
                Nrow++;
                Ncol = row.length;
                rowarr.push(row);
            }
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

    return {"headers": {"Content-Type": "text/csv; name='"+fn+"'",
                        "Content-Disposition": "attachment; filename='" + fn + "'",
                        "charset":"utf-8"},
            "body" : colarr.join(eol)
           };
};
