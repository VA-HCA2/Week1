// Description: Number of boxes 

"use strict";
var length=15;
var width=5;
var tilesPerBox=12;
var numberOfBoxes=Math.ceil(((length*width)*1.1)/tilesPerBox);

console.log( "You need "+numberOfBoxes+" boxes")