let toy = {
    x: null,
    y: null,
    f: null
}

const clear = () => {
    return toy = {
        x: null,
        y: null,
        f: null
    }
}

const validateDirection = (direction) => {
    return direction === "NORTH" || direction === "EAST" || direction === "SOUTH" || direction === "WEST"
}

const validateNumber = (number) => {
    return Number.isInteger(number) && number >= 0 && number <= 4
}

const place = (x, y, f) => {
    if(validateNumber(x) && validateNumber(y) && validateDirection(f)){
        toy = {
            x: x,
            y: y,
            f: f
        }
    }

    return toy;
}


module.exports = {
    validateNumber,
    validateDirection,
    clear,
    place
}