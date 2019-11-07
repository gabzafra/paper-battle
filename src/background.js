class Background {
    constructor(arr) {
        this.imageArray = arr;
    }

    changeBackground(elemDOM) {
        let choosen = this.randomInt(1,this.imageArray.length-1);
        elemDOM.style.backgroundImage = `url('${this.imageArray[choosen].src}')`;
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}