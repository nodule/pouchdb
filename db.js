module.exports = {
  name: "db",
  ns: "pouchdb",
  description: "PouchDB",
  phrases: {
    active: "Creating database"
  },
  dependencies: {
    npm: {
      pouchdb: require('pouchdb')
    }
  },
  ports: {
    input: {
      options: {
        title: "Options",
        type: "object",
        required: false,
        properties: {
          name: {
            type: "string",
            title: "Name",
            description: "The database Name"
          },
          auto_compaction: {
            type: "boolean",
            title: "Auto Compaction",
            description: "This turns on auto compaction, which means compact() is called after every change to the database.",
            "default": false
          },
          adapter: {
            type: "string",
            description: "If unspecified, PouchDB will infer this automatically, preferring IndexedDB to WebSQL in browsers that support both (i.e. Chrome, Opera and Android 4.4+).",
            "enum": ["idb",
              "leveldb",
              "websql",
              "http"
            ],
            required: false
          },
          ajax: {
            type: "object",
            description: "An object of options to be sent to the ajax requester.",
            required: false
          }
        }
      }
    },
    output: {
      db: {
        title: "Database",
        type: "PouchDB"
      }
    }
  },
  fn: function db(input, output, state, done, cb, on, pouchdb) {
    var r = function() {
      output({
        db: new pouchdb(input.options)
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