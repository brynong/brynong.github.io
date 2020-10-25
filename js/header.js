
window.onload = document.getElementById("header").innerHTML = `
<nav class="navbar navbar-expand-lg navbar-dark bg-dark">
<a class="navbar-brand" href="home.html">
    <img src="assets/cross.png" width="30" height="30" class="d-inline-block align-top" alt=""
        loading="lazy"></a>
<button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
</button>

<div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
        <li class="nav-item">
            <a class="nav-link" href="about.html">About</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="index.html">Index <span class="sr-only">(current)</span></a>
        </li>
        <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                PFFRO
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Big Brain</a>
                <a class="dropdown-item" href="#">Yuge Brain</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Smol Boi</a>
            </div>
        </li>
        <li class="nav-item">
            <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
    </ul>
    <button id="soundbutton1" class="btn btn-success"
        onclick="music('chicken', ['soundbutton1', 'soundbutton2'])">Play it</button>
    <div style="width: 10px;"></div>
    <input class="form-control mr-sm-2" id="search" type="search" placeholder="Search" aria-label="Search"
        style="width: auto">
    <button class="btn btn-outline-light my-2 my-sm-0" type="submit" onclick="search()">Search</button>
</div>
</nav>
`