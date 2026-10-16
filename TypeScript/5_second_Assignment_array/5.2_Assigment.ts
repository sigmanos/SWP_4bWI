

const zahlen: number[] = [5, 2, 8, 1, 4];

// map: Erstellt aus jedem Element ein neues Element.
const quadrierteZahlen: number[] = zahlen.map((zahl) => zahl * zahl);
console.log("Quadrierte Zahlen:", quadrierteZahlen); // [25, 4, 64, 1, 16]
//Umwandlung und macht neue Liste 


// filter: Gibt ein neues Array mit Elementen zurück, die die Bedingung erfüllen.
const geradeZahlen: number[] = zahlen.filter((zahl) => zahl % 2 === 0);
console.log("Gerade Zahlen:", geradeZahlen); // [2, 8, 4]

// sort: Sortiert das Array. Für Zahlen ist eine Vergleichsfunktion nötig.
// Mit [...zahlen] bleibt das ursprüngliche Array unverändert.
const aufsteigend: number[] = [...zahlen].sort((a, b) => a - b);
console.log("Aufsteigend sortiert:", aufsteigend); // [1, 2, 4, 5, 8]

const absteigend: number[] = [...zahlen].sort((a, b) => b - a);
console.log("Absteigend sortiert:", absteigend); // [8, 5, 4, 2, 1]
