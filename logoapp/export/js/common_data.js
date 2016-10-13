//const
var OBJ_TYPE = ['dot', 'line'];
var DOT_NUM = 19;
var LINE_NUM =42;
var ORIGINAL_CANVAS_SIZE = 500;
var MAINCANVAS_WIDTH = 450;
var MAINCANVAS_HEIGHT	 = 450;
var MAIN_SCALE = MAINCANVAS_WIDTH/ORIGINAL_CANVAS_SIZE;
var PREVIEWCANVAS_WIDTH = 48;
var PREVIEWCANVAS_HEIGHT = 48;
var PREVIEW_SCALE = PREVIEWCANVAS_WIDTH/ORIGINAL_CANVAS_SIZE;
var LINE_LENGTH = ORIGINAL_CANVAS_SIZE*0.1777;
var DOT_RADIUS = LINE_LENGTH*0.125;
var LINE_DRAW_SCALE = 0.72;
var WHITE = '#fff';
var KIDS_GREEN = '#9c3';
var MIRAI_ORANGE = '#f90';
var BACKGROUND_COLOR = WHITE;
var DRAW_COLOR = MIRAI_ORANGE;

Vector2 = function(x, y) {
	this.x = x;
	this.y = y;
};
Vector2.prototype.dist = function() {
	return Math.sqrt((this.x*this.x)+(this.y*this.y));
};

function GetCrossProductByPoint(P, A, B) {
	var PA = new Vector2(P.x-A.x, P.y-A.y);
	var BA = new Vector2(B.x-A.x, B.y-A.y);
	var crsP = (PA.x*BA.y)-(BA.x*PA.y);
	return crsP;
};
function GetCosByVector(O, A, B) {
	var a = new Vector2(A.x-O.x, A.y-O.y);
	var b = new Vector2(B.x-O.x, B.y-O.y);
	var dot = (a.x*b.x)+(a.y*b.y)
	var cos = dot/ (a.dist()*b.dist());
	return cos;
};
function isAcuteAngleTriangle(P, A, B) {
	var cos1 = GetCosByVector(A, P, B);
	var cos2 = GetCosByVector(B, P, A);
	if(cos1*cos2<0) return false;
	else return true;
};
function getDotPos(num, interval) {
	var pos = new Vector2(0,0);
	//var angle = [-90, -30, 30, 90, 150, 210];
	if(num==0) {
		pos.x=0;
		pos.y=0;
	} else if(num>0 && num<7) {
		pos.x = Math.cos(((60*(num-1))-90) * Math.PI / 180) * interval;
		pos.y = Math.sin(((60*(num-1))-90) * Math.PI / 180) * interval;
	} else if(num>6) {
		if(num%2==1) {
			pos.x = Math.cos(((60*(num-7)/2)-90) * Math.PI / 180) * interval;
			pos.y = Math.sin(((60*(num-7)/2)-90) * Math.PI / 180) * interval;
			pos.x += Math.cos(((60*(num-7)/2)-90) * Math.PI / 180) * interval;
			pos.y += Math.sin(((60*(num-7)/2)-90) * Math.PI / 180) * interval;
		} else if(num%2==0) {
			pos.x = Math.cos(((60*(num-8)/2)-90) * Math.PI / 180) * interval;
			pos.y = Math.sin(((60*(num-8)/2)-90) * Math.PI / 180) * interval;
			pos.x += Math.cos(((60*(num-6)/2)-90) * Math.PI / 180) * interval;
			pos.y += Math.sin(((60*(num-6)/2)-90) * Math.PI / 180) * interval;
		}
	}
	return pos;
};
function getLinePos(num, interval) {
	var linePos = new Array(2);
	var a, b;
	if(num==11) {
		a=6;
		b=1;
	} else if(num==23) {
		a=18;
		b=7;
	} else if(num==24) {
		a=1;
		b=18;
	} else if(num<6) {
		a=0;
		b=num+1;
	} else if(num<11) {
		a=(num-6)+1;
		b=(num-6)+2;
	} else if(11<num && num<23) {
		a=num-5;
		b=num-4;
	} else if(24<num && num<42) {
		a = (num-(num%3))/3 -7;
		b = (a*2) + 4 + (num%3);
	}
	linePos[0] = getDotPos(a, interval);
	linePos[1] = getDotPos(b, interval);
	var drawScale = LINE_DRAW_SCALE;
	var lineCenter = new Vector2((linePos[0].x+linePos[1].x)/2, (linePos[0].y+linePos[1].y)/2);
	var halfLength = new Vector2(drawScale*(linePos[0].x-linePos[1].x)/2, drawScale*(linePos[0].y-linePos[1].y)/2);
	linePos[0] = new Vector2(lineCenter.x-halfLength.x, lineCenter.y-halfLength.y);
	linePos[1] = new Vector2(lineCenter.x+halfLength.x, lineCenter.y+halfLength.y);
	return linePos;
};

View = function(canvasName, width, height, isGetMove) {
	this.width = width;
	this.height = height;
	this.mousePos = new Vector2(0, 0);
	this.isMouseOnCanvas = false;
	this.isMouseMove = false;
	this.canvas = document.getElementById(canvasName);
	if (this.canvas && this.canvas.getContext){
		this.ctx = this.canvas.getContext('2d');
		this.canvas.addEventListener('mouseover', this.onMouseOver.bind(this), false);
		this.canvas.addEventListener('mouseout', this.onMouseOut.bind(this), false);
		if(isGetMove) {
			this.canvas.addEventListener('mousemove', this.onMouseMove.bind(this), false);
		}
	} else {
		window.alert("Canvas Constructor ERROR");
	}
};
View.prototype.onMouseOver =function() {
	this.isMouseOnCanvas = true;
};
View.prototype.onMouseOut = function() {
	this.isMouseOnCanvas = false;
	this.isMouseMove = false;
};
View.prototype.onMouseMove =function(e) {
	var rect = e.target.getBoundingClientRect();
	var newMousePos = new Vector2(e.clientX - rect.left, e.clientY - rect.top);
	if(this.mousePos.x != newMousePos.x && this.mousePos.y != newMousePos.y) {
		this.isMouseMove = true;
		this.mousePos = newMousePos;
	} else {
		this.isMouseMove = false;
	}
};
View.prototype.drawMouseCursor = function (){
	this.ctx.beginPath();
	this.ctx.fillStyle = DRAW_COLOR;
	this.ctx.arc(this.mousePos.x, this.mousePos.y, 6,0, Math.PI*2.0,true);
	this.ctx.fill();
};
View.prototype.drawBg = function(bgColor){
	this.ctx.globalCompositeOperation = "source-over";
	this.ctx.fillStyle = bgColor;
	this.ctx.fillRect(0, 0, this.width, this.height);
};
View.prototype.drawBgScale = function(bgColor, scale){
	this.ctx.globalCompositeOperation = "source-over";
	this.ctx.fillStyle = bgColor;
	this.ctx.fillRect(0, 0, this.width/scale, this.height/scale);
};

/*
var fd = new FormData();
fd.append('fname', 'filename.gif');
fd.append('data', url);
 */
function postData(formData) {
	$.ajax({
		type: "POST",
		url: "php/upload.php",
		data: formData,
		processData: false,
		contentType: false
	}).done(function(res) {
		window.alert('success');
	}).fail(function(jqXHR, textStatus, errorThrown) {
		window.alert('fail');
	});
};
