module.exports = {
  name: "put",
  ns: "pouchdb",
  description: "Create a new document or update an existing document. If the document already exists, you must specify its revision _rev, otherwise a conflict will occur.",
  async: true,
  phrases: {
    active: "Putting document"
  },
  ports: {
    input: {
      db: {
        title: "Database",
        type: "Datastore"
      },
      "in": {
        title: "Document",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            input.db.put(data, function(err, response) {
              if (err) {
                output({
                  error: err
                });
              } else {
                // get full updated document.
                input.db.get(response.id).then(function(doc) {
                  output({
                    out: data
                  });
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      }
    },
    output: {
      out: {
        title: "Updated Document",
        type: "object"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  state: {}
}