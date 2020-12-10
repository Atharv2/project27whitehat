class rope
{
    constructor(body1,body2,offSetX,offsetY);
}
{
        this.offsetX=offsetX;
        this.offsetY=offsetY;
        var options={
          bodyA:body1,
          bodyB:body2,
          pointB:{x:this.offsetX,y:this.offsetY}
        }
          this.rope=constraint.create(options)
          World.add(world,this.rope)
    }

    display()
    {
     if(this.rope.bodyA){
        var bodyA= this.rope.bodyA.position;
        var bodyB = this.bodyB;
        strokeWeight(4);
        line(bodyA.x,bodyA.y,bodyB.x,bodyB.y);
     }
     rope1=new rope(ballObject1.body,groundObject.body,-ballDiameter*2,0)
    }
  
