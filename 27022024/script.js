function alleFavoritter(favoritter) {
    let favorittListe = "";
    for (let i = 0; i < favoritter.length ; i++) {
        favorittListe += favoritter[i] + " ";
    }
    return favorittListe;
}

let meg = {
    navn: "Ivar",
    fodselsaar: 1975,
    favorittfilm: "Pass",
    favorittall: 101,
    favorittmat: ["Taco","Biff","Fiskepinner"]
};

console.log(meg.navn);
console.log(alleFavoritter(meg.favorittmat));
