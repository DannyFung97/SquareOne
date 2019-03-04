$(document).ready(function () {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#redoButton").click(redoClick);
	$("#undoButton").click(undoClick);
}

function redoClick(e) {
	e.preventDefault();
	ga('send', 'event', 'redo', 'click');
} 

function undoClick(e) {
	e.preventDefault();
	ga('send', 'event', 'undo', 'click');
}