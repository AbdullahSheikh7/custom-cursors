let cursorCenter = document.querySelector(".cursor .center");
let cursorOutline = document.querySelector(".cursor .outline");

let mouse = { x: 0, y: 0 }

let position = { x: 0, y: 0 }
let scale = 0
let angle = 0

window.addEventListener("mousemove", (e) => {
  mouse.x = e.x
  mouse.y = e.y
})

const moveCursor = () => {
  let disX = (mouse.x - position.x)
  let disY = (mouse.y - position.y)

  let direction = Math.min(Math.sqrt(Math.pow(disX, 2) + Math.pow(disY, 2)), 150);

  scale = (direction / 150) * 0.5

  angle = Math.atan2(disY, disX) * 180 / Math.PI

  position.x += disX * 0.5
  position.y += disY * 0.5

  cursorCenter.style.transform = `translate(${mouse.x}px, ${mouse.y}px)`
  cursorOutline.style.transform = `translate(${position.x}px, ${position.y}px) rotate(${angle}deg) scale(${1 + scale}, ${1 - scale})`

  requestAnimationFrame(moveCursor)
}

moveCursor()
