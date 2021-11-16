function genbox() {
	var I, i, disp = "", boxid = 0;
	for (I = 1; I <= 10; I++) {
		disp += '<tr>';
		for (i = 1; i <= 10; i++) {
			boxid++;
			disp += '<td><div id="b' + boxid + '"></div></td>';
		}
		disp += '</tr>';
	}
	document.getElementById('tbl_box').innerHTML = disp;//output
}
genbox();

function fillcolor(tmp, boxid) {
	var color;
	switch (tmp) {
		case 1: color = 'BLACK'; break;
		case 2: color = 'RED'; break;
		case 3: color = 'BLUE'; break;
		case 4: color = 'YELLOW'; break;
		default: color = 'GREEN'; break;
	}
	document.getElementById(boxid).style.background = color;
}
function randomnum() {
	var min = 1, max = 6, rand;
	rand = Math.floor(Math.random() * (max - min) + min);
	return rand;
}
function change_color() {
	var i, boxid, num;
	for (i = 1; i <= 100; i++) {
		boxid = 'b' + i;
		num = randomnum();
		fillcolor(num, boxid);
	}
}
change_color();
