const rating_cards = document.querySelectorAll(".ratings span");
const submit = document.querySelector(".submit");
const rate_point = document.getElementById("voto");
const rating_section = document.querySelector(".rating_section");
const obrigado = document.querySelector(".obrigado");
let voto = null;

rating_cards.forEach((rating_card) => {
  rating_card.addEventListener("click", (e) => {
    const active = document.querySelector(".checked");
    if (active) {
      active.classList.remove("checked");
    }
    const card = e.target;
    card.classList.add("checked");
    voto = e.target.innerText;
    console.log(voto);
  })
})
submit.addEventListener("click", (e) => {
  if (voto) {
    rate_point.innerText = voto;
    rating_section.classList.add("hidden");
    obrigado.classList.remove("hidden");
  }
})