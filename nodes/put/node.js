on.input.in = function() {
  $.db.put($.in, function(err, response) {
    if(err) {
      output({error: err});
    } else {
      // get full updated document.
      $.db.get(response.id).then(function(doc) {
        output({out: $.in});
      });
    }
  });
};
