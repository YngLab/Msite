var imageNum = 83;
var imagePath = 'images/index/sq_';

var img = new Array();
var fullWidth;
var boxPattern;
var pc_boxPattern = [1, 1, 1, 2, 2, 2, 2, 2];
var sp_boxPattern = [1, 1, 2, 2, 2, 2];

var num;
var pc_num=23;
var sp_num = 18;
var arrNum = new Array();
var interval;
var spWidth = 768;
var device = '';	//pc or sp
var imageArea;
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
	fullWidth = imageArea.width();
	if(fullWidth>768 && fullWidth<1080) {
		fullWidth = 1080;
	}
	if(fullWidth>spWidth) {
		if(device=='sp') {
			updateImageView();
		} 
	}
	else {
		if(device=='pc') {
			updateImageView();
		}
	}
	var largeWidth = fullWidth*0.25;
	var smallWidth = largeWidth*0.5;
	var minBlockSize;
	var imageCount=1;
	var indexTitle =$('#indexTitle');
	var indexTitle0 =$('#indexTitle0');
	if(device=='pc') {
		minBlockSize = fullWidth*0.125;
		document.getElementById('imageArea').style.width = '100%';
		document.getElementById('imageArea').style.height = fullWidth*0.5 + 'px';
		for(var i=1; i<blockArr.length+1; i++) {
			document.getElementById('image'+i).style.left = blockArr[i-1].x*minBlockSize+'px';
			document.getElementById('image'+i).style.top = blockArr[i-1].y*minBlockSize+'px';
			document.getElementById('image'+i).style.width = minBlockSize*blockArr[i-1].size+'px';
			document.getElementById('image'+i).style.height = minBlockSize*blockArr[i-1].size+'px';
		}
		document.getElementById('indexTitle0').style.width = minBlockSize*2 + 'px';
		document.getElementById('indexTitle0').style.fontSize = fullWidth/32.0 + 'px';
		document.getElementById('indexTitle0').style.left = fullWidth/4 + 'px';
		document.getElementById('indexTitle0').style.top = fullWidth/8 + 'px';

		document.getElementById('indexTitle').style.width = minBlockSize*2 + 'px';
		document.getElementById('indexTitle').style.fontSize = fullWidth/32.0 + 'px';
		document.getElementById('indexTitle').style.left = fullWidth/2 + 'px';
		document.getElementById('indexTitle').style.top = fullWidth/8 + 'px';
}
	else if(device=='sp') {
		minBlockSize = fullWidth*0.25;
		document.getElementById('imageArea').style.width = '100%';
		document.getElementById('imageArea').style.height = fullWidth*1.5 + 'px';
		for(var i=1; i<blockArr.length+1; i++) {
			document.getElementById('image'+i).style.left = blockArr[i-1].x*minBlockSize+'px';
			document.getElementById('image'+i).style.top = blockArr[i-1].y*minBlockSize+'px';
			document.getElementById('image'+i).style.width = minBlockSize*blockArr[i-1].size+'px';
			document.getElementById('image'+i).style.height = minBlockSize*blockArr[i-1].size+'px';
		}
		document.getElementById('indexTitle0').style.width = minBlockSize*2 + 'px';
		document.getElementById('indexTitle0').style.fontSize = fullWidth/15.0 + 'px';
		document.getElementById('indexTitle0').style.left = 0 + 'px';
		document.getElementById('indexTitle0').style.top = minBlockSize*2 + 'px';
/*	      document.getElementById('indexTitle0').style.top = fullWidth*0.75-indexTitle0.height()/2 + 'px';*/

	 	document.getElementById('indexTitle').style.width = minBlockSize*2 + 'px';
		document.getElementById('indexTitle').style.fontSize = fullWidth/15.0 + 'px';
		document.getElementById('indexTitle').style.left = fullWidth/2 + 'px';
		document.getElementById('indexTitle').style.top = minBlockSize*2 + 'px';
/*		document.getElementById('indexTitle').style.top = fullWidth*0.75-indexTitle.height()/2 + 'px';*/
	}

}


function shuffleArray(array) {
  var n = array.length, t, i;
  var arr = array.slice(0);
  while (n) {
    i = Math.floor(Math.random() * n--);
    t = arr[n];
    arr[n] = arr[i];
    arr[i] = t;
  }
  return arr;
}

function updateImageView(){
	imageArea = $('#imageArea');
	fullWidth = imageArea.width();
	if(fullWidth>768 && fullWidth<1080) {
		fullWidth = 1080;
	}
	if(fullWidth>spWidth) {
		device='pc';
	}
	else {
		device='sp';
	}
	if(device=='pc') {
		boxPattern = shuffleArray(pc_boxPattern);
		num = pc_num;
	} else if(device=='sp') {
		boxPattern = shuffleArray(sp_boxPattern);
		num = sp_num;
	}
	for(var i=0; i<imageNum; i++) {
		var n = imagePath;
		if(i<999) n+='0';
		if(i<99) n+= '0';
		if(i<9) n+='0';
		img[i] = n + (i+1) + '.jpg';
	}
	arrNum = new Array();
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
	blockArr = new Array();
	if(device=='pc') {
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
	}
	else if(device=='sp') {
		for(var y=0; y<3; y++) {
			for(var x=0; x<2; x++) {
				if(boxPattern[y*2+x]==1) {
					blockArr.push(new Block(x*2, y*2, 2));
					htmlText += '<img id="image'+ imageCount +'"border="0" width="'+imageSize+'" height="'+imageSize+'" alt="">';
					imageCount++;
				}
				else if(boxPattern[y*2+x]==2) {
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
