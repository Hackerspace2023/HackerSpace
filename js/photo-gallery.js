const data = ["img1", "img2", "img3", "img4", "img5"];
const photogallery = document.querySelector(".photo-gallery-item");
for(let i=0;i<10;i++)
{
  data.forEach((item, index)=>{
    let image = document.createElement("img");
    image.setAttribute("src", `./public/${item}.jpg`);
    photogallery.append(image);
  })
}
for(let i=0;i<10;i++)
{
  data.forEach((item, index)=>{
    let image = document.createElement("img");
    image.setAttribute("src", `./public/${item}.jpg`);
    photogallery.prepend(image);
  })
}


const left = document.querySelector("#photo-gallery-right-scrolls");
const right = document.querySelector("#photo-gallery-left-scrolls");
let i=1
left.addEventListener("click", ()=>{
  if(i==0)
  {
    i=(i+1)%data.length;
  }
  const totalWidth = photogallery.clientWidth;
    let image = document.createElement("img");
  image.setAttribute("src", `./public/img${data.length-i}.jpg`);
  photogallery.prepend(image);
  i=(i+1)%data.length;
  photogallery.scrollLeft -= photogallery.clientWidth/2;
  console.log(i);
  
  
  
})
let j=1;
right.addEventListener("click", ()=>{
  if(j==0)
  {
    j=(j+1)%data.length;
  }
    let image = document.createElement("img");
  image.setAttribute("src", `./public/img${j}.jpg`);
  photogallery.append(image);
  j=(j+1)%data.length;
  photogallery.scrollLeft += photogallery.clientWidth/2;
  console.log(j);
  
})


