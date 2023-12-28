//Definindo o nome e quantidade de experiência (XP) do herói
let nome = "Eveline";
let xp = 0;
//classificando o nível do herói com base no XP
let nível;
if(xp < 1000){
    nível = "Ferro";
} else if(xp <= 2000) {
    nível = "Bronze";
} else if(xp <= 5000) {
    nível = "Prata";
} else if(xp <= 7000) {
    nível = "Ouro";
} else if(xp <= 8000) {
    nível = "Pratina";
} else if(xp <= 9000) {
    nível = "Ascendente";
} else if(xp <= 10000) {
    nível = "Imortal";
} else if(xp >=10001) {
    nível = "Radiante"
}
//Exibindo a mensagem final
console.log(`O Herói de nome ${nome} está no nível ${nível}.`)