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
        //game.createHeroes();
        //game.createMonsters();
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
    }
}