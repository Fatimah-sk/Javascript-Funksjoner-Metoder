/******************************************************************************
Funksjoner og metoder oppgave

Les oppgaveteksten NØYE. Vis noen eksempler i koden din som tester
funksjonene og metodene dine. Bruk en variasjon av pilfunksjoner (arrow functions)
og funksjoner laget med nøkkelordet `function`.

Legg til kommentarer i koden din som kort forklarer hva den gjør.

******************************************************************************/

/******************************************************************************
1.

Lag følgende funksjon:

Funksjonen skal ta inn et tall som parameter og returnere
"Oddetall" hvis tallet er et oddetall og "Partall" hvis tallet er et partall.
(PS: Funksjonen skal bruke return, du skal ikke bruke console log inni
funksjonen)

******************************************************************************/

function sjekknummer(x)
{
    let result= x % 2 == 0 ? "Partall" : "Oddetall";
    return result;
}

console.log (sjekknummer(50)); // "Partall"
console.log( sjekknummer(27)); // "Oddetall"

/******************************************************************************
2.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter og returnere stringen
i STORE BOKSTAVER med et utropstegn på slutten.

Eksempel: "Dette er kult" skal returnere "DETTE ER KULT!"

******************************************************************************/

function UpperCase(text)
{
    let result= text.toUpperCase();
    return result;
}

console.log(UpperCase("fatimah")+"!"); // FATIMAH!
/******************************************************************************
3.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere:

 - Et navn (string)
 - En time på døgnet (nummer)

Funksjonen skal returnere:
"Ugyldig tid" hvis timeverdien er mindre enn 0.
"God natt (mottatt navn)" hvis timeverdien er mellom 0 og 5.
"God morgen (mottatt navn)" hvis timeverdien er mellom 6 og 11.
"God dag (mottatt navn)" hvis timeverdien er mellom 12 og 17.
"God kveld (mottatt navn)" hvis timeverdien er mellom 18 og 23.
"Ugyldig tid" hvis timeverdien er større enn 23.

Hvis ingen timeverdi mottas, skal funksjonen returnere en feilmelding.

******************************************************************************/

function sjekktid(name,time)
{
    if (time < 0) {return "Ugyldig tid";}
    else if (time >= 0 && time <=5) {return "God natt "+name;}
    else if (time >= 6 && time <=11) {return "God morgen "+name;}
    else if (time >= 12 && time <=17) {return "God dag "+name;}
    else if (time >= 18 && time <=23) {return "God kveld "+name;}
    else if (time > 23) {return "Ugyldig tid";}
    else if (time===undefined) {return "Feil, ingen tidsverdi mottat."}
}
console.log (sjekktid("Fatimah",-1)); //Ugyldig tid
console.log (sjekktid("Fatimah",2)); //God natt Fatimah
console.log (sjekktid("Fatimah",9)); //Godmorgen Fatimah
console.log (sjekktid("Fatimah",15)); //God dag Fatimah
console.log (sjekktid("Fatimah",20)); //God kveld Fatimah
console.log (sjekktid("Fatimah",24)); //Ugyldig tid
console.log (sjekktid("Fatiamh")); //Feil, ingen tidsverdi mottat.


/******************************************************************************
4.

Lag følgende funksjon:

Funksjonen skal ta inn en array som parameter og returnere arrayen
med første og siste indeks fjernet.

Eksempel 1: ["Rød", "Grønn", "Blå", "Gul"] skal returnere ["Grønn", "Blå"].

Eksempel 2: ["En", "To", "Tre", "Fire", "Fem", "Seks"] skal returnere
["To", "Tre", "Fire", "Fem"].

******************************************************************************/

function fjernelemnter(students) 
{
    students.shift();
    students.pop();
    return students;
}
let names=["Karim","Karmen","Moh","Isak","Rania","Laila"];
console.log(fjernelemnter(names)); // ['Karmen', 'Moh', 'Isak', 'Rania']

//Denne funksjonen endrer den opprinnelige arrayen.
console.log(names);//['Karmen', 'Moh', 'Isak', 'Rania']

//***********************************************************************
function fjernelemnter2(students2) 
{
     let delAvArray = students2.slice(1, -1);
    return delAvArray;
}
let names2=["Karim","Karmen","Moh","Isak","Rania","Laila"];
console.log(fjernelemnter2(names2)); // ['Karmen', 'Moh', 'Isak', 'Rania']

// Denne funksjonen oppretter en endret kopi og beholder den opprinnelige arrayen.
console.log (names2);// ['Karim', 'Karmen', 'Moh', 'Isak', 'Rania', 'Laila'] 

/******************************************************************************
5.

Lag følgende funksjon:

Funksjonen skal ta inn en string som parameter.

Bruk stringmetoder på stringen for å gjøre følgende:
 - Erstatt ordet "vanskelig" med "gøy".
 - Fjern mellomrom fra starten og slutten av stringen.

Returner deretter den oppdaterte stringen.

Eksempel 1: "  Javascript er vanskelig   " skal returnere "Javascript er gøy".
Eksempel 2: " Det er vanskelig å bruke metoder " skal returnere "Det er gøy å bruke metoder".
Eksempel 3: "   vanskelig        " skal returnere "gøy".

******************************************************************************/

function edit(text)
{
    let result;
    text = text.replace("vanskelig","gøy");
    text = text.trim();
    return text;
}
console.log(edit("  Javascript er vanskelig   "));//Javascript er gøy
console.log(edit(" Det er vanskelig å bruke metoder "));//Det er gøy å bruke metoder
console.log(edit("   vanskelig        "));//gøy

/******************************************************************************
6.

Fullfør følgende steg for å manipulere "items"-arrayet. Hvert steg skal
fullføres ved å bruke passende array-metoder.

*******************************************************************************/

const items = ["Bok", "Penn", "Notatbok", "Viskelær", "Blyant", "Markør"];

/*******************************************************************************
Steg 1: Fjern det første elementet ("Bok") fra arrayen ved hjelp av riktig metode.

Steg 2: Finn og erstatt "Viskelær" med "Linjal" i arrayen. 

Steg 3: Bruk splice-metoden til å fjerne både "Penn" og "Notatbok", og legg til "Markeringspenn" i deres plass.

Steg 4: Kombiner alle elementene i arrayen til en enkelt string ved å bruke " | " som separator.

Ekstra utfordring: Lag et nytt array som kun inkluderer elementer som inneholder bokstaven "e".

******************************************************************************/

items.shift();
console.log(items); //['Penn', 'Notatbok', 'Viskelær', 'Blyant', 'Markør']

let ind=items.indexOf('Viskelær');
items.splice(ind,1,"Linjal")
console.log(items); //['Penn', 'Notatbok', 'Linjal', 'Blyant', 'Markør']

items.splice(0,2,"Markeringspenn");
console.log(items); //['Markeringspenn', 'Linjal', 'Blyant', 'Markør']

console.log(items.join(" | ")); // Markeringspenn | Linjal | Blyant | Markør


let newitems=[];
for (let i=0 ; i<items.length ; i++)
{
    if (items[i].includes("e"))  {newitems.push(items[i]);}
}
    console.log(newitems); //['Markeringspenn']


/******************************************************************************
7.

EKSTRA UTFORDRING #1:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn 2 parametere, en array og en string.

Sjekk om arrayen inneholder stringen. Hvis den gjør det, fjern elementet
fra arrayet og returner den oppdaterte arrayen.

Hvis arrayet ikke inneholder stringen, legg stringen til på slutten
av arrayet og returner det oppdaterte arrayet.

Eksempel 1: (["Rød", "Grønn"], "Blå") --> ["Rød", "Grønn", "Blå"]
Eksempel 2: (["Rød", "Grønn", "Blå"], "Grønn") --> ["Rød", "Blå"]
Eksempel 3: (["En", "To", "Tre"], "Fire") --> ["En", "To", "Tre", "Fire"]
Eksempel 4: (["En", "To", "Tre"], "To") --> ["En", "Tre"]

******************************************************************************/

function sjekkArray(Arr,str)
{
    if (Arr.includes(str)) {
        let i = Arr.indexOf(str)
        Arr.splice(i,1); }
    else {Arr.push(str);}
    return Arr;
}
console.log(sjekkArray(["red","blue"],"green")); //['red', 'blue', 'green']
console.log(sjekkArray(["one","two","three"],"two")); //['one', 'three']

/******************************************************************************
8.

EKSTRA UTFORDRING #2:

Dette er ikke obligatorisk, kun for de som vil ha en ekstra utfordring.

Lag følgende funksjon:

Funksjonen skal ta inn ett parameter.

Hvis parameteret er en string:
Returner stringen med "😎" lagt til i starten og slutten.

Hvis parameteret er et tall:
Doble verdien, konverter den til en string, og returner den med "😎" lagt til i
starten og slutten.

Hvis parameteret er en boolean:
Returner "😎Ja😎" hvis parameteret er true, eller "😎Slapp av😎" hvis parameteret er false.

Hvis parameteret er en annen datatype:
Returner "😎Kun primitive verdier😎".

******************************************************************************/

function sjekkparameter(par)
{
    if (typeof par === "string") {
        return("😎"+par+"😎");
    }
    else if (typeof par === "number") {
        return("😎"+String(par*2)+"😎");
    }
    else if (typeof par === "boolean") {
         return par? "😎Ja😎":"😎Slapp av😎";
    }
    else { return "😎Kun primitive verdier😎";}
}
console.log(sjekkparameter("Javascript")); //😎Javascript😎

console.log(sjekkparameter(5)); //😎10😎

console.log(sjekkparameter(true)); //😎Ja😎

console.log(sjekkparameter(false));//😎Slapp av😎

console.log(sjekkparameter([1,2,3,4])); //😎Kun primitive verdier😎



