//your JS code here. If required.
var line = document.getElementById("line");
		var angle = 0;

		function rotateLine() {
			angle += 5;
			line.style.transform = "rotate(" + angle + "deg)";
			window.requestAnimationFrame(rotateLine);
		}

		window.requestAnimationFrame(rotateLine);