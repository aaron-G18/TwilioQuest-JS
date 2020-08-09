// let newColor = "red";

class Ducktypium {
    constructor(crystalColor) {
        if (crystalColor === "red" || crystalColor === "blue" || crystalColor === "yellow") {
            this.color = crystalColor; 
        } else {
            throw new Error("Error: invalid color. Color must be red, yellow, or blue");
        }
        this.calibrationSequence = [],
        this.refract = (colorInput) => {
            if (colorInput === "red" || colorInput === "blue" || colorInput === "yellow") {
                if (colorInput === this.color) {
                    return(colorInput)
                } else if (colorInput === "red" && this.color === "blue" || colorInput === "blue" && this.color === "red") {
                    return("purple")
                } else if (colorInput === "red" && this.color === "yellow" || colorInput === "yellow" && this.color === "red") {
                    return("orange")
                }  else if (colorInput === "blue" && this.color === "yellow" || colorInput === "yellow" && this.color === "blue") {
                    return("green")
                }
            } else {
                throw new Error("Error: invalid color. Color must be red, yellow, or blue");
            }
        },
        this.calibrate = (array) => {
            let sortedArr = array.sort();
            let multArr = sortedArr.map(a => a*3);
            this.calibrationSequence = multArr
        }
    };
};

// let test = new Ducktypium(newColor);