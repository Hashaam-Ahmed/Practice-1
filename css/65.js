// JavaScript source code
let color="red";
if(color=="red"){
	console.log("Stop.Light color is red.");
}
else if(color=="yellow"){
	console.log("Drive slowly.Light color is yellow");
}
else if(color=="green"){
	console.log("Go.Light color is green.");
}
let size="XL";
if(size=="XL"){
	console.log("Price=250");
}
else if(size=="L"){
	console.log("Price=200");
}
else if(size=="M"){
	console.log("Price=100");
}
else{
	console.log("Price=50");
}
let str="apple";
if((str[0]==='a')&&str.length>3){
console.log("Good string");}
else{
	console.log("Bad string");
}
let a="green";
switch(a){
	case "green":
	console.log("Green");
	break;
	case "blue":
	console.log("Blue");
	break;
	case "red":
	console.log("Red");
	break;
	default:
	console.log("Error");
}
alert("Something is wrong");
console.error("This is an error msg");
console.warn("This is a warning msg");
let roll=prompt("Enter your roll no");
console.log(roll);
let first name=prompt("Enter your first name");
let last name=prompt("Enter your last name");
console.log("Welcome",first name,last name, "!");
let msg=("     He llo    ");
