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

const move = () => {

    let newToy = Object.assign({}, toy);

    switch (toy.f){
        case 'NORTH' :
            newToy.y = toy.y + 1;
            break;
        case 'EAST':
            newToy.x = toy.x + 1;
            break;
        case 'SOUTH':
            newToy.y = toy.y -1;
            break;
        case 'WEST':
            newToy.x = toy.x - 1;
            break;
    }

    if(validateNumber(newToy.x) && validateNumber(newToy.y) && validateDirection(newToy.f)){
        toy = newToy;
    }
    
    return toy;
}

module.exports = {
    validateNumber,
    validateDirection,
    clear,
    place,
    move
}