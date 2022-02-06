function apiRequest(){
  const api = new XMLHttpRequest;
  api.open("GET","http://localhost:3000/newsfeed");
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
    generateCell(name,tweet,img);
    // document.getElementById("patch").innerHTML+=createHtml(name,tweet,img);
  })  
}

function createHtml(name,tweet,img){
  return `<div class="col-lg-12 px-4 py-2">
  <p>${name}</p>
  <p>${tweet}</p>
  <img src="${img}" height="250px" width="250px"/>     
</div>`
}

function generateCell(name,tweet,img){
  $.get("tweet.html", (data2) => {
    console.log(data2);
    var stringToHTML = function (str) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, 'text/html');
      var actualBody = doc.body.firstChild;
      console.log(img);
      if(img == ''){
        actualBody.querySelector("#img2").classList.add("display");
        // actualBody.querySelector("img").setAttribute("src","39.png")
      }
      else(
      actualBody.querySelector("#img2").setAttribute("src",img)
      )
      actualBody.querySelector("#p1").textContent=name;
      actualBody.querySelector("#p2").textContent=tweet;
      
      document.getElementById("patch").append(actualBody);
    };
    stringToHTML(data2);

})
}
apiRequest();