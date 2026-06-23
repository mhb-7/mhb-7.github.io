function toggleMusic(){

```
const music =
document.getElementById("music");

const button =
document.querySelector(".music-btn");

if(music.paused){

    music.play();

    button.innerText =
    "♪ Tocando...";

}else{

    music.pause();

    button.innerText =
    "♪ Nossa música";

}
```

}

const photos = [
"img/foto1.jpg",
"img/foto2.jpg",
"img/foto3.jpg",
"img/foto4.jpg",
"img/foto5.jpg",
"img/foto6.jpg",
"img/foto7.jpg",
"img/foto8.jpg",
"img/foto9.jpg",
"img/foto10.jpg",
"img/foto11.jpg",
"img/foto12.jpg",
];

let currentIndex = 0;

function updateGallery(){

    const image =
    document.getElementById("gallery-image");

    const counter =
    document.getElementById("current-photo");

    const message =
    document.getElementById("photo-message");

    if(!image) return;

    image.src = photos[currentIndex];

    if(counter){
        counter.innerText =
        String(currentIndex + 1).padStart(2,"0");
    }
}

function nextPhoto(){

    currentIndex++;

    if(currentIndex >= photos.length){
        currentIndex = 0;
    }

    updateGallery();
}

function prevPhoto(){

    currentIndex--;

    if(currentIndex < 0){
        currentIndex = photos.length - 1;
    }

    updateGallery();
}


const reveals =
document.querySelectorAll(
".reveal"
);

const observer =
new IntersectionObserver(
(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add(
"visible"
);

}

});

},
{
threshold:0.15
}
);

reveals.forEach(card=>{

observer.observe(card);

});

function openLetter(){

    const letter =
    document.getElementById(
    "letterPaper"
    );

    if(letter){

        letter.classList.toggle(
        "open"
        );

    }

}