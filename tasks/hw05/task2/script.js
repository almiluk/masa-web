let height = +prompt('Enter your height in cm');
let weight = +prompt('Enter your weight in kg');

switch (true) {
	case height > 180 && weight < 90:
		console.log('You\'re tall, you should eat more');
		break;
	case height >= 160 && height <= 170 && weight < 80:
		console.log('You\'re height is great, why you\'re speaking about your weight?');
		break;
	case height < 160 && weight > 80:
		console.log('You\'re not tall, you should eat less');
		break;
	default:
		console.log('You\'re ok');
		break;
}