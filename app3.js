var rightTriangle = 
	{		
		shape:"m 378.38864,189.83275 -0.40259,49.11507 132.85224,0 z",
		tolerance: "m 372.70702,181.25966 -0.52413,63.76497 173.04209,0 -172.51796,-63.76497 z m 11.31928,16.55351 93.50393,35.18471 -93.78832,0 0.28439,-35.18471 z",
		xOffset: 14,
		yOffset: -0.9,	
	};

var pacMan = 
{		
	shape:"m 411.01983,181.47684 a 53.523166,53.52317 0 0 0 -37.875,15.75468 l 37.3125,37.3125 -37.7875,37.7875 a 53.523166,53.52317 0 0 0 38.35,16.19062 53.523166,53.52317 0 0 0 53.52343,-53.52343 53.523166,53.52317 0 0 0 -53.52343,-53.52187 z",
	tolerance: "m 432.2453,186.45845 a 58.383163,58.383163 0 0 0 -45.22656,21.52344 l 36.725,36.91718 -36.675,36.86719 a 58.383163,58.383163 0 0 0 45.17656,21.45937 58.383163,58.383163 0 0 0 58.38281,-58.38437 58.383163,58.383163 0 0 0 -58.38281,-58.38281 z m -0.55,9.13437 a 49.248382,49.248382 0 0 1 49.24843,49.24844 49.248382,49.248382 0 0 1 -49.24843,49.24844 49.248382,49.248382 0 0 1 -31.92969,-11.76875 l 37.84375,-38.04375 -37.21562,-37.40938 a 49.248382,49.248382 0 0 1 31.30156,-11.275 z",
	xOffset: -1,
	yOffset: -0, };
	
var shapes = [rightTriangle, pacMan, rightTriangle, pacMan];

var shape;



var add = new function() {
	var count = 0
    return {
    	one: function() {return count += 1;},
    	two: function() {return count += 2;},
    }
};


function level(currentLevel) {
shape = new Path(shapes[currentLevel].shape); //load the shape that corresponds with the level
shape.strokeColor = 'black';
shape.bounds.center = new Point(165,105);
};

function onMouseUp(event) {
	
	console.log(add.two())
};







