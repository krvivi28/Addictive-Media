console.log("I am main.js");
$('#form1').validate({
  rules:{
    Name:"required",
    Company_Name:"required",
    Business_Industry:"required",
    Entry_Type:"required",
    Business_StartDate:"required",
    Loan_Ammount:"required",
    zipcode:"required",
    Annual_Revenue:"required",
    Credit_Score:"required",
    Purpose_of_Loan:"required",
    Phone_Number:"required",
    Driving_Licence:"required",
    Bank_Statement:"required",
    Voided_Check:"required",
    Website:"required",
    Tax_ID:"required",
    SSN:"required",

  } , messages:
  {
    Name:"Please enter as First name Last name",
    Company_Name:"Please enter your company name",
  },
  submitHandler:function(form)
  {
    form.submit();
  }
  
});


