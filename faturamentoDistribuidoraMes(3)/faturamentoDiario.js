var dadosMes = require('./fatura.json');

var mes = dadosMes.mes;
var faturamento_Mes = dadosMes.faturamento_diario;

function faturamentoMes(faturamentoMes, mes) {
    var maior = faturamentoMes[0];
    var menor = faturamentoMes[0];
    var todosValores = 0;
    var DiasDeFatumento = 0;

    for (let i = 0; i < faturamentoMes.length; i++) {
        if (faturamentoMes[i] < menor) {
            menor = faturamentoMes[i];
        }

        if (faturamentoMes[i] > maior) {
            maior = faturamentoMes[i];
        }

        if (faturamentoMes[i] != 0) {
            todosValores += faturamentoMes[i];
            DiasDeFatumento++;
        }
    }

    var media = todosValores / DiasDeFatumento;

    return {
        mes,
        DiaMenorFaturamento: menor,
        DiaMaiorFaturamento: maior,
        mediaFaturamento: media
    }
}

var response = faturamentoMes(faturamento_Mes, mes);

console.log(`Mês (${response.mes})
Maior faturamento do mês: ${response.DiaMaiorFaturamento}
Menor faturamento do mês: ${response.DiaMenorFaturamento}
A média do faturamento do mês foi de: ${response.mediaFaturamento} R$`)