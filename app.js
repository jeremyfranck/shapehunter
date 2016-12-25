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
		yOffset: -0, 
	};


var	pacMan2 = {
	shape:"m 519.3125,55.09375 c -12.0577,-0.01248 -20.82031,3.269531 -20.82031,3.269531 a 3.6803681,3.6803681 0 0 0 -1.76758,5.46875 c 3.65985,5.545222 4.45684,10.390395 3.84766,14.910157 -0.60919,4.519761 -2.77078,8.780278 -5.52149,12.466796 -5.50142,7.373036 -13.04687,12.080076 -13.04687,12.080076 a 3.6803681,3.6803681 0 0 0 3.44531,6.48828 c 0,0 14.1449,-6.354 26.06445,-9.25976 5.95978,-1.452882 11.48944,-1.607229 13.01367,-0.957033 0.76212,0.325098 0.6043,0.08686 0.67383,0.810543 0.0695,0.72369 -0.26975,2.75385 -1.88867,5.82422 -3.87287,7.3451 -4.71148,13.31829 -2.02344,17.75781 2.68804,4.43953 7.80471,5.73946 12.64258,5.91602 4.83787,0.17656 9.93597,-0.75253 14.25977,-2.04883 2.16189,-0.64815 4.119,-1.39011 5.77734,-2.19726 1.65834,-0.80716 2.99488,-1.47993 4.22656,-3.01953 0.53363,-0.66703 2.89091,-2.87846 5.35547,-5.67383 2.46456,-2.79538 5.18836,-6.40115 6.9668,-10.88281 C 574.07446,97.083545 572.9875,84.676958 559.9082,71.597656 546.72481,58.414269 531.3702,55.106229 519.3125,55.09375 Z m -0.11523,7.226562 c 10.4995,-0.01248 23.9011,2.875721 35.50585,14.480469 11.70884,11.708834 11.61282,19.878053 8.97266,26.531249 -1.32008,3.3266 -3.4923,6.28935 -5.64453,8.73047 -2.15223,2.44112 -4.1326,4.13157 -5.58203,5.94336 0.24016,-0.3002 -0.51469,0.42251 -1.70117,1 -1.18648,0.57749 -2.82699,1.21115 -4.66993,1.76367 -3.68586,1.10505 -8.22488,1.87938 -11.87695,1.74609 -3.65206,-0.13328 -5.87941,-1.15777 -6.61523,-2.37304 -0.73582,-1.21527 -1.07936,-4.22725 2.23633,-10.51563 1.97535,-3.74636 3.00155,-6.87539 2.70507,-9.960934 -0.29647,-3.085549 -2.55028,-5.782527 -5.11132,-6.875 -5.12209,-2.184948 -11.15022,-1.007495 -17.64649,0.576172 -3.06663,0.747585 -6.19864,1.698697 -9.21094,2.691406 0.12587,-0.164208 0.26618,-0.280474 0.39063,-0.447266 3.26041,-4.369626 6.08634,-9.714643 6.91797,-15.884766 0.65786,-4.880881 -0.10284,-10.239031 -2.6543,-15.654296 3.19982,-0.838666 7.70947,-1.744496 13.98438,-1.751954 z",
	tolerance:"m 519.3125,55.09375 c -12.0577,-0.01248 -20.82031,3.269531 -20.82031,3.269531 a 3.6803681,3.6803681 0 0 0 -1.76758,5.46875 c 3.65985,5.545222 4.45684,10.390395 3.84766,14.910157 -0.60919,4.519761 -2.77078,8.780278 -5.52149,12.466796 -5.50142,7.373036 -13.04687,12.080076 -13.04687,12.080076 a 3.6803681,3.6803681 0 0 0 3.44531,6.48828 c 0,0 14.1449,-6.354 26.06445,-9.25976 5.95978,-1.452882 11.48944,-1.607229 13.01367,-0.957033 0.76212,0.325098 0.6043,0.08686 0.67383,0.810543 0.0695,0.72369 -0.26975,2.75385 -1.88867,5.82422 -3.87287,7.3451 -4.71148,13.31829 -2.02344,17.75781 2.68804,4.43953 7.80471,5.73946 12.64258,5.91602 4.83787,0.17656 9.93597,-0.75253 14.25977,-2.04883 2.16189,-0.64815 4.119,-1.39011 5.77734,-2.19726 1.65834,-0.80716 2.99488,-1.47993 4.22656,-3.01953 0.53363,-0.66703 2.89091,-2.87846 5.35547,-5.67383 2.46456,-2.79538 5.18836,-6.40115 6.9668,-10.88281 C 574.07446,97.083545 572.9875,84.676958 559.9082,71.597656 546.72481,58.414269 531.3702,55.106229 519.3125,55.09375 Z m -0.11523,7.226562 c 10.4995,-0.01248 23.9011,2.875721 35.50585,14.480469 11.70884,11.708834 11.61282,19.878053 8.97266,26.531249 -1.32008,3.3266 -3.4923,6.28935 -5.64453,8.73047 -2.15223,2.44112 -4.1326,4.13157 -5.58203,5.94336 0.24016,-0.3002 -0.51469,0.42251 -1.70117,1 -1.18648,0.57749 -2.82699,1.21115 -4.66993,1.76367 -3.68586,1.10505 -8.22488,1.87938 -11.87695,1.74609 -3.65206,-0.13328 -5.87941,-1.15777 -6.61523,-2.37304 -0.73582,-1.21527 -1.07936,-4.22725 2.23633,-10.51563 1.97535,-3.74636 3.00155,-6.87539 2.70507,-9.960934 -0.29647,-3.085549 -2.55028,-5.782527 -5.11132,-6.875 -5.12209,-2.184948 -11.15022,-1.007495 -17.64649,0.576172 -3.06663,0.747585 -6.19864,1.698697 -9.21094,2.691406 0.12587,-0.164208 0.26618,-0.280474 0.39063,-0.447266 3.26041,-4.369626 6.08634,-9.714643 6.91797,-15.884766 0.65786,-4.880881 -0.10284,-10.239031 -2.6543,-15.654296 3.19982,-0.838666 7.70947,-1.744496 13.98438,-1.751954 z"
};



var freeShape = 
	{		
		shape:"m 499.79661,61.805085 c 16.36017,24.788135 -15.86441,44.618645 -15.86441,44.618645 0,0 57.01272,-25.779662 42.6356,1.48729 -14.37712,27.26695 24.78813,17.35169 28.75423,12.39407 3.96611,-4.95763 26.77119,-21.317802 1.98306,-46.105937 C 532.51695,49.411017 499.79661,61.805085 499.79661,61.805085 Z",
		tolerance: "m 519.3125,55.09375 c -12.0577,-0.01248 -20.82031,3.269531 -20.82031,3.269531 a 3.6803681,3.6803681 0 0 0 -1.76758,5.46875 c 3.65985,5.545222 4.45684,10.390395 3.84766,14.910157 -0.60919,4.519761 -2.77078,8.780278 -5.52149,12.466796 -5.50142,7.373036 -13.04687,12.080076 -13.04687,12.080076 a 3.6803681,3.6803681 0 0 0 3.44531,6.48828 c 0,0 14.1449,-6.354 26.06445,-9.25976 5.95978,-1.452882 11.48944,-1.607229 13.01367,-0.957033 0.76212,0.325098 0.6043,0.08686 0.67383,0.810543 0.0695,0.72369 -0.26975,2.75385 -1.88867,5.82422 -3.87287,7.3451 -4.71148,13.31829 -2.02344,17.75781 2.68804,4.43953 7.80471,5.73946 12.64258,5.91602 4.83787,0.17656 9.93597,-0.75253 14.25977,-2.04883 2.16189,-0.64815 4.119,-1.39011 5.77734,-2.19726 1.65834,-0.80716 2.99488,-1.47993 4.22656,-3.01953 0.53363,-0.66703 2.89091,-2.87846 5.35547,-5.67383 2.46456,-2.79538 5.18836,-6.40115 6.9668,-10.88281 C 574.07446,97.083545 572.9875,84.676958 559.9082,71.597656 546.72481,58.414269 531.3702,55.106229 519.3125,55.09375 Z m -0.11523,7.226562 c 10.4995,-0.01248 23.9011,2.875721 35.50585,14.480469 11.70884,11.708834 11.61282,19.878053 8.97266,26.531249 -1.32008,3.3266 -3.4923,6.28935 -5.64453,8.73047 -2.15223,2.44112 -4.1326,4.13157 -5.58203,5.94336 0.24016,-0.3002 -0.51469,0.42251 -1.70117,1 -1.18648,0.57749 -2.82699,1.21115 -4.66993,1.76367 -3.68586,1.10505 -8.22488,1.87938 -11.87695,1.74609 -3.65206,-0.13328 -5.87941,-1.15777 -6.61523,-2.37304 -0.73582,-1.21527 -1.07936,-4.22725 2.23633,-10.51563 1.97535,-3.74636 3.00155,-6.87539 2.70507,-9.960934 -0.29647,-3.085549 -2.55028,-5.782527 -5.11132,-6.875 -5.12209,-2.184948 -11.15022,-1.007495 -17.64649,0.576172 -3.06663,0.747585 -6.19864,1.698697 -9.21094,2.691406 0.12587,-0.164208 0.26618,-0.280474 0.39063,-0.447266 3.26041,-4.369626 6.08634,-9.714643 6.91797,-15.884766 0.65786,-4.880881 -0.10284,-10.239031 -2.6543,-15.654296 3.19982,-0.838666 7.70947,-1.744496 13.98438,-1.751954 z",
		xOffset: -0,
		yOffset: -0, 
	};


var shapes = [freeShape, pacMan,rightTriangle, pacMan,rightTriangle, pacMan]

//include a background so that hittest is never null
var background = new Shape.Rectangle(project.view.bounds.topLeft, project.view.bounds.bottomRight);
background.fillColor = 'white';
			
//global variables
var state = 'draw';
var score = 0;
var passingScore = 70;
var same;
var diff;
var currentLevel = 0;
var maxLevel = 0;
var outcome = 'fail';

var hitOptions = {
    segments: true,
    stroke: true,
    fill: true,

    tolerance: 5
};



var drawingLayer = new Layer();

var shapeLayer = new Layer();

var compareLayer = new Layer();

drawingLayer.activate();
	
var shape;
var shapeCompare;
var tolerance; 
var compareGroup;





drawShape();

function drawShape () {
	
	//Shape
	shape = new Path(shapes[currentLevel].shape); //load the shape that corresponds with the level
	shape.strokeColor = 'black';
	//shape.scale(1.5);

	shape.bounds.center = new Point(165,105);

	//add shape to shape layer
	shapeLayer.addChild(shape);

	
}

function drawCompareShape() {

	//Comparison shape
	shapeCompare = shape.clone();
	shapeCompare.bounds.center = new Point(165,335);

	//Shape for the acceptable area
	tolerance = new CompoundPath(shapes[currentLevel].tolerance);
	tolerance.fillColor = 'black';
	tolerance.fillColor.alpha = 0.1 ;
	tolerance.bounds.center = shapeCompare.bounds.center;
	tolerance.position.x = tolerance.position.x + shapes[currentLevel].xOffset;
	tolerance.position.y = tolerance.position.y + shapes[currentLevel].yOffset;

	//group and hide comparison shapes
	compareGroup = new Group(tolerance, shapeCompare)
	

};
	
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
		path.strokeColor = 'black';
		//path.strokeWidth = 6;
		path.add(event.point);
		
		//show the crosshairs
		crosshair.position = event.point;
		crosshair.visible = true;
		
	}

	if (state == 'done') {
		var hitResult = project.hitTest(event.point, hitOptions);



		if (hitResult.item == prevButton) {
			currentLevel = currentLevel -= 1
		}

		else if (hitResult.item == nextButton){
			currentLevel = currentLevel += 1;
		};

		
	}
	
	
}
	
function onMouseDrag(event) {
	
	if (state == 'draw') {

		path.add(event.point);
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

		//close the done screen
		doneScreenLayer.visible = false;
		
		compareLayer.removeChildren();
		
		shape.remove();
		compareGroup.remove();

		drawShape();
		
		//change the state 
		state = 'draw';

		
	}
	
	
	//if the user is drawing
	else if (state == 'draw') {	
		
		//close and smooth the path
		path.add(event.point);
		path.smooth();

		drawingLayer.addChild(path); //add path to drawing layer


		
		drawCompareShape();

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
    strokeColor: new Color(0.25, 0.25, 0.25),
    fillColor: new Color(0.25, 0.25, 0.25)
});
tryAgainButton.visible = false;

//next button
var nextButton = new Path.RegularPolygon({
    center: (view.bounds.bottomCenter) + new Point(100,-22),
    sides: 3,
    radius: 10,
    strokeColor: new Color(0.25, 0.25, 0.25),
    fillColor: new Color(0.25, 0.25, 0.25)
});
nextButton.rotate(90);
nextButton.visible = false;

//previous button
var prevButton = new Path.RegularPolygon({
    center: (view.bounds.bottomCenter) - new Point(100,22),
    sides: 3,
    radius: 10,
    strokeColor: new Color(0.25, 0.25, 0.25),
    fillColor: new Color(0.25, 0.25, 0.25)
});
prevButton.rotate(-90);
prevButton.visible = false;

//outcome text 

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

	if (outcome == 'pass') {
		outcomeText.content='Pretty good :-|'
		nextButton.visible = true;
		tryAgainButton.visible = true;

	}
	else {
		outcomeText.content='Try Again :-('
		nextButton.visible = false;
		tryAgainButton.visible = true;
	};

	if (currentLevel >= 1) {
		prevButton.visible = true;

	}
	
};
	
	
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



	
function compare() {
	//this function compares the line path to the tolerance shape by splitting the line where it intersects with the edges of the shape and putting the segments that overlap into a group and coloring them green, and putting the other segments into a group and coloring them red.
	var totalLength = 0;
	var diffLength = 0;
	var sameLength = 0;


	compareLayer.activate();

	scalePath();
	
	//identify the points where the path intersects with the tolerance shape
   
	var intersections = path.getIntersections(tolerance);
	  
	
		
	//create groups to add the segments	
	var diff = new CompoundPath ({
	    strokeColor: 'red',});   
	var same = new CompoundPath ({
	    strokeColor: 'green',});
	
		
	//This creates a variable to store the remaining shape each time we split
	var remaining
	

	for (var i = 0; i <= (intersections.length); i = i+2) {
	    
	var intersectionsRemaining = intersections.length - i;	

		
	//handle cases where there are no intersections
	
		if (intersectionsRemaining == 0){
		
			inOrOut(path, tolerance, same, diff);	
			
		} 
	
		
		//handle cases where there is one intersection remaining
		
		if (intersectionsRemaining == 1){
			
			//identify the first place on the copy of the path where you want to split it
		    var locationOnPath = path.getNearestLocation(intersections[i].point);
			
		    //split the path at the intersection and name the other part remaining
		    remaining = path.split(locationOnPath);
		    
		    //determine if the initial protion of the path is inside the tolerance area
			inOrOut(path, tolerance, same, diff);
			
			//determine if the remaining portion is inside the tolerance area
			inOrOut(remaining, tolerance, same, diff);
			
		
		}
		
		//handle cases where there is more than one intersection remaining
		
		if (intersectionsRemaining >= 2){
		

			//identify the first place on the copy of the path where you want to split it
	   		var locationOnPath = path.getNearestLocation(intersections[i].point);
			 
		
	    	//split the path at the intersection and name the other part remaining
	    	remaining = path.split(locationOnPath);
			
	    	//determine if the initial protion of the path is inside the tolerance area
			inOrOut(path, tolerance, same, diff);
			   
			//on the remaining part find the next intersection point
			locationOnPath = remaining.getNearestLocation(intersections[i+1].point);
			    
			//split the remaining part and name the second half path
			path = remaining.split(locationOnPath);
			
			//determine if the initial portion of the path is inside the tolerance area
			inOrOut(remaining, tolerance, same, diff);

			compareGroup.addChild(path);
			compareGroup.addChild(remaining);

			
		}

	 //end for loop



	};

//end compare function


//Score




for (var i = 0; i < (diff.children.length); i ++) {
		
	diffLength = diffLength + diff.children[i].length

	}

	for (var i = 0; i < (same.children.length); i ++) {
		
	sameLength = sameLength + same.children[i].length

	}


	//get the % the length that is overlaping


	totalLength = sameLength + diffLength;
	
	var rawScore = (sameLength / totalLength) * 100;
	score = Math.abs(Math.floor(rawScore));
	scoreText.content = score + '%';

	//determine the outcome

	if (score >= passingScore) {
		outcome = 'pass'
	}
	else {outcome = 'fail'};

	


};	


//checks if the segment is inside or outside of the tollerence shape
function inOrOut(segment, tolerance, same, diff) {
	
	var midPoint = segment.getPointAt(segment.length/2);
	

	//determine if the segement is inside the tolerance area
	if (tolerance.contains(midPoint)){
		
		same.addChild(segment.clone());
		segment.visible = false;
		compareGroup.addChild(segment);
	}
	
	else {
		
	//if not, then add it to the group of segments that don't match
		diff.addChild(segment.clone())
		segment.visible = false;
		compareGroup.addChild(segment);
	
	}

	
};




