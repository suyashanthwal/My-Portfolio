var audio = document.getElementById("audioPlayer"),
    loader = document.getElementById("preloader");

function settingtoggle() {
    document.getElementById("setting-container").classList.toggle("settingactivate");
    document.getElementById("visualmodetogglebuttoncontainer").classList.toggle("visualmodeshow");
    document.getElementById("soundtogglebuttoncontainer").classList.toggle("soundmodeshow");
}

function playpause() {
    if (document.getElementById("switchforsound").checked == false) {
        audio.pause();
    } else {
        audio.play();
    }
}

function visualmode() {
    document.body.classList.toggle("light-mode");
    document.querySelectorAll(".needtobeinvert").forEach(function (e) {
        e.classList.toggle("invertapplied");
    });
}

window.addEventListener("load", function () {
    loader.style.display = "none";
    document.querySelector(".hey").classList.add("popup");
});

let emptyArea = document.getElementById("emptyarea"),
    mobileTogglemenu = document.getElementById("mobiletogglemenu");

function hamburgerMenu() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.toggle("show-toggle-menu");
    document.getElementById("burger-bar1").classList.toggle("hamburger-animation1");
    document.getElementById("burger-bar2").classList.toggle("hamburger-animation2");
    document.getElementById("burger-bar3").classList.toggle("hamburger-animation3");
}

function hidemenubyli() {
    document.body.classList.toggle("stopscrolling");
    document.getElementById("mobiletogglemenu").classList.remove("show-toggle-menu");
    document.getElementById("burger-bar1").classList.remove("hamburger-animation1");
    document.getElementById("burger-bar2").classList.remove("hamburger-animation2");
    document.getElementById("burger-bar3").classList.remove("hamburger-animation3");
}

const sections = document.querySelectorAll("section"),
    navLi = document.querySelectorAll(".navbar .navbar-tabs .navbar-tabs-ul li"),
    mobilenavLi = document.querySelectorAll(".mobiletogglemenu .mobile-navbar-tabs-ul li");

window.addEventListener("scroll", () => {
    let currentId = "";
    sections.forEach(section => {
        let sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
            currentId = section.getAttribute("id");
        }
    });
    mobilenavLi.forEach(li => {
        li.classList.remove("activeThismobiletab");
        if (li.classList.contains(currentId)) {
            li.classList.add("activeThismobiletab");
        }
    });
    navLi.forEach(li => {
        li.classList.remove("activeThistab");
        if (li.classList.contains(currentId)) {
            li.classList.add("activeThistab");
        }
    });
});

console.log(
    "%c Designed and Developed by Vinod Jangid ",
    "background-image: linear-gradient(90deg,#8000ff,#6bc5f8); color: white;font-weight:900;font-size:1rem; padding:20px;"
);

let mybutton = document.getElementById("backtotopbutton");

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function scrolltoTopfunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

window.onscroll = function () {
    scrollFunction();
};

document.addEventListener("contextmenu", function (e) {
    if (e.target.nodeName === "IMG") {
        e.preventDefault();
    }
}, false);

let Pupils = document.getElementsByClassName("footer-pupil"),
    pupilsArr = Array.from(Pupils),
    pupilStartPoint = -10,
    pupilRangeX = 20,
    pupilRangeY = 15,
    mouseXStartPoint = 0,
    mouseXEndPoint = window.innerWidth,
    currentXPosition = 0,
    fracXValue = 0,
    mouseYEndPoint = window.innerHeight,
    currentYPosition = 0,
    fracYValue = 0,
    mouseXRange = mouseXEndPoint - mouseXStartPoint;

const mouseMove = e => {
    currentXPosition = e.clientX - mouseXStartPoint;
    fracXValue = currentXPosition / mouseXRange;
    currentYPosition = e.clientY;
    fracYValue = currentYPosition / mouseYEndPoint;

    let translateX = pupilStartPoint + fracXValue * pupilRangeX;
    let translateY = pupilStartPoint + fracYValue * pupilRangeY;

    pupilsArr.forEach(pupil => {
        pupil.style.transform = `translate(${translateX}px, ${translateY}px)`;
    });
};

const windowResize = e => {
    mouseXEndPoint = window.innerWidth;
    mouseYEndPoint = window.innerHeight;
    mouseXRange = mouseXEndPoint - mouseXStartPoint;
};

window.addEventListener("mousemove", mouseMove);
window.addEventListener("resize", windowResize);

document.addEventListener("DOMContentLoaded", function () {
    const scrollContainer = document.querySelector('.videos-scroll-container');
    const leftArrow = document.getElementById('videoLeftArrow');
    const rightArrow = document.getElementById('videoRightArrow');
    // Find one video card to get its width (including gap)
    const card = scrollContainer.querySelector('.video-box');
    const gap = parseInt(getComputedStyle(scrollContainer).gap) || 0;
    const cardWidth = card ? card.offsetWidth + gap : 320 + gap;
  
    leftArrow.addEventListener('click', function() {
      scrollContainer.scrollBy({ left: -cardWidth, behavior: 'smooth' });
    });
    rightArrow.addEventListener('click', function() {
      scrollContainer.scrollBy({ left: cardWidth, behavior: 'smooth' });
    });
  
    // Optional: Disable arrows at ends
    function updateArrows() {
      leftArrow.disabled = scrollContainer.scrollLeft <= 0;
      rightArrow.disabled = scrollContainer.scrollLeft + scrollContainer.clientWidth >= scrollContainer.scrollWidth - 1;
    }
    scrollContainer.addEventListener('scroll', updateArrows);
    window.addEventListener('resize', updateArrows);
    updateArrows();
  });
  