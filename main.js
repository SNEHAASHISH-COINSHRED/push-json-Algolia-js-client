const algoliasearch = require("algoliasearch");
const client = algoliasearch("your_APP_id_here", "your_Admin_API_key_here");
const index = client.initIndex("you_index_name");

const actors = require("./actors.json");
index.addObjects(actors);
