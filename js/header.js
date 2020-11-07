function addHeader() {
    document.getElementById("header").innerHTML = `
        <audio id="chicken" src="assets/audio/chicken.mp3" preload="auto" loop></audio>
        <audio id="goblin" src="assets/audio/goblin.ogg" preload="auto"></audio>
        <audio id="rickroll" src="assets/audio/rickroll.mp3" preload="auto"></audio>
        <audio id="lmao" src="assets/audio/lmao.mp3" preload="auto"></audio>
        
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <a class="navbar-brand" href="home.html">
            <img src="assets/images/cross.png" width="30" height="30" class="d-inline-block align-top" alt=""
                loading="lazy"></a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                    <a class="nav-link" href="index.html">Index<span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="about.html">About</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="contact.html">Contact</a>
                </li>
                <li class="nav-item dropdown">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button"
                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        More
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" href="addcard.html">Add Card</a>
                        <a class="dropdown-item" href="prayer.html">Prayer Roulette</a>
                        <div class="dropdown-divider"></div>
                        <a class="dropdown-item" href="" onclick="alert('patient abit mou')">Coming Soon</a>
                    </div>
                </li>
                <li class="nav-item">
                    <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                </li>
            </ul>
            <button id="chickenbutton1" class="btn btn-success"
                onclick="music('chicken', ['chickenbutton1', 'chickenbutton2'])">Play it</button>
            <div style="width: 10px;"></div>
            <input class="form-control mr-sm-2" id="search" type="search" placeholder="Search" aria-label="Search"
                style="width: auto">
            <button class="btn btn-outline-light my-2 my-sm-0" type="submit" onclick="search()">Search</button>
        </div>
        </nav>

    `
}