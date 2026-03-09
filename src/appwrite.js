import { Client, Account,Databases,Functions,Storage,ID } from "appwrite";

export const client = new Client();

client
  .setEndpoint("https://sgp.cloud.appwrite.io/v1") 
  .setProject("69a7fc63003cd37c85d4"); 

export const account = new Account(client);
export const databases = new Databases(client);
export const functions = new Functions(client);
export const storage = new Storage(client);

export const DATABASE_ID = "69a91642001183bac490";
export const COLLECTION_ID = "todo";
export const COLLECTION_ID_DESTINATIONS = "destinations";
export const FUNCTION_ID = "tasknotification";
export const BUCKET_ID = "69abc6e4001f11330b00";

export {ID}