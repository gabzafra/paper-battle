class Hero {
    constructor(ctx, id, name, life, imgSrc, deckRef) {
        this.ctx = ctx;
        this.id = id;
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
        this.deck = deckRef;
        this.life = life;
    }

    setOwnDeck(id){
        this.deck = JSON.parse(JSON.stringify(this.deck));
    }
    drawHero(posX, posY){
        //TODO
    }
}