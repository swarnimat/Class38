class Game {
  constructor() {}

  getState() {
    var gameStateRef = database.ref("gameState");
    gameStateRef.on("value", function(data) {
      gameState = data.val();
    });
  }
  update(state) {
    database.ref("/").update({
      gameState: state
    });
  }

  async start() {
    if(gameState == 0){
    player = new Player();
    var playerCountRef = await database.ref('playerCount').once("value");

    if(playerCountRef.exists()){
    playerCount= playerCountRef.val();
    playerCount = player.getCount();
    }
    form = new Form();
    form.display();
  }

    car1 = createSprite(100,200);
    car2 = createSprite(300,200);
    car3 = createSprite(500,200);
    car4 = createSprite(700,200);
    cars = [car1,car2,car3,car4];

    /*car1 = createSprite(width / 2 - 50, height - 100);
    car1.addImage("car1", car1_img);
    car1.scale = 0.07;

    car2 = createSprite(width / 2 + 100, height - 100);
    car2.addImage("car2", car2_img);
    car2.scale = 0.07;

    cars = [car1, car2];*/
  }


 /* handleElements() {
    form.hide();
    form.titleImg.position(40, 50);
    form.titleImg.class("gameTitleAfterEffect");
  }*/

  play() {
    form.hide();
    //this.handleElements();

    Player.getPlayersInfo();

    if (allPlayers !== undefined) {
      //index of the array
      var index = 0;
      var x = 0;
      var y =0;
      for (var plr in allPlayers) {
        //add 1 to the index for every loop
        index = index + 1;
        x = x+200;

        //use data form the database to display the cars in x and y direction
        //var x = allPlayers[plr].positionX;
         y = displayHeight - allPlayers[plr].distance;

        cars[index - 1].x = x;
        cars[index - 1].y = y;
      

      if(index == player.index){
        cars[index-1].shapeColor = "red";
        camera .position.x = displayWidth/2;
        camera .position.y = cars[index-1].y;

      }
    }
  }
      if (keyIsDown(UP_ARROW) && player.index !== null) {
        player.distance += 10;
        player.update();
      //this.handlePlayerControls();
      }
      drawSprites();
    }
  }

  
   

