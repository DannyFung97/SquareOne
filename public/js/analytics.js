$(document).ready(function () {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$("#redoButton").click(redoClick);
}

function redoClick(e) {
	e.preventDefault();
	ga('send', 'event', 'redo', 'click');
}