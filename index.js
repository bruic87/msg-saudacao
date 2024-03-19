let date = new Date();

let hora = date.getHours();
let min = date.getMinutes();

let saudacao;
if (hora <= 11) {
    saudacao = 'Bom dia!';
} else if (hora <= 17) {
    saudacao = 'Boa tarde!';
} else {
    saudacao = 'Boa noite!'
}

console.log(`Olá! ${saudacao}`);
console.log(`Agora são ${hora} horas e ${min} minutos.`);