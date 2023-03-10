const canvas = document.getElementById("canvas1");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let eyes = [];
let theta;

window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}

const mouse = {
    x: undefined,
    y: undefined
};

window.addEventListener("mousemove", function (e) {
    mouse.x = event.x;
    mouse.y = event.y;
})

class Eye {
    constructor(x, y, radius) {
        this.x = x;
        this.y = y;
        this.radius = radius;
    }
    draw() {
        //draw eye
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, true);
        ctx.fillStyle = "red";
        ctx.fill();
        ctx.closePath();

        //draw iris
        let iris_dx = mouse.x - this.x;
        let iris_dy = mouse.y - this.y;
        theta = Math.atan2(iris_dy, iris_dx);
        let iris_x = this.x + Math.cos(theta) * this.radius / 10;
        let iris_y = this.y + Math.sin(theta) * this.radius / 10;
        let irisRadius = this.radius / 1.2;
        ctx.beginPath();
        ctx.arc(iris_x, iris_y, irisRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

        //draw pupil
        let pupil_dx = mouse.x - this.x;
        let pupil_dy = mouse.y - this.y;
        theta = Math.atan2(pupil_dy, pupil_dx);
        let pupilRadius = this.radius / 2.5;
        let pupil_x = this.x + Math.cos(theta) * this.radius / 1.9;
        let pupil_y = this.y + Math.sin(theta) * this.radius / 1.9;

        ctx.beginPath();
        ctx.arc(pupil_x, pupil_y, pupilRadius, 0, Math.PI * 2, true);
        ctx.fillStyle = "black";
        ctx.fill();
        ctx.closePath();

        //draw pupil reflection
        ctx.beginPath();
        ctx.arc(pupil_x - pupilRadius / 3, pupil_y - pupilRadius / 3, pupilRadius / 2, 0, Math.PI * 2, true);
        ctx.fillStyle = "rgba(255, 255, 255, .1)";
        ctx.fill();
        ctx.closePath();
    }
}

function init() {
    eyes = [];
    let overlapping = false;
    let numberOfEyes = 45;
    let protection = 10000;
    let counter = 0;

    while (eyes.length < numberOfEyes && counter < protection) {
        let eye = {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.floor(Math.random() * 100) + 5
        }
        overlapping = false;
        for (let i = 0; i < eyes.length; i++) {
            let previousEye = eyes[i];
            let dx = eye.x - previousEye.x;
            let dy = eye.y - previousEye.y;
            let distance = Math.sqrt(dx * dx + dy * dy);
            if (distance < (eye.radius + previousEye.radius)) {
                overlapping = true;
                break;
            }
        }
        if (!overlapping) {
            eyes.push(new Eye(eye.x, eye.y, eye.radius));
        }
        counter++;
    }
}

function animate() {
    requestAnimationFrame(animate);
    ctx.fillStyle = "rgba(0, 0, 0, .25)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < eyes.length; i++) {
        eyes[i].draw();
    }

}

init();
animate();

window.addEventListener("resize", function () {
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    init();
})

const wrapper = document.getElementById("site-wrapper");
const wrapper2 = document.getElementById("project-wrapper");
const wrapper3 = document.getElementById("stories-wrapper");
const wrapper4 = document.getElementById("collections-wrapper");
const nav = document.getElementById("navbar")
const item1 = document.getElementById("item1");
const item2 = document.getElementById("item2");
const item3 = document.getElementById("item3");
const item4 = document.getElementById("item4");

item1.addEventListener("click", function () {
    canvas.classList.add("swiping-right");
    wrapper2.classList.add("swiping-right");
    setTimeout(function () {
        nav.classList.add("navhide");
    }, 500);
});

item2.addEventListener("click", function () {
    canvas.classList.add("swiping");
    wrapper.classList.add("swiping");
    setTimeout(function () {
        nav.classList.add("navhide");
    }, 500);
});

item3.addEventListener("click", function () {
    canvas.classList.add("swiping-down");
    wrapper3.classList.add("swiping-down");
    setTimeout(function () {
        nav.classList.add("navhide");
    }, 500);
});

item4.addEventListener("click", function () {
    canvas.classList.add("swiping-left");
    wrapper4.classList.add("swiping-left");
    setTimeout(function () {
        nav.classList.add("navhide");
    }, 500);
});
