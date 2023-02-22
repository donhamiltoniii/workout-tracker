// Setup an express server with typescript and handlebars
import express from "express";
import path from "path";
import { engine } from "express-handlebars";
import { router } from "./routes";

const app = express();

// Setup handlebars
app.engine("handlebars", engine());
app.set("view engine", "handlebars");
app.set("views", path.join(__dirname, "views"));

// Setup static files
app.use(express.static(path.join(__dirname, "public")));

console.log(path.join(__dirname, "public"));

// Setup routes
app.use(router);

// Start server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
