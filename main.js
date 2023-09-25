const form = document.querySelector("#form-valor");
const valor1att = document.querySelector("#valor1");
const valor2att = document.querySelector("#valor2");
const msgErro = document.querySelector(".error-msg");
const msgUsuario = document.querySelector("#msg-usuario");

function comparaValores(valor1, valor2) {
  return valor1 < valor2;
}

function mensagemErro() {
  msgErro.style.display = "block";
  msgErro.innerHTML = "Erro: O valor 1 precisa ser menor que o valor 2.";
}

function removoMsgErro() {
  valor1att.classList.remove("erro");
  valor2att.classList.remove("erro");
  msgUsuario.style.display = "none";
}

function addMsgErro() {
  valor1att.classList.add("erro");
  valor2att.classList.add("erro");
  msgUsuario.style.display = "none";
}

form.addEventListener("submit", function (e) {
  let eMaior = false;
  e.preventDefault();

  const valor1 = Number(document.querySelector("#valor1").value);
  const valor2 = Number(document.querySelector("#valor2").value);

  eMaior = comparaValores(valor1, valor2);
  if (eMaior) {
    msgUsuario.innerHTML = "Enviado com sucesso!";
    msgUsuario.style.display = "block";
    msgErro.style.display = "none";
  } else {
    mensagemErro();
    msgUsuario.style.display = "none";
  }
});

valor2att.addEventListener("keyup", function (e) {
  const valor1 = Number(valor1att.value);
  const valor2 = Number(e.target.value);

  if (valor2 == "" && valor1 == "") {
    msgErro.style.display = "none";
    removoMsgErro();
  } else {
    const eMaior = comparaValores(valor1, valor2);

    if (eMaior) {
      msgErro.style.display = "none";
      removoMsgErro();
    } else {
      addMsgErro();
      mensagemErro();
    }
  }
});

valor1att.addEventListener("keyup", function (e) {
  const valor1 = Number(e.target.value);
  const valor2 = Number(valor2att.value);

  if (valor2 == "") {
    msgErro.style.display = "none";
    removoMsgErro();
  } else {
    const eMaior = comparaValores(valor1, valor2);

    if (eMaior) {
      msgErro.style.display = "none";
      removoMsgErro();
    } else {
      addMsgErro();
      mensagemErro();
    }
  }
});
