module.exports = {
  name: "post",
  ns: "pouchdb",
  description: "post() new documents without an _id",
  async: true,
  phrases: {
    active: "Posting document"
  },
  ports: {
    input: {
      db: {
        title: "Database",
        type: "PouchDB"
      },
      "in": {
        title: "Document",
        type: "object",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            input.db.post(data, function(err, response) {
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
        title: "New Document",
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