import "dotenv/config";
import express from "express";
import { staticRoute } from "./routes/static.routes.js";
import { APIRoute } from "./routes/api.routes.js";
const app = express();

app.use(express.urlencoded({ extended: true }));
//Routes MIDDLEWARE//
app.use("/", staticRoute);
app.use("/api", APIRoute);
//Routes MIDDLEWARE//

app.listen(process.env.PORT || 4000, () => {
  console.log("server is running on PORT : ", process.env.PORT);
  console.log(process.env.URI);
});

export { app };
