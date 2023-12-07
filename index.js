var cont = document.querySelectorAll('.grid')
for (let i = 0; i < cont.length; i++) {
    cont[i].innerHTML = "-"
    cont[i].style.color = "transparent"
}
var audio = new Audio('yrawa7.mp3');
var audio2 = new Audio('videoplayback.mp3');
let msg = document.getElementById('title')
let turn = "x"
let pos = [];
function win() {
    for (let i = 1; i < 10; i++) {
        pos[i] = document.getElementById(i).innerHTML
    }
    if (pos[1] == pos[2] && pos[2] == pos[3] && pos[1] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"

        if (pos[1] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[1] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }


        // audio.play();

        turn = "a"
        msg.style.color = "blue"
        // msg.innerHTML=" "

    }
    else if (pos[1] == pos[4] && pos[4] == pos[7] && pos[4] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[1] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[1] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        turn = "a"
        // msg.innerHTML=" "
        msg.style.color = "blue"

        // audio.play();

        // msg.style.color="white"

    }
    else if (pos[1] == pos[5] && pos[5] == pos[9] && pos[1] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[1] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[1] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        turn = "a"
            // msg.innerHTML=" "
            ;
        msg.style.color = "blue"


        // msg.style.color="white"

    }
    else if (pos[3] == pos[5] && pos[5] == pos[7] && pos[3] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[3] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[3] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        turn = "a"
        // msg.innerHTML=" "

        // msg.style.color="white"

    }
    else if (pos[3] == pos[6] && pos[6] == pos[9] && pos[3] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[3] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[3] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        turn = "a"
        // msg.innerHTML=" "

        msg.style.color = "white"


    }
    else if (pos[2] == pos[5] && pos[5] == pos[8] && pos[2] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[2] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[2] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        turn = "a"
        // msg.innerHTML=" "

        msg.style.color = "white"

    }
    else if (pos[7] == pos[8] && pos[8] == pos[9] && pos[7] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[7] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[7] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"


        }
        turn = "a"
        // msg.innerHTML=" "


        msg.style.color = "white"

    }
    else if (pos[4] == pos[5] && pos[5] == pos[6] && pos[4] != '-') {
        console.log('win is active');
        let chn = document.getElementById('main-grid')
        chn.style.opacity = "0.5"
        if (pos[4] == "X") {
            document.getElementById('winner').innerHTML = "The Winner is X"
        }
        else if (pos[4] == "O") {
            document.getElementById('winner').innerHTML = "The Winner is O"

        }
        // msg.innerHTML=" "
        msg.style.color = "white"

        turn = "a"


    }

    // else{
    //     let chn = document.getElementById('main-grid')
    //     chn.style.opacity="0.5"
    //     turn="a"
    //     document.getElementById('winner').innerHTML="7ad ma rba7"
    // }

}
function game(id) {

    if (turn == "x" && document.getElementById(id).innerHTML == '-') {
        msg.innerHTML = "Turn Of O"
        msg.style.color = "blue"
        turn = "o"
        audio2.play()
        console.log('O turn')
        document.getElementById(id).innerHTML = 'X'
        document.getElementById(id).style.color = 'red'


    }
    else if (turn == "o" && document.getElementById(id).innerHTML == '-') {
        msg.innerHTML = "Turn Of X"
        msg.style.color = "red"

        audio2.play()

        turn = "x"
        console.log('X turn')
        document.getElementById(id).innerHTML = 'O'
        document.getElementById(id).style.color = 'blue'
    }
    win()

}



function restgame() {
    audio2.play()
    var cont = document.querySelectorAll('.grid')
    for (let i = 0; i < cont.length; i++) {
        cont[i].innerHTML = "-"
        cont[i].style.color = "transparent"
        turn = "x"
        let chn = document.getElementById('main-grid')
        msg.innerHTML = "Turn Of X"
        msg.style.color = 'red'

        chn.style.opacity = "1"
        document.getElementById('winner').innerHTML = "No one has win"

        // turn = "a"
    }
}


