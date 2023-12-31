let img = [
    '<img class="img-1" src="https://upload.wikimedia.org/wikipedia/it/thumb/f/f0/Screenshot_Videoclip_Never_Gonna_Give_You_Up.png/390px-Screenshot_Videoclip_Never_Gonna_Give_You_Up.png">',
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
    if(imgIndex == 0){
        imgIndex = 4;   
    }
    else{
        imgIndex -= 1;
    }
    imgContainer.innerHTML = img[imgIndex];


});

nextB.addEventListener("click", function(){
    imgIndex += 1;
    if(imgIndex > 4){
        imgIndex = 0;
        imgContainer.innerHTML = img[imgIndex];
        console.log(imgIndex);
    }
    imgContainer.innerHTML = img[imgIndex];

});

function pickRandomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}