function(doc, req) {


    if (doc.Calibration) {
      var sign = doc.Calibration.Sign.split("_")[0]
        , type = doc.Calibration.Type
      if(type == "VG" &&
         sign == "0070"
       || sign ==  "0071"
       || sign == "7745"
       || sign == "8245"){
        return true
      }
    }
    return false;
}