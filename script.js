var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var css = document.querySelector ("h3");
var body = document.querySelector("body");

// 1. Set color inputs match the background generated on the first page load. 
// If user will change hex color values in styles (bacground property) it will apply for inputs automatically after refreshing of the page
setInitColors();

// Add event listeneres to change the background color in style 
color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);

function setGradient(){
	 body.style.backgroundImage="linear-gradient(to right, " + color1.value + ", " + color2.value + ")" ;
	  css.textContent = body.style.backgroundImage + ";" ;
}


function setInitColors() {
// Set value for color1 input
color1.setAttribute("value", getColorValue(parseCssGradientStypePropertyValue(), "color1"));
// Set value for color2 input 
color2.setAttribute("value", getColorValue(parseCssGradientStypePropertyValue(), "color2")); 

//2. Display the initial CSS linear gradient property on page load.
setGradient();
}

function componentToHex(c) {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function parseCssGradientStypePropertyValue() {

var cssGradientStyle = window.getComputedStyle(body,null).getPropertyValue("background-image");

splittedPropertyText = cssGradientStyle.split(",");

return splittedPropertyText;

}

function getColorValue(parseCssGradientStypePropertyValue, requiredColor) {

if ( requiredColor==="color1") {

// split parts of parsed Property array, related for color 1 value  into r,g,b strings
var arrayTextR = splittedPropertyText[1].split("(");
var arrayTextG = splittedPropertyText[2].split(" ");
var arrayTextB = splittedPropertyText[3].split(")");

var textR = arrayTextR[1];
var textG = arrayTextG[1];
var textB = arrayTextB[0].split(" ")[1];

}

else if (  requiredColor==="color2")
{
// split parts of parsed Property array, related for color 1 value  into r,g,b strings
var arrayTextR = splittedPropertyText[4].split("(");
var arrayTextG = splittedPropertyText[5].split(" ");
var arrayTextB = splittedPropertyText[6].split(")");

var textR = arrayTextR[1];
var textG = arrayTextG[1];
var textB = arrayTextB[0].split(" ")[1];

}

// convert r,g,b strings in integers 
var r = parseInt(textR);
var g = parseInt(textG);
var b = parseInt(textB);

return rgbToHex (r,g,b);

}

// BONUS: Add a random button which generates two random numbers for the colour inputs.
// Create Random button 
var btnRandom = document.createElement("button");
var btnRandomText = document.createTextNode("Random");
btnRandom.setAttribute("class","deleteBtn");
btnRandom.appendChild(btnRandomText);
body.appendChild(btnRandom);

// Generate Random value of rgb color for color1 and color2 in hex format 

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; //The maximum is inclusive and the minimum is inclusive 
}

function setRandomGradient(){
	 body.style.backgroundImage="linear-gradient(to right, " 
	 + rgbToHex(getRandomIntInclusive(0,255),getRandomIntInclusive(0,255),getRandomIntInclusive(0,255)) 
	 + ", " 
	 + rgbToHex(getRandomIntInclusive(0,255),getRandomIntInclusive(0,255),getRandomIntInclusive(0,255)) + ")" ;
	  css.textContent = body.style.backgroundImage + ";" ;
	  setInitColors();
}

// Apply generated colors for the background 
btnRandom.onclick = setRandomGradient ;

