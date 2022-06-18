document.documentElement.className = "js";
var supportsCssVars = function() {
    var e,
        t = document.createElement("style");
    return (
        (t.innerHTML = "root: { --tmp-var: bold; }"),
        document.head.appendChild(t),
        (e = !!(
            window.CSS &&
            window.CSS.supports &&
            window.CSS.supports("font-weight", "var(--tmp-var)")
        )),
        t.parentNode.removeChild(t),
        e
    );
};
supportsCssVars() ||
    alert(
        "Please view this demo in a modern browser that supports CSS Variables."
    );
window.addEventListener("scroll", function(e) {
    // colorCursorCorrectly(e.clientX, e.clientY);
    const logo_w = document.getElementById("logoWrapper");
    var rect = logo_w.getBoundingClientRect();
    colorElementsWRTfunction(
        colorLogoCorrectly,
        document.elementFromPoint(rect.left, 450)
    );
    const mouse = document.querySelector("#dot_cursor").getBoundingClientRect();

    console.log(document.elementFromPoint(mouse.left, 450));
    colorElementsWRTfunction(
        colorCursorCorrectly,
        document.elementFromPoint(mouse.left, 450)
    );
});

window.addEventListener("mousemove", function(e) {
    let elem = document.elementFromPoint(e.clientX, 450);
    colorElementsWRTfunction(colorCursorCorrectly, elem);
});

function isTransparent(color) {
    switch (color) {
        case "transparent":
        case "":
        case "rgba(0, 0, 0, 0)":
            return true;
        default:
            return false;
    }
}

function colorElementsWRTfunction(coloringFunction, elem) {
    elem = getEffectiveColorElement(elem);
    coloringFunction(elem);
}

function getEffectiveColorElement(elem) {
    while (isTransparent(window.getComputedStyle(elem, null).backgroundColor)) {
        if (elem == document.body) {
            const defaultElement = document.createElement("div");
            defaultElement.setAttribute(
                "style",
                "background-color:white; font-size:2em;"
            );

            return createElement;
        }
        elem = elem.parentElement;
    }
    return elem;
}

function colorCursorCorrectly(elem) {
    if (
        window.getComputedStyle(elem, null).backgroundColor.toString() ==
        "rgb(0, 0, 0)"
    ) {
        document.querySelector("#dot_cursor").style.backgroundColor =
            "rgb(255,255,255)";
    }
    if (
        window.getComputedStyle(elem, null).backgroundColor.toString() ==
        "rgb(255, 255, 255)"
    ) {
        document.querySelector("#dot_cursor").style.backgroundColor = "rgb(0,0,0)";
    }
}

function colorLogoCorrectly(elem) {
    const black = document.getElementById("logoBlack");
    const white = document.getElementById("logoWhite");
    if (
        window.getComputedStyle(elem, null).backgroundColor.toString() ==
        "rgb(0, 0, 0)"
    ) {
        black.style.display = "block";
        white.style.display = "none";
    }
    if (
        window.getComputedStyle(elem, null).backgroundColor.toString() ==
        "rgb(255, 255, 255)"
    ) {
        white.style.display = "block";
        black.style.display = "none";
    }
}