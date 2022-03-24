// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// 0.21 € al km , 20% per i minorenni, 40% per gli over 65

// chiedere numero km da percorrere

const km_to_go = parseInt(prompt("inserire i km da percorrere"));

console.log(`km inseriti: ${km_to_go}`);

// chiedere età utente

const user_age = parseInt(prompt("inserire l' età"));

console.log(`età inserita: ${user_age}`);

// prezzo per km



// se minorenne sconto 20%

// se over 65 sconto 40%