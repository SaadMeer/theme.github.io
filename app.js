/* Web Section Category start */
// const web_category = [
//     {
//         id: 1,
//         image: "/image/igor-miske-Px3iBXV-4TU-unsplash.jpg",
//         title: "E-commerce",
//         alt: "E-commerce",
//     },
//     {
//         id: 2,
//         image: "image/headway-5QgIuuBxKwM-unsplash.jpg",
//         title: "Marketing",
//         alt: "Markting",
//     },
//     {
//         id: 3,
//         image: "image/christin-hume-Hcfwew744z4-unsplash.jpg",
//         title: "Gaming",
//         alt: "Gaming",
//     },
//     {
//         id: 4,
//         image: "image/hal-gatewood-tZc3vjPCk-Q-unsplash.jpg",
//         title: "Blogging",
//         alt: "Blogging",
//     },
//     {
//         id: 5,
//         image: "image/lagos-techie-IgUR1iX0mqM-unsplash.jpg",
//         title: "Protfolio",
//         alt: "Protfolio",
//     },
//     {
//         id: 6,
//         image: "image/radek-grzybowski-eBRTYyjwpRY-unsplash.jpg",
//         title: "Technology",
//         alt: "Technology",
//     },
// ];
const web_section = document.querySelector(".web-section");
window.addEventListener("DOMContentLoaded", function () {
    displayWebCategory(web_category);
});

function displayWebCategory(webItem) {
    let displayItem = webItem.map(function (item) {
        return `<a href="">
        <div class="web-category-box">
        <img src="/${item.image}" alt="${item.alt}">
        <div class="web-category-shadow">
        <h5>${item.title}</h5>
        </div>
        </div>
        </a>
        `
    });
    displayItem = displayItem.join("");
    web_section.innerHTML = displayItem;
}
/* Web Section Category End */

/* Inspiration slider Start */
const slider = document.querySelectorAll('.slider-box');
const prevBtn = document.querySelector('.btn-left-slider');
const nxtBtn = document.querySelector('.btn-right-slider');

let counter = 0;

nxtBtn.addEventListener("click", function () {
    counter++;
    move();
});
prevBtn.addEventListener("click", function () {
    counter--;
    move();
})

function move() {
    if (counter == slider.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slider.length - 1;
    }
    function myFunction(x) {
        if (x.matches) { // If media query matches
        slider.forEach(function (slider) {
            slider.style.transform = `translateX(-${counter * 100}%)`;
        })
        } else {
            slider.forEach(function (slider) {
                slider.style.transform = `translateX(-${counter * 50}%)`;
            })
        }
      }
    var x = window.matchMedia("(max-width: 860px)")
    myFunction(x) 
    x.addListener(myFunction);
}

 
/* Inspiration slider End */

/* Burger slider Start */
const togglebtn = document.querySelector(".btn-burger");
const closebtn = document.querySelector(".btn-cross");
const sliderShow = document.querySelector(".menu-section");

function myFunction(x) {
    if (x.matches) { // If media query matches
    togglebtn.style.display = "none";
    } else {
    togglebtn.style.display = "block";
    }
  }
  
  var x = window.matchMedia("(min-width: 860px)")
  myFunction(x) 
  x.addListener(myFunction);


togglebtn.addEventListener("click", function () {
    sliderShow.classList.toggle("toggle-show");
    togglebtn.classList.toggle("burger-click");
    togglebtn.style.display = "none";
    closebtn.style.display = "block";
})
closebtn.addEventListener("click",function(){
    sliderShow.classList.remove("toggle-show");
    togglebtn.style.display = "block";
    closebtn.style.display = "none";
    
})
/* Burger slider End */

/* Change Anchor color in click Start */
// const link = document.querySelectorAll(".menu-section ul li a");
// link.forEach(function(link){
//     link.addEventListener("click", function () {
//         link.classList.add("link-color");
//     })
// })
/* Change Anchor color in click End */

/* FIXED NAVBAR SCROLL */
const navbar = document.getElementById("nav");
const topLink = document.querySelector(".top-link")


window.addEventListener("scroll", function(){
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;

    if(scrollHeight > navHeight){
        navbar.classList.remove("nav");
        navbar.classList.add("fixed-nav");
    }
    else{
        navbar.classList.remove("fixed-nav");
        navbar.classList.add("nav");
    }
});
/* FIXED NAVBAR SCROLL */

/* SCroll Browse ADJUST */
const brosweLink = document.getElementById("browse-btn");
brosweLink.addEventListener("click", function (e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    const navHeight = navbar.getBoundingClientRect().height;
    let position = element.offsetTop - navHeight;

    window.scrollTo({
        left: 0,
        top: position,
    });
    linkscontainer.style.height = 0;
});

/* SCroll Browse ADJUST */

/* Description section tab */
const btns = document.querySelectorAll(".btn");
const article = document.querySelectorAll(".article");
const about = document.querySelector(".about");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        
        article.forEach(function(article){
            article.classList.remove('active');
        })
    }
    const element = document.getElementById(id);
    element.classList.add('active');
    
})
/* Description section tab */