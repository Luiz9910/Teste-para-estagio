function InverterCaractere(caractere) {
    var separarCaractere = caractere.split("")
    var total = [];

    for (let i = separarCaractere.length - 1; i >= 0; i--) {
        total.push(separarCaractere[i]);
    }

    return total.join("");
}

var nome = "Luiz"
console.log(`palavra normal: ${nome}
O palavra digitado fica no reverso assim: ` + InverterCaractere(nome));