function load() {

	App.init();

	document.addEventListener( "contextmenu", function(e) { 
		e.preventDefault(); }, false );

	window.addEventListener( "mousewheel", function(e) {  
		if ( e.ctrlKey == true ) e.preventDefault(); }, false );
}

function resize() {	
	App.camera.aspect = window.innerWidth / window.innerHeight;
	App.camera.updateProjectionMatrix();
}

window.addEventListener ( "resize", resize );
window.addEventListener ( "load", load );