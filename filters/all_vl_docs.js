function(doc, req) {
  
    var ok = false;//true --> ;evil false --> good

    if (doc.Calibration) {
        ok = !ok;
    }
    if (doc.CalibrationObject) {
        ok = !ok;
    }
    if (doc.AuxObject) {
        ok = !ok;
    }
    if (doc.yamp) {
        ok = !ok;
    }
    if (doc.ToDo) {
        ok = !ok;
    }
    if (doc.Customer) {
        ok = !ok;
    }
    if (doc.Servers) { // 8.2mb 589
        ok = !ok;
    }
    if (doc.Standard) { // 8.3mb 599
        ok = !ok;
    }
    if (doc.Translations) {
        ok = !ok;
    }
    if (doc.Certificate) {
        ok = !ok;
    }
    if (doc.Constants) {
        ok = !ok;
    }
    //if (doc._id.substr(0,7) == "_design") { //42.6mb 606
    //    ok = !ok;
    //}

    return ok;
}