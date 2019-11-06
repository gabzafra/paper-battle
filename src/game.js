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
    scene: undefined,
    arena : undefined,
    init: () => {
        game.canvas = document.getElementById("canvas");
        game.ctx = game.canvas.getContext('2d');
        window.addEventListener("resize", (e) => game.updateCanvasSize());
        game.updateCanvasSize();
        game.background.changeBackground(game.canvas);
        game.createDecks();
        game.createHeroes(1, 2, 3);
        game.createMonsters(4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16);
        game.scene = "start";
        game.drawStartScreen();
        window.addEventListener("click", game.clickOnStart);
    },

    updateCanvasSize: () => {
        game.width = window.innerWidth;
        game.height = window.innerHeight;
        game.canvas.width = game.width;
        game.canvas.height = game.height;
    },

    createDecks: () => {
        game.decksArray = deckCollection.map(deck => {
            let cardsArray = deck.cards.map(id => {
                let newCard = cards.filter(item => item.id === id)[0];
                return new Card(game.ctx, newCard.id, newCard.name, newCard.src, newCard.icons);
            })
            return new Deck(deck.id, deck.name, cardsArray);
        });
    },

    createHeroes: (...id) => {
        game.heroArray = id.map(id => {
            let newHero = heroes.filter(item => item.id === id)[0];
            let deckRef = game.decksArray.filter(item => item.id === id)[0];
            return new Hero(game.ctx, newHero.id, newHero.name, newHero.life, newHero.src, deckRef);
        });

    },

    createMonsters: (...id) => {
        game.monsterArray = id.map(id => {
            let newMonster = monsters.filter(item => item.id === id)[0];
            let deck = game.decksArray.filter(item => item.id === id)[0];
            return new Monster(game.ctx, newMonster.id, newMonster.name, newMonster.life, newMonster.src, deck);
        });
    },
    drawStartScreen: () => {
        let idCounter = 1;
        let startPointX = (game.width - 185 * game.heroArray.length) / 2;
        let startPointY = (game.height - 250) / 3;
        game.ctx.beginPath();
        game.ctx.lineWidth = 5;
        game.ctx.strokeStyle = '#666';
        game.ctx.font = '80px MedievalSharp';
        game.ctx.textAlign = 'center';
        game.ctx.fillStyle = '#fff';
        game.ctx.strokeText("Choose Your Hero", game.width / 2, game.height / 2 + 150);
        game.ctx.fillText("Choose Your Hero", game.width / 2, game.height / 2 + 150);
        game.ctx.closePath();
        game.heroArray.forEach(hero => {
            hero.drawStartHero(startPointX, startPointY);
            game.sceneZones.push(new Hotzone(idCounter, startPointX, startPointY, 175, 250));
            idCounter++;
            startPointX += 185;
        });
    },
    clickOnStart: (event) => {
        let clickedZone = game.clickScene(game.scene, event.x, event.y);
        if (clickedZone.length > 0) {
            window.removeEventListener("click", game.clickOnStart);
            game.startCombat(game.heroArray.filter(hero => hero.id === clickedZone[0].id)[0]);
            game.background.changeBackground(game.canvas);
        }
    },
    clickOnCombat: (event) => {
        let clickedZone = game.clickScene(game.scene, event.x, event.y);
        if (clickedZone.length > 0) {
            window.removeEventListener("click", game.clickOnCombat);
            game.arena.doFigth(clickedZone[0].id);
        }
    },
    clickScene: (currentScene, x, y) => {
        switch (currentScene) {
            case "start":
                return game.sceneZones.filter(zone => zone.haveCollided(x, y));
                break;
            case "combat":
                return game.sceneZones.filter(zone => zone.haveCollided(x, y));
                break;
            case "select":
                //TODO cuando click en pantalla elegir carta
                break;
        }
    },
    startCombat: (clickedHero) => {
        game.scene = "combat";
        game.arena = new Arena(game.ctx, clickedHero, game.monsterArray,game.width,game.height);
        game.sceneZones = game.arena.drawArena();
        window.addEventListener("click", game.clickOnCombat);
    }

}