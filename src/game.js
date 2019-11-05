const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    background: new Background(backgrounds),
    heroArray: [],
    monsterArray: [],
    decksArray: [],
    sceneZones: [],
    init: () => {
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener("resize", (e) => game.updateCanvasSize());
        game.updateCanvasSize();
        game.background.changeBackground(this.canvas);
        game.createDecks();
        game.createHeroes(1, 2, 3);
        game.createMonsters(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        game.drawStartScreen();
        


        window.addEventListener("click", (e) => console.log(`X:${e.x} Y:${e.y}`));
        //---->
    },

    updateCanvasSize: () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    createDecks: () => {
        this.decksArray = deckCollection.map(deck => {
            let cardsArray = deck.cards.map(id => {
                let newCard = cards.filter(item => item.id === id)[0];
                return new Card(this.ctx, newCard.name, newCard.src, newCard.icons);
            })
            return new Deck(deck.id, deck.name, cardsArray);
        });
    },

    createHeroes: (...id) => {
        this.heroArray = id.map(id => {
            let newHero = heroes.filter(item => item.id === id)[0];
            let deckRef = decksArray.filter(item => item.id === id)[0];
            return new Hero(this.ctx, newHero.id, newHero.name, newHero.life, newHero.src, deckRef);
        });

    },

    createMonsters: (...id) => {
        this.monsterArray = id.map(id => {
            let newMonster = monsters.filter(item => item.id === id)[0];
            let deck = decksArray.filter(item => item.id === id)[0];
            return new Monster(this.ctx, newMonster.id, newMonster.name, newMonster.life, newMonster.src, deck);
        });
    },
    drawStartScreen: () => {
        let idCounter = 1;
        let startPointX = (this.width - 185 * this.heroArray.length)/2;
        let startPointY = (this.height - 250)/3;
        this.heroArray.forEach(hero => {
            hero.drawHero(startPointX,startPointY);
            game.sceneZones.push(new Hotzone(idCounter,startPointX,startPointY,175,250));
            idCounter++;
            startPointX+=185;
        });
        this.ctx.beginPath();
        this.ctx.lineWidth = 5;
        this.ctx.strokeStyle = '#666';
        this.ctx.font = '80px MedievalSharp';
        this.ctx.textAlign = 'center';
        this.ctx.fillStyle = '#fff';
        this.ctx.strokeText("Choose Your Hero", this.width/2, this.height/2 + 150);
        this.ctx.fillText("Choose Your Hero", this.width/2, this.height/2 + 150);
        this.ctx.closePath();
    }
}