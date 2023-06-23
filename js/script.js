let img = [
    '<img class="img-1" src="img/01.webp">',
    '<img class="img-1" src="img/02.webp">',
    '<img class="img-1" src="img/03.webp">',
    '<img class="img-1" src="img/04.webp">',
    '<img class="img-1" src="img/05.webp">',
];

let selImg = pickRandomFromArray(img);

for (let index = 0; index < img.length; index++) {
    const element = img[index];
    console.log(element);

}

function pickRandomFromArray(arr){
    return arr[Math.floor(Math.random() * arr.length)];
}