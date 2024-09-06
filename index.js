var cards = document.querySelectorAll(".cards");
var left = document.querySelector("#left");
var right = document.querySelector("#right");

classnames = ["one", "two", "three"];

// Initialize cards
cards.forEach((card, index) => {
    card.classList.add(classnames[index]);
});

// Apply initial styles
classnames.forEach((classname, index) => {
    element = document.querySelector(`.${classname}`);
    element.style.zIndex = classnames.length - index; // Adjust zIndex so top card has highest value
    element.style.position = "absolute";
    element.style.left = 15 * index + "px";
    element.style.transform = `scale(${1 - index * 0.05}) rotate(${index * 2
        }deg)`; // Adjust scale and rotation
    element.style.transition =
        "transform 200ms ease, left 200ms ease, zIndex 200ms ease"; // Smooth transitions
});

// Variables for interaction
count = 0;
previous_offset = 15;

left.addEventListener("click", () => {
    if (count < classnames.length) {
        element = document.querySelector(`.${classnames[count]}`);
        if (element) {
            element.style.position = "absolute";
            element.style.left =
                -(previous_offset * (classnames.length - count)) + "px";
            element.style.zIndex = count; // Adjust zIndex for current element
            element.style.transform = `scale(${1 - (classnames.length - count) * 0.05
                }) rotate(-${(classnames.length - (count + 1)) * 2}deg)`; // Adjust scale and rotation
            next_element = document.querySelector(`.${classnames[count + 1]}`);
            next_element.style.transform = "rotate(0deg)"; // Reset scale and rotation for the top element

            // Adjust the next element if necessary
            if (count == 2 && count + 1 < classnames.length) {
                next_element = document.querySelector(`.${classnames[count + 1]}`);
                if (next_element) {
                    next_element.style.zIndex = classnames.length + 1; // Bring the next element to the front
                    next_element.style.transform = "scale(1) rotate(0deg)"; // Reset scale and rotation for the top element
                }
            }
            count = count + 1;
        } else {
            console.warn(`Element with class ${classnames[count]} not found.`);
        }
        console.log(element, element.offsetLeft);
    }
});
