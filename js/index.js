let slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

const testBody = document.querySelector(".test-body");
const interval = 3000;
let index = 0;
let slideId;

const slide = document.querySelector(".slides");

const slideWidth = slides[index].clientWidth;

const startSlide = () => {
    const marginSize = screen.width >= 1090 ? 32 : (13 / 100) * screen.width;
    slideId = setInterval(() => {
        index++;
        slide.style.transform = `translateX(${
            -(slideWidth + marginSize) * index
        }px)`;
        slide.style.transition = "1.5s";

        for (var i = 0; i < 4; i++) {
            if (i == (index + 1) % 4) {
                dots[i].style.backgroundColor = `hsl(12, 88%, 59%)`;
            } else {
                dots[i].style.backgroundColor = `#FFF`;
            }
        }
    }, interval);
};

slide.addEventListener("transitionend", () => {
    slides = document.querySelectorAll(".slide");

    if (index >= 4) {
        slide.style.transition = "none";
        index = 0;
        slide.style.transform = `translateX(0%)`;
    }
});

startSlide();

testBody.addEventListener("mouseenter", () => {
    clearInterval(slideId);
});

testBody.addEventListener("mouseleave", startSlide);

function validateEmail() {
    const text = document.querySelector(".update").value;
    const alertDiv = document.querySelector(".email-alert");
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (text.match(mailFormat)) {
        alertDiv.innerHTML = ``;
        return true;
    } else {
        alertDiv.innerHTML = `<span>Please insert a valid email</span>`;
    }
}

const go = document.querySelector(".update");
go.addEventListener("keyup", validateEmail);

// Hamburger

const ham = document.querySelector(".ham");
const openIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="18"><g fill="#242D52" fill-rule="evenodd"><path d="M0 0h25v4H0zM0 7h25v4H0zM0 14h25v4H0z"/></g></svg>`;
const closeIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="21" height="22"><path fill="#242D52" fill-rule="evenodd" d="M17.925.747l2.828 2.828L13.328 11l7.425 7.425-2.828 2.828-7.425-7.425-7.425 7.425-2.828-2.828L7.671 11 .247 3.575 3.075.747 10.5 8.171 17.925.747z"/></svg>`;

var isOpen = false;
ham.addEventListener("click", function () {
    const menu = document.querySelector(".open");
    menu.style.transition = "1s";

    if (isOpen) {
        console.log("hi");
        menu.style.transform = "translateY(-150%)";
        menu.style.boxShadow = "none";
        ham.innerHTML = closeIcon;
        isOpen = false;
    } else {
        menu.style.transform = "translateY(0)";
        menu.style.boxShadow = "0 300px 1200px 150px hsla(0, 0%, 0%, 0.4)";
        ham.innerHTML = openIcon;
        isOpen = true;
    }
});
