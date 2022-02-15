function apiRequest(){
  const api = new XMLHttpRequest;
  api.open("GET","http://localhost:3000/newsfeed");
  api.responseType = "json";
  api.onload = () => {
    const data = api.response;
    getData(data);
  }
  api.send();
}
function getData(data){
  data.map((val)=>{
    var name = val.name;
    var userName = val.userName;
    var profileImg = val.profileImage;
    var tweet = val.text;
    var img = val.image;
    var cmt = val.comment;
    var retweet = val.retweet;
    var like = val.like;
    var share = val.share;
    generateCell(name,userName,profileImg,tweet,img,cmt,retweet,like,share);
    // document.getElementById("patch").innerHTML+=createHtml(name,tweet,img);
  })  
}

function generateCell(name,userName,profileImg,tweet,img,cmt,retweet,like,share){
  $.get("tweet.html", (data2) => {
    var stringToHTML = function (str) {
      var parser = new DOMParser();
      var doc = parser.parseFromString(str, 'text/html');
      var actualBody = doc.body.firstChild;
      if(img == ''){
        actualBody.querySelector("#img2").classList.add("display");
      }
      else(
      actualBody.querySelector("#img2").setAttribute("src",img)
      )
      actualBody.querySelector("#p1").textContent=name;
      actualBody.querySelector("#p2").textContent=tweet;
      actualBody.querySelector("#p3").textContent=userName;
      actualBody.querySelector("#img1").setAttribute("src",profileImg);

      document.getElementById("patch").append(actualBody);
    };
    stringToHTML(data2);

})
}
apiRequest();

// function createHtml(name,tweet,img){
//   return `<div class="col-lg-12 px-4 py-2">
//   <p>${name}</p>
//   <p>${tweet}</p>
//   <img src="${img}" height="250px" width="250px"/>     
// </div>`
// }