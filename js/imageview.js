//スマホ 7なんとかpx
//2*4
//大2小4

var img = new Array();
var fullWidth;
var boxPattern = [1, 1, 1, 2, 2, 2, 2, 2];
var num=23;
var arrNum = new Array();
var interval;

Block = function(x, y, size) {
	this.x=x;
	this.y=y;
	this.size=size;
	this.src='';
	this.src2='';
	this.change=0;
	this.isChange=false;
}
var blockArr = new Array();
$(window).on('resize', resizeWindow);
function resizeWindow() {
	var imageArea = $('#imageArea');
	fullWidth = imageArea.width();
	document.getElementById('imageArea').style.width = '100%';
	document.getElementById('imageArea').style.height = fullWidth*0.5 + 'px';
	var largeWidth = fullWidth*0.25;
	var smallWidth = largeWidth*0.5;
	var imageCount=1;
	var minBlockSize = fullWidth*0.125;
	for(var i=1; i<blockArr.length+1; i++) {
		document.getElementById('image'+i).style.left = blockArr[i-1].x*minBlockSize+'px';
		document.getElementById('image'+i).style.top = blockArr[i-1].y*minBlockSize+'px';
		document.getElementById('image'+i).style.width = minBlockSize*blockArr[i-1].size+'px';
		document.getElementById('image'+i).style.height = minBlockSize*blockArr[i-1].size+'px';

	}

	var indexTitle =$('#indexTitle');
	document.getElementById('indexTitleText').style.marginTop = fullWidth*0.013 + 'px';
	document.getElementById('indexTitleText').style.marginBottom = fullWidth*0.013 + 'px';
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
	var imageSize=300;
	var htmlText ='';
	var imageCount=1;
	for(var y=0; y<2; y++) {
		for(var x=0; x<4; x++) {
			if(boxPattern[y*4+x]==1) {
				blockArr.push(new Block(x*2, y*2, 2));
				htmlText += '<img id="image'+ imageCount +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
				imageCount++;
			}
			else if(boxPattern[y*4+x]==2) {
				blockArr.push(new Block(x*2, y*2, 1));
				blockArr.push(new Block(x*2+1, y*2, 1));
				blockArr.push(new Block(x*2, y*2+1, 1));
				blockArr.push(new Block(x*2+1, y*2+1, 1));
				htmlText += '<img id="image'+ imageCount +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
				htmlText += '<img id="image'+ (imageCount+1) +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
				htmlText += '<img id="image'+ (imageCount+2) +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
				htmlText += '<img id="image'+ (imageCount+3) +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
				imageCount+=4;	
			}
		}
	}
	document.getElementById('imageArea').innerHTML = htmlText;
	for(var i=1; i<=num; i++) {
		var id = 'image' + i;
		blockArr[i-1].src = img[arrNum[i-1]];
		document.getElementById(id).src=img[arrNum[i-1]];
	}

	resizeWindow();

	//ループ
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


var imageLoopTimer=0;
var limit=99
function imageLoop() {
	imageLoopTimer++;
	if(imageLoopTimer>limit) {
		imageLoopTimer=0;
		limit=Math.random()*163 +33;
		//ランダムでisChange=true
	}

	for(var i=1; i<blockArr.length+1; i++) {
		//change増やす
		//0.5こえたら画像変更
		if(blockArr[i-1].isChange) {
			if(change<0.5) document.getElementById('image'+i).style.transform = 'rotateY(' + blockArr[i-1].change*180 + 'deg)';
			else document.getElementById('image'+i).style.transform = 'rotateY(' + (blockArr[i-1].change*180)-180 + 'deg)';
		}
	}
}