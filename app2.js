//Shapes

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
	
var shapes = [rightTriangle, pacMan];
			
	
//global variables
var state = 'draw';
var score = 0;
var same;
var diff;
var currentLevel = 1;
var maxLevel = 0;
var minScore = 

//Shape and Drawing Frames

var drawingLayer = new Layer();

var shapeLayer = new Layer();

drawingLayer.activate();



// ----- Draw level --------
	
//Shape
var shape = new Path(shapes[currentLevel].shape); //load the shape that corresponds with the level
shape.strokeColor = 'black';
//shape.scale(1.5);

shape.bounds.center = new Point(165,105);

//add shape to shape layer
shapeLayer.addChild(shape);

//Comparison shape
var shapeCompare = shape.clone();
shapeCompare.bounds.center = new Point(165,335);

//Shape for the acceptable area

var tolerance = new CompoundPath(shapes[currentLevel].tolerance);
tolerance.fillColor = 'black';
tolerance.fillColor.alpha = 0.1 ;
tolerance.bounds.center = shapeCompare.bounds.center;
//tolerance.scale(1.5);

var xOffset = shapes[currentLevel].xOffset;

tolerance.position.x = tolerance.position.x + xOffset;

var yOffset = shapes[currentLevel].yOffset;

tolerance.position.y = tolerance.position.y + yOffset;



//group and hide comparison shapes
var compareGroup = new Group(tolerance, shapeCompare)
compareGroup.visible = false;
		
		
	
	
	
//Crosshairs

var vert = new Path([400, 0], [400, 800]);
var hor = vert.clone();
hor.rotate(90);
var crosshair = new Group([vert, hor]);
crosshair.strokeColor = '#cccccc';
crosshair.rotate(45);
crosshair.visible = false;



//Drawing tool
	
tool.minDistance = 5;
tool.maxDistance = 50;

// Create a variable to hold the shape
var path;
	
	
	
function onMouseDown(event) {
	
	
	//if the user is able to draw
	if (state == 'draw') {
		
		//start drawing
		path = new Path();
		path.fillColor = 'black';
		path.add(event.point);
		
		//show the crosshairs
		crosshair.position = event.point;
		crosshair.visible = true;
		
	}
	
	
}
	
function onMouseDrag(event) {
	
	if (state == 'draw') {

		//get the distance and angle	
		var step = event.delta / 2;
		step.angle += 90;
		step.length = 1; //fixed width
		
		var top = event.middlePoint + step;
		var bottom = event.middlePoint - step;
		
		//add segments based on the width of the line
		path.add(top);
		path.insert(0, bottom);
		path.smooth();
		
		//move the crosshairs	
		crosshair.position = event.point;
	}
}
	
function onMouseUp(event) {
	
	//if the done screen is showing
	
	if (state == 'done') {
		//remove the path
		path.remove();
		//hide comparison shapes
		compareGroup.visible = false;
		//close the done screen
		doneScreenLayer.visible = (false);
		
		different.remove();
		same.remove();
		
		//change the state 
		state = 'draw';
		
	}
	
	
	//if the user is drawing
	else if (state == 'draw') {	
		
		//close and smooth the path
		path.add(event.point);
		path.closed = true;
		path.smooth();
		drawingLayer.addChild(path); //add path to drawing layer
		
		//show comparison shapes
		compareGroup.visible = true;
		
		//compare
		compare();
		
		//show the done screen
		doneScreen();
		
		//hide the crosshairs
		crosshair.visible = false;
		
	}

}

	
//done screen 
var doneScreenLayer = new Layer();

//add elements to the done screeen layer
//score text
var scoreText = new PointText(view.center);
scoreText.justification = 'center';
scoreText.fillColor = 'red';
scoreText.content = score;
scoreText.position.y = scoreText.position.y - 10;

//try again button
var tryAgainButton = new Shape.Circle({
    center: (view.bounds.bottomCenter) - new Point(0,25),
    radius: 10,
    strokeColor: new Color(0.25, 0.25, 0.25)
});

//next button
var nextButton = new Path.RegularPolygon({
    center: (view.bounds.bottomCenter) + new Point(100,-22),
    sides: 3,
    radius: 10,
    strokeColor: new Color(0.25, 0.25, 0.25)
});
nextButton.rotate(90);

//previous button
var prevButton = new Path.RegularPolygon({
    center: (view.bounds.bottomCenter) - new Point(100,22),
    sides: 3,
    radius: 10,
    strokeColor: new Color(0.25, 0.25, 0.25)
});
prevButton.rotate(-90);

//ouctcome text 

var outcomeText = new PointText(view.center);
outcomeText.justification = 'center';
outcomeText.fillColor = 'black';
outcomeText.content = 'Try Again';
outcomeText.position.y = outcomeText.position.y + 10;


	
doneScreenLayer.visible = (false);

drawingLayer.activate();
	
function doneScreen () {
		
	doneScreenLayer.visible = (true);
	
	state = 'done';
	
	
}
	
	
//Scale

function scalePath (){
	//get the width and height of the orginal shape and the drawn shape
	var shapeCompareHeight = shapeCompare.bounds.height
	var shapeCompareWidth = shapeCompare.bounds.width
	var pathHeight = path.bounds.height
	var pathWidth = path.bounds.width
	
	//compare the width and height differences
	var heightDiff = (shapeCompareHeight / pathHeight)
	var widthDiff = (shapeCompareWidth / pathWidth)
	
	
	//align the drawn shape with the center of the comparison shape
	path.bounds.center = shapeCompare.bounds.center;
	
	//scale based on the dimension that is the closest in size
	if (heightDiff < widthDiff ) {
		path.scale(heightDiff);
	}
	
	else {
		path.scale(widthDiff);
	}


}


//Compare and Score

function compare () {

	
	scalePath();
	
	//create a shape where the drawing overlaps the tolerance
	same = path.intersect(tolerance);
	same.fillColor = 'green';

	//create a shape where the drawing doesn't overlap the tolerance
	different = path.subtract(tolerance);
	different.fillColor = 'red';

	//get the % the area that is overlaping
	var sameArea = same.area;
	var totalArea = path.area;
	var rawScore = (sameArea / totalArea) * 100;
	score = Math.abs(Math.floor(rawScore));
	scoreText.content = score + '%';
	
}