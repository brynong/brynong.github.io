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
