const game = {
    canvas: undefined,
    ctx: undefined,
    width: undefined,
    height: undefined,
    fps: 60,
    framesCounter: 0,
    heroArray : [],
    monsterArray : [],
    decksArray : [],
    init: () => {
        window.addEventListener("click", (e) => console.log(`X:${e.x} Y:${e.y}`));   
        this.canvas = document.getElementById("canvas");
        this.ctx = this.canvas.getContext('2d');
        window.addEventListener("resize", (e) => game.updateCanvasSize());
        game.updateCanvasSize();
        game.createDecks();
        game.createHeroes(1,2,3);
        game.createMonsters(4,5,6,7,8,9,10,11,12,13,14,15,16);

        //---->
    },

    updateCanvasSize: () => {
        this.width = window.innerWidth;
        this.height = window.innerHeight;
        this.canvas.width = this.width;
        this.canvas.height = this.height;
    },

    createDecks: () => {
        decksArray = deckCollection.map(deck => {
            let cardsArray = deck.cards.map(id => {
                let newCard = cards.filter(item => item.id === id)[0];
                return new Card(this.ctx, newCard.name,newCard.src,newCard.icons);    
            })
            return new Deck(deck.id,deck.name,cardsArray);
        });
    },

    createHeroes: (...id) => {
        heroArray = id.map(id => {
            let newHero = heroes.filter(item=>item.id===id)[0];
            let deckRef = decksArray.filter(item=>item.id===id)[0];
            return new Hero(this.ctx,newHero.id,newHero.name,newHero.life,newHero.src,deckRef);
        });
    },

    createMonsters: (...id) => {
        monsterArray = id.map(id => {
            let newMonster = monsters.filter(item=>item.id===id)[0];
            let deck = decksArray.filter(item=>item.id===id)[0];
            return new Monster(this.ctx,newMonster.id,newMonster.name,newMonster.life,newMonster.src,deck);
        });
        console.log(monsterArray);
    }
}