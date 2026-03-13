function normaliser(txt){
return txt
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"");
}

function levenshtein(a, b){

a = a.toLowerCase();
b = b.toLowerCase();

const matrix = [];

for(let i=0;i<=b.length;i++){
matrix[i] = [i];
}

for(let j=0;j<=a.length;j++){
matrix[0][j] = j;
}

for(let i=1;i<=b.length;i++){
for(let j=1;j<=a.length;j++){

if(b.charAt(i-1) === a.charAt(j-1)){
matrix[i][j] = matrix[i-1][j-1];
}else{
matrix[i][j] = Math.min(
matrix[i-1][j-1] + 1,
matrix[i][j-1] + 1,
matrix[i-1][j] + 1
);
}

}
}

return matrix[b.length][a.length];

}
// ================= FONCTION VIBRATION =================
function vibrer(){
if(navigator.vibrate){
navigator.vibrate(40);
}
}
// ================= BASE DE DONNÉES =================

const medicaments = [

{name:"ALBEN 400MG CP",price:500,unit:"COMPRIME"},
{name:"ALLERCET 10MG CP",price:2500,unit:"BOITE"},
{name:"AMOXICIILINE SUSP BUV 250MG",price:1500,unit:"BOITE"},
{name:"AMOXICILLINE 1G INJECTION",price:1500,unit:"AMPOULE"},
{name:"AMOXICILLINE GELULES 500MG",price:800,unit:"PLAQUETTE"},
{name:"AMPICILLINE 1G INJECTION",price:1500,unit:"AMPOULE"},
{name:"ARTEMETHER 80MG INJ",price:700,unit:"AMPOULE"},
{name:"AUREOMYCINE 3% POMMADE",price:1500,unit:"TUBE"},
{name:"AZITHROMICYNE 500MG CP",price:3500,unit:"BOITE"},
{name:"BANDE DE CREPE",price:1000,unit:"ROULEAU"},
{name:"BETADINE 125ML",price:1500,unit:"FLACON"},
{name:"CALCIUM INJ",price:1500,unit:"AMPOULE"},
{name:"CAPTOPRIL COMPRIMES",price:800,unit:"PLAQUETTE"},
{name:"CARBOCISTEINE SIROP 2%",price:1500,unit:"BOITE"},
{name:"CARBOCISTEINE SIROP 5%",price:1500,unit:"BOITE"},
{name:"CEFTRIAXONE 1G INJECTION",price:2000,unit:"AMPOULE"},
{name:"CIMETIDINE 200MG INJ",price:800,unit:"AMPOULE"},
{name:"CIPROFLOXACINE CP 500MG",price:1200,unit:"PLAQUETTE"},
{name:"CIPROFLOXACINE CP 750MG",price:1700,unit:"PLAQUETTE"},
{name:"CODOLIPRANE 400/20MG",price:2500,unit:"BOITE"},
{name:"DEXAMETHASONE 4MG INJECTION",price:800,unit:"AMPOULE"},
{name:"DIAZEPAM 10MG INJECTION",price:1000,unit:"AMPOULE"},
{name:"DICLOFENAC 75MG INJECTION",price:800,unit:"AMPOULE"},
{name:"DICLOFENAC COMPRIMES 50MG",price:800,unit:"PLAQUETTE"},
{name:"DICLOFENAC GEL",price:1000,unit:"BOITE"},
{name:"DICYNONE 250MG INJ",price:1500,unit:"AMPOULE"},
{name:"DOXYCYCLINE GELULES 100MG",price:800,unit:"PLAQUETTE"},
{name:"DROTAVERINE 40MG INJECTION",price:800,unit:"AMPOULE"},
{name:"ECOREX 150 MG OVULES B/3",price:2000,unit:"PLAQUETTE"},
{name:"FERROFIT SIROP 200ML",price:2000,unit:"FLACON"},
{name:"FIL DE SUTURE",price:1500,unit:"UNITE"},
{name:"FLUCAZOL 50MG/5ML SIROP 60ML",price:3000,unit:"FLACON"},
{name:"FLUCLOXACILLINE 250MG SUSP",price:2500,unit:"BOITE"},
{name:"FLUCONAZOLE 150MG COMPRIME",price:750,unit:"AMPOULE"},
{name:"FUROSEMIDE COMPRIMES 40MG",price:800,unit:"PLAQUETTE"},
{name:"GANT D'EXAMEN LATEX PQT/100",price:4500,unit:"BOITE"},
{name:"GENTA COLLYRE",price:2000,unit:"BOITE"},
{name:"GENTAMICINE 80MG INJ",price:500,unit:"AMPOULE"},
{name:"HPV (HYDROSOL POLYVITAMINE) INJ",price:500,unit:"AMPOULE"},
{name:"KETOCONAZOLE CREME",price:2500,unit:"BOITE"},
{name:"KIT PERFUSION GELOFUSINE 4%",price:6000,unit:"KIT"},
{name:"KIT PERFUSION GLUCOSE 5%",price:3000,unit:"KIT"},
{name:"KIT PERFUSION METRONIDAZOLE",price:3000,unit:"KIT"},
{name:"KIT PERFUSION NACL 0,9%",price:3000,unit:"KIT"},
{name:"KIT PERFUSION RINGER",price:3000,unit:"KIT"},
{name:"LOPERAMIDE GELULES 2MG",price:800,unit:"PLAQUETTE"},
{name:"METRONIDAZOLE CP 500MG",price:1000,unit:"PLAQUETTE"},
{name:"METRONIDAZOLE SUSP BUV 125MG",price:1500,unit:"BOITE"},
{name:"NOVALGIN 2500MG INJ",price:500,unit:"1 ML"},
{name:"OMEPRAZOLE 20MG GELULES",price:2500,unit:"BOITE"},
{name:"PARACETAMOL 500MG CP",price:250,unit:"PLAQUETTE"},
{name:"PRIMALAN 30MG SP",price:2500,unit:"BOITE"},
{name:"QUINEX 300MG CP",price:3500,unit:"BOITE"},
{name:"RETARPEN 2.4 MUI INJECTION",price:1500,unit:"AMPOULE"},
{name:"SAT (SERUM ANTI TETANIQUE) 1500UI",price:3000,unit:"AMPOULE"},
{name:"SEPTILAIT SOLUTION",price:3000,unit:"BOITE"},
{name:"SPASFON 80MG CP",price:1500,unit:"PLAQUETTE"},
{name:"TRAMADOL 100MG/2ML INJ",price:1500,unit:"AMPOULE"},
{name:"TRAMADOL 50MG CP",price:1500,unit:"PLAQUETTE"},
{name:"VITA C 1000 CP EFFERV",price:1500,unit:"BOITE"},
{name:"VITAMINE C INJECTION",price:1000,unit:"AMPOULE"},
{name:"VOGALENE 10MG INJECTION",price:800,unit:"AMPOULE"},
{name:"X-FERON SIROP 200ML",price:2000,unit:"FLACON"},
{name:"YEKAFER SIROP 200ML",price:2000,unit:"FLACON"}
];

medicaments.sort((a,b)=>a.name.localeCompare(b.name));


// ================= ELEMENTS HTML =================

const medList = document.getElementById("medList");
const factureList = document.getElementById("factureList");
const factureTotal = document.getElementById("factureTotal");
const resetFacture = document.getElementById("resetFacture");
const search = document.getElementById("search");
const medCounter = document.getElementById("medCounter");
const clearBtn = document.getElementById("clearBtn");


// ================= BOITE SUGGESTIONS =================

const suggestions = document.createElement("div");
suggestions.id = "suggestions";
search.parentElement.appendChild(suggestions);


// ================= TOTAL =================

let total = 0;


// ================= AFFICHER MEDICAMENTS =================
function getIcon(unit){

unit = unit.toLowerCase();

if(unit.includes("ampoule") || unit.includes("inj")){
return "💉";
}

if(unit.includes("comprime") || unit.includes("plaquette")){
return "💊";
}

if(unit.includes("flacon") || unit.includes("sirop")){
return "🧴";
}

if(unit.includes("boite")){
return "📦";
}

return "💊";

}

function afficherListe(data){

medList.innerHTML="";

medCounter.innerText = data.length + " médicament(s)";

let currentLetter="";

data.forEach((med,index)=>{

let firstLetter = med.name[0].toUpperCase();

if(firstLetter !== currentLetter){

currentLetter = firstLetter;

let h = document.createElement("h3");

h.textContent = currentLetter;

h.id = "letter-"+currentLetter;

medList.appendChild(h);

}

let li = document.createElement("li");
    li.classList.add("medAnim");
    li.style.animationDelay = (index * 0.04) + "s";

li.innerHTML = `

<div class="medCard">

<div class="medRow">

<div class="medIcon">${getIcon(med.unit)}</div>

<div class="medInfo">

<div class="medTitle">${med.name}</div>

<div class="medBottom">

<span class="medPrice">
${med.price} FCFA
<span class="unitDisplay"> / ${med.unit}</span>
</span>

</div>

</div>

</div>

</div>

`;
    

li.onclick = ()=> ajouterFacture(med);

medList.appendChild(li);

});

}


// ================= AJOUT FACTURE =================

function ajouterFacture(med){

navigator.vibrate([20,10,20]); // vibration ajout médicament

let ligne=[...factureList.children].find(li =>
li.querySelector(".factName")?.innerText===med.name
);

if(ligne){

let qtySpan=ligne.querySelector(".qty");
let priceSpan=ligne.querySelector(".linePrice");

let qty=parseInt(qtySpan.innerText);

qty++;

qtySpan.innerText=qty;

priceSpan.innerText = qty + " × " + med.price + " = " + (med.price * qty) + " FCFA";

recalculerTotal();

return;

}


let li=document.createElement("li");

li.innerHTML=`

<span class="factName">${med.name}</span>

<div class="qtyBox">
<button class="minus">−</button>
<span class="qty">1</span>
<button class="plus">+</button>
</div>

<span class="linePrice">${med.price} FCFA</span>
<span class="factUnit">${med.unit}</span>

<span class="remove">❌</span>

`;

li.classList.add("factureAnim");

factureList.appendChild(li);

recalculerTotal();

let qtySpan=li.querySelector(".qty");
let priceSpan=li.querySelector(".linePrice");


// +

li.querySelector(".plus").onclick = ()=>{

navigator.vibrate(20);

let qty = parseInt(qtySpan.innerText);

qty++;

qtySpan.innerText = qty;

priceSpan.innerText = qty + " × " + med.price + " = " + (med.price * qty) + " FCFA";

recalculerTotal();

};

// -

li.querySelector(".minus").onclick = ()=>{

navigator.vibrate(15);

let qty = parseInt(qtySpan.innerText);

if(qty > 1){

qty--;

qtySpan.innerText = qty;

priceSpan.innerText = qty + " × " + med.price + " = " + (med.price * qty) + " FCFA";

}else{

li.remove();

}

recalculerTotal();

};


// supprimer

li.querySelector(".remove").onclick = ()=>{

navigator.vibrate([40,20,40]);

li.remove();

recalculerTotal();

};

}


// ================= TOTAL =================

function recalculerTotal(){

total = 0;

document.querySelectorAll(".linePrice").forEach(price =>{

let texte = price.innerText;

// extraire tous les nombres
let nombres = texte.match(/\d+/g);

if(nombres){

let valeur = parseInt(nombres[nombres.length - 1]);

total += valeur;

}

});

factureTotal.innerText = "Total : " + total + " FCFA";
    factureTotal.style.transform="scale(1.08)";

setTimeout(()=>{
factureTotal.style.transform="scale(1)";
},150);

}


// ================= RESET =================

resetFacture.onclick = ()=>{

navigator.vibrate([120,50,120]);

factureList.innerHTML="";

total = 0;

factureTotal.innerText = "Total : 0 FCFA";

};


// ================= RECHERCHE =================

search.addEventListener("input", function(){

let valeur = this.value.toLowerCase();

// afficher ou cacher le bouton ❌
clearBtn.style.display = valeur ? "block" : "none";

// filtrer médicaments
let resultat = medicaments.filter(med =>
med.name.toLowerCase().includes(valeur)
);

afficherListe(resultat);

// suggestions
suggestions.innerHTML = "";

if(valeur){

resultat.slice(0,5).forEach(med=>{

let div = document.createElement("div");

div.className = "suggestion";

div.textContent = med.name;

div.onclick = ()=>{

search.value = med.name;
clearBtn.style.display = "block";

suggestions.innerHTML = "";

ajouterFacture(med);

};

suggestions.appendChild(div);

});

}

});
// ================= CLEAR =================

clearBtn.onclick = ()=>{

search.value="";
clearBtn.style.display="none";
suggestions.innerHTML="";
afficherListe(medicaments);

};


// ================= BOUTON TOP =================

const topBtn=document.createElement("div");

topBtn.id="topBtn";

topBtn.innerHTML="⬆";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

topBtn.style.display = window.scrollY>200 ? "flex":"none";

});

topBtn.onclick=()=>{

window.scrollTo({top:0,behavior:"smooth"});

};


// ================= MODE SOMBRE =================

const themeBtn = document.getElementById("themeBtn");

// charger thème sauvegardé
if(localStorage.getItem("theme") === "dark"){
document.body.classList.add("dark-mode");
themeBtn.innerText = "☀️";
}

themeBtn.onclick = ()=>{

document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerText = "☀️";
localStorage.setItem("theme","dark");
}else{
themeBtn.innerText = "🌙";
localStorage.setItem("theme","light");
}

};

// ================= MENU ALPHABET =================

const alphabetMenu = document.getElementById("alphabetMenu");
const bigLetter = document.getElementById("bigLetter");

// alphabet A → Z
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

alphabet.forEach(letter=>{

let span = document.createElement("span");

span.textContent = letter;

alphabetMenu.appendChild(span);

});

// ================= CLIC SUR LETTRE =================

document.querySelectorAll("#alphabetMenu span").forEach(span=>{

span.onclick = ()=>{

let letter = span.textContent;

let section = document.getElementById("letter-"+letter);

if(section){
section.scrollIntoView({behavior:"smooth"});
}

// afficher grosse lettre même si aucun médicament
bigLetter.textContent = letter;
bigLetter.style.display = "block";

setTimeout(()=>{
bigLetter.style.display = "none";
},500);

};

});

window.addEventListener("focusin", ()=>{
topBtn.style.bottom = "220px";
});

window.addEventListener("focusout", ()=>{
topBtn.style.bottom = "180px";
});


// ================= SPLASH SCREEN =================

window.addEventListener("load", ()=>{

if(navigator.vibrate){
navigator.vibrate(30);
}

setTimeout(()=>{

const splash = document.getElementById("splash");

splash.style.opacity="0";
splash.style.transition="opacity 0.5s";

setTimeout(()=>{
splash.style.display="none";
},500);

},1500);

});
// ================= ADAPTATION ECRAN TELEPHONE =================

function adapterEcran(){

let largeur = window.innerWidth;

// téléphone
if(largeur < 480){

document.body.style.fontSize = "15px";

}

// tablette
else if(largeur < 768){

document.body.style.fontSize = "16px";

}

// grand écran
else{

document.body.style.fontSize = "17px";

}

}

// lancer au démarrage
adapterEcran();

// lancer si l'écran change
window.addEventListener("resize", adapterEcran);
// ================= FACTURE COULISSANTE =================

const factureBox = document.getElementById("factureBox");

let startY = 0;

factureBox.addEventListener("touchstart",(e)=>{

startY = e.touches[0].clientY;

});

factureBox.addEventListener("touchmove",(e)=>{

let currentY = e.touches[0].clientY;

let diff = startY - currentY;

// glisser vers le haut
if(diff > 50){
factureBox.classList.add("open");
}

// glisser vers le bas
if(diff < -50){
factureBox.classList.remove("open");
}

});
function nettoyerTexte(txt){

return txt
.toLowerCase()
.normalize("NFD")
.replace(/[\u0300-\u036f]/g,"") // enlève accents
.replace(/[^a-z0-9]/g,"");

}
const factureListScroll = document.getElementById("factureList");

if(factureListScroll){

factureListScroll.addEventListener("touchmove", function(e){

e.stopPropagation();

}, { passive:true });

}
// ================= LANCEMENT =================

afficherListe(medicaments);