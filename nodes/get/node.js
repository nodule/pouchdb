on.input.in = function() {
  $.db.get(response.id, function(err, doc) {
    if (err) {
      output({error: $.create(err)});
    } else {
      output({out: $.create(doc)});
    }
  });
};
