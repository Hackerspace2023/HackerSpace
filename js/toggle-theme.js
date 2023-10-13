const imageElement = document.getElementById("bgimage");
const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

const canvas = $("canvas#stars");
const ctx = canvas.getContext("2d");

resizeCanvas();

let stars = [];

class Star {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.size = 0;
    this.opacity = 1;
    this.growth = 0.1;
    this.isIncreasing = true;
  }
  update() {
    if (this.size > 2.5) {
      this.isIncreasing = false;
    }

    if (this.isIncreasing) {
      this.size += this.growth;
    } else {
      this.size -= this.growth * 0.5;
    }

    this.draw();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
    ctx.fillStyle = `#ffffff`;
    ctx.fill();
    ctx.closePath();
  }
}

class Cat {
  constructor(x, y) {
    this.image = new Image();
    this.image.src = returnCatInBase64();
    this.x = x;
    this.y = y;
    this.scale = 0.5;
    this.speed = 0.5;
  }
  update() {
    this.y -= this.speed;

    if (this.y < -200) {
      this.y = Math.random() * 200 + 200;
      const { x, y } = getRandomCatCoords();
      this.x = x;
    }

    this.draw();
  }
  draw() {
    ctx.drawImage(
      this.image,
      this.x,
      this.y,
      this.image.width * this.scale,
      this.image.height * this.scale
    );
  }
}

const catCoords = getRandomCatCoords();
const cat = new Cat(catCoords.x, catCoords.y);

setInterval(() => {
  const x = Math.random() * canvas.width;
  const y = Math.random() * canvas.height;
  stars.push(new Star(x, y));
}, 150);

const flicker = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  stars.forEach((star, i) => {
    if (!star.isIncreasing && star.size < 0.25) {
      stars.splice(i, 1);
    }
    star.update();
  });

  cat.update();

  requestAnimationFrame(flicker);
};
flicker();

function toggleButton() {
  const time = $("#button-wrapper").dataset.time;
  $("#button-wrapper").dataset.time = time === "day" ? "night" : "day";
  if ($("#button-wrapper").dataset.time === "night") {
    const { x, y } = getRandomCatCoords();
    cat.y = y;
    cat.x = x;
    document.body.classList.toggle("light-theme");
    imageElement.src = "./public/background.png"; 
  } else {
    document.body.classList.toggle("light-theme");
    imageElement.src = "./public/lightbg.png"; 
  }
}

function getRandomCatCoords() {
  const x = Math.random() * (canvas.width * 0.6);
  const y = canvas.height + 100;
  return { x, y };
}

function resizeCanvas() {
  canvas.width = $("#button-wrapper").getBoundingClientRect().width;
  canvas.height = $("#button-wrapper").getBoundingClientRect().height;
}

function returnCatInBase64() {
  return `data:image/png;base64,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`;
}
