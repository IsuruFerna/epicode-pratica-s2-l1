/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 1: datatype *****************************"
);
const num = 1; // questo è il modo in cui assegnare il valore di un numero a una variabile
console.log("num contiene un valore numerico: ", typeof num);

const str = "un testo"; // questo è il modo in cui assegnare il valore di un stringa a una variabile
console.log("str contiene un valore di stringa o un testo: ", typeof str);

const bool = true; // questo è il modo in cui assegnare il valore di un boolean a una variabile. puoi assegnare solo "true" o "false"
console.log("bool contiene un valore di booleano: ", typeof bool);

const notDefined = undefined; // which means you haven't assign any value to this variable. you can leave it blank instead of assigning "undefined"
console.log(
   "notDefined contiene un valore di non definitivo: ",
   typeof notDefined
);

const isNull = null; // this is like your variable has an empty value.
console.log("isNull contiene un valore valore vuoto: ", typeof isNull);

/* ESERCIZIO 2
 Crea una variable chiamata "name" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 2: creare un variabile *****************************"
);
const name = "Isuru Madhushan";
console.log("mio nome sotto forma di string: ", name);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 3: somma *****************************"
);
const a = 12;
const b = 20;
let sum = a + b;
console.log("questo è somma di due valori: ", sum, 12 + 20);
/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 4: assegnare un valore al una variabile *****************************"
);
const x = 12;
console.log("questo è il valore di x: ", x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "name" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 5:  Riassegna un nuovo valore al un variabile già esistente. è commentato e bisogna disabilitare line 80 per vedere il errore *****************************"
);
const surname = "Fernando";
// surname = "Fernando W.M";

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 6:  Riassegna un nuovo valore al un variabile già esistente. è commentato e bisogna disabilitarlo per vedere il errore *****************************"
);
console.log("questo è sostrazione tra 4 e x: ", 4 - x);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
console.log(
   "***************************** ESERCIZIO 7 *****************************"
);
const name1 = "john";
const name2 = "John";

console.log("name1 e name2 sono non uguali?:", name1 !== name2);
console.log("name1 e name2 sono uguali?:", name1 === name2);

console.log("Extra :", name1 === name2.toLowerCase());
