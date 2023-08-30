let arrowRight = document.getElementById("arrow-right");
let arrowLeft = document.getElementById("arrow-left");
let headerNav = document.getElementById("header__nav");
let infoText = document.getElementById("info-text"); // Assuming you have an element for info text
let tiTle = document.getElementById("title");
let descriPtion = document.getElementById("description");

let mobileMenu = document.getElementById("mobile_menu");
let mobileNav = document.getElementById("mobile_nav");

let images = [
    {
        url: "./images/desktop-image-hero-1.jpg",
        title: "Discover innovative ways to decorate",
        description: `We provide unmatched quality, comfort, and style for property owners across the country. 
                    Our experts combine form and function in bringing your vision to life. Create a room in your 
                    own style with our collection and make your property a reflection of you and what you love.`,
    },
    {
        url: "./images/desktop-image-hero-2.jpg",
        title: "We are available all across the globe",
        description: `With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                    Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                    store locator. Any questions? Don't hesitate to contact us today.`,
    },
    {
        url: "./images/desktop-image-hero-3.jpg",
        title: "Manufactured with the best materials",
        description: `Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                    to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                    experience in this industry, we understand what customers want for their home and office.`,
    }
];

let currentImageIndex = 0;

headerNav.style.backgroundImage = "url(" + images[currentImageIndex].url + ")";
tiTle.textContent = images[currentImageIndex].title;
descriPtion.textContent = images[currentImageIndex].description;

arrowRight.onclick = function() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    headerNav.style.backgroundImage = "url(" + images[currentImageIndex].url + ")";
    tiTle.textContent = images[currentImageIndex].title;
    descriPtion.textContent = images[currentImageIndex].description;
};

arrowLeft.onclick = function() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    headerNav.style.backgroundImage = "url(" + images[currentImageIndex].url + ")";
    tiTle.textContent = images[currentImageIndex].title;
    descriPtion.textContent = images[currentImageIndex].description;
};

mobileNav.style.top = "-124px";

mobileMenu.onclick = function(){
    if(mobileNav.style.top == "-124px"){
        mobileNav.style.top = "0";
        mobileMenu.src = "./images/icon-close.svg";
    }
    else {
        mobileNav.style.top = "-124px";
        mobileMenu.src = "./images/icon-hamburger.svg";
    }
}