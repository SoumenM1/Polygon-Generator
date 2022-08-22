

const canvas = document.getElementById("canvas")
const ctx = canvas.getContext('2d')

const input = document.getElementById("input");
const circleradius = 200;


// ctx.stroke()

function show() {
    const n = input.value;
    if (n > 2) {
        ctx.clearRect(0, 0, 450, 430)
        var angle = 2 * Math.PI / n;

        ctx.beginPath()
        ctx.moveTo(210 + circleradius, 210)
        for (let i = 1; i < n; i++) {
            ctx.lineTo(210 + circleradius * Math.cos(angle * i), 210 - circleradius * Math.sin(angle * i))
        }

        ctx.closePath()
        ctx.strokeStyle = 'cyan';//`rgb(${parseInt(Math.random()*250)},${parseInt(Math.random()*250)},${parseInt(Math.random()*250)})`
        ctx.lineWidth = '5'
        ctx.stroke()
        ctx.closePath()

    }
}

ctx.font = '20px monospace'
ctx.fillStyle = 'cyan'
// ctx.fillText("@SoumenM",3,445,100)