describe('Places the robot', () => {

    it('places the robot on board', () => {

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
        const placement = place(6, 7, 'EAST');
        const expectedPlacemnt = {
            x : null,
            y : null,
            f : null
        };

        expect(placement).toMatchObject(expectedPlacemnt);

    })

})