
// kode hentet fra boken
let avsnittEl = document.querySelector(".blaa");


// Kode tilpasset
avsnittEl.setAttribute("style", "text-align: center")

// Du kan tilpasse denne side...
//avsnittEl.setAttribute("style", "text-align: center")

// Dersom avsnittEl, som er <p> element mottar Hoover så gjøre sentring
avsnittEl.addEventListener("mouseover", function() {
  avsnittEl.className = "rosa";
  console.log("Hoover på");
});

// Endre stilen tilbake til normal når brukeren tar musen bort fra elementet
avsnittEl.addEventListener("mouseout", function() {
  avsnittEl.className = "blaa";
  console.log("Hoover av");
});

