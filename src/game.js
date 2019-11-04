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
        //todo blucle forEach para el array deckCollection
        let testCard = new Card(this.ctx, cards[1].name,cards[1].src,cards[1].icons);
        testCard.drawCardInPosition(100,100);
    }
}