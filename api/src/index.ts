import express from "express";
import logRequest from "./middleware/logRequest";

const PORT = 8443;
const app = express();

app.use(express.json());
app.use(logRequest);


app.listen(PORT, () => {
  console.log(`Started API on port ${PORT}`)
})