//STAMPA ID NEL FORM
function getId(id) {
  document.getElementById("valore").value += id;
}

//CALCOLA
function risultato() {
  document.getElementById("valore").value = eval(
    document.getElementById("valore").value
  );
}

//CANCELLA TUTTO (SVUOTA FORM)
function cancella() {
  document.getElementById("valore").value = "";
}

//BACKSPACE - CALCELLA ULTIMO NUMERO
function cancellaUltimo() {
  var elimina = document.getElementById("valore").value.split("");

  elimina.pop();

  document.getElementById("valore").value = elimina.toString();
  document.getElementById("valore").value = elimina.join("");
}
