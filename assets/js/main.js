// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// 0.21 € al km , 20% per i minorenni, 40% per gli over 65

// chiedere numero km da percorrere

const km_to_go = parseInt(prompt("inserire i km da percorrere"));

console.log(`km inseriti: ${km_to_go}`);

// chiedere età utente

const user_age = parseInt(prompt("inserire l' età"));

console.log(`età inserita: ${user_age}`);

// prezzo per km 0.21$

const full_price = (km_to_go * 0.21);

console.log(`prezzo pieno: ${full_price}`);

// se minorenne sconto 20%
// se over 65 sconto 40%

// imposto lo sconto a zero
let discount = 0; 

if (user_age < 18) {
    discount = ((full_price * 20) / 100);
    // calcolo lo sconto per minorenni
    console.log(`sconto minorenni ottenuto: ${discount}`);
} else if (user_age > 65) {
    discount = ((full_price * 40) / 100);
    // calcolo lo sconto per over 65
    console.log(`sconto over 65 ottenuto: ${discount}`);
}

// calcolo costo finale biglietto
const final_price = (full_price - discount);

console.log(`prezzo biglietto calcolato: ${final_price.toFixed(2)}`);

// scrivo in html il costo biglietto

document.getElementById('ticket_price').innerHTML = `Il Prezzo del Biglietto Calcolato è: ${final_price.toFixed(2)} &euro;`