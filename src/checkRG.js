/**
 * Validar RG
 * Funciona apenas para RG de São Paulo e Rio de Janeiro
 * ou que se encaixe no padrão de 7 dígitos o ultimo digito o verificador.
 * Mais informações sobre isso [clique aqui](https://vocesa.abril.com.br/coluna/guru/da-para-ter-um-rg-diferente-em-cada-estado/).
 * @param {string} rg
 * @returns {boolean} result
 */
function checkRG(rg) {
  console.log("RG: ", rg);
  let digits = rg.split("");
  console.log("Quant. de digitos do RG: ", digits.length);
  let numberDigits = digits.length - 1; // Sem o digito verificador
  console.log("Quant. de digitos do RG - Sem o verificador: ", numberDigits);
  let validationNumbers = [];

  // Preencher o Array de números validadores com tamanho do RG
  console.log("Preenchendo Array:");
  let countValidator = 9;
  for (let index = 0; index < numberDigits; index++) {
    console.log(countValidator);
    validationNumbers[index] = countValidator;
    countValidator--;
  }
  validationNumbers = validationNumbers.reverse();
  console.log("Array de número validadores:\n", validationNumbers);

  // inverter array

  // Realizar a multiplicação dos dígitos com números de validação
  let sumResult = 0;
  for (let index = 0; index < numberDigits; index++) {
    console.log(
      `${digits[index] * validationNumbers[index]} = ${digits[index]} x ${
        validationNumbers[index]
      }`
    );
    sumResult = sumResult + digits[index] * validationNumbers[index];
  }
  console.log("Soma total = ", sumResult);

  // Descobrimos o resto da divisão
  let rest = sumResult % 11;
  console.log(`Resto ${rest} = ${sumResult} % 11`);

  // Calculado o digito Verificador
  console.log(`Calculando número verificador\n11 - ${rest}`);
  let calculatedCheckDigit = 11 - rest;
  console.log("Número = ", calculatedCheckDigit);

  let arrayLength = digits.length - 1;

  // Validando se o digito calculado é igual o original
  console.log(`${calculatedCheckDigit} == ${digits[arrayLength]}`);
  return calculatedCheckDigit == digits[arrayLength];
}

const inputRG = process.argv[2];
console.log(checkRG(inputRG) ? "RG Válido" : "RG Invalido");
