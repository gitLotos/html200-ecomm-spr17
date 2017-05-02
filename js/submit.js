function ReturnEmail()
{
  var email = document.getElementsByName('email')[0].value;
  console.log("Congrats you have subscribed to spam email, " + email);
  return false;
}
