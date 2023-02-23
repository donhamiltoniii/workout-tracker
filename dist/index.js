"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Setup an express server with typescript and handlebars
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const express_handlebars_1 = require("express-handlebars");
const routes_1 = require("./routes");
const app = (0, express_1.default)();
// Setup handlebars
app.engine("handlebars", (0, express_handlebars_1.engine)());
app.set("view engine", "handlebars");
app.set("views", path_1.default.join(__dirname, "views"));
// Setup static files
app.use(express_1.default.static(path_1.default.join(__dirname, "public")));
console.log(path_1.default.join(__dirname, "public"));
// Setup routes
app.use(routes_1.homeRouter);
// Start server
app.listen(3000, () => {
    console.log("Server started on port 3000");
});
