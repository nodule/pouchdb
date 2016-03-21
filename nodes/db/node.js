output = function() {
  cb({db: $.create(new pouchdb($.options))});
};
