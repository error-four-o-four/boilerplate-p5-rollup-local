import 'p5';
import 'p5.ac';

let i = 0;

window.setup = () => {
	createCanvas({});
};

window.draw = () => {
	background(i++ % 255);
};