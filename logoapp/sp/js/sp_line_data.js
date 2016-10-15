
Line = function(posA, posB, color, isDraw) {
	this.posA = posA;
	this.posB = posB;
	this.color = color;
	this.isDraw = isDraw;
};
Line.prototype.drawMain = function(context, translate, isPlay) {
	if(this.isDraw) {
		context.beginPath();
		context.strokeStyle = this.color;
		context.lineWidth = 2;
		context.globalAlpha = 1.0;
		context.moveTo(this.posA.x+translate.x, this.posA.y+translate.y);
		context.lineTo(this.posB.x+translate.x, this.posB.y+translate.y);
		context.closePath();
		context.stroke();
	}
	if(!this.isDraw && !isPlay) {
		//点線の描画
		var A = new Vector2(this.posA.x, this.posA.y);
		var B = new Vector2(this.posB.x, this.posB.y);
		var num = 5;
		var d = Math.sqrt(Math.pow(B.x-A.x, 2) + Math.pow(B.y - A.y, 2));
		var rad = Math.atan2(B.y-A.y, B.x-A.x);
		var dotted = Math.round(d / num/2);
		for(var i=0; i<dotted; i++) {
			var px = Math.cos(rad) * num * (i * 2) + A.x;
			var py = Math.sin(rad) * num * (i * 2) + A.y;
			var qx = Math.cos(rad) * num * (i * 2 + 1) + A.x;
			var qy = Math.sin(rad) * num * (i * 2 + 1) + A.y;
			context.beginPath();
			context.strokeStyle = '#FFF';
			context.lineWidth = 1.5;
			context.globalAlpha = 1.0;
			context.moveTo(px + translate.x, py + translate.y);
			context.lineTo(qx + translate.x, qy + translate.y);
			context.stroke();
			context.closePath();
			//window.alert();
		}
	}

};
Line.prototype.drawPreview = function(context, translate) {
	if(this.isDraw) {
		context.beginPath();
		context.strokeStyle = this.color;
		context.lineWidth = 6;
		context.globalAlpha = 1.0;
		context.moveTo(this.posA.x+translate.x, this.posA.y+translate.y);
		context.lineTo(this.posB.x+translate.x, this.posB.y+translate.y);
		context.closePath();
		context.stroke();
	}
};
Line.prototype.drawHover = function(context, translate) {
	if(this.isDraw) {
		context.beginPath();
		context.strokeStyle = this.color;
		context.lineWidth = 4;
		context.globalAlpha = 1.0;
		context.moveTo(this.posA.x+translate.x, this.posA.y+translate.y);
		context.lineTo(this.posB.x+translate.x, this.posB.y+translate.y);
		context.closePath();
		context.stroke();
	} else {
		//点線の描画
		var A = new Vector2(this.posA.x, this.posA.y);
		var B = new Vector2(this.posB.x, this.posB.y);
		var num = 7;
		var d = Math.sqrt(Math.pow(B.x-A.x, 2) + Math.pow(B.y - A.y, 2));
		var rad = Math.atan2(B.y-A.y, B.x-A.x);
		var dotted = Math.round(d / num/2);
		for(var i=0; i<dotted; i++) {
			var px = Math.cos(rad) * num * (i * 2) + A.x;
			var py = Math.sin(rad) * num * (i * 2) + A.y;
			var qx = Math.cos(rad) * num * (i * 2 + 1) + A.x;
			var qy = Math.sin(rad) * num * (i * 2 + 1) + A.y;
			context.beginPath();
			context.strokeStyle = '#FFF';
			context.lineWidth = 4;
			context.globalAlpha = 1.0;
			context.moveTo(px + translate.x, py + translate.y);
			context.lineTo(qx + translate.x, qy + translate.y);
			context.stroke();
			context.closePath();
		}
	}

};
Line.prototype.dist = function() {
	var x = this.posA.x-this.posB.x;
	var y = this.posA.y-this.posB.y;
	var l = new Vector2(x, y);
	return l.dist();
};
Line.prototype.isPointOnLine = function(point, range, center) {
	var A = new Vector2(this.posA.x + center.x, this.posA.y + center.y);
	var B = new Vector2(this.posB.x + center.x, this.posB.y + center.y);
	var cross = GetCrossProductByPoint(point, A, B);
	var d = Math.abs(cross/this.dist());
	if(d<range) {
		if(isAcuteAngleTriangle(point, A, B)) {
			return true;
		}
		else {
			return false;
		}
	} else {
		return false;
	}
};
Line.prototype.copy = function() {
	var newLine = new Line(new Vector2(this.posA.x, this.posA.y), new Vector2(this.posB.x, this.posB.y), this.color, this.isDraw);
	return newLine;
};

LineFrame = function(interval, bgColor) {
	this.bgColor = bgColor;
	var lineData = new Array(LINE_NUM);
	for(var i=0; i<lineData.length; i++) {
		var linePos = getLinePos(i, interval);
		lineData[i] = new Line(linePos[0], linePos[1], '#000', false);
	}
	this.arrLine = lineData;
};
LineFrame.prototype.drawMain = function(view, isHoverLine, hoverLineNum, isPlay) {
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	if(!isPlay && isHoverLine) {
		this.arrLine[hoverLineNum].drawHover(view.ctx, center);
	}
	for(var i=0; i<this.arrLine.length; i++) {
		if(!isHoverLine || i!=hoverLineNum) {
			this.arrLine[i].drawMain(view.ctx, center, isPlay);
		}
	}
};
LineFrame.prototype.drawPreview = function(view1) {
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	for(var i=0; i<this.arrLine.length; i++) {
		this.arrLine[i].drawPreview(view1.ctx, center);
	}
};
LineFrame.prototype.copy = function() {
	var newLineFrame = new LineFrame(0, '#000');
	newLineFrame.bgColor = this.bgColor;
	for(var i=0; i<LINE_NUM; i++) {
		newLineFrame.arrLine[i] = this.arrLine[i].copy();
	}
	return newLineFrame;
};

LineAppFramework = function(mainCanvasName, previewCanvasName) {
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
		frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
	}
	this.arrLineFrame = frameData;
	this.currentColor = WHITE;
	this.currentFrame = 1;
	this.isHoverLine = false;
	this.hoverLineNum = -1;
	this.isPlay=false;
	this.playTime = 0;
	this.historyPos = 0;
	this.historyArrLineFrame = new Array(0);
	this.unshiftHistoryArrLineFrame();
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
LineAppFramework.prototype.start = function () {
	setInterval(this.loop.bind(this) , 33 );
	this.drawButton();
};
LineAppFramework.prototype.copyArrLineFrame = function(arrLineFrame) {
	var newArray = new Array(8);
		for(var i=0; i<newArray.length; i++) {
			newArray[i] = arrLineFrame[i].copy();
	}
	return newArray;
};
LineAppFramework.prototype.unshiftHistoryArrLineFrame = function() {
	this.historyArrLineFrame.unshift(this.copyArrLineFrame(this.arrLineFrame));
};
LineAppFramework.prototype.onClickMain = function(e) {
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
LineAppFramework.prototype.onMouseDownMain = function(e) {
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
		if(this.isHoverLine) {
			if(this.hoverLineNum==this.preDrawNum) {
				if(this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw) {
					this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw = false;
				}
				else {
					this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw = true;
					this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].color = this.currentColor;
				}
			}
			this.addHistory();
			this.buttonActive.clear=false;
			for(var i=0; i<LINE_NUM; i++) {
				if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
					this.buttonActive.clear=true;
					break;
				}
			}
		}
		this.isDrawHover=true;
	}
};
LineAppFramework.prototype.onMouseUpMain = function() {
	this.isPressMain = false;
	this.isDrawHover = false;
	this.isHoverLine = false;
}
LineAppFramework.prototype.addHistory = function() {
	if(this.historyPos!= 0) {
		for(var i=0; i<this.historyPos; i++) {
			this.historyArrLineFrame.shift();
		}
		this.historyPos=0;
	}
	this.unshiftHistoryArrLineFrame();
	if(this.historyArrLineFrame.length>20) {
		this.historyArrLineFrame.pop();
	}
	this.buttonActive.undo=true;
	this.drawButton();
};
LineAppFramework.prototype.onClickPreview = function(e) {
	var clickNum;
	for(var i=0; i<8; i++) {
		if(this.previewView[i].isMouseOnCanvas) {
			clickNum=i;
		}
	}
	if(this.isCopy) {
		if(clickNum!=this.currentFrame-1) {
			this.isCopy=false;
			this.arrLineFrame[clickNum] = this.arrLineFrame[this.currentFrame-1].copy();
			this.currentFrame = clickNum+1;
			this.arrIsAccess[this.currentFrame-1]=true;
			this.addHistory();
			for(var i=0; i<LINE_NUM; i++) {
				if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
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
		for(var i=0; i<LINE_NUM; i++) {
			if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
				this.buttonActive.clear=true;
				break;
			}
		}
	}
	this.drawButton();
};
LineAppFramework.prototype.onClickHelpButton = function() {
	if(this.buttonActive.help) {
		lineTutorial.start();
	}
	this.drawButton();
};
LineAppFramework.prototype.onClickUndoButton = function() {
	if(this.buttonActive.undo) {
		if(this.historyPos<this.historyArrLineFrame.length-1) {
			this.historyPos++;
			this.arrLineFrame = this.copyArrLineFrame(this.historyArrLineFrame[this.historyPos]);
		}
		if(this.historyPos>=this.historyArrLineFrame.length-1) {
			this.buttonActive.undo=false;
		}
		this.buttonActive.clear=false;
		for(var i=0; i<LINE_NUM; i++) {
			if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
				this.buttonActive.clear=true;
				break;
			}
		}
	}
	this.drawButton();
};
LineAppFramework.prototype.onClickClearButton = function() {
	if(this.buttonActive.clear) {
		isClear = confirm('編集中のコマを全消去しますか。');
		if(isClear) {
			this.buttonActive.clear=false;
			this.arrLineFrame[this.currentFrame-1] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);;
			this.addHistory();
		}
	}
	this.drawButton();
};
LineAppFramework.prototype.onClickCopyButton = function() {
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
			for(var i=0; i<LINE_NUM; i++) {
				if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
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
LineAppFramework.prototype.onClickPlayButton = function() {
	if(this.buttonActive.play) {
		this.currentFrame = 1;
		this.playTime = 0;
		if(this.isPlay) {
			this.isPlay = !this.isPlay;
			this.buttonActive.help = true;
			this.buttonActive.undo=true;
			if(this.historyPos>=this.historyArrLineFrame.length-1) {
				this.buttonActive.undo=false;
			}
			this.buttonActive.clear=false;
			for(var i=0; i<LINE_NUM; i++) {
				if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
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
LineAppFramework.prototype.onClickCompleteButton = function() {
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
LineAppFramework.prototype.onClickNotCompleteButton = function() {
	this.drawButton();
	clearInterval(this.completeLoopInterval	);
	//completeDialog.dialog("close");
	document.getElementsByClassName("appContainer")[0].style.display = "block";
	document.getElementById("completeDialog").style.display = "none";
};
LineAppFramework.prototype.onClickUploadButton = function() {
	return;
	clearInterval(this.completeLoopInterval	);
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(100);
	//ORIGINAL_CANVAS_SIZE
	encoder.setSize(this.mainView.width, this.mainView.height);
	encoder.start();
	for(var i=0; i<this.arrLineFrame.length; i++) {
		this.completeView.drawBgScale(this.arrLineFrame[i].bgColor, MAIN_SCALE);
		this.arrLineFrame[i].drawMain(this.completeView, this.isHoverLine, this.hoverLinetNum, true);
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
	var FileName = "lineanime.gif"

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

	completeDialog.dialog("close");
};

LineAppFramework.prototype.drawMainView = function(isActive) {
	if(isActive) {
		this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	} else {
		this.mainView.drawBgScale('#555', MAIN_SCALE);
	}
	if(isActive) {
		this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, this.isHoverLine, this.hoverLineNum, this.isPlay);
	} else {
		this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, this.isHoverLine, this.hoverLineNum, true);
	}
};
LineAppFramework.prototype.drawPreview = function() {
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrLineFrame[i].drawPreview(this.previewView[i]);
	}
};
LineAppFramework.prototype.drawCopyPreview = function() {
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale('#666', PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
			this.arrLineFrame[i].drawPreview(this.previewView[i]);
			//this.previewView[i].drawBorderPreview();
		}
	}
};
LineAppFramework.prototype.drawButton = function() {
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
LineAppFramework.prototype.renewHoverNum = function() {
	this.isHoverLine = false;
	var center = new Vector2(ORIGINAL_CANVAS_SIZE/2, ORIGINAL_CANVAS_SIZE/2);
	var originalMousePos = new Vector2(this.mainView.mousePos.x/MAIN_SCALE, this.mainView.mousePos.y/MAIN_SCALE);
	for(var i=0; i<this.arrLineFrame[this.currentFrame-1].arrLine.length; i++) {
		if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isPointOnLine(originalMousePos, 6, center)) {
			this.isHoverLine = true;
			this.hoverLineNum = i;
		}
	}
};
LineAppFramework.prototype.completeLoop = function() {
	this.completeViewTime++;
	if(this.completeViewTime>3) {
		this.completeViewTime = 0;
		this.completeViewFrame++;
		if(this.completeViewFrame>8) {
			this.completeViewFrame = 1;
		}
	}
	this.completeView.drawBgScale(this.arrLineFrame[this.completeViewFrame-1].bgColor, MAIN_SCALE);
	this.arrLineFrame[this.completeViewFrame-1].drawMain(this.completeView, this.isHoverLine, this.hoverLineNum, true);
};
LineAppFramework.prototype.loop = function() {
	//myform.mytext.value = this.currentFrame;
	//this.drawButton();
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
			if(!this.isHoverLine) this.preDrawNum=-1;
		}
		if(this.isDraw) {
			if(this.isPressMain && this.isDrawHover) {
				if(this.isHoverLine) {
					if(this.hoverLineNum!=this.preDrawNum) {
						this.preDrawNum = this.hoverLineNum;
						if(this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw) {
							this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw = false;
						}
						else {
							this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].isDraw = true;
							this.arrLineFrame[this.currentFrame-1].arrLine[this.hoverLineNum].color = this.currentColor;
						}

					}
					this.addHistory();
					this.buttonActive.clear=false;
					for(var i=0; i<LINE_NUM; i++) {
						if(this.arrLineFrame[this.currentFrame-1].arrLine[i].isDraw) {
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

var tutorialLineData = [
	[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,1,0,1,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0],
	[0,0,0,0,0,0,1,0,1,1,0,1,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0,1],
	[0,0,0,0,0,0,1,0,1,1,0,1,0,0,1,1,0,0,0,0,1,1,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,1,0,0,1,0],
	[0,0,0,0,0,0,1,0,1,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,1,1,0,0],
	[0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	[1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0],
];

LineTutorial = function() {
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
		frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
		for(var j=0; j<LINE_NUM; j++) {
			if(tutorialLineData[i][j]==1) {
				frameData[i].arrLine[j].color = this.currentColor;
				frameData[i].arrLine[j].isDraw = true;
			}
		}
	}
	this.arrLineFrame = frameData;
	this.isHoverLine = false;
	this.hoverLineNum = -1;
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
LineTutorial.prototype.start = function() {
	//tutorialDialog.dialog('open');
	document.getElementsByClassName("appContainer")[0].style.display = "none";
  document.getElementById("tutorialDialog").style.display = "block";
	this.currentPage=0;
	this.onClickPageButton1();
};
LineTutorial.prototype.onClickBackButton = function() {
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
LineTutorial.prototype.onClickNextButton = function() {
	if(this.currentPage<5) {
		if(this.currentPage==1) {
			this.onClickPageButton2();
		} else if(this.currentPage==2) {
			this.onClickPageButton3();
		} else if(this.currentPage==3) {
			this.onClickPageButton4();
		} else if(this.currentPage==4) {
			this.onClickPageButton5();
		} else if(this.currentPage==5) {
			clearInterval(this.setIV);
			document.getElementById("tutorialDialog").style.display = "none";
			document.getElementsByClassName("appContainer")[0].style.display = "block";
		}
	}
};
LineTutorial.prototype.onClickPageButton1 = function() {
	if(this.currentPage!=1) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
			for(var j=0; j<LINE_NUM; j++) {
				if(tutorialLineData[i][j]==1) {
					frameData[i].arrLine[j].color = this.currentColor;
					frameData[i].arrLine[j].isDraw = true;
				}
			}
		}
		this.arrLineFrame = frameData;
		this.currentPage=1;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrLineFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='ロゴを使って、アニメーションが作れます。';
		document.getElementById('tutorialPointer').style.display = 'none';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
LineTutorial.prototype.onClickPageButton2 = function() {
	if(this.currentPage!=2) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
			for(var j=0; j<LINE_NUM; j++) {
				if(tutorialLineData[i][j]==1) {
					frameData[i].arrLine[j].color = this.currentColor;
					frameData[i].arrLine[j].isDraw = true;
				}
			}
		}
		this.arrLineFrame = frameData;
		this.currentPage=2;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrLineFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='ロゴのパーツをクリックして色を付けましょう。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '355px';
		document.getElementById('tutorialPointer').style.left = '460px';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
LineTutorial.prototype.onClickPageButton3 = function() {
	if(this.currentPage!=3) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
			for(var j=0; j<LINE_NUM; j++) {
				if(tutorialLineData[i][j]==1) {
					frameData[i].arrLine[j].color = this.currentColor;
					frameData[i].arrLine[j].isDraw = true;
				}
			}
		}
		this.arrLineFrame = frameData;
		this.currentPage=3;
		this.isShowMainButton = false;
		this.renewImages();
		this.renewButton(false, false, false, false, false);
		this.mainView.drawBgScale(this.arrLineFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='1 コマ目が完成したら、次のコマを選択してください。';
		document.getElementById('tutorialPointer').style.display = 'block';
		this.time = 0;
		this.currentFrame = 1;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
LineTutorial.prototype.onClickPageButton4 = function() {
	if(this.currentPage!=4) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
			for(var j=0; j<LINE_NUM; j++) {
				if(tutorialLineData[i][j]==1) {
					frameData[i].arrLine[j].color = this.currentColor;
					frameData[i].arrLine[j].isDraw = true;
				}
			}
		}
		this.arrLineFrame = frameData;
		this.currentPage=4;
		this.isShowMainButton = true;
		this.renewImages();
		this.renewButton(true, true, true, true, false);
		this.mainView.drawBgScale(this.arrLineFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='右側は便利な機能があるので使ってみてください。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '245px';
		document.getElementById('tutorialPointer').style.left = '700px';
		this.time = 0;
		this.currentFrame = 2;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
LineTutorial.prototype.onClickPageButton5 = function() {
	if(this.currentPage!=5) {
		clearInterval(this.setIV);
		var frameData = new Array(8);
		for(var i=0; i<frameData.length; i++) {
			frameData[i] = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
			for(var j=0; j<LINE_NUM; j++) {
				if(tutorialLineData[i][j]==1) {
					frameData[i].arrLine[j].color = this.currentColor;
					frameData[i].arrLine[j].isDraw = true;
				}
			}
		}
		this.arrLineFrame = frameData;
		this.currentPage=5;
		this.isShowMainButton = true;
		this.renewImages();
		this.renewButton(true, true, true, true, true);
		this.mainView.drawBgScale(this.arrLineFrame[0].bgColor, MAIN_SCALE);
		document.getElementById('tutorialText').innerHTML='8 コマできたら完成です。';
		document.getElementById('tutorialPointer').style.display = 'block';
		document.getElementById('tutorialPointer').style.top = '540px';
		document.getElementById('tutorialPointer').style.left = '700px';
		this.time = 0;
		this.currentFrame = 8;
		this.setIV = setInterval(this.loop.bind(this), 50);
	}
};
LineTutorial.prototype.loop = function() {
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
LineTutorial.prototype.page1 = function() {
	this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverLineNum, true);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrLineFrame[i].drawPreview(this.previewView[i]);
	}
	if(this.time>4) {
		this.time=0;
		this.currentFrame++;
		if(this.currentFrame>8) {
			this.currentFrame=1;
		}
	}
};
LineTutorial.prototype.page2 = function() {
	var changeNum = 2;
	this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, true, changeNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrLineFrame[i].drawPreview(this.previewView[i]);
	}
	if(this.time>30) {
		this.time=0;
		this.arrLineFrame[this.currentFrame-1].arrLine[changeNum].isDraw=false;
	} else if(this.time>15) {
		this.arrLineFrame[this.currentFrame-1].arrLine[changeNum].isDraw=true;
		this.arrLineFrame[this.currentFrame-1].arrLine[changeNum].color=this.currentColor;

	}
};
LineTutorial.prototype.page3 = function() {
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
		this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverLineNum, false);

	}
	this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverLineNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrLineFrame[i].drawPreview(this.previewView[i]);
	}
};
LineTutorial.prototype.page4 = function() {
	this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	if(this.time<20) {
		this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverLineNum, false);
	} else  {
		var blankFrame = new LineFrame(LINE_LENGTH, MIRAI_ORANGE);
		blankFrame.drawMain(this.mainView, false, this.hoverLineNum, false);
		if(this.time>=40) {
			this.time=0;
		}
	}
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		if(i==this.currentFrame-1) {
			if(this.time<20) {
			this.arrLineFrame[i].drawPreview(this.previewView[i]);
			}
		} else {
			this.arrLineFrame[i].drawPreview(this.previewView[i]);
		}
	}
};
LineTutorial.prototype.page5 = function() {
	this.mainView.drawBgScale(this.arrLineFrame[this.currentFrame-1].bgColor, MAIN_SCALE);
	this.arrLineFrame[this.currentFrame-1].drawMain(this.mainView, false, this.hoverLineNum, false);
	for(var i=0; i<8; i++) {
		if(i==this.currentFrame-1) {
			this.previewView[i].drawBgScale(MIRAI_ORANGE, PREVIEW_SCALE);
		} else {
			this.previewView[i].drawBgScale('#aaa', PREVIEW_SCALE);
		}
		this.arrLineFrame[i].drawPreview(this.previewView[i]);
	}
};
LineTutorial.prototype.renewImages = function() {
	for(var i=0; i<this.pageButton.length; i++) {
		var num = i+1;
		if(i==this.currentPage-1) {
			this.pageButton[i].src = 'images/tut' + num +'_on_btn.png';
		} else {
			this.pageButton[i].src = 'images/tut' + num +'_off_btn.png';
		}
	}
}
LineTutorial.prototype.renewButton = function(undo, clear, copy, play, complete) {
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
