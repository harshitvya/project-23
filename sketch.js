var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var rect1, rect2, rect3;
var r = 1,
    h = 0,
    gm = 1;

function preload() {
    helicopterIMG = loadImage("helicopter.png")
    packageIMG = loadImage("package.png")
}

function setup() {
    createCanvas(800, 500);
    rectMode(CENTER);


    rect1 = createSprite(400, 460, 150, 20);
    rect2 = createSprite(400 + 65, 425, 20, 50);
    rect3 = createSprite(400 - 65, 425, 20, 50);

    rect1.shapeColor = "red";
    rect2.shapeColor = "red";
    rect3.shapeColor = "red";



    packageSprite = createSprite(width / 2, 80, 10, 10);
    packageSprite.addImage(packageIMG)
    packageSprite.scale = 0.2;

    helicopterSprite = createSprite(width / 2, 100, 10, 10);
    helicopterSprite.addImage(helicopterIMG)
    helicopterSprite.scale = 0.6;

    groundSprite = createSprite(width / 2, height - 15, width, 30);
    groundSprite.shapeColor = color("green");


    engine = Engine.create();
    world = engine.world;


    var g = {
        isStatic: true,
        restitution: 0.7
    }

    packageBody = Bodies.circle(width / 2, 100, 5, g);
    World.add(world, packageBody);


    //Create a Ground

    ground = Bodies.rectangle(width / 2, height - 55, width, 30, g);

    World.add(world, ground);

    Engine.run(engine);

}


function draw() {
    rectMode(CENTER);
    ellipseMode(RADIUS);
    background(0);
    packageSprite.x = packageBody.position.x;
    packageSprite.y = packageBody.position.y;
    if (keyDown("down")) {
        Matter.Body.setStatic(packageBody, false);
    }
    if (keyDown("left")) {
        helicopterSprite.x -= 5;
    }
    if (keyDown("right")) {
        helicopterSprite.x += 5;
    }

    if (gm === 1) {
        packageSprite.x = helicopterSprite.x;
    }

    drawSprites();

}