'use strict';

var canvas = document.getElementById('canvas');
var context = canvas.getContext("2d");
var width = canvas.dataset.width;
var height = canvas.dataset.height;
var ratio = canvas.dataset.ratio;
var size = canvas.dataset.size

var margin = 5;


context.fillStyle = '#2fa2d1';
context.fillRect(0, 0, width, height);

context.beginPath();
context.strokeStyle='white';
context.lineWidth=2;
context.moveTo(margin,canvas.height-margin);
context.lineTo(canvas.width-margin,margin);

context.moveTo(margin,canvas.height-15);
context.lineTo(margin, canvas.height-margin);
context.lineTo(15, canvas.height-margin);

context.moveTo(canvas.width-15,margin);
context.lineTo(canvas.width-margin,margin);
context.lineTo(canvas.width-margin, 15);

context.fillStyle = 'white';
context.font = "bold 16px Arial";
context.fillText(ratio, 20, 20);
context.save();

context.translate((canvas.width/2) - 20, (canvas.height/2) )
context.rotate(-26*Math.PI / 180);
context.fillText(size+"\"",0,0);
context.restore();



context.stroke();




