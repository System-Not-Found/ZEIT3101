import * as mongoDB from "mongodb";
import * as dotenv from "dotenv";

const connectionString = `mongodb://${process.env.DATABASE_USER}:${process.env.DATABASE_PASSWORD}@localhost:27017/?retryWrites=true&w=majority`;

let connection: mongoDB.Db | undefined = undefined;

const getClient = async (): Promise<mongoDB.Db> => {
  if (!connection) {
    const client = new mongoDB.MongoClient(connectionString);

    await client.connect();

    connection = client.db("stix");

    console.log(await connection.collection("ipv4-addr").stats());
  }
  return connection;
};

export default getClient;
