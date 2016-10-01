var dotAppFramework;
var dotTutorial;
var copyDialog;
var completeDialog;
var tutorialDialog;
function init() {
    copyDialog = $("#copyDialog").dialog({
    	dialogClass: 'noTitleDialog',
    	autoOpen: false,
    	width: 260,
    	modal: true
    });
    completeDialog = $("#completeDialog").dialog({
    	dialogClass: 'noTitleDialog',
    	autoOpen: false,
    	minWidth: 800,
    	height: 600,
    	modal: true
    });
    tutorialDialog = $("#tutorialDialog").dialog({
        dialogClass: 'noTitleDialog',
        autoOpen: false,
        minWidth: 890,
        height: 600,
        modal: true
    });
    dotTutorial = new DotTutorial();
    dotTutorial.start();
    //myform.mytext.value = 'init';
    dotAppFramework = new DotAppFramework('mainCanvas', 'previewCanvas');
    dotAppFramework.start();
};
