class Hero {
    constructor(ctx, id, name, life, deckRef) {
        this.ctx = ctx;
        this.id = id;
        this.name = name;
        this.img = game.assets.heroes[this.name];
        this.deck = deckRef;
        this.life = life;
        this.width = 175;
        this.height = 250;
    }

    setOwnDeck(id) {
        this.deck = JSON.parse(JSON.stringify(this.deck));
    }
    drawStartHero(posX, posY) {
        this.ctx.save();
        this.posX = posX;
        this.posY = posY;
        this.ctx.fillStyle = `#fff`;
        this.ctx.strokeStyle = `#000`;
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.rect(this.posX + 10, this.posY + 19, this.width - 20, this.height - 25);
        this.ctx.stroke();
        this.ctx.drawImage(this.img, this.posX + 10, this.posY + 19, this.width - 20, this.height - 25)
        this.ctx.beginPath();
        this.ctx.font = '15px MedievalSharp';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(this.name, this.posX + this.width / 2, this.posY + 16);
        this.ctx.closePath();
        this.ctx.restore();
    }
    drawHero(posX, posY) {
        this.ctx.save();
        this.posX = posX;
        this.posY = posY;
        this.ctx.fillStyle = `#fff`;
        this.ctx.strokeStyle = `#000`;
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.rect(this.posX + 10, this.posY + 19, this.width - 20, this.height - 25);
        this.ctx.stroke();
        this.ctx.drawImage(this.img, this.posX + 10, this.posY + 19, this.width - 20, this.height - 25)
        this.ctx.beginPath();
        this.ctx.font = '15px MedievalSharp';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(this.name, this.posX + this.width / 2, this.posY + 16);
        this.ctx.closePath();
        this.ctx.restore();
    }
}