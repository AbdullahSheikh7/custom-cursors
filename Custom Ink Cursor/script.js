let circles = document.querySelectorAll(".cursor-container .cursor");
let box = document.querySelector("section .box");

let coords = { x: 0, y: 0 };

circles.forEach((circle, i) => {
  circle.x = 0;
  circle.y = 0;
});

window.addEventListener("mousemove", (e) => {
  coords.x = e.x;
  coords.y = e.y;
});

const followCursor = () => {
  let x = coords.x;
  let y = coords.y;

  circles.forEach((circle, i) => {
    circle.style.left = x + "px";
    circle.style.top = y + "px";
    circle.x = x;
    circle.y = y;

    circle.style.scale = (circles.length - i) / circles.length;
    
    const nextCircle = circles[i + 1] || circles[0];
    x += (nextCircle.x - x) * 0.1;
    y += (nextCircle.y - y) * 0.1;
  });
  
  requestAnimationFrame(followCursor);
};

box.addEventListener("click", (e) => {
  circles.forEach((circle, i) => {
    circles[i].classList.toggle("white");
  });
  circles[0].classList.remove("expand")
  for (i = 0; i < circles.length - 2; i++) {
    circles[i+1].classList.remove("hide");
  }
  box.classList.toggle("expand")
});

box.addEventListener("mouseover", (e) => {
  circles[0].classList.add("expand")
  for (i = 0; i < circles.length - 2; i++) {
    circles[i+1].classList.add("hide");
  }
});

box.addEventListener("mouseleave", (e) => {
  circles[0].classList.remove("expand")
  for (i = 0; i < circles.length - 2; i++) {
    circles[i+1].classList.remove("hide");
  }
});

followCursor();
