function validate(){
  var user=document.getElementById('user').value;
  var pass=document.getElementById("pass").value;
  if(user=="" || pass=="" ){
    document.getElementById('submit').disabled=true;

  }else {
    document.getElementById('submit').disabled=false;
  }
}

function validateLogin(){
  var user=document.getElementById('conOne').value;
  var pass=document.getElementById("conTwo").value;
  if(user=="" || pass=="" ){
    document.getElementById('log').disabled=true;

  }else {
    document.getElementById('log').disabled=false;
  }
}


// array to store password
var storeUserPassword=[];

//check password strength
function passwordStrength(passWord){
  if(passWord.length<6){
    $("#message").text("Too short, password length should be more than 6")

  }
  else if (passWord.search(/[A-Z]/)<0) {
    $("#message").text("Password should contain atleast one uppercase")
  }
  else if (passWord.search(/[0-9]/)<0) {
    $("#message").text("Password should contain atleast a Number")
  }
  else if (passWord.search(/[~`@!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/)<0) {
      $("#message").text("Password should contain atleast on special charater")
  }
  else{
    $("#pass").val("");
    $("#login").fadeIn(1000);
    $("#login").show();
    $("#register").fadeOut(2000);
    $("#register").hide();
    $("#message").text("Too short, password length should be more than 6")
  }

}

$(document).ready(function(){

  $("form#register").submit(function(event){
    event.preventDefault()
     var user=$("#user").val();
     var password=$("#pass").val();
    passwordStrength(password);
    storeUserPassword.push(user,password);
  });

    $("#login").submit(function(event){
      event.preventDefault();
      var userName=$("#conOne").val();
      var userPassword=$("#conTwo").val();
      if((userName==storeUserPassword[0])&& (userPassword==storeUserPassword[1])){
      $("#register").hide();
      $("#login").hide();
      $(".card").animate({
        transition:"400ms",
        left:"100px",
        right:"200px"

      });
      $(".card").show();
      $("#name").text(userName);
      $("#date").text(Date);


    }
    else {
      $("#wrong").text("wrong password or username")
      $("#conTwo").val("");
    }
    })





  // validate
  $("#user").keyup(function(){
    validate();
  })
  $("#pass").keyup(function(){
    validate();
  })
  //validateLogin
  $("#conOne").keyup(function(){
    validateLogin();
  })
  $("#conTwo").keyup(function(){
    validateLogin();
  })



})
