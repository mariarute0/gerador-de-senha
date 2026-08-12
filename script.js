onst senha = document.getElementById("senha");
const tamanho = document.getElementById("tamanho");
const valor = document.getElementById("valor");

const maiusculas = document.querySelectorAll("input[type='checkbox']")[0];
const minusculas = document.querySelectorAll("input[type='checkbox']")[1];
const numeros = document.querySelectorAll("input[type='checkbox']")[2];
const simbolos = document.querySelectorAll("input[type='checkbox']")[3];

const textoForca = document.querySelector(".forca strong");
const barras = document.querySelectorAll(".nivel");

const letrasMaiusculas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const letrasMinusculas = "abcdefghijklmnopqrstuvwxyz";
const numerosLista = "0123456789";
const simbolosLista = "!@#$%&*?";

function gerarSenha() {

    let caracteres = "";

    if (maiusculas.checked) caracteres += letrasMaiusculas;
    if (minusculas.checked) caracteres += letrasMinusculas;
    if (numeros.checked) caracteres += numerosLista;
    if (simbolos.checked) caracteres += simbolosLista;

    if (caracteres === "") {
        senha.value = "Selecione uma opção";
        return;
    }

    let novaSenha = "";

    for (let i = 0; i < tamanho.value; i++) {
        const indice = Math.floor(Math.random() * caracteres.length);
        novaSenha += caracteres[indice];
    }

    senha.value = novaSenha;

    atualizarForca();
}

function atualizarForca() {

    let pontos = 0;

    if (tamanho.value >= 8) pontos++;
    if (tamanho.value >= 12) pontos++;
    if (maiusculas.checked) pontos++;
    if (minusculas.checked) pontos++;
    if (numeros.checked) pontos++;
    if (simbolos.checked) pontos++;

    barras.forEach(barra => barra.classList.remove("ativo"));

    if (pontos <= 2) {
        textoForca.textContent = "Fraca";
        barras[0].classList.add("ativo");
    }

    else if (pontos <= 4) {
        textoForca.textContent = "Média";
        barras[0].classList.add("ativo");
        barras[1].classList.add("ativo");
    }

    else if (pontos <= 5) {
        textoForca.textContent = "Forte";
        barras[0].classList.add("ativo");
        barras[1].classList.add("ativo");
        barras[2].classList.add("ativo");
    }

    else {
        textoForca.textContent = "Muito Forte";
        barras.forEach(barra => barra.classList.add("ativo"));
    }

}

tamanho.addEventListener("input", () => {
    valor.textContent = tamanho.value;
    gerarSenha();
});

maiusculas.addEventListener("change", gerarSenha);
minusculas.addEventListener("change", gerarSenha);
numeros.addEventListener("change", gerarSenha);
simbolos.addEventListener("change", gerarSenha);

gerarSenha();