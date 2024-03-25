import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const uri = process.env.URI;
console.log("777777777777777777777777777777777777", uri);
mongoose.connect(uri,{});
const db = mongoose.connection;
db.on("connected",() => {
    console.log("Successfully connected to DB");
});

db.on("error",(error) => {
    console.log(`Error in connecting DB ${error.message}`);
});

export default db;