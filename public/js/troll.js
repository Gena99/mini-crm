function togglePanda(opened){
	var sad = document.querySelector('.sad-bear');
	var body = document.querySelector('body');
	if(!opened) {
		var holder = document.createElement('div');
		holder.classList.add('sad-bear');
		var bear = document.createElement('img');
		bear.setAttribute('src', 'sad_bear.png');
		holder.appendChild(bear);
		body.appendChild(holder);
		alert('RTFM');
		alert('lis le README.md');
	} else if (sad){
		body.removeChild(sad);
	}
}

if(window.devtools) {
	setTimeout(function(){
		togglePanda(window.devtools.open);
	},2000);

	window.addEventListener('devtoolschange', function (e) {
		togglePanda(e.detail.open)
	});
} else {
	togglePanda(false);
}

/*
Danger, You have nothing to do here
*/