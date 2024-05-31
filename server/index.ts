import express from "express";

const app = express();

app.use("/", (req, res) => res.status(200).send("HEALTHY"));

const { SERVER_PORT: port = 5010 } = process.env;

app.listen({ port }, () => {
  console.log(`🚀 Server ready at http://localhost:${port}`);
});
