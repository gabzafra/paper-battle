class Arena {
    constructor(ctx, hero, monstersArray, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.w = gameWidth;
        this.h = gameHeight;
        this.hero = hero;
        this.monster = monstersArray[this.randomInt(0, monstersArray.length - 1)];
        this.heroHand = this.hero.deck.drawInitialHand();
        this.monsterHand = this.monster.deck.drawCard();
        this.handStartX = (this.w - 1365) / 2 + 225;
        this.handStartY = 30;
        this.legendIcons = icons.map(icon => {
            let newImg = new Image();
            newImg.src = icon.src;
            return {
                text: icon.text,
                img: newImg
            };
        });
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
    drawArena() {
        let handOffset = this.handStartX;
        let zonesArray = [];
        this.ctx.clearRect(0, 0, this.w, this.h);
        this.ctx.lineWidth = 4;
        this.ctx.fillStyle = `#ffe0a0`;
        this.ctx.strokeStyle = `#000`;
        this.ctx.fillRect((this.w - 1365) / 2 + 215, 20, 935, 650);
        this.ctx.strokeRect((this.w - 1365) / 2 + 215, 20, 935, 650);
        this.drawLegend();
        this.ctx.lineWidth = 1;
        this.hero.drawHero((this.w - 1365) / 2, 410);
        this.monster.drawMonster((this.w - 1365) / 2 + 1185, 410);
        this.heroHand.forEach((card, idx) => {
            card.drawCardInPosition(handOffset, this.handStartY);
            zonesArray.push(new Hotzone(idx, handOffset, this.handStartY, 175, 250))
            handOffset += 185;
        });

        return zonesArray;
    }
    drawLegend() {
        let x0 = (this.w - 1365) / 2;
        let y0 = 690;
        this.ctx.lineWidth = 4;
        this.ctx.fillStyle = `#ffe0a0`;
        this.ctx.strokeStyle = `#000`;
        this.ctx.fillRect(x0, y0, 1365, 100);
        this.ctx.strokeRect(x0, y0, 1365, 100);
        x0 += 40;
        y0 += 10;
        let rowFlip = 1;
        this.legendIcons.forEach(icon => {
            if(rowFlip === 6){
                x0 = 40 + (this.w - 1365) / 2;
                y0 +=50;
            } 
            this.ctx.drawImage(icon.img, x0, y0, 30, 30);
            this.ctx.beginPath();
            this.ctx.font = '14px MedievalSharp';
            this.ctx.textAlign = 'left';
            this.ctx.fillStyle = '#000';
            this.ctx.fillText(icon.text,x0+40,y0+20);
            this.ctx.closePath();
            x0+=260;
            rowFlip++;
        })
    }
}