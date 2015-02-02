module.exports = {
  name: "get",
  ns: "pouchdb",
  description: "Retrieves a document",
  async: true,
  phrases: {
    active: "Putting document"
  },
  ports: {
    input: {
      db: {
        title: "Database",
        type: "PouchDB"
      },
      "in": {
        title: "DocumentId",
        type: "string",
        async: true,
        fn: function __IN__(data, x, source, state, input, output) {
          var r = function() {
            input.db.get(response.id, function(err, doc) {
              if (err) {
                output({
                  error: err
                });
              } else {
                output({
                  out: doc
                });
              }
            });
          }.call(this);
          return {
            state: state,
            return: r
          };
        }
      },
      options: {
        title: "Options",
        type: "object",
        properties: {
          rev: {
            title: "Revision",
            description: "Fetch specific revision of a document. Defaults to winning revision",
            type: "boolean",
            "default": false
          },
          revs: {
            title: "Revision History",
            description: "Include revision history of the document",
            type: "boolean",
            "default": false
          },
          revs_info: {
            title: "Revision Info",
            description: "Include a list of revisions of the document, and their availability",
            type: "boolean",
            "default": false
          },
          open_revs: {
            title: "Open Revision",
            description: "Fetch all leaf revisions if open_revs=\"all\" or fetch all leaf revisions specified in open_revs array. Leaves will be returned in the same order as specified in input array.",
            type: "boolean",
            "default": false
          },
          conflicts: {
            title: "Conflicts",
            description: "If specified, conflicting leaf revisions will be attached in _conflicts array",
            type: "boolean",
            "default": false
          },
          attachments: {
            title: "Attachments",
            description: "Include attachment data",
            type: "boolean",
            "default": false
          },
          local_seq: {
            title: "Include sequence number",
            description: "Include sequence number of the revision in the database",
            type: "boolean",
            "default": false
          },
          ajax: {
            title: "Ajax",
            description: "An object of options to be sent to the ajax requester",
            type: "object",
            required: false
          }
        }
      }
    },
    output: {
      out: {
        title: "Document",
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