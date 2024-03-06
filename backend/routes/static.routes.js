import { Router } from "express";

const staticRoute = Router();

staticRoute.get(`/`, (req, res) => {
  console.log("static route");
});

export { staticRoute };
