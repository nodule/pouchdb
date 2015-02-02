on.input.in = function() {
  input.db.post(data, function(err, response) {
    if(err) {
      output({error: err});
    } else {
      // get full updated document.
      input.db.get(response.id).then(function(doc) {
        output({out: data});
      });
    }
  });
};
