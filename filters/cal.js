function(doc, req) {

    var ok = false;//true --> ;evil false --> good

    if (doc.Calibration) {
        ok = !ok;
    }
  } 
