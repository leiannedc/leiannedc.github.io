const card = document.querySelector(".card__inner");
const card2 = document.querySelector(".card__inner2");
const card3 = document.querySelector(".card__inner3");

/*card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
}); 
*/


card.forEach((card) => card.addEventListener("click", function (e) {
    card.classList.toggle("is-flipped");
})

);

// function flipCard() {
//     this.classList.toggle("is-flipped");
// }
// card.forEach((card) => card.addEventListener("click", flipCard));


// card.forEach((cardEach) => {
//     cardEach.addEventListener("click", function (e) {
//         cardEach.classList.toggle("is-flipped");
//     })
// }); 

