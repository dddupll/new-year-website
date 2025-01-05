const canvas = document.getElementById('snowCanvas');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

class Snowflake {
    constructor() {
        this.x = Math.random()  canvas.width;
        this.y = Math.random()  -200;
        this.size = Math.random()  3 + 2;
        this.speed = Math.random()  2 + 1;
    }

    update() {
        this.y += this.speed;
        if (this.y  canvas.height) {
            this.y = -this.size;
            this.x = Math.random()  canvas.width;
        }
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI  2);
        ctx.fillStyle = 'white';
        ctx.fill();
    }
}

const snowflakes = [];
for (let i = 0; i  100; i++) {
    snowflakes.push(new Snowflake());
}

function animate() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    snowflakes.forEach(snowflake = {
        snowflake.update();
        snowflake.draw();
    });
    requestAnimationFrame(animate);
}

animate();