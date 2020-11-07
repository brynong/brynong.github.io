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
            if (document.getElementById(element))
                document.getElementById(element).innerHTML = "Pause"
        });
    } else {
        sound.pause();
        buttons.forEach(element => {
            if (document.getElementById(element))
                document.getElementById(element).innerHTML = "Play it"
        });
    }
}

let toastMessages = [
    'If there ever is conflict just overwrite it no pobem',
    'form validation?',
    'footer template similar to header?',
    'gg i cant show the toasts individually',
    'good morning?',
    'hehe',
    'is it too fast?',
    'XD',
    'you\'ve got work to do',
    'what are you looking at',
    'lnao',
    'bok bok bok bok',
]

function toast() {
    const i = Math.floor(Math.random() * toastMessages.length)
    document.getElementById("toast-body").innerHTML = toastMessages[i]

    $(".toast").toast('show')
}

/*
// noob internet code that doesn't work -_- stupid array comes out as empty 
var toastElList = [].slice.call(document.querySelectorAll('.toast'))
var toastList = toastElList.map(function (toastEl) {
    // Creates an array of toasts (it only initializes them)
    return new bootstrap.Toast(toastEl) // No need for options; use the default options
});
toastList.forEach(toast => toast.show()); // This show them
console.log(toastList); // Testing to see if it works
// it does not work if Array(0) is shown in console
*/