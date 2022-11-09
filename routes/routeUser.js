const express = require("express");
const router = new express.Router();
const Register = require("../models/registers");

var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});
const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
});

// Get request to go to home page
router.get("/", (req, res) => {
  var udata = Register.find({});
  udata.exec(function (err, data) {
    if (err) throw err;
    // res.render("test");
    res.render("test", { records: data });
  });
});
router.get("/listpage", (req, res) => {
  var udata = Register.find({}).sort({"fname":1});
  udata.exec(function (err, data) {
    if (err) throw err;
    // res.render("test");
    res.render("listpage", { records: data });
  });
});
router.get("/sbn", async (req, res) => {
  var udata = await Register.find({}).sort({"fname":1});
  // res.send(udata);
  res.render("listpage", { records: udata });
});
router.get("/sbd", async (req, res) => {
  var udata = await Register.find({}).sort({"date":1});
  // res.send(udata);
  res.render("listpage", { records: udata });
});
// router.get("/delete/:id", function (req, res) {
//   var del=Register.findByIdandRemove(req.params.id);
//   console.log(req.params.id);
//  del.exec(function (err) {
//     if (err) throw err;
//     // res.render("test");
//     res.redirect("/");
//   });
// });
router.get("/delete/:id", async (req, res) => {
  try {
    var id=req.params.id.slice(1);
    var del = await Register.deleteOne({_id:id});
   res.redirect("/listpage");
  } catch (error) {
    res.send("some error occured");
  }
});

router.post("/", upload.single("avatar"), function (req, res) {
  const reguser = new Register({
    fname: req.body.fname,

    email: req.body.email,

    dob: req.body.dob,

    country: req.body.country,

    img: req.file.filename,
  });

  const data = reguser.save(function (err, res2) {
    var udata = Register.find({});
    if (err) throw err;
    udata.exec(function (err, data) {
      if (err) throw err;
      // res.render("test");
      res.render("test", { records: data });
    });
  });

  // res.status(200).render("test", { name: reguser.fname,email:reguser.email,dob:reguser.dob.Date,country:reguser.country, pdf: reguser.img });
  // alert("you have successfully registered for srisriport!!  login to continue");
});

module.exports = router;
