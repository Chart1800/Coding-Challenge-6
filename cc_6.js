
<!-- U94741303-->

<!DOCTYPE html>

<html lang="en">
<head>
    <meta charset="utf-8" />
    <title>Bouncing Ball Animation Challenge</title>
    <style>        
        canvas {
            border: 1px solid black;
        }
    </style>
</head>
<body>
    <h1>Bouncing Ball Animation</h1>
    <!-- Set up HTML canvas -->
    <canvas id = "myCanvas" width="500" height="500" style="border:1px solid black"> </canvas>
    
    <script>

        // Set up JS canvas
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");

        // Create Ball constructor with properties
        // properties = x, y, radius, dx, dy, color
        class Ball {
            constructor (x, y, radius, dx, dy, color) {
                this.x = x;
                this.y = y;
                this.radius = radius;
                this.dx = dx;
                this.dy = dy;
                this.color = color;
            }

            // Method within Ball to draw on canvas
            draw() {
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
                ctx.fillStyle = this.color;
                ctx.fill();   
                ctx.closePath();
            }
            // Method w/ collision detection to reverse direction
            move() {
                // Reverse direction on collision with top or bottom
                if (this.x - this.radius < 0 || this.x + this.radius > canvas.width) {
                    this.dx = -this.dx;
                }
                if (this.y - this.radius < 0 || this.y + this.radius > canvas.height) {
                    this.dy = -this.dy;
                }
                // Change position
                this.x += this.dx;
                this.y += this.dy;
            }

        }
        //Test data: Ball start at x = 200, y = 160, radius = 20, dx = 2, dy = 2, color = red
        const myBall = new Ball(200, 160, 20, 2, 2, "red");
        myBall.draw();
        // Update ball position and redraw (animation)
        setInterval(function () {
            // Clear canvas
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Draw and move ball
            myBall.draw();
            myBall.move();
        }, 10);
    </script>
</body>
</html>