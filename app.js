import express from "express";

const app=express();

app.use(express.json())

app.get("/", (req, res) => {
    res.send("<h1>server</h1>");
  });



export default app;