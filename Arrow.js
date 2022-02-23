class Arrow {
    constructor(x, y) {
        var options = {
            restitution: 0.8

        }
        this.body = Bodies.rectangle(x, y, 100, 50, options)
        World.add(world, this.body);
        this.w = 100;
        this.h = 50;
        this.image = loadImage("Arrow1.png");
    }

    display() {
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.w, this.h);
        pop();
    }
}