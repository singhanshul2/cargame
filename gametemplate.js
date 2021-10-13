//Highlights of this project
//  window.requestAnimationFrame(gamePlay); 



// let score1 = 0;
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player = { start: false, score1: 0};
let score = document.querySelector(".score")
let start = document.querySelector(".Start");
let container = document.querySelector(".container");
let road = document.querySelector(".road")
let hello = document.createElement("div");
hello.innerHTML = "Hello"
hello.setAttribute("class", "Hello")
console.log(hello)
console.log(container)


start.addEventListener("click", () => {
    console.log("Start is clicked")
    player.start = true;
    // start.style.display = "none"
    start.classList.add('hide');
    road.classList.remove('hide');
    // container.appendChild(hello);
    let car = document.createElement("div");
    car.setAttribute("class", 'car');
    car.innerText  = "Car is added";
    road.appendChild(car);
    window.requestAnimationFrame(gamePlay);
})
 
document.addEventListener("keydown", (e) => {
    e.preventDefault();
    console.log(e.key);
    keys[e.key] = true;
    console.log(keys);
})

document.addEventListener("keyup", (e) => {
    console.log(e.key);
    keys[e.key] = false;
    console.log(keys);
})


function gamePlay() {
    if (player.start) {
        player.score1 += 1;
        console.log(player.score1);
        score.innerHTML = player.score1;
        // console.log("Game has been started");
        window.requestAnimationFrame(gamePlay);
    }


}