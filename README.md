Toy Robot Simulator
===========
#### coding challenge

## Introduction
This is a toy robot simulator. For detailed instructions please scroll down to challenge specifications.

## Playing with the robot - quick version
Visit https://aniamakes.github.io/toy-robot/index.html to play with the robot!

## Running tests - quick version
Visit https://aniamakes.github.io/toy-robot/tests/RobotTestSuite.html to run the tests and see the results. 

## Playing with the robot and testing - locally

Visit https://github.com/AniaMakes/toy-robot to clone or download the project. Open index.html in the browser to play with the robot and tests/RobotTestSuite.html to run the tests and see the results. 

## Adding features
For ease of development this project comes with some basic linting rules thought eslint and a precommit hook. Those tools need to be installed via `npm install`. You may also prefer to add eslint extension to your editor. Tests are written in Jasmine.

## The future 
There is a lot of possibilities to make this experience much more pleasant for the user. This includes:

- if REPORT is called and the robot is not on the table the user should be told that this is the case. 
- make input case-insensitive
- add information for the user if the input is invalid.

As it is, the feature to remind the user what set of instructions was called has been implemented. This partially avoids the problem of the user submitting instructions that don't result in anything and not being able to tell if the instructions have been sent. 

## Specifications

- The application is a simulation of a toy robot moving on a square tabletop, of
dimensions 5 units x 5 units.
- There are no other obstructions on the table surface.
- The robot is free to roam around the surface of the table, but must be prevented from
falling to destruction. Any movement that would result in the robot falling from the
table must be prevented, however further valid movement commands must still be
allowed.

The application should be able to read in any one of the following commands:

PLACE X,Y,F

MOVE

LEFT

RIGHT

REPORT

- PLACE will put the toy robot on the table in position X,Y and facing NORTH, SOUTH,
EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the robot is a PLACE command, after that, any sequence
of commands may be issued, in any order, including another PLACE command. The
application should discard all commands in the sequence until a valid PLACE
command has been executed.
- MOVE will move the toy robot one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the robot 90 degrees in the specified direction without
changing the position of the robot.
- REPORT will announce the X,Y and F of the robot. This can be in any form, but
standard output is sufficient.
- A robot that is not on the table should ignore the MOVE, LEFT, RIGHT and REPORT
commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

### Constraints:
- The toy robot must not fall off the table during movement. This also includes the initial
placement of the toy robot.
- Any move that would cause the robot to fall must be ignored.