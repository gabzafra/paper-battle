class Icon {
    constructor(name, xOfset, yOfset) {
        this.name = name;
        this.img = game.assets.icons[this.name];
        this.xOfset = xOfset;
        this.yOfset = yOfset;
    }
}