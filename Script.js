const tabBars = document.querySelectorAll("[data-tabs]");
const IndividualSlides = document.querySelectorAll(".slide");
const navBar = document.getElementById("navbar");
const openBtn = document.querySelector(".openBtn");
const closeBtn = document.querySelector(".closeBtn");

tabBars.forEach(tabBar => {
    tabBar.addEventListener("click", ()=>{

        IndividualSlides.forEach(slide => {
            slide.classList.remove("active")
            
            const target = document.querySelector(tabBar.dataset.tabs)
            target.classList.add("active")
        })
    })
});

function openNav() {
    openBtn.addEventListener("click", ()=> {
        navBar.style.width = "200px"
    })
}

function closeNav() {
    closeBtn.addEventListener("click", ()=> {
        navBar.style.width = "0"
    })
}
closeNav();
openNav();
