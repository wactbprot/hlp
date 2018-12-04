function(doc) {
  if(doc.Customer){
    var dc  = doc.Customer
      , dcc = dc.Contact;
    emit(dc.Name, dcc.Email);
  }
}
