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
    Tax_ID:"required",
    SSN:"required",

  } , messages:
  {
    Name:"Please enter as First name Last name",
    Company_Name:"Please enter your company name",
    Business_Industry:"required",
    Entry_Type:"Please select your entity type",
    Business_StartDate:"Please enter your business start date",
    Loan_Ammount:"Please enter the requested loan amount",
    zipcode:"Please enter your zip code ",
    Annual_Revenue:"Please enter an amount for your annual revenue",
    Credit_Score:"",
    Purpose_of_Loan:"required",
    Phone_Number:"Please enter your Phone Number",
    Driving_Licence:"Kindly upload your drivers license",
    Bank_Statement:"Kindly upload previous 3 months bank statements",
    Voided_Check:"Kindly upload your voided check",
    Tax_ID:"required",
    SSN:"Please enter your SSN.",
  },
  submitHandler:function(form)
  {
    form.submit();
  }
  
});


