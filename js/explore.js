var db = firebase.firestore();

const list_div = document.querySelector("#about");

db.collection("decks").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        list_div.innerHTML += "<div class='card' id='info1'><h4>" + doc.data().name + "</h4><p>" + doc.data().description + "</p></div>";
    });
});
