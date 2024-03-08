import { Router } from "express";

const staticRoute = Router();

staticRoute.get(`/`, (req, res) => {
  console.log("static route");
});

staticRoute.post(`/formsubmit`, (req, res) => {
  console.log(req.body);
});

export { staticRoute };
