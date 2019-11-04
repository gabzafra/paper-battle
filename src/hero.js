class Hero {
    constructor(ctx, name, imgSrc, deck) {
        this.ctx = ctx;
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
        this.deck = deck;
        this.life = 5;
    }

    drawHero(posX, posY){
        
    }
}