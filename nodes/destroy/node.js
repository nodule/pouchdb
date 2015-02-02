output = function() {
  db.destroy(function destroyDatabase(err, info) {
    if (err) {
      output({error: err});
    } else {
      output({info: info});
    }
  });
};
