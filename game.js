//Highlights of this project
//  window.requestAnimationFrame(gamePlay); 
//  element.getBoundingClientRect();



// let score1 = 0;
let keys = { ArrowUp: false, ArrowDown: false, ArrowLeft: false, ArrowRight: false }
let player = { start: false, score1: 0, speed: 10 };
console.log(player)

let score = document.querySelector(".score")
let start = document.querySelector(".Start");
let container = document.querySelector(".container");
let road = document.querySelector(".road")
// let hello = document.createElement("div");
// hello.innerHTML = "Hello"
// hello.setAttribute("class", "Hello")
// console.log(hello)
console.log(container)


start.addEventListener("click", () => {
    console.log("Start is clicked")
    player.start = true;
    start.classList.add('hide');
    road.classList.remove('hide');

    // container.appendChild(hello);
    let car = document.createElement("div");
    car.setAttribute("class", 'car');
    // car.innerText  = "Car is added";
    road.appendChild(car);

    for (x = 0; x < 5; x++) {

        let lane = document.createElement("div");
        lane.setAttribute("class", 'lane');
        lane.y = x * 200;
        lane.style.top = lane.y + "px";
        // lane.style.top = (x*200) + "px";
        road.appendChild(lane);

    }

    for (x = 0; x < 3; x++) {

        let enemycar = document.createElement("div");
        enemycar.setAttribute("class", 'enemy');
        enemycar.y = x * 400;
        enemycar.style.top = enemycar.y + "px";
        enemycar.style.left = Math.floor(Math.random() * 300) + "px";
        // lane.style.top = (x*200) + "px";
        road.appendChild(enemycar);

    }


    window.requestAnimationFrame(gamePlay);
    // player.x = car.offsetLeft;
    // player.y = car.offsetTop;
    // console.log(road.getBoundingClientRect());

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
        movelane();
        movecar();
        player.score1 += 1;
        car = document.querySelector(".car");
        player.x = car.offsetLeft;
        player.y = car.offsetTop;
        let road = document.querySelector(".road")
        // console.log(player.score1);
        score.innerHTML = player.score1;
        console.log(car.getBoundingClientRect());
        carpos = car.getBoundingClientRect();
        // console.log("Game has been started");
        let Road = road.getBoundingClientRect();
        if (keys.ArrowUp && carpos.y >= 218) {
            console.log(player.y -= player.speed)
        }
        if (keys.ArrowDown && carpos.y < 780) {
            player.y += player.speed;
            console.log(player.y);
            // console.log("Down");
        }
        if (keys.ArrowLeft && carpos.left >= 460) {
            player.x -= player.speed
        }
        if (keys.ArrowRight && carpos.right < 805) {
            player.x += player.speed
        }

        car.style.top = player.y + "px"
        car.style.left = player.x + "px"

        window.requestAnimationFrame(gamePlay);
    }

    
}

function movelane() {
    let lane = document.querySelectorAll(".lane");
    // console.log(lane.y)
    // let lane = document.getElementsByClassName("lane");
    console.log(lane);
    lane.forEach((item) => {
        console.log(item);
        if (item.y == 800) { item.y -= 800 }
        item.y += player.speed;
        console.log(item.y);
        item.style.top = item.y + "px";
    })
}

function movecar() {
    let enemy = document.querySelectorAll(".enemy");
    // console.log(lane.y)
    // let lane = document.getElementsByClassName("lane");
    enemy.forEach((item) => {
        console.log(item);
        if (item.y == 700) { 
            item.y -= 800 
            item.style.left = Math.floor(Math.random() * 300) + "px";
        }
        item.y += player.speed;
        console.log(item.y);
        item.style.top = item.y + "px";
        
    })
}