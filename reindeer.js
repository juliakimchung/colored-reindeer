var colors = ["Blue", "Red", "Orange", "Purple", "Hazel", "Aquamarine", "Periwinkle", "Azure", "Fuchsia", "Chocolate", "Amber", "Amaranth"];
var reindeer = ["Dasher", "Dancer", "Prancer", "Vixen", "Comet", "Cupid", "Donner", "Blitzen"];


var newReindeer = [];
var hohohoElement = document.getElementById("coloredReindeer");

for (var j = 0; j < reindeer.length; j++) {

	for (var i = 0; i< colors.length; i++) {

		newReindeer.push(colors[i] + reindeer[j]);
	}
}
 console.log(newReindeer);

 var coloredReindeer = newReindeer;
//document.write(coloredReindeer);



hohohoElement.innerHTML = coloredReindeer;






