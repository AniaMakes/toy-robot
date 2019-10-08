
let toy = {
	x: null,
	y: null,
	f: null
};

// eslint-disable-next-line
const clear = () => {
	return toy = {
		x: null,
		y: null,
		f: null
	};
};

const validateDirection = (direction) => {
	return direction === "NORTH" || direction === "EAST" || direction === "SOUTH" || direction === "WEST";
};

const validateNumber = (number) => {
	return Number(number) >= 0 && Number(number) <= 4;
};

const place = (x, y, f) => {
	if(validateNumber(x) && validateNumber(y) && validateDirection(f)){        
		toy = {
			x: Number(x),
			y: Number(y),
			f: f
		};
	}
	return toy;
};

const move = () => {

	let newToy = Object.assign({}, toy);

	switch (toy.f){
	case "NORTH" :
		newToy.y = toy.y + 1;
		break;
	case "EAST":
		newToy.x = toy.x + 1;
		break;
	case "SOUTH":
		newToy.y = toy.y -1;
		break;
	case "WEST":
		newToy.x = toy.x - 1;
		break;
	}

	if(validateNumber(newToy.x) && validateNumber(newToy.y) && validateDirection(newToy.f)){
		toy = newToy;
	}
    
	return toy;
};

const right = () => {    
	switch (toy.f){
	case "NORTH" :
		toy.f = "EAST";
		break;
	case "EAST":
		toy.f = "SOUTH";
		break;
	case "SOUTH":
		toy.f = "WEST";
		break;
	case "WEST":
		toy.f = "NORTH";
		break;
	}

	return toy;
};

const left = () => {
	switch (toy.f){
	case "NORTH" :
		toy.f = "WEST";
		break;
	case "EAST":
		toy.f = "NORTH";
		break;
	case "SOUTH":
		toy.f = "EAST";
		break;
	case "WEST":
		toy.f = "SOUTH";
		break;
	}

	return toy;

};

const report = () => {
	const display = document.getElementById("robot-position");
	display.innerHTML = toy.x ? `BEEP! BOP! My position is ${toy.x},${toy.y},${toy.f}` : "BEEP! BOP! UH! OH! I'M NOT ON THE BOARD. USE THE PLACE COMMAND TO PLACE ME ON THE BOARD!";

	return toy;
};

// eslint-disable-next-line
const instruct = (e) => {
	const input = document.getElementById("instructions");
	const instructions = input.value;
	const list = instructions.split(/\n/);

	list.forEach( function(i) {
		if(i.startsWith("PLACE")){
			const parts = i.split(" ");
			const directions = parts[1].split(",");        
			place(directions[0], directions[1], directions[2]);
		}

		switch(i){
		case "MOVE":
			move();
			break;
		case "RIGHT":
			right();
			break;
		case "LEFT":
			left();
			break;
		case "REPORT":
			report();
			break;
		}

	});

	const reminder = document.getElementById("just-run");
	reminder.innerHTML = `You've just run the following set of instructions: ${list.join("; ")}`;
};   
