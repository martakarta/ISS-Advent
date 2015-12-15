var data;

var w = 700;
var h = 700;

function preload(){
data = loadJSON("iss-spotting.json");
}

function setup(){
createCanvas (w,h);
background (0);
var spot = data.spot;

var i = 7;
var title = data.spot[i].title;
var timem;
var oram;
var duratam;
//console.log (title);

var name = title.substring(31);
	fill (255);
	textSize (20);
	text(name, 700/2, 150);

	for(var j = 0; j<spot[i].sightings.length; j++){
		var myvalue = data.spot[i].sightings[j].Title;
		if(myvalue === null){continue};
		var sightings = data.spot[i].sightings[j].Title;
		if (sightings !== "ISS Sighting"){continue};
		//console.log (sightings);

		for(var k = 0; k<spot[i].sightings.length; k++){
			var tmp = data.spot[i].sightings[j].Start;
			var time = tmp.substring(8,10);
			var dayAsNumber = parseInt(time)
			//console.log(time);
			timem = map (dayAsNumber,1,19,0, h);
			if(time === null){continue};	

		for(var l = 0; l<spot[i].sightings.length; l++){
			var tmp = data.spot[i].sightings[j].Start;
			var ora = tmp.substring(11,15);
			var oraAsNumber = parseInt(ora);
			//console.log(time);
			oram = map (oraAsNumber,1,24, -200, w);
			if(time === null){continue};

		noStroke()
		fill (20, 110, 150, 90);
		ellipse (timem, oram, 30, 30);	
		}
	
	
	}

	}
}

function draw(){


}


//function mousePressed(){
//background (120);
//
//
//}



