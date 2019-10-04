let toy = {
    x: null,
    y: null,
    f: null
}

const validateNumber = (number) => {
    return Number.isInteger(number) && number >= 0 && number <= 4
}

const place = (x, y, f) => {
    
}


module.exports = {
    validateNumber,
    place
}