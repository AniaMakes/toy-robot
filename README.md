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
For ease of development this project comes with some basic linting rules thought eslint and a precommit hook. Those tools need to be installed via `npm install`. You may also prefer to add eslint extension to your editor. 

## The future 
There is a lot of possibilities to make this experience much more pleasant for the user. This includes:

- if REPORT is called and the robot is not on the table the user should be told that this is the case. 
- make input case-insensitive
- add information for the user if the input is invalid.

As it is, the feature to remind the user what set of instructions was called has been implemented - this partially avoids the problem of the user submitting instructions that don't result in anything and not being able to tell if the instructions have been sent. 