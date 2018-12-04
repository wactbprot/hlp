function(doc) {
  if(doc.Calibration ){
    dc = doc.Calibration;
    if(dc.Type == "KK") {
    year = parseInt(dc.Year);
    date = new Date();
    
    if (year >=  date.getFullYear() - 2 ) {

      var customer = dc.Customer 
        , contact = customer.Contact
        , email  = contact.Email
        , gender = contact.Gender
        , lang = customer.Lang
        , name = contact.Name;
      emit([email, name, lang, gender], 1);
    }
  }
}
}
