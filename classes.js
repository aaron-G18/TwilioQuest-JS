class Materializer {
    constructor(target) {
        this.target = target,
            this.activated = false,
            this.activate = () => {
                this.activated = true;
            },
            this.materialize = () => {
                if (this.activated === true) {
                    return this.target;
                };
            }
    }
}