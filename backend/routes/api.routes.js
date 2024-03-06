import "dotenv/config";
import { Router } from "express";
import { scrapper } from "../controller/scrapper.controller.js";

const APIRoute = Router();

APIRoute.get(`/`, (req, res) => {
  console.log("Api Route");
});

APIRoute.post(`/`, async (req, res) => {
  const { name, format } = req.body;
  const result = await scrapper(name, format, process.env.URI);
  res.send(result);
});

export { APIRoute };
