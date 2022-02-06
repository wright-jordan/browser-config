"use strict";
const h1 = document.querySelector("h1");
if (!(h1 instanceof HTMLHeadingElement)) {
    throw new Error("h1 element not found");
}
h1.addEventListener("click", function (ev) {
    if (this.style.backgroundColor === "red") {
        this.style.backgroundColor = "blue";
        return;
    }
    this.style.backgroundColor = "red";
});
