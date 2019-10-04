const { validateNumber, validateDirection, clear, place, move } = require('../index')

describe('Number validator works', () =>{
    it('passes a number that is positive and smaller than 5', () => {
        expect(validateNumber(3)).toBeTruthy();
    });

    it('fails a number that is less than 0 and more than 4', () => {
        expect(validateNumber(7)).toBeFalsy();
        expect(validateNumber(-2)).toBeFalsy();
    });

    it('fails not a number', () => {
        expect(validateNumber('cat')).toBeFalsy();
    });

})

describe('Direction validation works', () => {
    it('passes good directions', () => {
        expect(validateDirection('NORTH')).toBeTruthy();
        expect(validateDirection('EAST')).toBeTruthy();
        expect(validateDirection('SOUTH')).toBeTruthy();
        expect(validateDirection('WEST')).toBeTruthy();
    });

    it('fails bad directions', () =>{
        expect(validateDirection('cat')).toBeFalsy();
        expect(validateDirection('9')).toBeFalsy();
    })

})

describe('Places the robot', () => {

    it('places the robot on board', () => {
        clear();
        const placement = place(2, 1, 'NORTH');
        const expectedPlacemnt = {
            x : 2,
            y : 1,
            f : 'NORTH'
        };

        expect(placement).toMatchObject(expectedPlacemnt);
        }
    )

    it('does not place the robot if the coordinates are off-board', () => {
        clear();
        const placement = place(6, 7, 'EAST');
        const expectedPlacemnt = {
            x : null,
            y : null,
            f : null
        };

        expect(placement).toMatchObject(expectedPlacemnt);

    })

    it('ignores bad input in x', () => {
        const placement = place('cat', 2, 'EAST');
        const expectedPlacemnt = {
            x : null,
            y : null,
            f : null
        };

        expect(placement).toMatchObject(expectedPlacemnt);
    })

    it('ignores bad input in y', () => {
        clear();
        const placement = place(2, 'toy', 'EAST');
        const expectedPlacemnt = {
            x : null,
            y : null,
            f : null
        };

        expect(placement).toMatchObject(expectedPlacemnt);
    })

    it('ignores bad input in f', () => {
        
        const placement = place(1, 2, 'SKY');
        const expectedPlacemnt = {
            x : null,
            y : null,
            f : null
        };

        expect(placement).toMatchObject(expectedPlacemnt);
    })
})

describe('Moves the robot', () =>{
    it('moves the robot N', () => {
        place(2, 2, 'NORTH');
        const newPosition = move();
        const expectedPosition = {
            x: 2,
            y: 3,
            f: 'NORTH'
        }

        expect(newPosition).toMatchObject(expectedPosition);
    });

    it('moves the robot E', () => {
        place(2, 2, 'EAST');
        const newPosition = move();
        const expectedPosition = {
            x: 3,
            y: 2,
            f: 'EAST'
        }

        expect(newPosition).toMatchObject(expectedPosition);
    });

    it('moves the robot S', () => {
        place(2, 2, 'SOUTH');
        const newPosition = move();
        const expectedPosition = {
            x: 2,
            y: 1,
            f: 'SOUTH'
        }

        expect(newPosition).toMatchObject(expectedPosition);
    });

    it('moves the robot W', () => {
        place(2, 2, 'WEST');
        const newPosition = move();
        const expectedPosition = {
            x: 1,
            y: 2,
            f: 'WEST'
        }

        expect(newPosition).toMatchObject(expectedPosition);
    });

    it('does not move if robot would fall off the table', () => {
        place(0, 0, 'SOUTH');
        const newPosition = move();
        const expectedPosition = {
            x: 0,
            y: 0,
            f: 'SOUTH'
        }

        expect(newPosition).toMatchObject(expectedPosition);
    })
})