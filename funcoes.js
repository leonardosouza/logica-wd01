function recebe_numero_do_usuario() {
    return parseFloat(prompt(texto).replace(",",".").replace("o","0"));
}
function transforma_decimal_em_texto() {
    return decimal.toFixed(2).replace(".",",");
}