/* strat slider header */
function ChangeBackground() {
    const image_urls = [
        "img/slider/1.jpg",
        "img/slider/2.jpg",
        "img/slider/3.jpg"
    ]

    random_img = Math.floor(Math.random() * image_urls.length);

    document.getElementById("home").style.backgroundImage = `url('${image_urls[random_img]}')`
    document.getElementById("home").style.backgroundRepeat = "no-repeat";
}

setInterval(ChangeBackground, 3000)




/* navbar */
window.addEventListener("scroll", e => {
    if (window.scrollY > 30) {
        document.getElementById("nav").style.background = "rgb(34, 37, 77)";
        document.getElementById("nav").style.padding = "20px";
    } else {
        document.getElementById("nav").style.background = "none";
        document.getElementById("nav").style.padding = "60px";
    }
});



/* btn more and fewer for gallery */
document.getElementById("btn-more").onclick = function () {
    List = document.querySelectorAll(".dis-none")
    
    for (let i = 0; i < List.length; i++) {
        List[i].style.display = "inline"
    }
    document.getElementById("btn-more").style.display = "none"
}

document.getElementById("btn-fewer").onclick = function () {
    List = document.querySelectorAll(".dis-none")
    
    for (let i = 0; i < List.length; i++) {
        List[i].style.display = "none"
    }
    document.getElementById("btn-more").style.display = "inline"
}


/* game */
/* part 1 */
document.getElementById("game-1").onclick = function () {
    var myElemnt1 = document.querySelector("#game-1");
    var myElemnt2 = document.querySelector("#game-2");
    var myElemnt3 = document.querySelector("#game-3");

    myElemnt1.classList.add('active');
    myElemnt2.classList.remove('active');
    myElemnt3.classList.remove('active');

    var page1 = document.querySelector("#page-1");
    var page2 = document.querySelector("#page-2");
    var page3 = document.querySelector("#page-3");

    page1.classList.remove('d-none');
    page2.classList.add('d-none');
    page3.classList.add('d-none');
}

/* part 2 */
document.getElementById("game-2").onclick = function () {
    var myElemnt1 = document.querySelector("#game-1");
    var myElemnt2 = document.querySelector("#game-2");
    var myElemnt3 = document.querySelector("#game-3");

    myElemnt1.classList.remove('active');
    myElemnt2.classList.add('active');
    myElemnt3.classList.remove('active');

    var page1 = document.querySelector("#page-1");
    var page2 = document.querySelector("#page-2");
    var page3 = document.querySelector("#page-3");

    page1.classList.add('d-none');
    page2.classList.remove('d-none');
    page3.classList.add('d-none');
}

/* part 3 */
document.getElementById("game-3").onclick = function () {
    var myElemnt1 = document.querySelector("#game-1");
    var myElemnt2 = document.querySelector("#game-2");
    var myElemnt3 = document.querySelector("#game-3");

    myElemnt1.classList.remove('active');
    myElemnt2.classList.remove('active');
    myElemnt3.classList.add('active');

    var page1 = document.querySelector("#page-1");
    var page2 = document.querySelector("#page-2");
    var page3 = document.querySelector("#page-3");

    page1.classList.add('d-none');
    page2.classList.add('d-none');
    page3.classList.remove('d-none');
}


