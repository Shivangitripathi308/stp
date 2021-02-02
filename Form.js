class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton('reset');
      this.input1 = createInput('girl/boy')
    }
    hide(){
      this.greeting.hide();
      this.button.hide();
      this.input.hide();
      this.title.hide();
      this.input1.hide();
    }
  
    display(){

        this.title.html("SAVE THE PRINCESS!!");
        this.title.position(350, 50);
        this.title.style('font-size', '70px');
        this.title.style('color', 'Black');
    
        
        this.input.position(550,400);
        this.input.style('width', '200px');
        this.input.style('height', '20px');
        this.input.style('background', 'lavender');
    
        this.button.position(560,500);
        this.button.style('width', '200px');
        this.button.style('height', '40px');
        this.button.style('background', 'lightpink');
    
        this.reset.position(900, 660);
        this.reset.style('width', '100px');
        this.reset.style('height', '30px');
        this.reset.style('background', 'lightpink');
    
        this.input1.position(550,450);
        this.input1.style('width', '200px');
        this.input1.style('height', '20px');
        this.input1.style('background', 'lavender');
         
  
  
  
  
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        this.input1.hide();
        player.name = this.input.value();
        playerCount+=1;
        player.index = playerCount;
        player.update();
        player.updateCount(playerCount);
        this.greeting.html("Hello " + player.name)
        this.greeting.position(displayWidth/2 - 70, displayHeight/4);
      });
      this.reset.mousePressed(()=>{
  
        player.updateCount(0)
        game.update(0)
      })
  
    }
  }
  
  


      