const images = document.querySelectorAll(".gallery img");

const lightbox = document.getElementById("lightbox");

const lightboxImg = document.getElementById("lightbox-img");

let currentIndex = 0;

// Open Lightbox

function openLightbox(index){

    currentIndex = index;

    lightbox.style.display = "flex";

    lightboxImg.src = images[currentIndex].src;

}

// Close

function closeLightbox(){

    lightbox.style.display = "none";

}

// Next & Previous

function changeImage(step){

    currentIndex += step;

    if(currentIndex < 0)
        currentIndex = images.length-1;

    if(currentIndex >= images.length)
        currentIndex = 0;

    lightboxImg.src = images[currentIndex].src;

}

// Filter

function filterImages(category){

    const items = document.querySelectorAll(".image");

    items.forEach(item=>{

        if(category==="all"){

            item.style.display="block";

        }

        else if(item.classList.contains(category)){

            item.style.display="block";

        }

        else{

            item.style.display="none";

        }

    });

}