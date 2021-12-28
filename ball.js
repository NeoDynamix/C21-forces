class Ball {

    constructor(x,y,r){
        let options = {
            restitution: 0.95,
            isStatic:false
        }
        this.body = Bodies.circle(x,y,r,options)
        World.add(world,this.body)
        this.r = r
    }

    display(){
        var pos = this.body.position;
        push();
        ellipseMode(RADIUS)
        stroke(255);
        fill("white")
        ellipse(pos.x,pos.y,this.r,this.r)
        pop();
    }
}