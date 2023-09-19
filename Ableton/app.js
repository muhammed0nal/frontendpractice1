const moreEl = document.getElementById("more");
const moreEl2 = document.getElementById("more-2");
const moreDivEl = document.getElementById("more-div");

// menuEl
const menuBtn = document.getElementById("menu");
const menuNav_1 = document.getElementById("site-nav-1");
const menuNav_2 = document.getElementById("nav-2");
const menuNav_3 = document.getElementById("more-div");
const menuNav_4 = document.getElementById("more-2");

const menuBottom = document.getElementById("nav-3-ul");

moreEl.addEventListener("click", () => {
  moreDivEl.classList.toggle("more-active");
  moreEl2.classList.toggle("more-active");
});

// more active
function myFunction(x) {
  if (x.matches) {
    // If media query matches
    moreDivEl.classList.add("more-active");
    moreEl2.classList.add("more-active");
    menuNav_1.classList.remove("menu-active-1");
    menuNav_2.classList.remove("menu-active-2");
    menuNav_3.classList.remove("menu-active-3");
    menuNav_4.classList.remove("menu-active-4");
    menuBottom.style.flexDirection = "row";
    menuBtn.innerHTML = `<p>Menu <i class="bx bx-plus"></i></p>`;
  } else {
    moreDivEl.classList.remove("more-active");
    moreEl2.classList.remove("more-active");
  }
}

var x = window.matchMedia("(max-width: 1025px)");
myFunction(x); // Call listener function at run time
x.addListener(myFunction); // Attach listener function on state changes

// menuEl

menuBtn.addEventListener("click", () => {
  menuNav_1.classList.toggle("menu-active-1");
  menuNav_2.classList.toggle("menu-active-2");
  menuNav_3.classList.toggle("menu-active-3");
  menuNav_4.classList.toggle("menu-active-4");
  if (menuNav_1.classList.contains("menu-active-1")) {
    menuBottom.style.flexDirection = "column";
    menuBtn.innerHTML = `<p>Menu <i class="bx bx-minus"></i></p>`;
  } else {
    menuBottom.style.flexDirection = "row";
    menuBtn.innerHTML = `<p>Menu <i class="bx bx-plus"></i></p>`;
  }
});
