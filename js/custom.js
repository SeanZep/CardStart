var db = firebase.firestore();

document.getElementById("submit").addEventListener("click", storeNewCards)
function storeNewCards() {
    var inputName = document.querySelector("#name_field").value;
    var inputDesc = document.querySelector("#desc_field").value;
    let items = []; 
    var ques = document.getElementsByClassName('question'); 
    for (i = 0; i < ques.length; i++) { 
        items.push(ques[i].value); 
    }
    db.collection("decks").doc().set({
        name: inputName,
        description: inputDesc,
        questions: items
    }).then(function() {
        console.log("Document successfully written");
    }).catch(function(error) {
        console.error("Error writing document: " + error);
    });
}

//document.getElementsByClassName

/*firebase.firestore().collection('decks').doc().set({
    name: document.querySelector('#name_field').value,
    description: document.querySelector('#desc_field').value
}).then(function() {
    console.log('Document successfully written');
}).catch(function(error) {
    console.error('Error writing document: ' + error);
});*/

//let items = []; var ques = document.getElementsByClassName('question'); for (i = 0; i < ques.length; i++) { items.push(ques[i].value); }



let count = 2;
var x = document.getElementById("more");
x.addEventListener("click", myFunction)
function myFunction() {
  var box = document.createElement('div');
  box.classList.add('card');
  box.innerHTML = "<input type='text' placeholder = 'Question " + count +"' class='question'>"
  document.body.appendChild(box); 
  count++;
}

/*document.getElementById('submit').addEventListener('click', function() {
    var inputName = document.getElementById('name_field').value;
    var inputDesc = document.getElementById('desc_field').value;
    db.collection('decks').doc().set({
        name: inputName,
        description: inputDesc
    }).then(function() {
        console.log('Document successfully written');
    }).catch(function(error) {
        console.error('Error writing document: ' + error);
    });
});*/