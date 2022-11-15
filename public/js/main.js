console.log("I am main.js");
$('#form1').validate({
  rules:{
    name:"required"
  } , messages:
  {
    name:"Please enter your full name"
  }
  
});


