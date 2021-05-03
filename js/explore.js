var db = firebase.firestore();

const list_div = document.querySelector("#about");
let count = 0;  // hard coding in diff pages
// viewdeck 3 is team bonding
// view deck 0 is coffeechat
db.collection("decks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        list_div.innerHTML += "<div class = columns> <div class='cards' id='info1'><a class = 'p' href='viewdeck" + count +".html' id='title'>" + 
        doc.data().name + "</a><p>" + doc.data().description + "</p></div></div>";
        count++;
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