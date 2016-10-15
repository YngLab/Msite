

var EXPORT_SIZE;
var EXPORT_ANIMATION_DELAY;
var FileName;

var EXPORT_LINE_LENGTH = EXPORT_SIZE*0.1777;
var EXPORT_DOT_RADIUS = EXPORT_LINE_LENGTH*0.125;

/*
phpData = '1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0';
phpData += ',0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0';
phpData += ',0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0';
phpData += ',1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0';
phpData += ',0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0';
phpData += ',0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0';
phpData += ',1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1';
phpData += ',0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0';
*/


function exportDotImage(phpData, phpNum) {
	var dataArray = phpData.split(",");
	var exportData = new Array(8);
	exportData[0] = new Array(DOT_NUM);
	exportData[1] = new Array(DOT_NUM);
	exportData[2] = new Array(DOT_NUM);
	exportData[3] = new Array(DOT_NUM);
	exportData[4] = new Array(DOT_NUM);
	exportData[5] = new Array(DOT_NUM);
	exportData[6] = new Array(DOT_NUM);
	exportData[7] = new Array(DOT_NUM);
	for(var i=0; i<8; i++) {
		for(var j=0; j<DOT_NUM; j++) {
			exportData[i][j] = dataArray[i*DOT_NUM + j];
		}
	}

	EXPORT_ANIMATION_DELAY = document.forms.exportForm.exportSpeed.value;
	EXPORT_SIZE = document.forms.exportForm.exportSize.value;
	EXPORT_LINE_LENGTH = EXPORT_SIZE*0.1777;
	EXPORT_DOT_RADIUS = EXPORT_LINE_LENGTH*0.125;

	FileName = phpNum + '_' +EXPORT_SIZE + 'px' + ".gif";
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(EXPORT_ANIMATION_DELAY);
	encoder.setSize(EXPORT_SIZE, EXPORT_SIZE);
	encoder.start();
	document.getElementById('exportSpace').innerHTML = '<canvas id="exportCanvas" width="'+EXPORT_SIZE+'" height="'+EXPORT_SIZE+'"></canvas>';
	var exportView = new View('exportCanvas', EXPORT_SIZE, EXPORT_SIZE, false);
	var frameData = new Array(8);
	for(var i=0; i<frameData.length; i++) {
		frameData[i] = new DotFrame(EXPORT_LINE_LENGTH, EXPORT_DOT_RADIUS, KIDS_GREEN);
		for(var j=0; j<DOT_NUM; j++) {
			if(exportData[i][j]==1) {
				frameData[i].arrDot[j].color = WHITE;
				frameData[i].arrDot[j].isDraw = true;
			}
		}
	}
	var arrDotFrame = frameData;
	var center = new Vector2(EXPORT_SIZE/2, EXPORT_SIZE/2);
	for(var i=0; i<arrDotFrame.length; i++) {
		exportView.drawBg(arrDotFrame[i].bgColor);
		for(var j=0; j<arrDotFrame[i].arrDot.length; j++) {
			arrDotFrame[i].arrDot[j].drawMain(exportView.ctx, center, true);
		}
		encoder.addFrame(exportView.ctx);
	}
	encoder.finish();
	var bin = new Uint8Array(encoder.stream().bin);
	var blob = new Blob([bin.buffer], {type:'image/gif'});

	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(blob, FileName);
	} else {
		var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = FileName;
		document.body.appendChild(a) //  FireFox specification
		a.click();
		document.body.removeChild(a) //  FireFox specification
	}
	document.getElementById('exportSpace').innerHTML = '';
	window.alert('export success');
}

function exportLineImage(phpData, phpNum) {
	var dataArray = phpData.split(",");
	var exportData = new Array(8);
	exportData[0] = new Array(LINE_NUM);
	exportData[1] = new Array(LINE_NUM);
	exportData[2] = new Array(LINE_NUM);
	exportData[3] = new Array(LINE_NUM);
	exportData[4] = new Array(LINE_NUM);
	exportData[5] = new Array(LINE_NUM);
	exportData[6] = new Array(LINE_NUM);
	exportData[7] = new Array(LINE_NUM);
	for(var i=0; i<8; i++) {
		for(var j=0; j<LINE_NUM; j++) {
			exportData[i][j] = dataArray[i*LINE_NUM + j];
		}
	}
	EXPORT_ANIMATION_DELAY = document.forms.exportForm.exportSpeed.value;
	EXPORT_SIZE = document.forms.exportForm.exportSize.value;
	EXPORT_LINE_LENGTH = EXPORT_SIZE*0.1777;
	EXPORT_DOT_RADIUS = EXPORT_LINE_LENGTH*0.125;

	FileName = phpNum + '_' +EXPORT_SIZE + 'px' + ".gif";
	var encoder = new GIFEncoder();
	encoder.setRepeat(0);
	encoder.setDelay(EXPORT_ANIMATION_DELAY);
	encoder.setSize(EXPORT_SIZE, EXPORT_SIZE);
	encoder.start();
	document.getElementById('exportSpace').innerHTML = '<canvas id="exportCanvas" width="'+EXPORT_SIZE+'" height="'+EXPORT_SIZE+'"></canvas>';
	var exportView = new View('exportCanvas', EXPORT_SIZE, EXPORT_SIZE, false);
	var frameData = new Array(8);
	for(var i=0; i<frameData.length; i++) {
		frameData[i] = new LineFrame(EXPORT_LINE_LENGTH, MIRAI_ORANGE);
		for(var j=0; j<LINE_NUM; j++) {
			if(exportData[i][j]==1) {
				frameData[i].arrLine[j].color = WHITE;
				frameData[i].arrLine[j].isDraw = true;
			}
		}
	}
	var arrLineFrame = frameData;
	var center = new Vector2(EXPORT_SIZE/2, EXPORT_SIZE/2);
	for(var i=0; i<arrLineFrame.length; i++) {
		exportView.drawBg(arrLineFrame[i].bgColor);
		for(var j=0; j<arrLineFrame[i].arrLine.length; j++) {
			arrLineFrame[i].arrLine[j].drawMain(exportView.ctx, center, true);
		}
		encoder.addFrame(exportView.ctx);
	}
	encoder.finish();
	var bin = new Uint8Array(encoder.stream().bin);
	var blob = new Blob([bin.buffer], {type:'image/gif'});

	if (window.navigator.msSaveBlob) {
		window.navigator.msSaveBlob(blob, FileName);
	} else {
		var a = document.createElement("a");
		a.href = URL.createObjectURL(blob);
		a.download = FileName;
		document.body.appendChild(a) //  FireFox specification
		a.click();
		document.body.removeChild(a) //  FireFox specification
	}
	document.getElementById('exportSpace').innerHTML = '';
	window.alert('export success');
}
