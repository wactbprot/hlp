function (doc, req) {
  var ret = ""
    , sep = " "

  if(doc.Servers){
    var ds = doc.Servers
      , N = ds.length
    for(var i = 0; i <  N; i++){
      ret += ds[i].name;
      if(i < N-1){
        ret += sep;
      }
    }
  }
  return ret;
};
