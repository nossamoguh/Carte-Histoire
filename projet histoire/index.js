var plan = document.createElement("img")
plan.src = "Paris1790.jpg"

plan.style.maxWidth = "100%"
plan.style.height = "auto"


window.mouseX = 0;
window.mouseY = 0;
function Zoom(element) {
    
    window.mouseX = element.x;
    window.mouseY = element.y;

};

document.body.appendChild(plan)
