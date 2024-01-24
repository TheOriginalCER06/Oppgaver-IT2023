function terning() {
    return Math.floor(Math.random() * 6) + 1;
}

function trill() {
    let toLike = false;    // settes til true når vi får to like
    let antallForsok = 0;  // lar oss telle antall forsøk
    // Så lenge vi ikke har fått to like
    while(!toLike) {  
      // Øker antall forsøk med 1
      antallForsok++;
      // triller to terninger
      let terning1 = terning();
      let terning2 = terning();
      //console.log("Fikk " + terning1 + ", " + terning2);
      // Undersøker om de to terningene er like
      if (terning1 === terning2) {
        toLike = true;
        //console.log("Fikk to like på " + antallForsok + " forsøk");
      }
    }
    return antallForsok;
}

function gjennomsnitt(antall) {
    let resultat = 0;
    let gjennomsnitt = 0;
    for (let i = 0; i < antall; i++) {
        resultat += trill();
        //console.log(trill());
    }
    
    gjennomsnitt = resultat / antall;
    console.log("Gjennomsnitt: " +gjennomsnitt);
    return gjennomsnitt;
}