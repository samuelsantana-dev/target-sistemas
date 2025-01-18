function inverterString(str) {
    let stringInvertida = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
      stringInvertida += str[i];
    }
    
    return stringInvertida;
  }
  
  const entrada = "Exemplo de string";
  
  const resultado = inverterString(entrada);
  console.log("String original:", entrada);
  console.log("String invertida:", resultado);
  