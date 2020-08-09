class TargetingSolution {
    constructor(targetObj) {
        this.x = targetObj.x,
            this.y = targetObj.y,
            this.z = targetObj.z,
            this.target = () => {
                return ("(" + this.x + ", " + this.y + ", " + this.z + ")");
            }
    };
};