let nomeDoHeroi = "Jazz";
let exp = 12000;
let rank = "";

if (exp <= 1000) {
    rank = "Ferro";
} else if (exp <= 2000) {
    rank = "Bronze";
} else if (exp <= 6000) {
    rank = "Prata";
} else if (exp <= 7000) {
    rank = "Ouro";
} else if (exp <= 8000) {
    rank = "Platina";
} else if (exp <= 9000) {
    rank = "Ascendente";
} else if (exp <= 10000) {
    rank = "Imortal";
} else {
    rank = "Radiante";
}
console.log("O herói " + nomeDoHeroi + " está no rank " + rank);
