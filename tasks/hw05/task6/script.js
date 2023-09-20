console.log(typeof "")

let variable
console.log(typeof variable)

console.log(typeof true, typeof false)

console.log(typeof confirm('Are you agree?'))

function checkParse(str) {

	console.log(`parseInt(${str}) value: ${parseInt(str)}, datatype: ${typeof parseInt(str)}`);

	console.log(`parseFloat(${str}) value: ${parseFloat(str)}, datatype: ${typeof parseFloat(str)}`);

}

checkParse(15.5);
checkParse('12asdf');
checkParse('1024.34asdf');
checkParse(7.82);
checkParse('asdf');
checkParse('');
checkParse(null);
checkParse(undefined);
