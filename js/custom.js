var db = firebase.firestore();

function storeData() {
    const inputName = document.querySelector("#name_field").value;
    const inputDesc = document.querySelector("#desc_field").value;
    db.collection("decks").doc().set({
        name: inputName,
        description: inputDesc
    }).then(function() {
        console.log("Document successfully written");
    }).catch(function(error) {
        console.error("Error writing document: " + error);
    });
}

let count = 2;
var x = document.getElementById("more");
x.addEventListener("click", myFunction)
function myFunction() {
  var box = document.createElement('div');
  box.classList.add('card');
  box.innerHTML = "<input type='text' placeholder = 'Question" + count +"' id='question'>"
  document.body.appendChild(box); 
  count++;
}

/*document.getElementById("submit").addEventListener("click", function() {
    var inputName = document.getElementById("name_field").value;
    var inputDesc = document.getElementById("desc_field").value;
    db.collection("decks").doc().set({
        name: inputName,
        description: inputDesc
    }).then(function() {
        console.log("Document successfully written");
    }).catch(function(error) {
        console.error("Error writing document: " + error);
    });
});*/