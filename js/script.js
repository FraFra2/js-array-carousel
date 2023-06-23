let img = [
    '<img class="img-1" src="img/01.webp">',
    '<img class="img-1" src="img/02.webp">',
    '<img class="img-1" src="img/03.webp">',
    '<img class="img-1" src="img/04.webp">',
    '<img class="img-1" src="img/05.webp">',
];

let selImg = pickRandomFromArray(img);

const prevB = document.querySelector(".prev");
const nextB = document.querySelector(".next");
const imgContainer = document.querySelector(".img-cont");

let imgIndex = 0;

imgContainer.innerHTML = img[imgIndex];

prevB.addEventListener("click", function(){
    console.log("sesso");
    imgIndex -= 1;
    imgContainer.innerHTML = img[imgIndex];

});

nextB.addEventListener("click", function(){
    imgIndex += 1;
    imgContainer.innerHTML = img[imgIndex];
    console.log("sesso");
});

function pickRandomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}