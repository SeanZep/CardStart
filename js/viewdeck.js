
// const list_div = document.querySelector(".slideshow-container");

// db.collection("decks").doc("dropbox").collection("dropboxq").doc("dropboxq").get().then((querySnapshot) => {
//     querySnapshot.forEach((doc) => {
//         list_div.innerHTML += "<div class = 'mySlides'> <p class = 'author'>" + 
//         doc.data().test + "</p>" + "</div>";
//     });
// });
console.log(localStorage);

var questions = localStorage.getItem("currDeck").split(',');
console.log(questions);
for (let question of questions) {
  document.getElementById("all_cards").innerHTML += "<div class='mySlides'><p class='author'>--------------- " + localStorage.deckName + " ---------------</p><q class='question'>" + question + "</q></div>";
}

var slideIndex = 1;
            showSlides(slideIndex);
            
            function plusSlides(n) {
              showSlides(slideIndex += n);
            }
            
            function currentSlide(n) {
              showSlides(slideIndex = n);
            }
            
            function showSlides(n) {
              var i;
              var slides = document.getElementsByClassName("mySlides");
              //var dots = document.getElementsByClassName("dot");
              if (n > slides.length) {slideIndex = 1}    
              if (n < 1) {slideIndex = slides.length}
              for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";  
              }
              /*for (i = 0; i < dots.length; i++) {
                  dots[i].className = dots[i].className.replace(" active", "");
              }*/
              slides[slideIndex-1].style.display = "block";  
              //dots[slideIndex-1].className += " active";
            }