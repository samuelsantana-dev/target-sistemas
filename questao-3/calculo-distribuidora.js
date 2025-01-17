const fs = require('fs');

function carregarFaturamento(){
    const dados = fs.readFileSync('dados.json');
    return JSON.parse(dados);
}

function menorFaturamento(faturamento){
    return Math.min(...faturamento.filter(dia => dia.valor > 0).map(dia => dia.valor));
}

function maiorFaturamento(faturamento){
    return Math.max(...faturamento.map(dia => dia.valor));
}

function mediaMensal(faturamento){
    const diasComFaturamento = faturamento.filter(dia => dia.valor > 0);
    const soma = diasComFaturamento.reduce((acc, dia) => acc + dia.valor, 0);
    return soma / diasComFaturamento.length;
}

function diasAcimaDaMedia(faturamento){
    const media = mediaMensal(faturamento);
    return faturamento.filter(dia => dia.valor > media).length;
}

function processarFaturamento(){
    const faturamento = carregarFaturamento();

    const menor = menorFaturamento(faturamento);
    const maior = maiorFaturamento(faturamento);
    const media = mediaMensal(faturamento);
    const diasAcima = diasAcimaDaMedia(faturamento, media);

    console.log(`Menor valor de faturamento: R$ ${menor}`);
    console.log(`Maior valor de faturamento: R$ ${maior}`);
    console.log(`Média mensal de faturamento: R$ ${media.toFixed(2)}`);
    console.log(`Número de dias com faturamento superior à média: ${diasAcima}`);
}

processarFaturamento()