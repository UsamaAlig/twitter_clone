    var loginForm = document.getElementById('login-form');
    const url = loginForm.action;
    const method = loginForm.method;
    
    loginForm.addEventListener('submit',(e)=>{
    e.preventDefault();
    var formData = new FormData(loginForm);
    const plainFormData = Object.fromEntries(formData.entries());
    fetch(url, {
		method: "POST",
		body: JSON.stringify(plainFormData),
		headers: {
		   "Content-Type": "application/json"
          }}).
		then(res => {
		console.log(`Status Code:  ${res.status}`);
    if(res.status===200){
      window.location.assign("http://127.0.0.1:5501/ClientSide/html/home.html");
      console.log("Hurays")
    }
		})
		.catch(err => console.log(err));

  })
  //   var loginForm = document.getElementById('login-form');
  //   const url = loginForm.action;
  //   const method = loginForm.method;
    
  //   loginForm.addEventListener('submit',(e)=>{
  //   e.preventDefault();
  //   var formData = new FormData(loginForm);
  //   const plainFormData = Object.fromEntries(formData.entries());
  //   let jsonData = JSON.stringify(plainFormData);
  //   console.log(jsonData);
  //   const api = new XMLHttpRequest;
  //   api.open(method,url);
  //   api.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
  //   api.onreadystatechange = () =>{
  //     if(api.readyState === 4 && api.status === 201){
  //       let obj = api.response;
  //       alert(obj);
  //     }
  //   }
  //   api.send(jsonData); 

  // })

  // api.responseType = "json";
  //   api.onload = () => {
  //     const data = api.response;
  //     console.log(data);
  //     document.write("DATA",data)
  //   }

  //fetch data		
  // fetch('http://localhost:3000/createuser', {
	// 	method: "POST",
	// 	body: JSON.stringify(plainFormData),
	// 	headers: {
	// 	   "Content-Type": "application/json"
  //         }}).
	// 	then(res => {
	// 	console.log(`Status Code:  ${res.status}`);
	// 	})
	// 	.catch(err => console.log(err));

