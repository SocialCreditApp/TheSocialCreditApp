var http = require("http");
var lt = require("localtunnel");
var { MongoClient } = require("mongodb");
var fs = require("fs");
const path = require("path");
const host = "0.0.0.0"; // replace this with localtunnel stuff
const port = 8080;


var config = JSON.parse(
  fs.readFileSync(path.join(__dirname, "/config.txt"), "utf-8")
);

var mongoIP = config["mongodbURL"];
if (!config["hasBeenRun"]) {
  MongoClient.connect(mongoIP + "social_credit", function (err, db) {
    if (err) throw err;
    console.log("DB initialized");
    db.close();
  });
  MongoClient.connect(mongoIP, function (err, db) {
    if (err) throw err;
    var dbo = db.db("social_credit");
    dbo.createCollection("users", function (err, res) {
      if (err) throw err;
      console.log("Collection initialized");
    });
    var init_user = { name: "00000001", credits: 0 };
    dbo.collection("users").insertOne(init_user, function (err, res) {
      if (err) throw err;
      console.log("Basic user initialized");
      db.close();
    });
    console.log("Setup complete");
    config["hasBeenRun"] = 1;
  });
}
fs.writeFileSync("config.txt", JSON.stringify(config));

/* Resources:
HTTP status codes: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#server_error_responses
*/

const requestListener = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  switch (req.url) {
    case "/api/credit":
	  res.setHeader("Content-Type", "application/json");
      switch (req.method) {
        case "POST":
          res.writeHead(501)
          res.end(JSON.stringify({ error: "Not Implemented" }));
          break;
        case "GET":
          res.writeHead(501)
          res.end(JSON.stringify({error: "Not Implemented"}));
          break;
      }
  }
};

const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});
