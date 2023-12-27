let soma = somaTotal(5, 1)
let niveis = [
    ["Ferro", "10"],
    ["Bronze", "20"],
    ["Prata", "50"],
    ["Ouro", "80"],
    ["Diamante", "90"],
    ["Lendário", "100"],
    ["Imortal", "101"],
]

if (soma <= 10) {
    console.log(`O Herói tem de saldo de ${niveis[0][1]} está no nível de ${niveis[0][0]}`)
} else if (soma >= 11 && soma <= 20) {
    console.log(`O Herói tem de saldo de ${niveis[1][1]} está no nível de ${niveis[1][0]}`)
} else if (soma >= 21 && soma <= 50) {
    console.log(`O Herói tem de saldo de ${niveis[2][1]} está no nível de ${niveis[2][0]}`)
} else if (soma >= 51 && soma <= 80) {
    console.log(`O Herói tem de saldo de ${niveis[3][1]} está no nível de ${niveis[3][0]}`)
} else if (soma >= 81 && soma <= 90) {
    console.log(`O Herói tem de saldo de ${niveis[4][1]} está no nível de ${niveis[4][0]}`)
} else if (soma >= 91 && soma <= 100) {
    console.log(`O Herói tem de saldo de ${niveis[5][1]} está no nível de ${niveis[5][0]}`)
} else if (soma >= 101) {
    console.log(`O Herói tem de saldo de ${niveis[6][1]} está no nível de ${niveis[6][0]}`)
}


function somaTotal(numA, numB) {
    return numA + numB
}

console.log("Saldo total: " + soma)