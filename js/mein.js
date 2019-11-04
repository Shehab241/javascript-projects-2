var imges = document.getElementsByClassName("img-fluid");
var lightboxItem = document.querySelector(".lightbox-item");
var imgsArry = []
var lightContainer = document.querySelector(".lightbox-layer");
var prev = document.getElementById("prev")
var next = document.getElementById("next")
var currentIndex = 0;
wClose = document.getElementById("wClose")
for (i = 0; i < imges.length; i++) {
    imgsArry.push(imges[i]);
    imges[i].addEventListener("click", function(e) {

        lightContainer.classList.add("show");
        var imgSrc = e.target.src;
        lightboxItem.style.backgroundImage = "url(" + imgSrc + ")";
        currentIndex = imgsArry.indexOf(e.target);
    })
}

lightContainer.addEventListener("click", function(e) {
    if (e.target == lightContainer) {
        lightContainer.classList.remove("show")
    }
})
next.addEventListener("click", function() {
    nextMove()
})

function nextMove() {
    currentIndex++;
    if (currentIndex == imgsArry.length) {
        currentIndex = 0;
    }
    lightboxItem.style.backgroundImage = "url(" + imgsArry[currentIndex].src + ")"
}

prev.addEventListener("click", function() {
    prevMove()

})

function prevMove() {
    currentIndex--;
    if (currentIndex < 0) {
        currentIndex = 5;
    }
    lightboxItem.style.backgroundImage = "url(" + imgsArry[currentIndex].src + ")"
}
wClose.addEventListener("click", function() {

    lightContainer.classList.remove("show")
})

document.addEventListener("keydown", function(e) {
        if (e.keyCode == 27) {
            lightContainer.classList.remove("show")
        } else if (e.keyCode == 39) {
            nextMove()
        } else if (e.keyCode == 37) {
            prevMove()
        }

    }

)