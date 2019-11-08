class Arena {
    constructor(ctx, hero, monstersArray, gameWidth, gameHeight) {
        this.ctx = ctx;
        this.w = gameWidth;
        this.h = gameHeight;
        this.hero = hero;
        this.heroCurrentLife = this.hero.life;
        this.monstersArray = monstersArray;
        this.monster = monstersArray[this.randomInt(0, monstersArray.length - 1)];
        this.monsterCurrentLife = this.monster.life;
        this.heroHand = this.hero.deck.drawInitialHand();
        this.monsterCard = this.monster.deck.drawCard();
        this.heroDiscardPile = [];
        this.monsterDiscardPile = [];
        this.handStartX = (this.w - 1365) / 2 + 225;
        this.handStartY = 30;
        this.heart = game.assets.icons["heart"];
        this.legendIcons = icons.filter(icon => icon.name !== "heart").map(icon => {
            return {
                text: icon.text,
                img: game.assets.icons[icon.name]
            };
        });

    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    newMonsterFight(){
        this.heroCurrentLife = this.hero.life;
        this.monster = this.monstersArray[this.randomInt(0, this.monstersArray.length - 1)];
        this.monsterCurrentLife = this.monster.life;
        this.heroHand = this.hero.deck.drawInitialHand();
        this.monsterCard = this.monster.deck.drawCard();
        this.heroDiscardPile = [];
        this.monsterDiscardPile = [];
        return this.drawArena();
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
        this.ctx.strokeStyle = `#c35`;
        this.ctx.lineWidth = 7;
        this.ctx.strokeRect((this.w - 1365) / 2 + 965, 410, 175, 250);
        this.ctx.strokeStyle = `#4a90e2`;
        this.ctx.strokeRect(this.handStartX, 410, 175, 250);
        this.ctx.lineWidth = 1;
        this.hero.drawHero((this.w - 1365) / 2, 410);
        this.monster.drawMonster((this.w - 1365) / 2 + 1185, 410);
        this.monsterCard.drawCardInPosition((this.w - 1365) / 2 + 965, 410);
        this.heroHand.forEach((card, idx) => {
            card.drawCardInPosition(handOffset, this.handStartY);
            zonesArray.push(new Hotzone(idx, handOffset, this.handStartY, 175, 250))
            handOffset += 185;
        });
        this.drawLifeMarkers();
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
            if (rowFlip === 6) {
                x0 = 40 + (this.w - 1365) / 2;
                y0 += 50;
            }
            this.ctx.drawImage(icon.img, x0, y0, 30, 30);
            this.ctx.beginPath();
            this.ctx.font = '16px MedievalSharp';
            this.ctx.textAlign = 'left';
            this.ctx.fillStyle = '#000';
            this.ctx.fillText(icon.text, x0 + 40, y0 + 20);
            this.ctx.closePath();
            x0 += 260;
            rowFlip++;
        })
    }

    drawLifeMarkers() {
        let offset = 0;
        Array(this.heroCurrentLife).fill().map(() => {
            this.ctx.drawImage(this.heart, ((this.w - 1365) / 2) + 145, 370 - offset, 30, 30);
            offset += 40;
        });
        offset = 0;
        Array(this.monsterCurrentLife).fill().map(() => {
            this.ctx.drawImage(this.heart, (this.w - 1365) / 2 + 1185, 370 - offset, 30, 30);
            offset += 40;
        });
    }
    doFigth(id) {
        let monsterStats = {
            life: this.monsterCurrentLife,
            breaker: false,
            furyLoss: 0,
            pDmg: 0,
            mDmg: 0,
            blockP: 0,
            blockM: 0,
            blockA: 0,
            healing: 0,
            discard: false,
            touched: false
        };
        let heroStats = {
            life: this.heroCurrentLife,
            breaker: false,
            draw: false,
            furyLoss: 0,
            pDmg: 0,
            mDmg: 0,
            blockP: 0,
            blockM: 0,
            blockA: 0,
            healing: false,
            discard: false,
            touched: false
        }
        let heroCard = this.heroHand.splice(id, 1)[0];
        let monsterCard = this.monsterCard;
        this.monsterCard = undefined;
        heroCard.drawCardInPosition(this.handStartX, 410);
        heroCard.tagList.forEach(tag => {
            switch (tag) {
                case "breaker":
                    heroStats.breaker = true;
                    break;
                case "draw":
                    heroStats.draw = true;
                    break;
                case "dmgself":
                    heroStats.furyLoss++;
                    break;
                case "fist":
                    heroStats.pDmg++;
                    break;
                case "magic":
                    heroStats.mDmg++;
                    break;
                case "blockF":
                    heroStats.blockP++;
                    break;
                case "blockM":
                    heroStats.blockM++;
                    break;
                case "blockA":
                    heroStats.blockA++;
                    break;
                case "drain":
                    heroStats.healing = true;
                    break;
            }
        });
        monsterCard.tagList.forEach(tag => {
            switch (tag) {
                case "breaker":
                    monsterStats.breaker = true;
                    break;
                case "discard":
                    monsterStats.discard = true;
                    break;
                case "dmgself":
                    monsterStats.furyLoss++;
                    break;
                case "fist":
                    monsterStats.pDmg++;
                    break;
                case "magic":
                    monsterStats.mDmg++;
                    break;
                case "blockF":
                    monsterStats.blockP++;
                    break;
                case "blockM":
                    monsterStats.blockM++;
                    break;
                case "blockA":
                    monsterStats.blockA++;
                    break;
                case "drain":
                    monsterStats.healing = true;
                    break;
            }
        });

        this.heroDiscardPile.push(heroCard);
        this.monsterDiscardPile.push(monsterCard);

        //monster combat

        if (monsterStats.breaker) {
            heroStats.blockP = heroStats.blockM = heroStats.blockA = 0;
        }
        if (monsterStats.furyLoss > 0) {
            monsterStats.life--;
        }
        if (monsterStats.pDmg > 0) {
            let fullArmor = heroStats.blockP + heroStats.blockA;
            if (monsterStats.pDmg > fullArmor) {
                monsterStats.pDmg -= fullArmor;
                heroStats.blockP = 0;
                heroStats.blockA = 0;
                heroStats.touched = true;
            } else {
                if (monsterStats.pDmg > heroStats.blockP) {
                    monsterStats.pDmg -= heroStats.blockP;
                    heroStats.blockP = 0;
                    let carry = monsterStats.pDmg;
                    monsterStats.pDmg -= heroStats.blockA;
                    heroStats.blockA -= carry;
                } else {
                    monsterStats.pDmg = 0;
                    heroStats.blockP = 0;
                }
            }
        }
        if (monsterStats.mDmg > 0) {
            let fullArmor = heroStats.blockM + heroStats.blockA;
            if (monsterStats.mDmg > fullArmor) {
                monsterStats.mDmg -= fullArmor;
                heroStats.blockM = 0;
                heroStats.blockA = 0;
                heroStats.touched = true;
            } else {
                if (monsterStats.mDmg > heroStats.blockM) {
                    monsterStats.mDmg -= heroStats.blockM;
                    heroStats.blockM = 0;
                    let carry = monsterStats.mDmg;
                    monsterStats.mDmg -= heroStats.blockA;
                    heroStats.blockA -= carry;
                } else {
                    monsterStats.mDmg = 0;
                    heroStats.blockM = 0;
                }
            }
        }

        heroStats.life -= monsterStats.pDmg + monsterStats.mDmg;
        if (heroStats.touched) {
            if (monsterStats.discard) {
                let cards = this.heroHand.length;
                if (cards > 0) {
                    if (cards = 1) {
                        this.heroDiscardPile.push(this.heroHand.pop());
                    } else {
                        this.heroDiscardPile.push(this.heroHand.splice(this.randomInt(0, cards - 1), 1));
                    }
                }
            }
            if (monsterStats.healing) {
                monsterStats.life += monsterStats.pDmg + monsterStats.mDmg;
            }
        }

        //hero combat

        if (heroStats.breaker) {
            monsterStats.blockP = monsterStats.blockM = monsterStats.blockA = 0;
        }
        if (heroStats.furyLoss > 0) {
            heroStats.life--;
        }
        if (heroStats.pDmg > 0) {
            let fullArmor = monsterStats.blockP + monsterStats.blockA;
            if (heroStats.pDmg > fullArmor) {
                heroStats.pDmg -= fullArmor;
                monsterStats.blockP = 0;
                monsterStats.blockA = 0;
                monsterStats.touched = true;
            } else {
                if (heroStats.pDmg > monsterStats.blockP) {
                    heroStats.pDmg -= monsterStats.blockP;
                    monsterStats.blockP = 0;
                    let carry = heroStats.pDmg;
                    heroStats.pDmg -= monsterStats.blockA;
                    monsterStats.blockA -= carry;
                } else {
                    heroStats.pDmg = 0;
                    monsterStats.blockP = 0;
                }
            }
        }
        if (heroStats.mDmg > 0) {
            let fullArmor = monsterStats.blockM + monsterStats.blockA;
            if (heroStats.mDmg > fullArmor) {
                heroStats.mDmg -= fullArmor;
                monsterStats.blockM = 0;
                monsterStats.blockA = 0;
                monsterStats.touched = true;
            } else {
                if (heroStats.mDmg > monsterStats.blockM) {
                    heroStats.mDmg -= monsterStats.blockM;
                    monsterStats.blockM = 0;
                    let carry = heroStats.mDmg;
                    heroStats.mDmg -= monsterStats.blockA;
                    monsterStats.blockA -= carry;
                } else {
                    heroStats.mDmg = 0;
                    monsterStats.blockM = 0;
                }
            }
        }

        monsterStats.life -= heroStats.pDmg + heroStats.mDmg;
        if (monsterStats.touched) {
            if (heroStats.healing) {
                heroStats.life += heroStats.pDmg + heroStats.mDmg;
            }
        }

        if (heroStats.draw) {
            this.heroDraw();
        }

        this.monsterCurrentLife = monsterStats.life;
        this.heroCurrentLife = heroStats.life;
        this.monsterDraw();
        this.heroDraw();

        setTimeout(() => {
            if (game.arena.heroCurrentLife <= 0) {
                setTimeout(()=>game.gameOver(),1000);
            } else if (game.arena.monsterCurrentLife <= 0) {
                this.hero.deck.restoreDeck(this.heroHand);
                this.hero.deck.restoreDeck(this.heroDiscardPile);
                this.monster.deck.restoreDeck(this.monsterDiscardPile);
                game.startSelect(this.hero,this.monster);
            } else {
                game.nextRound();
            }
        }, 1000);

    }

    heroDraw() {
        if (this.hero.deck.cardsArray.length === 0) {
            this.hero.deck.restoreDeck(this.heroDiscardPile);
        }
        if (this.heroHand.length < 5) {
            this.heroHand.push(this.hero.deck.drawCard());
        }
    }

    monsterDraw() {
        if (this.monster.deck.cardsArray.length === 0) {
            this.monster.deck.restoreDeck(this.monsterDiscardPile);
        }
        this.monsterCard = this.monster.deck.drawCard();
    }
}