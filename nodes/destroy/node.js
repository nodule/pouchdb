output = function() {
  db.destroy(function destroyDatabase(err, info) {
    if (err) {
      output({error: $.create(err)});
    } else {
      output({info: $.create(info)});
    }
  });
};
