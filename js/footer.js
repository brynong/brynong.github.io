function addFooter() {
    document.getElementById("footer").innerHTML = `
    <div class="container" style="padding-top: 20px; padding-bottom: 10px;">
    <footer class="pt-4 my-md-5 pt-md-5 border-top border-dark">
        <div class="row">
            <div class="col-12 col-md">
                <a class="navbar-brand" href="home.html">
                    <img class="mb-2" src="assets/images/cross.png" alt="" width="30" height="30"
                        style="padding: 2px; border-radius: 25%; background-color: black;">
                </a>
                <small class="d-block mb-3 text-muted">&copy; 2020</small>
            </div>
            <div class="col-6 col-md">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="javascript:void(0)"
                            onclick="music('rickroll', ['rickrollbutton'])">Fire Axe</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" href="javascript:void(0)">Golden Sniper</a></li>
                </ul>
            </div>
            <div class="col-6 col-md">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                    <li><a class="text-muted" disabled href="javascript:void(0)">Arbalest Mou</a></li>
                </ul>
            </div>
        </div>
    </div>
    </footer>
    `
}