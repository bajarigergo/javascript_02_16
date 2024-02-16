/*Hoistring függvények, változók deklarálása esetén a függvényeket és változókat bárhol 
deklarálhatjuk a függvényeknél úgy működik mintha a hatókörük tetején deklaráltuk volna*/
/* Hatókör = scope, azaz ahol elérhető*/

import { udvozles, elagazas, ciklusok } from "./fuggvenyek.js";
udvozles("Géza");

/* Változók létrehozása */
/* var let const - hatókörét jelentik */

let szoveg = " Szép nap van!";
let pentekVane = true;

//console.log("A szöveg változó típusa: " + typeof szoveg);
//console.log("A pentekvane változó típusa: " + typeof pentekVane);

/* Döntsök el a szám változórol hogy 0? páros? páratlan? */
/* három '=' jel nem csak az értéket ellenőrzi, hanem a típust is */

/* Írjuk ki 10x a konzolra hogy: ... */
