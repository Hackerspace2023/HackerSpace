// var theme=document.getElementById("change-theme");
// theme.onclick=function(){
//     document.body.classList.toggle("light-theme");
// }

const checkbox = document.getElementById("checkbox")
checkbox.addEventListener("change", () => {
  document.body.classList.toggle("light-theme")
})