var h1 = document.querySelector("h1");
function breakText() {
    var h1Text = h1.textContent;
    var splitText = h1Text.split("");
    var halfValue = Math.floor(splitText.length / 2);

    var clutter = "";
    splitText.forEach(function (e, i) {
        if (halfValue >= i) {
            clutter += `<span class="a">${e}</span>`
        }
        else {
            clutter += `<span class="b">${e}</span>`
        }
    })
    h1.innerHTML = clutter
}
breakText();

function animation() {
    gsap.from("h1 .a", {
        y: 70,
        duration: 0.8,
        stagger: 0.2,
        opacity: 0
    })
    gsap.from("h1 .b", {
        y: 70,
        duration: 1,
        stagger: -0.2,
        opacity: 0
    })
}
h1.addEventListener("click", function () {
    animation();
})