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

let toasts = [
    'good morning?',
    'hehe',
    'is it too fast?',
    'XD',
    'you\'ve got work to do',
    'what are you looking at',
    'do the footer mou',
    'lnao',
    'bok bok bok bok',
    'Make footer like header so that it can be added to all the sites'
]

function toast() {
    const i = Math.floor(Math.random() * toasts.length)
    document.getElementById("toast-body").innerHTML = toasts[i]

    $(".toast").toast('show')
}