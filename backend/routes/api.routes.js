import "dotenv/config";
import { Router } from "express";
import { scrapper } from "../controller/scrapper.controller.js";

const APIRoute = Router();

APIRoute.get(`/`, (req, res) => {
  console.log("Api Route");
});

APIRoute.post(`/`, async (req, res) => {
  const { name, format } = req.body;
  console.log(await scrapper(name, format, process.env.URI));
});

export { APIRoute };
