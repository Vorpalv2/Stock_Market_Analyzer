import "dotenv/config";
import { Router } from "express";
import { scrapper } from "../controller/scrapper.controller.js";
import { checkDirectory } from "../controller/dirchecker.controller.js";
// import jokeData from "../data/jokes.data.json" assert { type: "json" };

const APIRoute = Router();

APIRoute.get(`/`, (req, res) => {
  res.json(jokeData);
});

APIRoute.get(`/formsubmit`, (req, res) => {
  console.log("hello");
  res.json({ Hello: "World" });
});

APIRoute.post(`/formsubmit`, async (req, res) => {
  console.log(req.body);
  const { formData, value } = req.body;
  console.log(formData, value);
  const tempArray = [];
  tempArray.push(value);
  console.log(tempArray);
  await checkDirectory(tempArray);
  const result = await scrapper(formData, value, process.env.URI);
  res.send(result);
});

export { APIRoute };
