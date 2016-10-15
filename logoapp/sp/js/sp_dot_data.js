
Dot = function(pos, r, color, isDraw) {
	this.pos = pos;
	this.r = r;
	this.color = color;
	this.isDraw = isDraw;
};
Dot.prototype.drawMain = function(context, translate, isPlay) {
	if(this.isDraw) {
		context.beginPath();
		context.fillStyle = this.color;
		context.lineWidth = 2;
		context.globalAlpha = 1.0;
		context.arc(this.pos.x + translate.x, this.pos.y+translate.y, this.r, 0, Math.PI*2.0,true);
		context.fill();
	}
	if(!this.isDraw && !isPlay) {
		var num = 10
		for(var i=0; i<num; i++) {
			context.beginPath();
			context.strokeStyle = '#fff';
			context.lineWidth = 2;
			context.globalAlpha = 1.0;
			var startAngle = 360/num * i * Math.PI / 180;
			var endAngle = 360/num * (i+0.5) * Math.PI / 180;
			context.arc(this.pos.x + translate.x, this.pos.y+translate.y, this.r, startAngle, endAngle, false);
			context.stroke();
		}
	}
};
Dot.prototype.drawPreview = function(context, translate) {
	if(this.isDraw) {
		context.beginPath();
		context.fillStyle = this.color;
		context.lineWidth = 2;
		context.globalAlpha = 1.0;
		context.arc(this.pos.x + translate.x, this.pos.y+translate.y, this.r*1.5, 0, Math.PI*2.0,true);
		context.fill();
	}
};
Dot.prototype.drawHover = function(context, translate) {
	if(this.isDraw) {
		context.beginPath();
		context.fillStyle = this.color;
		context.lineWidth = 2;
		context.globalAlpha = 1.0;
		context.arc(this.pos.x + translate.x, this.pos.y+translate.y, this.r*1.5, 0, Math.PI*2.0,true);
		context.fill();
	} else {
		var num = 10
		for(var i=0; i<num; i++) {
			context.beginPath();
			context.strokeStyle = '#fff';
			context.lineWidth = 3;
			context.globalAlpha = 1.0;
			var startAngle = 360/num * i * Math.PI / 180;
			var endAngle = 360/num * (i+0.5) * Math.PI / 180;
			context.arc(this.pos.x + translate.x, this.pos.y+translate.y, this.r*1.5, startAngle, endAngle, false);
			context.stroke();
		}
	}
};
Dot.prototype.isPointOnDot = function(point, range, center) {
	var xl = this.pos.x+center.y-point.x;
	var yl = this.pos.y+center.x-point.y;
	var l2 = (xl*xl) + (yl*yl);
	var r2 = (this.r+range)*(this.r+range);
	if(l2 < r2) return true;
	else return false;
};
Dot.prototype.copy = function() {
	var newDot = new Dot(new Vector2(this.pos.x, this.pos.y), this.r, this.color, this.isDraw);
	return newDot;
};

DotFrame = function(interval, radius, bgColor) {
	this.bgColor = bgColor;
	var dotData = new Array(DOT_NUM);
	for(var i=0; i<dotData.length; i++) {
		dotData[i] = new Dot(getDotPos(i, interval), radius, '#000', false);
	}
	this.arrDot = dotData;
};
DotFrame.prototype.drawMain = function(view, isHoverDot, hoverDotNum, isPlay) {
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	if(!isPlay && isHoverDot) {
		this.arrDot[hoverDotNum].drawHover(view.ctx, center);
	}
	for(var i=0; i<this.arrDot.length; i++) {
		if(!isHoverDot || i!=hoverDotNum) {
			this.arrDot[i].drawMain(view.ctx, center, isPlay);
		}
	}
};
DotFrame.prototype.drawPreview = function(view1) {
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	for(var i=0; i<this.arrDot.length; i++) {
		this.arrDot[i].drawPreview(view1.ctx, center);
	}
};
DotFrame.prototype.copy = function() {
	var newDotFrame = new DotFrame(0, 0, '#000');
	newDotFrame.bgColor = this.bgColor;
	for(var i=0; i<DOT_NUM; i++) {
		newDotFrame.arrDot[i] = this.arrDot[i].copy();
	}
	return newDotFrame;
};

DotAppFramework = function(mainCanvasName, previewCanvasName) {
	this.mainView = new View(mainCanvasName, MAINCANVAS_WIDTH, MAINCANVAS_HEIGHT, true);
	this.mainView.ctx.scale(MAIN_SCALE, MAIN_SCALE);
	var arrPreview = new Array(8);
	for(var i=0; i<arrPreview.length; i++) {
		arrPreview[i] = new View(previewCanvasName+""+(i+1), PREVIEWCANVAS_WIDTH, PREVIEWCANVAS_HEIGHT, false);
	}
	this.previewView = arrPreview;
	//this.mainView.canvas.addEventListener('click', this.onClickMain.bind(this), false);
	this.mainView.canvas.addEventListener('touchstart', this.onMouseDownMain.bind(this), false);
	this.mainView.canvas.addEventListener('touchend', this.onMouseUpMain.bind(this), false);
	for(var i=0; i<this.previewView.length; i++) {
		this.previewView[i].canvas.addEventListener('touchstart', this.onClickPreview.bind(this), false);
		this.previewView[i].ctx.scale(PREVIEW_SCALE, PREVIEW_SCALE);
	}
	this.completeView = new View('completeCanvas', MAINCANVAS_WIDTH, MAINCANVAS_HEIGHT, false);
	this.completeView.ctx.scale(MAIN_SCALE, MAIN_SCALE);
	this.isCompleteView = false;
	this.completeViewFrame = 1;
	this.completeViewTime = 0;
	this.completeLoopInterval;
	var frameData = new Array(8);
	for(var i=0; i<frameData.length; i++) {
		frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
	}
	this.arrDotFrame = frameData;
	this.currentColor = WHITE;
	this.currentFrame = 1;
	this.isHoverDot = false;
	this.hoverDotNum = -1;
	this.isPlay=false;
	this.playTime = 0;
	this.historyPos = 0;
	this.historyArrDotFrame = new Array(0);
	this.unshiftHistoryArrDotFrame();
	this.arrIsAccess = [true, false, false, false ,false ,false ,false ,false];
	this.buttonActive = {
		help: true,
		undo: false,
		clear: false,
		copy: true,
		play: true,
		complete: false
	};
	this.isCopy = false;
	this.isDraw = true;
	this.preDrawNum = -1;
	this.isDrawHover=false;
	this.isPressMain = false;

	this.helpButton = document.getElementById("helpButton");
	this.helpButton.addEventListener('click', this.onClickHelpButton.bind(this), false);
	this.undoButton = document.getElementById("undoButton");
	this.undoButton.addEventListener('click', this.onClickUndoButton.bind(this), false);
	this.clearButton = document.getElementById("clearButton");
	this.clearButton.addEventListener('click', this.onClickClearButton.bind(this), false);
	this.copyButton = document.getElementById("copyButton");
	this.copyButton.addEventListener('click', this.onClickCopyButton.bind(this), false);
	this.playButton = document.getElementById("playButton");
	this.playButton.addEventListener('click', this.onClickPlayButton.bind(this), false);
	this.completeButton = document.getElementById("completeButton");
	this.completeButton.addEventListener('click', this.onClickCompleteButton.bind(this), false);
	this.notCompleteButton = document.getElementById("notCompleteButton");
	this.notCompleteButton.addEventListener('click', this.onClickNotCompleteButton.bind(this), false);
	this.uploadButton = document.getElementById("uploadButton");
	this.uploadButton.addEventListener('click', this.onClickUploadButton.bind(this), false);
};
DotAppFramework.prototype.start = function () {
	setInterval(this.loop.bind(this) , 33 );
	this.drawButton();
};
DotAppFramework.prototype.copyArrDotFrame = function(arrDotFrame) {
	var newArray = new Array(8);
		for(var i=0; i<newArray.length; i++) {
			newArray[i] = arrDotFrame[i].copy();
	}
	return newArray;
};
DotAppFramework.prototype.unshiftHistoryArrDotFrame = function() {
	this.historyArrDotFrame.unshift(this.copyArrDotFrame(this.arrDotFrame));
};
DotAppFramework.prototype.onClickMain = function(e) {
	var rect = e.target.getBoundingClientRect();
	/*
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	*/
	var scale = MAINCANVAS_WIDTH/mainSize;
	x*=scale;
	y*=scale;
	this.mainView.mousePos = new Vector2(x, y);
};
DotAppFramework.prototype.onMouseDownMain = function(e) {
	var rect = e.target.getBoundingClientRect();
	/*
	var x = e.clientX - rect.left;
	var y = e.clientY - rect.top;
	*/
	var x;
	var y;
	if (event.touches) {
		x = event.touches[0].pageX - rect.left;
		y = event.touches[0].pageY - rect.top;
	} else {
		x = event.layerX - rect.left;
		y = event.layerY - rect.top;;
	}
	var scale = MAINCANVAS_WIDTH/mainSize;
	x*=scale;
	y*=scale;
	this.mainView.mousePos = new Vector2(x, y);
	this.renewHoverNum();

	this.isPressMain = true;

	if(this.isDraw) {
		if(this.isHoverDot) {
			if(this.hoverDotNum==this.preDrawNum) {
				if(this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw) {
					this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw = false;
				}
				else {
					this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw = true;
					this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].color = this.currentColor;
				}
			}
			this.addHistory();
			this.buttonActive.clear=false;
			for(var i=0; i<DOT_NUM; i++) {
				if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
					this.buttonActive.clear=true;
					break;
				}
			}
		}
		this.isDrawHover=true;
	}
}
DotAppFramework.prototype.onMouseUpMain = function() {
	this.isPressMain = false;
	this.isDrawHover = false;
	this.isHoverDot = false;
}
DotAppFramework.prototype.addHistory = function() {
	if(this.historyPos!= 0) {
		for(var i=0; i<this.historyPos; i++) {
			this.historyArrDotFrame.shift();
		}
		this.historyPos=0;
	}
	this.unshiftHistoryArrDotFrame();
	if(this.historyArrDotFrame.length>20) {
		this.historyArrDotFrame.pop();
	}
	this.buttonActive.undo=true;
	this.drawButton();
};
DotAppFramework.prototype.onClickPreview = function(e) {
	var clickNum;
	for(var i=0; i<8; i++) {
		if(this.previewView[i].isMouseOnCanvas) {
			clickNum=i;
		}
	}
	if(this.isCopy) {
		if(clickNum!=this.currentFrame-1) {
			this.isCopy=false;
			this.arrDotFrame[clickNum] = this.arrDotFrame[this.currentFrame-1].copy();
			this.currentFrame = clickNum+1;
			this.arrIsAccess[this.currentFrame-1]=true;
			this.addHistory();
			for(var i=0; i<DOT_NUM; i++) {
				if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
					this.buttonActive.clear=true;
					break;
				}
			}
			var isComplete = true;
			for(var i=0; i<this.arrIsAccess.length; i++) {
				if(this.arrIsAccess[i] == false) {
					isComplete = false;
					break;
				}
			}
			this.buttonActive.complete = isComplete;

			this.buttonActive.copy = true;
			this.buttonActive.play = true;
		}
	}
	else {
		this.currentFrame = clickNum+1;
		this.arrIsAccess[this.currentFrame-1]=true;
		var isComplete = true;
		for(var i=0; i<this.arrIsAccess.length; i++) {
			if(this.arrIsAccess[i]==false) {
				isComplete = false;
				break;
			}
		}
		this.buttonActive.complete = isComplete;
		this.buttonActive.clear=false;
		for(var i=0; i<DOT_NUM; i++) {
			if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
				this.buttonActive.clear=true;
				break;
			}
		}
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickHelpButton = function() {
	if(this.buttonActive.help) {
		dotTutorial.start();
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickUndoButton = function() {
	if(this.buttonActive.undo) {
		if(this.historyPos<this.historyArrDotFrame.length-1) {
			this.historyPos++;
			this.arrDotFrame = this.copyArrDotFrame(this.historyArrDotFrame[this.historyPos]);
		}
		if(this.historyPos>=this.historyArrDotFrame.length-1) {
			this.buttonActive.undo=false;
		}
		this.buttonActive.clear=false;
		for(var i=0; i<DOT_NUM; i++) {
			if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
				this.buttonActive.clear=true;
				break;
			}
		}
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickClearButton = function() {
	if(this.buttonActive.clear) {
		isClear = confirm('編集中のコマを全消去しますか。');
		if(isClear) {
			this.buttonActive.clear=false;
			this.arrDotFrame[this.currentFrame-1] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);;
			this.addHistory();
		}
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickCopyButton = function() {
	if(this.buttonActive.copy) {
		if(!this.isCopy) {
			this.isCopy=true;
			this.buttonActive = {
				help: true,
				undo: false,
				clear: false,
				copy: true,
				play: false,
				complete: false
			};
		}
		else {
			this.isCopy=false;
			for(var i=0; i<DOT_NUM; i++) {
				if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
					this.buttonActive.clear=true;
					break;
				}
			}
			this.buttonActive.copy = true;
			this.buttonActive.play = true;
		}
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickPlayButton = function() {
	if(this.buttonActive.play) {
		this.currentFrame = 1;
		this.playTime = 0;
		if(this.isPlay) {
			this.isPlay = !this.isPlay;
			this.buttonActive.help = true;
			this.buttonActive.undo=true;
			if(this.historyPos>=this.historyArrDotFrame.length-1) {
				this.buttonActive.undo=false;
			}
			this.buttonActive.clear=false;
			for(var i=0; i<DOT_NUM; i++) {
				if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
					this.buttonActive.clear=true;
					break;
				}
			}
			this.buttonActive.copy = true;
			var isComplete = true;
			for(var i=0; i<this.arrIsAccess.length; i++) {
				if(this.arrIsAccess[i] == false) {
					isComplete = false;
					break;
				}
			}
			this.buttonActive.complete = isComplete;
		} else {
			this.isPlay = !this.isPlay;
			this.buttonActive.help = false;
			this.buttonActive.undo = false;
			this.buttonActive.clear = false;
			this.buttonActive.copy = false;
			this.buttonActive.complete = false;
		}
	}
	this.drawButton();
};
DotAppFramework.prototype.onClickCompleteButton = function() {
	if(this.buttonActive.complete) {
		var that = this;
		//completeDialog.dialog("open");
		document.getElementsByClassName("appContainer")[0].style.display = "none";
		document.getElementById("completeDialog").style.display = "block";


		this.completeViewTime = 0;
		this.completeViewFrame = 1;
		this.completeLoopInterval = setInterval(this.completeLoop.bind(this), 33);
	}
};
DotAppFramework.prototype.onClickNotCompleteButton = function() {
	this.drawButton();
	clearInterval(this.completeLoopInterval	);
	//completeDialog.dialog("close");
	document.getElementsByClassName("appContainer")[0].style.display = "block";
	document.getElementById("completeDialog").style.display = "none";
};
DotAppFramework.prototype.onClickUploadButton = function() {
	clearInterval(this.completeLoopInterval	);
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(100);
	//ORIGINAL_CANVAS_SIZE
	encoder.setSize(this.mainView.width, this.mainView.height);
	encoder.start();
	for(var i=0; i<this.arrDotFrame.length; i++) {
		this.completeView.drawBgScale(this.arrDotFrame[i].bgColor, MAIN_SCALE);
		this.arrDotFrame[i].drawMain(this.completeView, this.isHoverDot, this.hoverDotNum, true);
		encoder.addFrame(this.completeView.ctx);
	}
	encoder.finish();
	var bin = new Uint8Array(encoder.stream().bin);
	var blob = new Blob([bin.buffer], {type:'image/gif'});

	var b64 = window.btoa(encoder.stream().getData());
	var url2 = 'data:image/gif;base64,'+b64;

	var url = URL.createObjectURL(blob);

/*
	var image = new Image();
	var image = document.getElementById('gifimage');

	image.src = url;
	image.onload = function() {
		URL.revokeObjectURL(url);
	};
*/

	//URL.revokeObjectURL(url);

	//download blob

	/*
	var FileName = "dotanime.gif"

	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(blob, FileName);
	} else {
		var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		//a.target   = '_blank';
		a.download = FileName;
		document.body.appendChild(a) //  FireFox specification
		a.click();
		document.body.removeChild(a) //  FireFox specification
	}
	*/

	/*
	//show blob <img>
	var image = new Image();
	var image = document.getElementById('image');
	//You can also generate DataURL from binary
	//var b64 = window.btoa(encode.stream().getData());
 	//image.src = 'data:image/gif;base64,'+b64;
	image.src = url;
	image.onload = function() {
		URL.revokeObjectURL(url);
	};
	*/

	//completeDialog.dialog("close");
	//document.getElementsByClassName("appContainer")[0].style.display = "none";
	//document.getElementById("completeDialog").style.display = "block";
};

DotAppFramework.prototype.drawMainView = function(isActive) {
	if(isActive) {
		this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	} else {
		this.mainView.drawBgScale('#555', MAIN_SCALE);
	}
	if(isActive) {
		this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, this.isHoverDot, this.hoverDotNum, this.isPlay);
	} else {
		this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, this.isHoverDot, this.hoverDotNum, true);
	}
};
DotAppFramework.prototype.drawPreview = function() {
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrDotFrame[i].drawPreview(this.previewView[i]);
	}
};
DotAppFramework.prototype.drawCopyPreview = function() {
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale('#666', PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
			this.arrDotFrame[i].drawPreview(this.previewView[i]);
			//this.previewView[i].drawBorderPreview();
		}
	}
};
DotAppFramework.prototype.drawButton = function() {
	if(this.buttonActive.help) {
		this.helpButton.src = './images/help_on_btn.png';
	} else {
		this.helpButton.src = './images/help_off_btn.png';
	}
	if(this.buttonActive.undo) {
		this.undoButton.src = './images/undo_on_btn.png';
	} else {
		this.undoButton.src = './images/undo_off_btn.png';
	}
	if(this.buttonActive.clear) {
		this.clearButton.src = './images/clear_on_btn.png';
	} else {
		this.clearButton.src = './images/clear_off_btn.png';
	}
	if(this.buttonActive.copy) {
		if(this.isCopy) {
			this.copyButton.src = './images/copy_cancel_btn.png';
		} else {
			this.copyButton.src = './images/copy_on_btn.png';
		}
	} else {
		this.copyButton.src = './images/copy_off_btn.png';
	}
	if(this.buttonActive.play) {
		if(this.isPlay) {
			this.playButton.src = './images/pause_on_btn.png';
		} else {
			this.playButton.src = './images/play_on_btn.png';
		}
	} else {
		this.playButton.src = './images/play_off_btn.png';
	}
	if(this.buttonActive.complete) {
		this.completeButton.src = './images/complete_on_btn.png';
	} else {
		this.completeButton.src = './images/complete_off_btn.png';
	}
};
DotAppFramework.prototype.renewHoverNum = function() {
	this.isHoverDot = false;
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	var originalMousePos = new Vector2(this.mainView.mousePos.x/MAIN_SCALE, this.mainView.mousePos.y/MAIN_SCALE);
	for(var i=0; i<this.arrDotFrame[this.currentFrame-1].arrDot.length; i++) {
		if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isPointOnDot(originalMousePos, 9, center)) {
			this.isHoverDot = true;
			this.hoverDotNum = i;
		}
	}
};
DotAppFramework.prototype.completeLoop = function() {
	this.completeViewTime++;
	if(this.completeViewTime>3) {
		this.completeViewTime = 0;
		this.completeViewFrame++;
		if(this.completeViewFrame>8) {
			this.completeViewFrame = 1;
		}
	}
	this.completeView.drawBgScale(this.arrDotFrame[this.completeViewFrame-1].bgColor, MAIN_SCALE);
	this.arrDotFrame[this.completeViewFrame-1].drawMain(this.completeView, this.isHoverDot, this.hoverDotNum, true);
};
DotAppFramework.prototype.loop = function() {
	//myform.mytext.value = this.currentFrame;
	this.drawPreview();
	if(this.isCopy) {
		this.drawMainView(false);
		this.mainView.ctx.globalAlpha = 0.8;
		this.mainView.drawBgScale('#ccc', MAIN_SCALE);
		this.drawCopyPreview();
	}
	else if(this.isPlay) {
		this.playTime++;
		if(this.playTime>3) {
			this.playTime = 0;
			this.currentFrame++;
			if(this.currentFrame>8) {
				this.currentFrame = 1;
			}
		}
		this.drawMainView(true);
		this.drawPreview();
	} else {
		//normal
		if(this.mainView.isMouseOnCanvas) {
			this.renewHoverNum();
			if(!this.isHoverDot) this.preDrawNum=-1;
		}
		if(this.isDraw) {
			if(this.isPressMain && this.isDrawHover) {
				if(this.isHoverDot) {
					if(this.hoverDotNum!=this.preDrawNum) {
						this.preDrawNum = this.hoverDotNum;
						if(this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw) {
							this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw = false;
						}
						else {
							this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].isDraw = true;
							this.arrDotFrame[this.currentFrame-1].arrDot[this.hoverDotNum].color = this.currentColor;
						}
					}
					this.addHistory();
					this.buttonActive.clear=false;
					for(var i=0; i<DOT_NUM; i++) {
						if(this.arrDotFrame[this.currentFrame-1].arrDot[i].isDraw) {
							this.buttonActive.clear=true;
							break;
						}
					}
				}
			}
		}

		this.drawMainView(true);
		this.drawPreview();
	}
};

var tutorialDotData = [
	[1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,0,0,1,0,0,1,0,0,0,0,0,1,0,0,0,0,0],
	[1,1,0,0,1,0,0,1,1,0,0,0,1,1,1,0,0,0,1],
	[0,1,0,0,1,0,0,1,1,1,0,1,1,1,1,1,0,1,1],
	[0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1],
	[0,0,0,0,0,0,0,0,1,1,1,1,1,0,1,1,1,1,1],
	[0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0]
];

DotTutorial = function() {
	this.currentPage = 1;
	this.currentFrame = 1;
	this.currentColor = WHITE;
	this.mainView = new View('tutorialMainCanvas', MAINCANVAS_WIDTH, MAINCANVAS_HEIGHT, false);
	this.mainView.ctx.scale(MAIN_SCALE, MAIN_SCALE);
	var arrPreview = new Array(8);
	for(var i=0; i<arrPreview.length; i++) {
		arrPreview[i] = new View('tutorialPreviewCanvas'+(i+1), PREVIEWCANVAS_WIDTH, PREVIEWCANVAS_HEIGHT, false);
	}
	this.previewView = arrPreview;
	for(var i=0; i<this.previewView.length; i++) {
		this.previewView[i].ctx.scale(PREVIEW_SCALE, PREVIEW_SCALE);
	}
	var frameData = new Array(8);
	for(var i=0; i<frameData.length; i++) {
		frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
		for(var j=0; j<DOT_NUM; j++) {
			if(tutorialDotData[i][j]==1) {
				frameData[i].arrDot[j].color = this.currentColor;
				frameData[i].arrDot[j].isDraw = true;
			}
		}
	}
	this.arrDotFrame = frameData;
	this.isHoverDot = false;
	this.hoverDotNum = -1;
	this.time = 0;
	this.pageButton = new Array(5);
	this.isShowMainButton = false;
	this.setIV;
	this.tutorialSkipButton = document.getElementById("tutorialSkipButton");
	this.tutorialSkipButton.addEventListener('click', function() {
		clearInterval(this.setIV);
		document.getElementById("tutorialDialog").style.display = "none";
		document.getElementsByClassName("appContainer")[0].style.display = "block";
		//tutorialDialog.dialog("close");
	}, false);
	this.tutorialBackButton = document.getElementById("tutorialBackButton");
	this.tutorialBackButton.addEventListener('click', this.onClickBackButton.bind(this), false);
	this.tutorialNextButton = document.getElementById("tutorialNextButton");
	this.tutorialNextButton.addEventListener('click', this.onClickNextButton.bind(this), false);

	this.pageButton[0] = document.getElementById("tutorialPageButton1");
	this.pageButton[0].addEventListener('click', this.onClickPageButton1.bind(this), false);
	this.pageButton[1] = document.getElementById("tutorialPageButton2");
	this.pageButton[1].addEventListener('click', this.onClickPageButton2.bind(this), false);
	this.pageButton[2] = document.getElementById("tutorialPageButton3");
	this.pageButton[2].addEventListener('click', this.onClickPageButton3.bind(this), false);
	this.pageButton[3] = document.getElementById("tutorialPageButton4");
	this.pageButton[3].addEventListener('click', this.onClickPageButton4.bind(this), false);
	this.pageButton[4] = document.getElementById("tutorialPageButton5");
	this.pageButton[4].addEventListener('click', this.onClickPageButton5.bind(this), false);
};
DotTutorial.prototype.start = function() {
	//tutorialDialog.dialog('open');
	document.getElementsByClassName("appContainer")[0].style.display = "none";
  document.getElementById("tutorialDialog").style.display = "block";
	this.currentPage=0;
	this.onClickPageButton1();
};
DotTutorial.prototype.onClickBackButton = function() {
	if(this.currentPage>1) {
		if(this.currentPage==2) {
				this.onClickPageButton1();
		} else if(this.currentPage==3) {
				this.onClickPageButton2();
		} else if(this.currentPage==4) {
				this.onClickPageButton3();
		} else if(this.currentPage==5) {
				this.onClickPageButton4();
		}
	}
};
DotTutorial.prototype.onClickNextButton = function() {
	if(this.currentPage<5) {
		if(this.currentPage==1) {
			this.onClickPageButton2();
		} else if(this.currentPage==2) {
			this.onClickPageButton3();
		} else if(this.currentPage==3) {
			this.onClickPageButton4();
		} else if(this.currentPage==4) {
			this.onClickPageButton5();
		}
	} else if(this.currentPage==5) {
		clearInterval(this.setIV);
		document.getElementById("tutorialDialog").style.display = "none";
		document.getElementsByClassName("appContainer")[0].style.display = "block";
	}
};
DotTutorial.prototype.onClickPageButton1 = function() {
	if(this.currentPage!=1) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
			for(var j=0; j<DOT_NUM; j++) {
				if(tutorialDotData[i][j]==1) {
					frameData[i].arrDot[j].color = this.currentColor;
					frameData[i].arrDot[j].isDraw = true;
				}
			}
		}
		this.arrDotFrame = frameData;
		this.currentPage=1;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrDotFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='ロゴを使って、アニメーションが作れます。';
		document.getElementById('tutorialPointer').style.display = 'none';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
DotTutorial.prototype.onClickPageButton2 = function() {
	if(this.currentPage!=2) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
			for(var j=0; j<DOT_NUM; j++) {
				if(tutorialDotData[i][j]==1) {
					frameData[i].arrDot[j].color = this.currentColor;
					frameData[i].arrDot[j].isDraw = true;
				}
			}
		}
		this.arrDotFrame = frameData;
		this.currentPage=2;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrDotFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='ロゴのパーツをクリックして色を付けましょう。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '290px';
		document.getElementById('tutorialPointer').style.left = '485px';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
DotTutorial.prototype.onClickPageButton3 = function() {
	if(this.currentPage!=3) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
			for(var j=0; j<DOT_NUM; j++) {
				if(tutorialDotData[i][j]==1) {
					frameData[i].arrDot[j].color = this.currentColor;
					frameData[i].arrDot[j].isDraw = true;
				}
			}
		}
		this.arrDotFrame = frameData;
		this.currentPage=3;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrDotFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='1 コマ目が完成したら、次のコマを選択してください。';
		document.getElementById('tutorialPointer').style.display = 'block';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
DotTutorial.prototype.onClickPageButton4 = function() {
	if(this.currentPage!=4) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
			for(var j=0; j<DOT_NUM; j++) {
				if(tutorialDotData[i][j]==1) {
					frameData[i].arrDot[j].color = this.currentColor;
					frameData[i].arrDot[j].isDraw = true;
				}
			}
		}
		this.arrDotFrame = frameData;
		this.currentPage=4;
		this.isShowMainButton = true;
		this.renewImages();
		this.renewButton(true, true, true, true, false);
		this.mainView.drawBgScale(this.arrDotFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='右側は便利な機能があるので使ってみてください。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '245px';
		document.getElementById('tutorialPointer').style.left = '700px';
		this.time = 0;
		this.currentFrame = 2;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
DotTutorial.prototype.onClickPageButton5 = function() {
	if(this.currentPage!=5) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
			for(var j=0; j<DOT_NUM; j++) {
				if(tutorialDotData[i][j]==1) {
					frameData[i].arrDot[j].color = this.currentColor;
					frameData[i].arrDot[j].isDraw = true;
				}
			}
		}
		this.arrDotFrame = frameData;
		this.currentPage=5;
		this.isShowMainButton = true;
		this.renewImages();
		this.renewButton(true, true, true, true, true);
		this.mainView.drawBgScale(this.arrDotFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='8 コマできたら完成です。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '540px';
		document.getElementById('tutorialPointer').style.left = '700px';
		this.time = 0;
		this.currentFrame = 8;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
DotTutorial.prototype.loop = function() {
	this.time++;
	if(this.currentPage==1) {
		this.page1();
	} else if(this.currentPage==2) {
		this.page2();
	} else if(this.currentPage==3) {
		this.page3();
	} else if(this.currentPage==4) {
		this.page4();
	} else if(this.currentPage==5) {
		this.page5();
	}
};
DotTutorial.prototype.page1 = function() {
	this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverDotNum, true);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrDotFrame[i].drawPreview(this.previewView[i]);
	}
	if(this.time>4) {
		this.time=0;
		this.currentFrame++;
		if(this.currentFrame>8) {
			this.currentFrame=1;
		}
	}
};
DotTutorial.prototype.page2 = function() {
	var changeNum = 2;
	this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, true, changeNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrDotFrame[i].drawPreview(this.previewView[i]);
	}
	if(this.time>30) {
		this.time=0;
		this.arrDotFrame[this.currentFrame-1].arrDot[changeNum].isDraw=false;
	} else if(this.time>15) {
		this.arrDotFrame[this.currentFrame-1].arrDot[changeNum].isDraw=true;
		this.arrDotFrame[this.currentFrame-1].arrDot[changeNum].color=this.currentColor;

	}
};
DotTutorial.prototype.page3 = function() {
	var preFrame=1;
	if(this.time>48) {
		this.time=0;
		this.currentFrame=preFrame;
	} else if(this.time>36) {
		document.getElementById('tutorialPointer').style.top = '140px';
		document.getElementById('tutorialPointer').style.left = '160px';
	} else if(this.time>24) {
		this.currentFrame=preFrame+1;
	} else if(this.time>12) {
		document.getElementById('tutorialPointer').style.top = '200px';
		document.getElementById('tutorialPointer').style.left = '160px';
		this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverDotNum, false);
	}
	this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverDotNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrDotFrame[i].drawPreview(this.previewView[i]);
	}
};

DotTutorial.prototype.page4 = function() {
	this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	if(this.time<20) {
		this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverDotNum, false);
	} else {
		var blankFrame = new DotFrame(LINE_LENGTH, DOT_RADIUS, KIDS_GREEN);
		blankFrame.drawMain(this.mainView, false, this.hoverDotNum, false);
		if(this.time>=40) {
				this.time=0;
		}
	}
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		if(i==this.currentFrame-1) {
			if(this.time<20) {
			this.arrDotFrame[i].drawPreview(this.previewView[i]);
			}
		} else {
			this.arrDotFrame[i].drawPreview(this.previewView[i]);
		}
	}
};
DotTutorial.prototype.page5 = function() {
	this.mainView.drawBgScale(this.arrDotFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrDotFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverDotNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(KIDS_GREEN, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrDotFrame[i].drawPreview(this.previewView[i]);
	}
};
DotTutorial.prototype.renewImages = function() {
	for(var i=0; i<this.pageButton.length; i++) {
		var num = i+1;
		if(i==this.currentPage-1) {
			this.pageButton[i].src = 'images/tut' + num +'_on_btn.png';
		} else {
			this.pageButton[i].src = 'images/tut' + num +'_off_btn.png';
		}
	}
}
DotTutorial.prototype.renewButton = function(undo, clear, copy, play, complete) {
	if(this.isShowMainButton) {
		document.getElementById('tutorialButtonArea').style.visibility = 'visible';
	} else {
		document.getElementById('tutorialButtonArea').style.visibility = 'hidden';
	}
	if(undo) {
		document.getElementById('tutorialUndoButton').src = './images/undo_on_btn.png';
	} else {
		document.getElementById('tutorialUndoButton').src = './images/undo_off_btn.png';
	}
	if(clear) {
		document.getElementById('tutorialClearButton').src = './images/clear_on_btn.png';
	} else {
		document.getElementById('tutorialClearButton').src = './images/clear_off_btn.png';
	}
	if(copy) {
		document.getElementById('tutorialCopyButton').src = './images/copy_on_btn.png';
	} else {
		document.getElementById('tutorialCopyButton').src = './images/copy_off_btn.png';
	}
	if(play) {
		document.getElementById('tutorialPlayButton').src = './images/play_on_btn.png';
	} else {
		document.getElementById('tutorialPlayButton').src = './images/play_off_btn.png';
	}
	if(complete) {
		document.getElementById('tutorialCompleteButton').src = './images/complete_on_btn.png';
	} else {
		document.getElementById('tutorialCompleteButton').src = './images/complete_off_btn.png';
	}
}
