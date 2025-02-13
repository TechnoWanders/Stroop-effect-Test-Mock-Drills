//const fs = require('fs');
//localStorage.setItem("hscore",0);
//localStorage.setItem("efficiency",0);
//localStorage.setItem("tries",0);
const colors = [
    "AliceBlue", "AntiqueWhite", "Aqua", "Aquamarine",
    "Beige", "Black", "Blue",
    "BlueViolet", "Brown", "BurlyWood", "CadetBlue", "Chartreuse",
    "Chocolate", "Coral", "CornflowerBlue", "Crimson",
    "Cyan", "DarkBlue", "DarkCyan", "DarkGoldenRod", "DarkGray",
    "DarkGreen", "DarkKhaki", "DarkMagenta", "DarkOliveGreen", "DarkOrange",
    "DarkOrchid", "DarkRed", "DarkSalmon", "DarkSeaGreen", "DarkSlateBlue",
    "DarkSlateGray", "DarkTurquoise", "DarkViolet", "DeepPink", "DeepSkyBlue",
    "DimGray", "DodgerBlue", "FireBrick", "ForestGreen",
    "Fuchsia", "Gainsboro", "Gold", "GoldenRod",
    "Gray", "Green", "GreenYellow", "HotPink",
    "IndianRed", "Indigo", "Ivory", "Khaki", "Lavender", "LawnGreen", "LightBlue", "LightCoral", "LightGray", "LightGreen", "LightPink",
    "LightSalmon", "LightSeaGreen", "LightSkyBlue", "LightSlateGray", "LightSteelBlue",
"Lime", "LimeGreen", "Magenta",
    "Maroon", "MediumAquaMarine", "MediumBlue", "MediumOrchid", "MediumPurple",
    "MediumSeaGreen", "MediumSlateBlue", "MediumSpringGreen", "MediumTurquoise", "MediumVioletRed",
    "MidnightBlue", "MistyRose", "NavajoWhite",
    "Navy", "Olive", "OliveDrab", "Orange",
    "OrangeRed", "Orchid", "PaleGoldenRod", "PaleGreen", "PaleTurquoise",
    "PaleVioletRed", "PapayaWhip", "PeachPuff", "Peru", "Pink",
    "Plum", "PowderBlue", "Purple", "RebeccaPurple", "Red",
    "RosyBrown", "RoyalBlue", "SaddleBrown", "Salmon", "SandyBrown",
    "SeaGreen", "Sienna", "Silver", "SkyBlue",
    "SlateBlue", "SlateGray", "Snow", "SpringGreen", "SteelBlue",
    "Tan", "Teal", "Thistle", "Tomato", "Turquoise",
    "Violet", "Yellow",
    "YellowGreen"
];
let ans;

function changecolor() {
    let textColor, displayColor;

    do {
        textColor = colors[Math.floor(Math.random() * colors.length)];
        displayColor = colors[Math.floor(Math.random() * colors.length)];
    } while (displayColor === textColor); // Ensures different colors

    const colorText = document.getElementById("color_name");
    //console.log(textColor);
    colorText.textContent = displayColor;
    colorText.style.color = textColor;
    ans = textColor;    
    options(textColor);
}

function options(textColor){
    
    const buttons = document.querySelectorAll(".random_btn");
    buttons.forEach(button => {
        button.textContent = colors[Math.floor(Math.random() * colors.length)];
    });
	
    //console.log(buttons.length);

    let random = Math.floor(Math.random() * buttons.length);
    buttons[random].textContent = textColor;

    //checkanswers(buttons, textColor);
}

let points = 0;
let clicks = 0;

function showId(button){
	console.log("Button id, ",button.id);
	console.log(button.textContent, ans);
	clicks+=1;
	const tries = document.getElementById("tries");
	const percent = document.getElementById("percentage");
	
	if(ans === button.textContent){
		points+=1;
		const score = document.getElementById("score");
		score.textContent = points;
	}
	let percentage = (points/clicks)*100;
	tries.textContent = clicks;
	percent.textContent = percentage;
	changecolor();
}

let timer;
let times = 30;
function start(){
	console.log('HELLO WORLD');
	const time = document.getElementById('time');
	timer = setInterval(()=>{
		const time = document.getElementById('time');
		if(times==0){
			document.getElementById('color_name').style.display = "none";
			document.getElementById('options').style.display="none";
			savehighscore(); clearInterval(timer); timer=null; return;}
		times-=1;
		time.textContent = times;
	},1000);
}


function savehighscore(){
	const hscore = localStorage.getItem("hscore");
	const efficiency = localStorage.getItem("efficiency");
	let eff = (points/clicks)*100;
	if (points>hscore || eff>efficiency && clicks>=10){
		localStorage.setItem("hscore", points);
		localStorage.setItem("efficiency",eff);
		localStorage.setItem("tries", clicks);
	}
	console.log(hscore);
	console.log(efficiency);
}
//fs.readFile()

window.onload = function() {
    // Get stored values with a fallback if they don't exist
    const hscore = localStorage.getItem("hscore") || "0";
    const efficiency = localStorage.getItem("efficiency") || "0%";
    const triies = localStorage.getItem("tries") || "0";

    // Get elements
    const score = document.getElementById('hscore');
    const percent = document.getElementById('efficiency');
    const clic = document.getElementById('trying');

    // Ensure elements exist before updating
    if (score) score.textContent = hscore;
    if (percent) percent.textContent = efficiency;
    if (clic) clic.textContent = triies;
};

