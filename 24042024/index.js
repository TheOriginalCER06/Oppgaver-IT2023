// endre modus knapp og modus prikker
const endreModusKnapp = document.getElementById("trykkMegKnapp");

// sirklene som viser brukeren hvilken modus de er i
const trekantArealSirkel = document.getElementById("trekant-areal-sirkel");
const trekantOmkretspSirkel = document.getElementById("trekant-omkrets-sirkel");
const firkantArealSirkel = document.getElementById("firkant-areal-sirkel");
const firkantOmkretsSirkel = document.getElementById("firkant-omkrets-sirkel");

// inputs
const aInput = document.getElementById("a-input");
const bInput = document.getElementById("b-input");

// outputs
const resultat = document.getElementById("resultat-boks");

// kalkuler knappen
const kalkulerKnapp = document.getElementById("kalkulerKnapp");

const states = ["T-A", "T-O", "F-O", "F-A"]; //endre denne rekkefølgen for å endre i hvilken rekkefølge det vises (den som er her går mot klokken)
const obj = {
    "T-A" : trekantArealSirkel, 
    "T-O" : trekantOmkretspSirkel, 
    "F-A" : firkantArealSirkel, 
    "F-O" : firkantOmkretsSirkel
}

let state = 0;

trykkMegKnapp.addEventListener("click", () => {
    obj[states[state]].classList.remove("selected");
	state = (state + 1) % states.length;
    obj[states[state]].classList.add("selected");
    kalkuler();
});

kalkulerKnapp.addEventListener("click", () => {
	if (errorChecker(aInput) && errorChecker(bInput)) {
		handleError1();
		return;
	}
    kalkuler();
});

const kalkuler = () => {
    const a = parseFloat(aInput.value);
	const b = parseFloat(bInput.value);
	const currState = states[state];

	switch (currState) {
		case states[0]:
			resultat.innerHTML = (a * b) / 2;
			break;
		case states[1]:
			resultat.innerHTML = a + b + Math.sqrt(a * a + b * b);
			break;
        case states[2]:
            resultat.innerHTML = 2 * a + 2 * b;
            break;
		case states[3]:
			resultat.innerHTML = a * b;
			break;
		default:
			handleError1();
	}
};

const errorChecker = (e) => {
	return isNaN(parseFloat(e.value));
};

const handleError1 = () => {
	resultat.innerHTML = "ERROR";
	resultat.classList.add("error"); // Lag en klasse som skal vise når det er en error
	setTimeout(() => {
		resultat.classList.remove("error");
		resultat.innerHTML = "";
	}, 5000);
};
