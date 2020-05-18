class Vec3 {
    //constructor
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }

    add(v) {
        this.x += v.x;
        this.y += v.y;
        this.y += v.z;
    }

    sum() {
        return this.x + this.y + this.z;
    }
    
    max() {
        const num = [this.x, this.y, this.z];
        num.sort();
        return num[2];
    }
    
    mid() {
        const num = [this.x, this.y, this.z];
        num.sort();
        return num[1];
    }
    
    min() {
        const num = [this.x, this.y, this.z];
        num.sort();
        return num[0];
    }
}
