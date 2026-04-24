import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.DB_URL);
const db = client.db("users");

export const auth = betterAuth({
  database: mongodbAdapter(db, { client }),
  emailAndPassword: {    
        enabled: true
    } 
});