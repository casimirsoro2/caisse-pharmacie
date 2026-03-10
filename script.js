// ================= MEDICAMENTS =================

const medicaments = [
{name:"ALBEN 400MG CP",price:500,unit:"COMPRIME"},
{name:"ALLERCET 10MG CP",price:2500,unit:"BOITE"},
{name:"AMOXICIILINE SUSP BUV 250MG",price:1500,unit:"BOITE"},
{name:"AMOXICILLINE 1G INJECTION",price:1500,unit:"AMPOULE"},
{name:"AMOXICILLINE GELULES 500MG",price:800,unit:"PLAQUETTE"},
{name:"AMPICILLINE 1G INJECTION",price:1500,unit:"AMPOULE"},
{name:"ARTEMETHER 80MG INJECTION",price:700,unit:"AMPOULE"},
{name:"AUREOMYCINE 3% POMMADE",price:1500,unit:"TUBE"},
{name:"AZITHROMICYNE 500MG CP",price:3500,unit:"BOITE"},
{name:"BANDE DE CREPE",price:1000,unit:"ROULEAU"},
{name:"BETADINE 125ML",price:1500,unit:"FLACON"},
{name:"CALCIUM INJECTION",price:1500,unit:"AMPOULE"},
{name:"CAPTOPRIL COMPRIMES",price:800,unit:"PLAQUETTE"},
{name:"CARBOCISTEINE SIROP 2%",price:1500,unit:"BOITE"},
{name:"CARBOCISTEINE SIROP 5%",price:1500,unit:"BOITE"},
{name:"CEFTRIAXONE 1G INJECTION",price:1500,unit:"AMPOULE"},
{name:"CIMETIDINE 200MG INJECTION",price:800,unit:"AMPOULE"},
{name:"CIPROFLOXACINE CP 500MG",price:1200,unit:"PLAQUETTE"},
{name:"CIPROFLOXACINE CP 750MG",price:1700,unit:"PLAQUETTE"},
{name:"CODOLIPRANE 400/20MG",price:2500,unit:"BOITE"},
{name:"DEXAMETHASONE 4MG INJECTION",price:800,unit:"AMPOULE"},
{name:"DIAZEPAM 10MG INJECTION",price:1000,unit:"AMPOULE"},
{name:"DICLOFENAC 75MG INJECTION",price:800,unit:"AMPOULE"},
{name:"DICLOFENAC COMPRIMES 50MG",price:800,unit:"PLAQUETTE"},
{name:"DICLOFENAC GEL",price:1000,unit:"BOITE"},
{name:"DICYNONE 250MG INJECTION",price:1500,unit:"AMPOULE"},
{name:"DOXYCYCLINE GELULES 100MG",price:800,unit:"PLAQUETTE"},
{name:"DROTAVERINE 40MG INJECTION",price:800,unit:"AMPOULE"},
{name:"ECOREX 150 MG OVULES B/3",price:2000,unit:"PLAQUETTE"},
{name:"FERROFIT SIROP 200ML",price:2000,unit:"FLACON"},
{name:"FIL DE SUTURE",price:1500,unit:"UNITE"},
{name:"FLUCAZOL 50MG/5ML SIROP 60ML",price:3000,unit:"FLACON"},
{name:"FLUCLOXACILLINE 250MG SUSP",price:2500,unit:"BOITE"},
{name:"FLUCONAZOLE 150MG COMPRIME",price:750,unit:"AMPOULE"},
{name:"FUCLO 500MG GELULES",price:4500,unit:"BOITE"},
{name:"FUROSEMIDE COMPRIMES 40MG",price:800,unit:"PLAQUETTE"},
{name:"GANT D'EXAMEN LATEX PQT/100",price:4500,unit:"BOITE"},
{name:"GENTA COLLYRE",price:2000,unit:"BOITE"},
{name:"GENTAMICINE 80MG INJECTION",price:500,unit:"AMPOULE"},
{name:"HPV (HYDROSOL POLYVITAMINE) INJECTION",price:500,unit:"AMPOULE"},
{name:"KETOCONAZOLE CREME",price:2500,unit:"BOITE"},
{name:"KIT PERFUSION GELOFUSINE 4%",price:6000,unit:"KIT"},
{name:"KIT PERFUSION GLUCOSE 5%",price:3000,unit:"KIT"},
{name:"KIT PERFUSION METRONIDAZOLE",price:3000,unit:"KIT"},
{name:"KIT PERFUSION NACL 0,9%",price:3000,unit:"KIT"},
{name:"KIT PERFUSION RINGER",price:3000,unit:"KIT"},
{name:"LOPERAMIDE GELULES 2MG",price:800,unit:"PLAQUETTE"},
{name:"METRONIDAZOLE CP 500MG",price:1000,unit:"PLAQUETTE"},
{name:"METRONIDAZOLE SUSP BUV 125MG",price:1500,unit:"BOITE"},
{name:"NOVALGIN 2500MG INJECTION",price:500,unit:"1 ML"},
{name:"OMEPRAZOLE 20MG GELULES",price:2500,unit:"BOITE"},
{name:"PARACETAMOL 500MG CP",price:250,unit:"PLAQUETTE"},
{name:"PRIMALAN 30MG SIROP",price:2500,unit:"BOITE"},
{name:"QUINEX 300MG CP",price:3500,unit:"BOITE"},
{name:"RETARPEN 2.4 MUI INJECTION",price:1500,unit:"AMPOULE"},
{name:"SAT (SERUM ANTI TETANIQUE) 1500UI",price:3000,unit:"AMPOULE"},
{name:"SEPTILAIT SOLUTION",price:3000,unit:"BOITE"},
{name:"SPASFON 80MG CP",price:1500,unit:"PLAQUETTE"},
{name:"TRAMADOL 100MG/2ML INJECTION",price:1500,unit:"AMPOULE"},
{name:"TRAMADOL 50MG CP",price:1500,unit:"PLAQUETTE"},
{name:"VITA C 1000 CP EFFERV",price:1500,unit:"BOITE"},
{name:"VITAMINE C INJECTION",price:1000,unit:"AMPOULE"},
{name:"VOGALENE 10MG INJECTION",price:800,unit:"AMPOULE"},
{name:"X-FERON SIROP 200ML",price:2000,unit:"FLACON"},
{name:"YEKAFER SIROP 200ML",price:2000,unit:"FLACON"}
];

medicaments.sort((a,b)=>a.name.localeCompare(b.name));

const list=document.getElementById("medList");
const alphabetMenu=document.getElementById("alphabetMenu");
const counter=document.getElementById("medCounter");
const splash=document.getElementById("splash");
const bigLetter=document.getElementById("bigLetter");

let favoris=JSON.parse(localStorage.getItem("favoris"))||[];
let stats=JSON.parse(localStorage.getItem("stats"))||{};

const searchInput=document.getElementById("search");
const clearBtn=document.getElementById("clearBtn");
// ================= SUGGESTIONS =================

const suggestions=document.createElement("div");
suggestions.id="suggestions";
document.querySelector(".search-container").appendChild(suggestions);

// ================= SPLASH =================

window.addEventListener("load",()=>{
setTimeout(()=>{
splash.style.opacity="0";
setTimeout(()=>splash.style.display="none",500);
},1500);
});

// ================= FACTURE =================

let facture=[];
let total=0;

const factureList=document.getElementById("factureList");
const factureTotal=document.getElementById("factureTotal");
const resetFacture=document.getElementById("resetFacture");

function ajouterFacture(med){

// vérifier si médicament déjà dans la facture
let exist=[...factureList.children].find(li =>
li.querySelector(".factName")?.innerText===med.name
);

if(exist){

let qtySpan=exist.querySelector(".qty");
let priceSpan=exist.querySelector(".linePrice");

let qty=parseInt(qtySpan.innerText);

let oldLine=med.price*qty;

total-=oldLine;

qty++;

let newLine=med.price*qty;

qtySpan.innerText=qty;
priceSpan.innerText=newLine+" FCFA";

total+=newLine;

factureTotal.innerText="Total : "+total+" FCFA";

return;
}

// nouvelle ligne
let li=document.createElement("li");

let qty=1;
let lineTotal=med.price;

li.innerHTML=`
<span class="factName">${med.name}</span>

<div class="qtyBox">
<button class="minus">-</button>
<span class="qty">${qty}</span>
<button class="plus">+</button>
</div>

<span class="linePrice">${lineTotal} FCFA</span>
<span class="removeMed">❌</span>
`;

factureList.appendChild(li);

total+=lineTotal;

factureTotal.innerText="Total : "+total+" FCFA";

let qtySpan=li.querySelector(".qty");
let priceSpan=li.querySelector(".linePrice");

// bouton +
li.querySelector(".plus").onclick=()=>{

total-=lineTotal;

qty++;

lineTotal=med.price*qty;

qtySpan.innerText=qty;
priceSpan.innerText=lineTotal+" FCFA";

total+=lineTotal;

factureTotal.innerText="Total : "+total+" FCFA";

};

// bouton -
li.querySelector(".minus").onclick=()=>{

total-=lineTotal;

qty--;

if(qty<=0){

li.remove();

factureTotal.innerText="Total : "+total+" FCFA";

return;

}

lineTotal=med.price*qty;

qtySpan.innerText=qty;
priceSpan.innerText=lineTotal+" FCFA";

total+=lineTotal;

factureTotal.innerText="Total : "+total+" FCFA";

};

// supprimer
li.querySelector(".removeMed").onclick=()=>{

total-=lineTotal;

li.remove();

factureTotal.innerText="Total : "+total+" FCFA";

};

}

// ================= LISTE =================

function afficherListe(data){

list.innerHTML="";

if(counter) counter.textContent=data.length+" médicament(s)";

let currentLetter="";

data.forEach(med=>{

let firstLetter=med.name[0].toUpperCase();

if(firstLetter!==currentLetter){
currentLetter=firstLetter;

let h=document.createElement("h3");
h.textContent=currentLetter;
h.id="letter-"+currentLetter;

list.appendChild(h);
}

let li=document.createElement("li");

li.innerHTML=`
<div class="medRow">
<span class="medName">${med.name}</span>
<span class="medPrice">${med.price} FCFA</span>
</div>
`;

li.onclick=()=>{

if(!stats[med.name]) stats[med.name]=0;

stats[med.name]++;

localStorage.setItem("stats",JSON.stringify(stats));

ajouterFacture(med);

};

list.appendChild(li);

});

}

// ================= RECHERCHE + SUGGESTIONS =================

searchInput.addEventListener("input",function(){

let value=this.value.toLowerCase();

clearBtn.style.display=value?"block":"none";

let filtered=medicaments.filter(med=>
med.name.toLowerCase().includes(value)
);

afficherListe(filtered);

suggestions.innerHTML="";

if(value){

filtered.slice(0,5).forEach(med=>{

let div=document.createElement("div");
div.className="suggestion";
div.textContent=med.name;

div.onclick=()=>{

searchInput.value=med.name;

suggestions.innerHTML="";

ajouterFacture(med);

};

suggestions.appendChild(div);

});

}

});

clearBtn.onclick=()=>{

searchInput.value="";

clearBtn.style.display="none";

suggestions.innerHTML="";

afficherListe(medicaments);

};

// ================= ALPHABET =================

const letters="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

letters.forEach(letter=>{

let span=document.createElement("span");
span.textContent=letter;

alphabetMenu.appendChild(span);

// clic simple

span.onclick=()=>{

let section=document.getElementById("letter-"+letter);

if(section) section.scrollIntoView({behavior:"smooth"});

// afficher grosse lettre

bigLetter.textContent=letter;

bigLetter.style.display="block";

bigLetter.classList.add("show");

setTimeout(()=>{

bigLetter.classList.remove("show");

setTimeout(()=>{

bigLetter.style.display="none";

},200);

},400);

};

});


// ================= AGRANDIR BARRE =================

alphabetMenu.addEventListener("touchstart",()=>{
alphabetMenu.classList.add("touching");
});

alphabetMenu.addEventListener("touchend",()=>{
alphabetMenu.classList.remove("touching");
});

alphabetMenu.addEventListener("touchcancel",()=>{
alphabetMenu.classList.remove("touching");
});


// ================= GLISSER SUR ALPHABET =================

alphabetMenu.addEventListener("touchmove",(e)=>{

let touch=e.touches[0];

let element=document.elementFromPoint(touch.clientX,touch.clientY);

if(element && element.parentElement===alphabetMenu){

let letter=element.textContent;

let section=document.getElementById("letter-"+letter);

if(section) section.scrollIntoView({behavior:"auto"});

// grosse lettre

bigLetter.textContent=letter;

bigLetter.style.display="block";

bigLetter.classList.add("show");

clearTimeout(window.bigLetterTimeout);

window.bigLetterTimeout=setTimeout(()=>{

bigLetter.classList.remove("show");

setTimeout(()=>{

bigLetter.style.display="none";

},200);

},400);

}

});

// ================= MODE SOMBRE =================

const themeBtn=document.createElement("div");
themeBtn.id="themeBtn";
themeBtn.innerText="🌙";
document.body.appendChild(themeBtn);

if(localStorage.getItem("theme")==="dark"){
document.body.classList.add("dark-mode");
themeBtn.innerText="☀️";
}

themeBtn.onclick=()=>{
document.body.classList.toggle("dark-mode");

if(document.body.classList.contains("dark-mode")){
themeBtn.innerText="☀️";
localStorage.setItem("theme","dark");
}else{
themeBtn.innerText="🌙";
localStorage.setItem("theme","light");
}
};

// ================= BOUTON TOP =================

const topBtn=document.createElement("div");
topBtn.id="topBtn";
topBtn.innerHTML="⬆";
document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{
if(window.scrollY>200){
topBtn.style.display="flex";
}else{
topBtn.style.display="none";
}
});

topBtn.onclick=()=>{
window.scrollTo({top:0,behavior:"smooth"});
};

const toggleFacture=document.getElementById("toggleFacture");
const factureBox=document.getElementById("factureBox");

toggleFacture.onclick=()=>{

factureBox.classList.toggle("closed");

if(factureBox.classList.contains("closed")){
toggleFacture.innerText="🧾 Facture patient ⬇";
}else{
toggleFacture.innerText="🧾 Facture patient ⬆";
}

};

// ================= LANCEMENT =================

afficherListe(medicaments);