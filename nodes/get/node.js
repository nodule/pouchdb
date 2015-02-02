on.input.in = function() {
  input.db.get(response.id, function(err, doc) {
    if (err) {
      output({error: err});
    } else {
      output({out: doc});
    }
  });
};
