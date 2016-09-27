//スマホ 7なんとかpx
//2*4
//大2小4

var img = new Array();
var fullWidth;
var boxPattern = [1, 1, 1, 2, 2, 2, 2, 2];
var num=23;
var arrNum = new Array();
var interval;

$(window).on('resize', resizeWindow);
function resizeWindow() {
	var imageArea = $('#imageArea');
	fullWidth = imageArea.width();
	document.getElementById('imageArea').style.width = '100%';
	document.getElementById('imageArea').style.height = fullWidth*0.5 + 'px';
	//var smallWidth = Math.floor(fullWidth*0.25*0.5);
	//var largeWidth = Math.floor(smallWidth*2);
	var largeWidth = fullWidth*0.25;
	var smallWidth = largeWidth*0.5;
	var imageCount=1;
	for(var i=1; i<9; i++) {
		var id = 'imageBox' + i;
		document.getElementById(id).style.width = '25%';
		document.getElementById(id).style.height = '50%';
		if(boxPattern[i-1]==1) {
			document.getElementById('image'+imageCount).style.width = '100%';
			document.getElementById('image'+imageCount).style.height = '100%';
			imageCount++;
			}
		else if(boxPattern[i-1]==2) {
			document.getElementById('image'+imageCount).style.width = '50%';
			document.getElementById('image'+imageCount).style.height = '50%';
			document.getElementById('image'+(imageCount+1)).style.width = '50%';
			document.getElementById('image'+(imageCount+1)).style.height = '50%';
			document.getElementById('image'+(imageCount+2)).style.width = '50%';
			document.getElementById('image'+(imageCount+2)).style.height = '50%';	
			document.getElementById('image'+(imageCount+3)).style.width = '50%';
			document.getElementById('image'+(imageCount+3)).style.height = '50%';
			imageCount+=4;	
		}
	}
	var indexTitle =$('#indexTitle');
	document.getElementById('indexTitleText').style.marginTop = fullWidth*0.01 + 'px';
	document.getElementById('indexTitleText').style.marginBottom = fullWidth*0.01 + 'px';
	document.getElementById('indexTitle').style.fontSize = fullWidth/35.0 + 'px';
	document.getElementById('indexTitle').style.left = fullWidth/2-indexTitle.width()/2 + 'px';
	document.getElementById('indexTitle').style.top = fullWidth/4-indexTitle.height()/2 + 'px';

}

function shuffleArray(array) {
  var n = array.length, t, i;
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = array[n];
    array[n] = array[i];
    array[i] = t;
  }
  return array;
}

function updateImageView(){
	shuffleArray(boxPattern);
	var imageNum = 50;
	for(var i=0; i<imageNum; i++) {
		var n = 'images/index/';
		if(i<999) n+='0';
		if(i<99) n+= '0';
		if(i<9) n+='0';
		img[i] = n + (i+1) + '.jpg';
	}

	for(var i=0; i<num; i++) {
		while(true) {
			var n = Math.floor(Math.random()*img.length);
			var isNewN = true;
			for(var j=0; j<arrNum.length; j++) {
				if(arrNum[j]==n) isNewN=false;
			}
			if(isNewN) {
				arrNum[i] = n;
				break;
			}
		}
	}
	var imageCount=1;
	var imageSize=300;
	for(var i=1; i<9; i++) {
		var id = 'imageBox' + i;
		var htmlText ='';
		if(boxPattern[i-1]==1) {
			htmlText += '<img id="image'+ imageCount +'"border="0" src="" width="'+imageSize+'" height="'+imageSize+'" alt="">';
			imageCount++;
		}
		else if(boxPattern[i-1]==2) {
			htmlText += '<img id="image'+ imageCount +'"border="0" src="" width="'+imageSize+'" height="'+imageSize+'" alt="">';
			htmlText += '<img id="image'+ (imageCount+1) +'"border="0" src="" width="'+imageSize+'" height="'+imageSize+'" alt="">';
			htmlText += '<img id="image'+ (imageCount+2) +'"border="0" src="" width="'+imageSize+'" height="'+imageSize+'" alt="">';
			htmlText += '<img id="image'+ (imageCount+3) +'"border="0" src="" width="'+imageSize+'" height="'+imageSize+'" alt="">';
			imageCount+=4;	
		}
		document.getElementById(id).innerHTML = htmlText;
	}
	for(var i=1; i<=num; i++) {
		var id = 'image' + i;
		//var n = Math.floor(Math.random()*img.length);
		//if(i<10) id += '0' + i;
		//else if(i<100) id+= '' + i;
		//else if(i<1000) id+= '0' + i;
		//else if(i<10000) id+= '0' + i;
		document.getElementById(id).src=img[arrNum[i-1]];
	}
	resizeWindow();
	//interval = setInterval(imageLoop.bind(this), 33);

	//var htmlText ='';
	//var size = '140';

	/*
	for(var i=1; i<=num; i++) {
		htmlText += '<img id="image'+ i +'"border="0" src="" width="'+size+'" height="'+size+'" alt="">';
	}

	document.getElementById('imageArea').innerHTML = htmlText;
	*/
}

function imageLoop() {
}
