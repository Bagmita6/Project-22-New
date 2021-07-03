class Rope
{
    constructor(body1,body2, pointA,pointB)
{
    this.pointA=pointA
    this.pointB=pointB

    var options={
        bodyA:body1,
        bodyB:body2,
        pointB:{x:this.pointA, y:this.pointB}
    
    }
  
    con = Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con);

    con2 = Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con2);

    con3 = Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con3);

    con4 = Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con4);

    con5 = Matter.Constraint.create({
        pointA:{x:200,y:20},
        bodyB:bob,
        pointB:{x:0,y:0},
        length:100,
        stiffness:0.1
      });

    World.add(world,con5);

    }
}
