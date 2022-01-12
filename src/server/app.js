var http = require('http');
var lt = require('localtunnel');
var {MongoClient} = require('mongodb');
var fs = require('fs');
const path = require('path');

var config = JSON.parse(fs.readFileSync(path.join(__dirname, "/config.txt"), 'utf-8'));

var mongoIP = config["mongodbURL"];
if(!config["hasBeenRun"]) {
    MongoClient.connect(mongoIP + "social_credit", function(err, db) {
        if(err) throw err;
        console.log("DB initialized");
        db.close();
    });
    MongoClient.connect(mongoIP, function(err, db) {
        if(err) throw err;
        var dbo = db.db("social_credit");
        dbo.createCollection("users", function(err, res) {
            if(err) throw err;
            console.log("Collection initialized");
        });
        var init_user = {name: "00000001", credits: 0};
        dbo.collection("users").insertOne(init_user, function(err, res) {
            if(err) throw err;
            console.log("Basic user initialized");
            db.close();
        });
        console.log("Setup complete");
        config["hasBeenRun"] = 1;
    });
}
fs.writeFileSync("config.txt", JSON.stringify(config));