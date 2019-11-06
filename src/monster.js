class Monster {
    constructor(ctx, id, name, life, imgSrc, deck) {
        this.ctx = ctx;
        this.id = id;
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
        this.deck = deck;
        this.life = life;
        this.width = 175;
        this.height = 250;
    }

    drawMonster(posX, posY){
            this.posX = posX;
            this.posY = posY;
            this.ctx.fillStyle = `#fff`;
            this.ctx.strokeStyle = `#000`;
            this.ctx.rect(this.posX, this.posY, this.width, this.height);
            this.ctx.fill();
            this.ctx.stroke();
            this.ctx.rect(this.posX + 10, this.posY + 17, this.width - 20, this.height - 27);
            this.ctx.stroke();
            this.ctx.drawImage(this.img, this.posX + 10, this.posY + 17, this.width - 20, this.height - 27);
            this.ctx.beginPath();
            this.ctx.font = '13px MedievalSharp';
            this.ctx.textAlign = 'center';
            this.ctx.fillStyle = '#000';
            this.ctx.fillText(this.name, this.posX + this.width / 2, this.posY + 14);
            this.ctx.closePath();
    }
}