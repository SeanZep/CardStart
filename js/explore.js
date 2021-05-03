var db = firebase.firestore();

const list_div = document.querySelector("#about");
//localStorage.setItem("testKey", "testVal");
db.collection("decks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        list_div.innerHTML += "<div class = columns> <div class='cards' id='info1'><a class = 'p' onclick=\"localStorage.setItem('currDeck','" 
        + doc.data().questions + "'); localStorage.setItem('deckName','" 
        + doc.data().name + "');\" href='viewdeck.html' id='title'>" 
        + doc.data().name + "<p>" + doc.data().description + "</p></a></div></div>";
    });
});

/*
var db = firebase.firestore();

const list_div = document.getElementById("#about");

const card_deck = [];

db.collection("decks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        let card = {};
        const name = doc.data().name;
        const description = doc.data().description;
        card.name = description;
        card_deck.push(card);
    });
});

for (j=0; j<card_deck.length; j*3){
    const div = document.createElement("div")
    div.id = "columns"
for (i=0; i <card_deck.length/3; i++) {
        let card = card_deck.pop();       
        div.innerHTML += "<div class = 'cards' id='info1><h4>" + card.name + "</h4><p>" + card.description + "</p></div>";
} 
    list_div.appendChild(div)
}*/