function nameCheck() {
    let x = document.getElementById("form");
    let fname = x.elements[0].value;
    let lname = x.elements[1].value;
    if (fname === 'Jesus' || fname === 'jesus' || lname === 'Jesus' || lname === 'jesus')
        alert('Blasphemy or Mexican?')
    else notDoneYet()
}

function notDoneYet() {
    alert('We\'re not done developing yet!')
};

function search() {
    const searchText = document.getElementById("search").value
    if (searchText !== "") {
        localStorage.setItem("searchText", searchText)
        window.location.href = "search.html";
    } else {
        alert("type something la if u want to search lnao")
    }
}

// let playing = false;
// function music() {
//     sound = document.getElementById('sound1');
//     if (!playing) {
//         sound.play();
//         document.getElementById('soundbutton1').innerHTML = "Stop it"
//         document.getElementById('soundbutton2').innerHTML = "Stop it"
//     } else {
//         sound.pause();
//         sound.currentTime = 0;
//         document.getElementById('soundbutton1').innerHTML = "Play it"
//         document.getElementById('soundbutton2').innerHTML = "Play it"
//     }
//     playing = !playing
// }

// function goblin() {
//     sound = document.getElementById('goblin')
//     sound.play()
// }

// let rickrollplaying = false;
// function rickroll() {
//     sound = document.getElementById('rickroll');
//     if (!rickrollplaying) {
//         sound.play();
//         document.getElementById('rickrollbutton').innerHTML = "Pause"
//     } else {
//         sound.pause();
//         document.getElementById('rickrollbutton').innerHTML = "Play it"
//     }
//     rickrollplaying = !rickrollplaying
// }

function music(audio, buttons) {
    sound = document.getElementById(audio);
    if (sound.paused) {
        sound.play();
        buttons.forEach(element => {
            document.getElementById(element).innerHTML = "Pause"
        });
    } else {
        sound.pause();
        buttons.forEach(element => {
            document.getElementById(element).innerHTML = "Play it"
        });
    }
}