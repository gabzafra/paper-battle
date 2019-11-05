class Hotzone {
    constructor(id, x, y, w, h) {
        this.id = id;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
    }
    haveCollided(cX, cY) {
        if ((cX >= this.x && cX <= this.x + this.w) && (cY >= this.y && cY <= this.y + this.h)) {
            return true;
        } else {
            return false;
        }
    }
}