class Deck {
    constructor(id, name, cardsArray) {
        this.id = id;
        this.name = name;
        this.cardsArray = cardsArray;
        this.shuffleCards();
    }

    shuffleCards() {
        let currentIndex = this.cardsArray.length,
            temporaryValue, randomIndex;
        while (0 !== currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex--;
            temporaryValue = this.cardsArray[currentIndex];
            this.cardsArray[currentIndex] = this.cardsArray[randomIndex];
            this.cardsArray[randomIndex] = temporaryValue;
        }
    }

    drawInitialHand() {
        return this.cardsArray.splice(0, 3);
    }

    drawCard() {
        return this.cardsArray.splice(0, 1)[0];
    }

    addCard(card) {
        this.cardsArray.push(card);
    }

    restoreDeck(discarded) {
        this.cardsArray = [...discarded];
        this.shuffleCards();
    }
}