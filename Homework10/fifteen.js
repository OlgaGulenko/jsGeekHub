let users = JSON.parse(localStorage.getItem('allUsers')) || [];

function secondsTohhmmss(totalSeconds) {
    let hours   = Math.floor(totalSeconds / 3600),
    		minutes = Math.floor((totalSeconds - (hours * 3600)) / 60),
				seconds = totalSeconds - (hours * 3600) - (minutes * 60);

    seconds = Math.round(seconds * 100) / 100;

    let result = (hours < 10 ? "0" + hours : hours);
    result += ":" + (minutes < 10 ? "0" + minutes : minutes);
    result += ":" + (seconds  < 10 ? "0" + seconds : seconds);
    return result;
}

function localData(user, users) {
    if (users.length > 0) {
        for (let i = 0; i < users.length; i++) {
            if (users[i].name === user.name) {
                users.splice(i, 1);
            }
        }
        users.push(user);
    } else {
        users.push(user);
    }
    localStorage.setItem('allUsers', JSON.stringify(users));
}

function getData () {
    if (users.length > 0) {
        users.sort(function(a,b) {return (a.time > b.time) ? 1 : ((b.time > a.time) ? -1 : 0);} );
        let tableWinners = document.getElementById('tableWinners');
        for (let i = 0; i < users.length; i++) {
            let tr = document.createElement('tr');
            for (let data in users[i]) {
                let th = document.createElement('th');
                if (data.toString() === 'time') {
                    th.innerText = secondsTohhmmss(users[i][data]);
                } else  {
                    th.innerText = users[i][data];
                }
                tr.appendChild(th);
            }
            tableWinners.appendChild(tr)
        }
    }
}
getData ();

function runGame(fifteen) {
    if(fifteen.size < 2 || fifteen.size > 10 || isNaN(fifteen.size)) {
        alert('the size should be greater than 2 and less than 10');
        return;
    }

    document.getElementById('menu').setAttribute('class', 'menub');
    const boardSize = parseInt(document.getElementById('size').value);

    let box = document.body.appendChild(document.createElement('div'));
    box.setAttribute('class', 'board');
    box.setAttribute('style', `width: ${boardSize * 100}px`);

    for (let i = 0; i < fifteen.board.length; i++) {
        box.appendChild(document.createElement('div'));
    }

    window.addEventListener('keydown', function(e) {
        if (fifteen.go(fifteen.Pillars[{39: 'left', 37: 'right', 40: 'up', 38: 'down'}[e.keyCode]])) {
            draw();
            if (fifteen.isCompleted()) {
                clearInterval(timer);
                localData(user, users);
                alert('You win!');
                window.location.reload();
            }
        }
    });

    let div = document.querySelectorAll('div > div');
    for (let i = 0; i < div.length; i++) {
        div[i].addEventListener('click', function (e) {
            let step = fifteen.empty - fifteen.board.indexOf(parseInt(e.target.innerText));
            if (step === -1) {
                fifteen.go(fifteen.Pillars.right);
                draw();
            } else if (step === 1) {
                fifteen.go(fifteen.Pillars.left);
                draw();
            } else if (step === boardSize) {
                fifteen.go(fifteen.Pillars.up);
                draw();
            } else if (step === -boardSize) {
                fifteen.go(fifteen.Pillars.down);
                draw();
            }

            if (fifteen.isCompleted()) {
                clearInterval(timer);
                localData(user, users);
                localStorage.setItem('allUsers', JSON.stringify(users));
                alert('You win!');
                window.location.reload();
            }
        })
    }

    function draw() {
        for (let i = 0; i < fifteen.board.length; i++) {
            let tile = box.childNodes[i];
            tile.textContent = fifteen.board[i];
            if (tile.style.visibility = fifteen.board[i]) {
                tile.style.visibility = 'visible';
            } else {
                tile.style.visibility = 'hidden';
            }
        }
    }

    const user = {
        name: document.getElementById('user').value || 'Anonim' + Math.random().toString(),
        time: 1,
        size: fifteen.size
    };

    const timer = setInterval(function () {
        user.time += 1;
        document.getElementById('time').innerText = user.time + 'c.';
    }, 1000);
    draw();
}

document.getElementById('createGame').addEventListener('click', function () {
    const boardSize = parseInt(document.getElementById('size').value);

    let fifteen = {
        Pillars: {up: -boardSize, left: -1, down: boardSize, right: 1},

        size: parseInt(document.getElementById('size').value),

        isCompleted: function() {
            return !this.board.some(function(item, i) {
                return item > 0 && item - 1 !== i;
            });
        },

        go: function(move) {
            let index = this.empty + move;

            if (!this.board[index]) {
                return false;
            }

            if (move === fifteen.Pillars.left || move === fifteen.Pillars.right) {
                if (Math.floor(this.empty / boardSize) !== Math.floor(index / boardSize)) {
                    return false;
                }
            }

            this.swap(index, this.empty);
            this.empty = index;
            return true;
        },

        swap: function(first, second) {
            let t = this.board[first];
            this.board[first] = this.board[second];
            this.board[second] = t;
        },
    };

    let inputBoard = [];
    for (let i = 1; i < Math.pow(fifteen.size, 2); i++) {
        inputBoard.push(i);
    }
    fifteen.board = inputBoard.sort(function() {
        return Math.random() - 0.2;
    }).concat(0);

    fifteen.empty = inputBoard.length;

    console.log(inputBoard);

    runGame(fifteen);
});

// $(function() {
// 	//making all the puzzle pieces have the class "puzzlepiece"
// 	$("#puzzlearea > div").addClass("puzzlepiece");
// 	var start,
// 		standard = 16,
// 		large = 25,
// 		largest = 37,
// 		positionLeft = 0,
// 		positionBackgroundX = 400,
// 		positionTop = 0,
// 		positionBackgroundY = 0,
// 		numberOfMoves = 0,
// 		onTry = 1,
// 		finished = false,
// 		keepTrack = document.createElement("p"),
// 		keepRecord = document.createElement("ul");
// 	$(keepTrack).addClass("records");
// 	$("#controls").append(keepTrack);
// 	$(keepRecord).addClass("records");
// 	$("#controls").append(keepRecord);
//
// 	//place all the pieces in the right place first
// 	for(var i = 1; i<standard; i++) {
// 		var element = $("div")[i];
// 		element.style.left = positionLeft + "px";
// 		element.style.top = positionTop + "px";
// 		element.style.backgroundImage = "url(fifteen.png)";
// 		element.style.backgroundPosition = positionBackgroundX + "px " + positionBackgroundY + "px";
//
// 		if(positionLeft < 300) {
// 			positionLeft = positionLeft + 100;
// 			positionBackgroundX = positionBackgroundX - 100;
// 		}
// 		else {
// 			positionLeft = 0;
// 			positionBackgroundX = 400;
// 			positionTop = positionTop + 100;
// 			positionBackgroundY = positionBackgroundY - 100;
// 		}
// 	}
// 	for(var i = 1; i<large; i++) {
// 		var element = $("div")[i];
// 		element.style.left = positionLeft + "px";
// 		element.style.top = positionTop + "px";
// 		element.style.backgroundImage = "url(fifteen.png)";
// 		element.style.backgroundPosition = positionBackgroundX + "px " + positionBackgroundY + "px";
//
// 		if(positionLeft < 600) {
// 			positionLeft = positionLeft + 100;
// 			positionBackgroundX = positionBackgroundX - 100;
// 		}
// 		else {
// 			positionLeft = 0;
// 			positionBackgroundX = 700;
// 			positionTop = positionTop + 100;
// 			positionBackgroundY = positionBackgroundY - 100;
// 		}
// 	}
// 		for(var i = 1; i<largest; i++) {
// 			var element = $("div")[i];
// 			element.style.left = positionLeft + "px";
// 			element.style.top = positionTop + "px";
// 			element.style.backgroundImage = "url(fifteen.png)";
// 			element.style.backgroundPosition = positionBackgroundX + "px " + positionBackgroundY + "px";
//
// 			if(positionLeft < 1200) {
// 				positionLeft = positionLeft + 100;
// 				positionBackgroundX = positionBackgroundX - 100;
// 			}
// 			else {
// 				positionLeft = 0;
// 				positionBackgroundX = 1300;
// 				positionTop = positionTop + 100;
// 				positionBackgroundY = positionBackgroundY - 100;
// 			}
// 		}
//
// 	// then mark off the empty space and shuffle things up and set up the buttons
// 	var positionEmptyTop = positionTop;
// 	var positionEmptyLeft = positionLeft;
// 	shuffle();
// 	setInterval(bottomDisplay, 100);
// 	setInterval(checkComplete, 1000);
// 	$("#shufflebutton").click(shuffle);
// 	$(".puzzlepiece").click(move);
// 	$(".puzzlepiece").mouseover(movable);
//
// 	//all of the functions
//
// 	//moves things around based on whether it is near an empty space
// 	function shuffle() {
// 		for(var i = 1000; i>0; i--) {
// 			var int = parseInt(Math.random()*14);
// 			element = $(".puzzlepiece")[int];
// 			if(checkMove($(element))) {
// 				reposition(element, positionEmptyLeft, positionEmptyTop, false);
// 			}
// 		}
// 		start = new Date();
// 		numberOfMoves = 0;
// 		finished = false;
// 		$("body").css("background-image", "none");
// 	}
//
// 	// moves the puzzle piece into the nearby empty spot
// 	function move() {
// 		var oldPositionLeft = $(this).position().left,
// 			oldPositionTop = $(this).position().top,
// 			newPositionLeft,
// 			newPositionTop;
// 		if(checkMove($(this)) == 'E') {
// 			newPositionLeft = oldPositionLeft + 100;
// 			reposition(this, newPositionLeft, oldPositionTop, true);
// 		}
// 		else if(checkMove($(this)) == 'W') {
// 			newPositionLeft = oldPositionLeft -100;
// 			reposition(this, newPositionLeft, oldPositionTop, true);
// 		}
// 		else if(checkMove($(this)) == 'N') {
// 			newPositionTop = oldPositionTop -100;
// 			reposition(this, oldPositionLeft, newPositionTop, true);
// 		}
// 		else if(checkMove($(this)) == 'S') {
// 			newPositionTop = oldPositionTop +100;
// 			reposition(this, oldPositionLeft, newPositionTop, true);
// 		}
// 	}
//
// 	//checks whether pieces is movable to add class
// 	function movable(){
// 		if(!(checkMove($(this)) === "")) {
// 			$(this).addClass("movablepiece");
// 		}
// 		else{
// 			$(this).removeClass("movablepiece");
// 		}
// 	}
//
// 	//checks whether piece can move by returning the direction it can move
// 	function checkMove(elem) {
// 		var oldPositionLeft = elem.position().left,
// 			oldPositionTop = elem.position().top;
// 		var direction = "";
// 		if(positionEmptyLeft - oldPositionLeft == 100 && positionEmptyTop == oldPositionTop) {
// 			direction = "E";
// 		}
// 		else if(positionEmptyLeft - oldPositionLeft == -100 && positionEmptyTop == oldPositionTop) {
// 			direction = "W";
// 		}
// 		else if(positionEmptyTop - oldPositionTop == -100 && positionEmptyLeft == oldPositionLeft) {
// 			direction = "N";
// 		}
// 		else if(positionEmptyTop - oldPositionTop == 100 && positionEmptyLeft == oldPositionLeft) {
// 			direction = "S";
// 		}
// 		return direction;
// 	}
//
// 	//repositions the puzzle pieces either by having a transition or not.
// 	function reposition(element, positionX, positionY, transition) {
// 			var oldPositionLeft = $(element).position().left,
// 				oldPositionTop = $(element).position().top;
// 			if(!transition) {
// 				element.style.left = positionX + "px";
// 				element.style.top = positionY + "px";
// 			}
// 			else {
// 				$(element).animate({'left' : positionX+"px", 'top' : positionY + "px" }, {duration : 400});
// 				numberOfMoves++;
// 				bottomDisplay();
// 			}
// 			positionEmptyLeft = oldPositionLeft;
// 			positionEmptyTop = oldPositionTop;
// 	}
//
// 	//sets the bottom display
// 	function bottomDisplay() {
// 		var end = new Date(),
// 		difference = parseInt((end - start)/1000);
// 		keepTrack.innerHTML = "Number of moves: " + numberOfMoves + " Time: " + difference + " seconds";
// 		if(checkComplete() && !finished) {
// 			var newRecord = document.createElement("li");
// 			$(keepRecord).append(newRecord);
// 			newRecord.innerHTML = "On try " + onTry + " you had " + numberOfMoves +
// 			" number of moves in " + difference + " seconds";
// 			onTry++;
// 			finished = true;
// 		}
//
// 	}
//
// 	//checks whether the puzzle is complete; this method is called every second
// 	function checkComplete() {
// 		var works = false,
// 			rightX = 0,
// 			rightY = 0;
// 		for(var i = 0; i<15; i++) {
// 			element = $(".puzzlepiece")[i];
// 			if($(element).position().left == rightX && $(element).position().top == rightY) {
// 				works = true;
// 			}
// 			else {
// 				works = false;
// 				break;
// 			}
// 			if(rightX < 300) {
// 				rightX = rightX + 100;
// 			}
// 			else {
// 				rightX = 0;
// 				rightY = rightY + 100;
// 			}
// 		}
// 		if(works) {
// 			// $("body").css("background-image", "url(http://www.getentrepreneurial.com/images2/winner-win.jpg)");
// 			alert('congratulations!!!');
// 		}
// 		return works;
// 	}
// });
