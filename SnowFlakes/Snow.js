class Snow extends BaseClass {
    constructor(x,y){
        super(x,y,50,50);
        this.image = loadImage("snow4.webp");
        this.animation = loadAnimation("snow5.webp","snow4.webp","snow51.webp");

    }

 display() {

    super.display();
 }
}