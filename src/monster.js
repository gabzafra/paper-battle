class Monster {
    constructor(ctx, id, name, life, imgSrc, deck) {
        this.ctx = ctx;
        this.id = id;
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
        this.deck = deck;
        this.life = life;
    }

    drawMonster(posX, posY){
        //TODO
    }
}