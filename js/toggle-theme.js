const imageElement = document.getElementById("bgimage");
let isImage1 = true;

var theme=document.getElementById("change-theme");
theme.onclick=function(){
    document.body.classList.toggle("light-theme");
    if (isImage1) {
        imageElement.src = "./public/lightbg.png"; 
      } else {
        imageElement.src = "./public/background.png"; 
      }
      isImage1 = !isImage1;
}