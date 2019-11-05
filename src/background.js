class Background {
    constructor(arr) {
        this.imageArray = arr;
    }

    changeBackground(elemDOM) {
        elemDOM.style.backgroundImage = `url('${this.imageArray[this.randomInt(0,this.imageArray.length-1)].src}')`;
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
}