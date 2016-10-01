var lineAppFramework;
var lineTutorial;
var copyDialog;
var completeDialog;
var tutorialDialog;
function init() {
    var A = new Vector2(10, 10);
    var B = new Vector2(30, 20);
    var O = new Vector2(35, 35);
    var line = new Line(A, B, '#000', true);
    var tf = line.isPointOnLine(O, 1, new Vector2(300, 300));
    //window.alert(tf);

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
    lineTutorial = new LineTutorial();
    lineTutorial.start();
    //myform.mytext.value = 'init';
    lineAppFramework = new LineAppFramework('mainCanvas', 'previewCanvas');
    lineAppFramework.start();
};
