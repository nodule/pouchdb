on.input.in = function() {
  $.db.get(response.id, function(err, doc) {
    if (err) {
      output({error: err});
    } else {
      output({out: doc});
    }
  });
};
