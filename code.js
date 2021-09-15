var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["a5d98886-4ed3-4d8d-8669-7df99d20d7e2"],"propsByKey":{"a5d98886-4ed3-4d8d-8669-7df99d20d7e2":{"name":"animalhead_chicken_1","sourceUrl":null,"frameSize":{"x":286,"y":394},"frameCount":1,"looping":true,"frameDelay":12,"version":"VpPEUwvH3btQv0NZdBGcgWeOeIeqaJ3S","categories":["animals"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":286,"y":394},"rootRelativePath":"assets/a5d98886-4ed3-4d8d-8669-7df99d20d7e2.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----


var playerPaddle= createSprite(390,200,10,100);
    playerPaddle.shapeColor="blue";
    var computerPaddle= createSprite(10,200,10,100);
    computerPaddle.shapeColor="red";
    var ball= createSprite(200,200,10,10);
    ball.shapeColor="yellow";
   


function draw() {
  background(220);
  
  if (keyDown("up")) {
    playerPaddle.y=playerPaddle.y-10;
  }
  
  if (keyDown("down")) {
    playerPaddle.y=playerPaddle.y+10;
  }
  

  draw_net();
    
  
  
  if(keyDown("space"))
  {
     ball.velocityX=6;
     ball.velocityY=7;
  }
  
    if(keyDown("r"))
  {
   reset();
  }
  computerPaddle.y=ball.y;

    
  //creating line
  // line(200,0,       200, 10)
  // line(200,0+20,    200, 0+10+20)
  // line(200,0+20+20 ,200, 0+10+20+20)
  //line(200,num,200,num+20)
  
  
  createEdgeSprites();
  ball.bounceOff(topEdge);
  ball.bounceOff(bottomEdge);
  ball.bounceOff(computerPaddle);
  ball.bounceOff(playerPaddle);
  drawSprites();
  
}

function reset(){
  ball.setVelocity(0,0);
  ball.x = 200;
  ball.y = 200;
}

function draw_net(){

  for (var i = 0 ; i <= 400 ; i += 20 ){
    line(200,i,200,i+10);
  }
}
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
