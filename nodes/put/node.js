on.input.in = function() {
  input.db.put(input.in, function(err, response) {
    if(err) {
      output({error: err});
    } else {
      // get full updated document.
      input.db.get(response.id).then(function(doc) {
        output({out: input.in});
      });
    }
  });
};
