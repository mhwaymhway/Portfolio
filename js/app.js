let navToggle = document.getElementById("nav_toggle");
let navMenu = document.getElementById("nav_menu");

navToggle.addEventListener("click", function () {
    navMenu.classList.toggle("show");
    navMenu.classList.add("bg-warning");
    navMenu.classList.toggle("text-success");
});

let navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", () => {
    let a = n.childNodes;
    let classValue = n.firstChild.nextSibling.classList.value;
    
    // n.firstChild.nextSibling.classList.remove(classValue);
    // n.firstChild.nextSibling.classList.remove(classValue.replace("-line", "-fill"));

    // n.firstChild.nextSibling.classList.add(classValue.replace("-line", "-fill"));
    // n.firstChild.nextSibling.classList.remove(classValue.replace("-line","-fill"));

    // if (classValue) {
    //     n.firstChild.nextSibling.classList.remove(classValue);
    //     n.firstChild.nextSibling.classList.add(classValue.replace("-line", "-fill"));
    // } else {
    //     n.firstChild.nextSibling.classList.remove(classValue.replace("-line", "-fill"));
    //     n.firstChild.nextSibling.classList.add(classValue);
    // }

    // a[1].classList.value.replace("-line","-fill");
        navMenu.classList.remove("bg-warning")

    navMenu.classList.remove("show");
}))


// scroll change background

function scrollHeader() {
    var Header = document.getElementById('header');
    if (this.scrollY >= 100 && this.innerWidth >=767) {
        Header.classList.add('scroll-header');
    } else {
        Header.classList.remove('scroll-header');
    }
}
window.addEventListener('scroll', scrollHeader);


// toggle style switcher
const styleSwitcherToggle = document.querySelector(".style-switcher-toggler");
styleSwitcherToggle.addEventListener("click", () => {
    document.querySelector(".style-switcher").classList.toggle("open");
})
// hide style - switcher on scroll
window.addEventListener("scroll", () => {
    if(document.querySelector(".style-switcher").classList.contains("open"))
    {
        document.querySelector(".style-switcher").classList.remove("open");
    }
})

//theme
function themeColors() {
    const colorStyle = document.querySelector(".js-color-style"),
        themeColorContainer = document.querySelector(".js-theme-colors");
    themeColorContainer.addEventListener("click", ({ target }) => {
        if (target.classList.contains("js-theme-color-item")) {
            localStorage.setItem("color", target.getAttribute("data-js-theme-color"));
            setColor();
        }
    });
    function setColor() {
        let path = colorStyle.getAttribute("href").split("/");
        path = path.slice(0, path.length - 1);
        colorStyle.setAttribute("href", path.join("/") + "/" + localStorage.getItem("color") + ".css");
    
    }
}
themeColors();

// theme light and dark mode
const dayNight = document.querySelector(".day-night");
dayNight.addEventListener("click", () => {
    dayNight.querySelector("i").classList.toggle("ri-sun-fill");
    dayNight.querySelector("i").classList.toggle("ri-moon-fill");
    document.body.classList.toggle("dark");
})
window.addEventListener("load", () => {
    if(document.body.classList.contains("dark"))
    {
        dayNight.querySelector("i").classList.add("ri-sun-fill");
    }
    else
    {
        dayNight.querySelector("i").classList.add("ri-moon-fill");
    }
})

// scroll up

function scrollUp() {
    var scrollup = document.getElementById('scroll-up');
    if (this.scrollY >= 400) {
        scrollup.classList.add("show-scroll");
    } else {
        scrollup.classList.remove("show-scroll")
    }
}


window.addEventListener('scroll', scrollUp)

//active

const sections = document.querySelectorAll('section[id]');
// console.log(sections);
function setActive() {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id');
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
            
        } else {
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll',setActive)


 $('.carousel').flipster();

    wow = new WOW(
        {
            boxClass: 'wow',      // default
            animateClass: 'animate__animated ', // default
            offset: 0,          // default
            mobile: true,       // default
            live: true        // default
        }
    );
    wow.init();