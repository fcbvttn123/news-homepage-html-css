const overlay_DOM = document.querySelector(".overlay")
const links_DOM = document.querySelector("header .links")
const menu_open_icon_DOM = document.querySelector("header .menu-icon-box")
const menu_close_icon_DOM = document.querySelector("header .menu-close-icon")

menu_open_icon_DOM.addEventListener("click", e => {
    links_DOM.classList.add("appear");
    check_overlay()
})

menu_close_icon_DOM.addEventListener("click", e => {
    links_DOM.classList.remove("appear");
    check_overlay()
})

function check_overlay() {
    // Check if links_DOM has the 'appear' class
    if (links_DOM.classList.contains("appear")) {
        // If links_DOM has the 'appear' class, add the 'appear' class to overlay_DOM
        overlay_DOM.classList.add("appear");
    } else {
        overlay_DOM.classList.remove("appear");
    }
}




/*

Notes: 

+ Check Class 

    const overlay_DOM = document.querySelector(".overlay");
    const links_DOM = document.querySelector("header .links");

    // Check if links_DOM has the 'appear' class
    if (links_DOM.classList.contains("appear")) {

        // If links_DOM has the 'appear' class, add the 'appear' class to overlay_DOM
        overlay_DOM.classList.add("appear");
    }

*/
