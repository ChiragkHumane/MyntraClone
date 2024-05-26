/*var Data =
  [
    {
      username: "Sanjay_mytra",
      password: "Password_@12"
    },
    {
      username: "Vijay_Myntra",
      password: "123_@22"
    },
    {
      username: "degvijay_m123",
      password: "pass_@1342"
    },
    {
      username: "Vijay_websidea",
      password: "password_@12"
    },
    {
      username: "ChirAG123",
      password: "pasSWOEd"
    },
    {
      username: "NishAd2002",
      password: "1pa2ss3"
    },
  ];

function isUserValid(p1, p2) {
  for (var i = 0; i < 12; i++)
    if (Data[i].username === p1 &&
      Data[i].password === p2)
      return true;

  return false;
}

function signIn(p1, p2) {
  if (isUserValid(p1, p2))
    alert("Wecome back  : )");
  else
    alert("Sorry, wrong username or password :(");
}

var webUser_prompt = prompt("Please enter your username");
var webpass_prompt = prompt("Please enter your password");

signIn(webUser_prompt, webpass_prompt);*/

$(".input_text").focus(function(){
    $(this).prev('.fa').addclass('glowIcon')
})
$(".input_text").focusout(function(){
    $(this).prev('.fa').removeclass('glowIcon')
})