console.log("=== CONDICIONAIS 2 ===");

console.log("tem idade aqui?", idade);

if(idade >= 0 && idade < 13) {
  console.log(idade, "é criança");
} else if(idade >= 13 && idade < 18) {
  console.log(idade, "é adolescente");
} else if(idade >= 18 && idade < 65) {
  console.log(idade, "é adulto");
} else if(idade >= 65) {
  console.log(idade, "é idoso");
} else {
  console.log("eita nem nasceu!");
}
