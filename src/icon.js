class Icon {
    constructor(name, imgSrc, xOfset, yOfset) {
        this.name = name;
        this.img = new Image();
        this.img.src = imgSrc;
        this.xOfset = xOfset;
        this.yOfset = yOfset;
    }
}