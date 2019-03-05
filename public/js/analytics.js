$(document).ready(function () {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	//$("#redoButton").click(redoClick);
	//$("#undoButton").click(undoClick);
	$("#playButton").click(playClick);
}

//function redoClick(e) {
//	e.preventDefault();
//	ga('send', 'event', 'redo', 'click');
//} 

//function undoClick(e) {
//	e.preventDefault();
//	ga('send', 'event', 'undo', 'click');
//}

function playClick(e) {
	console.log("IN PLAY CLICK");
	e.preventDefault();
	ga('send', 'event', 'load/show', 'click');
}