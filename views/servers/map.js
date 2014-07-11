function(doc) {
    var crd  = require("views/lib/check-return_doc-parts");
    
    if(doc.Servers){
        var _res       = crd.servers(doc);
    }
    
    if(_res && _res._avail){
        emit(_res.key, _res.value);
    }
}