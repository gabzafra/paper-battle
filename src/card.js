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
        this.iconGrid = undefined;
        this.setupIconGrid();
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
        this.ctx.drawImage(this.img, this.posX + 10, this.posY + 17, this.width - 20, this.height / 2 - 5);
        this.ctx.beginPath();
        this.ctx.font = '13px MedievalSharp';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#000';
        this.ctx.fillText(this.text, this.posX + this.width / 2, this.posY + 14);
        this.ctx.closePath();
        this.drawIcons();

    }

    drawIcons() {

        this.iconGrid.forEach(icon => {
                this.ctx.save();
                this.ctx.translate(15 + icon.xOfset, this.height * .60 + icon.yOfset);
                this.ctx.drawImage(icon.img, this.posX, this.posY, 30, 30);
                this.ctx.restore();
        });


    }

    setupIconGrid() {
        let offSetPairs = [];
        switch (this.tagList.length) {
            case 1:
                offSetPairs = [{
                    x: 55,
                    y: 0
                }];
                break;
            case 2:
                offSetPairs = [{
                    x: 20,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }];
                break;
            case 3:
                offSetPairs = [{
                    x: 10,
                    y: 0
                }, {
                    x: 55,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }];
                break;
            case 4:
                offSetPairs = [{
                    x: 20,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }, {
                    x: 20,
                    y: 50
                }, {
                    x: 100,
                    y: 50
                }];
                break;
            case 5:
                offSetPairs = [{
                    x: 10,
                    y: 0
                }, {
                    x: 55,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }, {
                    x: 30,
                    y: 50
                }, {
                    x: 80,
                    y: 50
                }];
                break;
            case 6:
                offSetPairs = [{
                    x: 10,
                    y: 0
                }, {
                    x: 55,
                    y: 0
                }, {
                    x: 100,
                    y: 0
                }, {
                    x: 10,
                    y: 50
                }, {
                    x: 55,
                    y: 50
                }, {
                    x: 100,
                    y: 50
                }];
                break;
        }

        this.iconGrid = this.tagList.map(name => {
            let icon = icons.filter(elem => elem.name === name);
            let offsetPair = offSetPairs.shift();
            return new Icon(icon[0].name, icon[0].src, offsetPair.x, offsetPair.y);
        });
    }
}