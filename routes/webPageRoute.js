const express = require("express");
const routerWeb = new express.Router();
const cookieParser=require("cookie-parser");

routerWeb.get("/", (req, res) => {
  res.status(200).render("index");
});


routerWeb.get("*", (req, res) => {
  res.status(404).render("404", { err: "page not found" });
});

module.exports = routerWeb;
