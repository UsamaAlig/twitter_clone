var registerForm = document.getElementById('register-form');
var emailError = document.getElementById('errorEmail');
var passError = document.getElementById('errorPass');
const url = registerForm.action;
const method = registerForm.method;

registerForm.addEventListener('submit',(e)=>{
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var formData = new FormData(registerForm);
  e.preventDefault();
  if(email===""){
    emailError.innerHTML='Please Enter your Email Address';
  }
  else if(!email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailError.innerHTML='Please Enter a valid Email Address';
  }
  else if(email.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
    emailError.innerHTML='';
    if(password===""){
      passError.innerHTML='Please Enter your password';
    }
    else if(password.length<6){
      passError.innerHTML='Please Enter a valid password';
    }
    else if(password.length>=6){
      passError.innerHTML='';
      fetch(url, {
        method: "POST",
        body: new URLSearchParams(formData),
        }).
        then(res => {
        console.log(`Status Code:  ${res.status}`);
        console.log(`response:  ${res}`);
        if(res.status===200){
          window.location.assign("http://127.0.0.1:5501/ClientSide/html/login.html");
          console.log("Hurays")
        }
        else if(res.status==404){
          console.log("Email already exist");
          emailError.innerHTML='Eamil Already Exist';
        }
        console.log('What')
        })
        .catch(err => console.log(err));
    }
  }
})

