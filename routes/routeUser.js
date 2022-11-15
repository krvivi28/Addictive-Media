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

router.get("/listpage", (req, res) => {
  var udata = Register.find({}).sort({ fname: 1 });
  udata.exec(function (err, data) {
    if (err) throw err;
    // res.render("test");
    res.render("listpage", { records: data });
  });
});
router.get("/sbn", async (req, res) => {
  var udata = await Register.find({}).sort({ fname: 1 });
  // res.send(udata);
  res.render("listpage", { records: udata });
});
router.get("/sbd", async (req, res) => {
  var udata = await Register.find({}).sort({ date: 1 });
  // res.send(udata);
  res.render("listpage", { records: udata });
});
router.get("/success", async (req, res) => {
 
  res.render("success");
});

router.get("/delete/:id", async (req, res) => {
  try {
    var id = req.params.id.slice(1);
    var del = await Register.deleteOne({ _id: id });
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
router.post("/request", upload.array("myfiles", 3), async (req, res) => {
  try {
    // var email = req.body.email;
    var imgs = req.files;
    var arr = [];
    imgs.forEach((element) => {
      arr.push(element.filename);
      // console.log(element.filename);
    });
  
    const userData = await new Register({
      Name: req.body.Name,
      Company_Name: req.body.Company_Name,
      Business_Industry: req.body.Business_Industry,
      Entry_Type: req.body.Entry_Type,
      Business_StartDate: req.body.Business_StartDate,
      Loan_Ammount: req.body.Loan_Ammount,
      zipcode: req.body.zipcode,
      Annual_Revenue: req.body.Annual_Revenue,
      Credit_Score: req.body.Credit_Score,
      Purpose_of_Loan: req.body.Purpose_of_Loan,
      Phone_Number: req.body.Phone_Number,
      Driving_Licence: arr[0],
      Bank_Statement: arr[1],
      Voided_Check: arr[2],
      Website: req.body.Website,
      Tax_ID: req.body.Tax_ID,
      SSN: req.body.SSN,
    });

    const data = await userData.save();
    res.status(200).render("success");
    // res.status(200).send(data);
  } catch (err) {
    res.status(401).send("upload failed !! try again by filling all details");
  }
});

module.exports = router;
