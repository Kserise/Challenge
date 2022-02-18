const body = document.querySelector("body");
const imgs = [
    "0.jpg","1.jpg","2.jpg","3.jpg"
];

const randomImage = imgs[Math.floor(Math.random()*imgs.length)];
body.style.backgroundImage = `url(imgs/${randomImage})`;
console.log(randomImage);