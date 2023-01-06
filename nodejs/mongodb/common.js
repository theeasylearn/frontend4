var mongo = require("mongodb");
var MongoClient = mongo.MongoClient;
var ObjectId = mongo.ObjectId;
const Connection = "mongodb://localhost:27017/";
const DATABASE_NAME = "nodejs";

module.exports.mongo = mongo;
module.exports.MongoClient = MongoClient;
module.exports.Connection = Connection;
module.exports.DATABASE_NAME = DATABASE_NAME;
module.exports.ObjectId = ObjectId;