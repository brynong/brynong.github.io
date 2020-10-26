class Card {
    constructor(picUrl, name, website, title, description) {
        this.picUrl = picUrl;
        this.name = name;
        this.website = website;
        this.title = title;
        this.description = description;
    }
}

let card1 = new Card('assets/images/iphone12.jpg', 'Apple', 'https://www.apple.com/iphone-12/', 'Apple iPhone 12 ', 'Gui Dian Ui')
let card2 = new Card('assets/images/q50.jpg', 'Infiniti', 'https://www.infinitiusa.com/vehicles/sedans/q50.html', 'Infiniti Q50', 'Sui Pao Cia')
let card3 = new Card('assets/images/realm.jpg', 'Realm Royale', 'https://store.steampowered.com/app/813820/Realm_Royale/', 'Realm Royale', 'Ee Game')

const cards = [card1, card2, card3]

function addAllTheCards() {
    for (let card of cards) {
        addCard(card)
    }
}

function addCard(card) {
    document.getElementById("allthecards").innerHTML += `
        <div class="col mb-4">
            <div class="card h-100 bg-transparent">
                <img src="${card.picUrl}" class="card-img-top img-card" alt="${card.name}" height="190rem">
                <a class="card-body list-group-item-action list-group-item-dark" href="${card.website}" target="_blank">
                    <h5 class="card-title">${card.title}</h5>
                    <p class="card-text">${card.description}</p>
                </a>
            </div>
        </div>
    `
}

function enableButton() {
    const picUrl = document.getElementById("picUrl").value
    const name = document.getElementById("name").value
    const website = document.getElementById("website").value
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    if (picUrl.trim() === "" || name.trim === "" || website.trim() === "" || title.trim() === "" || description.trim() === "") {
        document.getElementById("submitButton").disabled = true;
    } else {
        document.getElementById("submitButton").disabled = false;
    }
}


function addCardToList() {
    const picUrl = document.getElementById("picUrl").value
    const name = document.getElementById("name").value
    const website = document.getElementById("website").value
    const title = document.getElementById("title").value
    const description = document.getElementById("description").value

    const newCard = new Card(picUrl, name, website, title, description)
    cards.push(newCard)
    addCard(newCard)
    music('rickroll', ['rickrollbutton'])
}
