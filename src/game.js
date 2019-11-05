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
        let startPointX = (this.width - 185 * this.heroArray.length)/2;
        let startPointY = (this.height - 250)/3;
        this.heroArray.forEach(hero => {
            hero.drawHero(startPointX,startPointY);
        });
    }
}