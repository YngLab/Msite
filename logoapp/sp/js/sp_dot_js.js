var dotAppFramework;
var mainSize;
var previewSize;
var dotTutorial;
var copyDialog;
var completeDialog;
var tutorialDialog;
function init() {
  document.addEventListener("touchmove", function(evt) {
    evt.preventDefault();
}, false);
  //document.body.ontouchstart = function(e) { e.preventDefault(); };

  sp_window();
  
  document.getElementsByClassName("appContainer")[0].style.display = "none";
  document.getElementById("tutorialDialog").style.display = "block";
  document.getElementById("completeDialog").style.display = "none";

    copyDialog = $("#copyDialog").dialog({
    	dialogClass: 'noTitleDialog',
    	autoOpen: false,
    	width: 260,
    	modal: true
    });


  /*
    completeDialog = $("#completeDialog").dialog({
    	dialogClass: 'noTitleDialog',
    	autoOpen: false,
    	minWidth: 800,
    	height: 600,
    	modal: true
    });
  */

  /*
    tutorialDialog = $("#tutorialDialog").dialog({
        dialogClass: 'noTitleDialog',
        autoOpen: false,
        width: document.body.clientWidth,
        height: document.body.clientHeight,
        modal: true
    });
  */
    dotTutorial = new DotTutorial();
    dotTutorial.start();
    //myform.mytext.value = 'init';
    dotAppFramework = new DotAppFramework('mainCanvas', 'previewCanvas');
    dotAppFramework.start();
};
