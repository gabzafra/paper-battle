class Card {
    constructor(ctx, text, imgSrc, tagList) {
        this.ctx = ctx;
        this.text = text;
        this.img = new Image();
        this.img.src = imgSrc;
        this.tagList = tagList;
        this.width = 175;
        this.height = 250;
        this.posX = undefined;
        this.posY = undefined;
    }

    drawCardInPosition(posX, posY) {
        this.posX = posX;
        this.posY = posY;
        this.ctx.fillStyle = `#fff`;
        this.ctx.strokeStyle = `#000`;
        this.ctx.rect(this.posX, this.posY, this.width, this.height);
        this.ctx.fill();
        this.ctx.stroke();
        this.ctx.rect(this.posX + 10, this.posY + 17, this.width - 20, this.height / 2 - 5);
        this.ctx.stroke();
        this.img.onload = () => this.ctx.drawImage(this.img, this.posX + 10, this.posY + 17, this.width - 20, this.height / 2 - 5);
        this.ctx.font = '13px Arial';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(this.text, this.posX + this.width / 2, this.posY + 14);
        this.drawIcons();

    }

    drawIcons() {

        //todo usar ofsets en los arrays para el translate
        this.tagList.forEach(icon => {
            icon.img.onload = () => {
                this.ctx.save();
                this.ctx.translate(15+icon.xOfset, this.height * .60 + icon.yOfset);
                this.ctx.beginPath();
                this.ctx.arc(this.posX+15, this.posY+15, 15, 0, Math.PI * 2, true);
                this.ctx.closePath();
                this.ctx.clip();

                this.ctx.drawImage(icon.img, this.posX, this.posY, 30, 30);

                this.ctx.beginPath();
                this.ctx.arc(this.posX, this.posY, 15, 0, Math.PI * 2, true);
                this.ctx.clip();
                this.ctx.closePath();
                
                this.ctx.restore();
            }
        });


    }
}