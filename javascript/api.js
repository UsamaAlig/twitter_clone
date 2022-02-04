function apiRequest(){
  const api = new XMLHttpRequest;
  api.open("GET","http://localhost:3000/twitterDB");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    console.log(data);
    getData(data);
  }
  api.send();
}
function getData(data){
  data.map((val)=>{
    var name = val.Name;
    var tweet = val.Tweet;
    var img = val.Image;
    document.getElementById("patch").innerHTML+=createHtml(name,tweet,img);
    // document.getElementById("flags").innerHTML+=generateCellFlag(img);

  })  
}

function createHtml(name,tweet,img){
  return `<div class="col-lg-12 px-4 py-2">
  <p>${name}</p>
  <p>${tweet}</p>
  <img src="${img}" height="250px" width="250px"/>     
</div>`
}
apiRequest();