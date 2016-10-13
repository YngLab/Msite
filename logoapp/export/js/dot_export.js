

var EXPORT_SIZE;
var EXPORT_ANIMATION_DELAY;
var FileName;

var EXPORT_LINE_LENGTH = EXPORT_SIZE*0.1777;
var EXPORT_DOT_RADIUS = EXPORT_LINE_LENGTH*0.125;
//OBJ_TYPE[0] or OBJ_TYPE[1];
var objectType = 'dot';
var exportData = new Array(8);
exportData[0] = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
exportData[1] = [0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
exportData[2] = [0,0,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0];
exportData[3] = [1,1,0,1,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0];
exportData[4] = [0,0,1,0,1,0,1,1,0,0,1,0,0,1,0,0,1,0,0];
exportData[5] = [0,1,0,1,0,1,0,0,1,0,0,1,0,0,1,0,0,1,0];
exportData[6] = [1,0,0,0,0,0,0,1,1,1,1,1,1,1,1,1,1,1,1];
exportData[7] = [0,1,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0];

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

/*
var exportData = new Array();
[0] = '0,0,0,...0';
...
[7] = ...;

文字列をカンマ区切りで数値に変換

*/

function exportImage(phpData, phpNum) {
	var dataArray = phpData.split(",");
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
	//div #exportSpaceにcanvasを追加
	document.getElementById('exportSpace').innerHTML = '<canvas id="exportCanvas" width="'+EXPORT_SIZE+'" height="'+EXPORT_SIZE+'"></canvas>';
	//canvasでViewを作成
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
		//背景色描画
		exportView.drawBg(arrDotFrame[i].bgColor);
		//点描画
		//arrDotFrame[i].drawMain(exportView, false, 0, true);
		for(var j=0; j<arrDotFrame[i].arrDot.length; j++) {
			arrDotFrame[i].arrDot[j].drawMain(exportView.ctx, center, true);
			//window.alert('j :' + j);
		}
		//contextを書き出し
		encoder.addFrame(exportView.ctx);
	}
	encoder.finish();
	var bin = new Uint8Array(encoder.stream().bin);
	var blob = new Blob([bin.buffer], {type:'image/gif'});
	//ダウンロード
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
	//divの中身削除
	document.getElementById('exportSpace').innerHTML = '';
	window.alert('export success');
}