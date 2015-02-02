module.exports = {
  name: "destroy",
  ns: "pouchdb",
  description: "PouchDB",
  phrases: {
    active: "Destroying database"
  },
  ports: {
    input: {
      db: {
        title: "DB",
        type: "PouchDB"
      }
    },
    output: {
      info: {
        title: "Info",
        type: "object"
      },
      error: {
        title: "Error",
        type: "Error"
      }
    }
  },
  fn: function destroy(input, output, state, done, cb, on) {
    var r = function() {
      db.destroy(function destroyDatabase(err, info) {
        if (err) {
          output({
            error: err
          });
        } else {
          output({
            info: info
          });
        }
      });
    }.call(this);
    return {
      output: output,
      state: state,
      on: on,
      return: r
    };
  }
}