const changedBr = document.querySelector(".id-br")
const changedUsa = document.querySelector(".id-usa")
const title = document.querySelector(".title")
const text = document.querySelector(".text")
const products = document.querySelector("#products")
const company = document.querySelector("#company")
const learnMore = document.querySelector(".link-section")
const signUp = document.querySelector(".menu-button")
const login = document.querySelector("#login")
let currentLang = "";

// ----- TRADUÇÃO ----
function changedIdBr() {
    currentLang = "br";
    title.textContent = `Local de Ampla Cobertura`;
    text.textContent =
        `Corridas compartilhadas: Há muito o que fazer na sua cidade, 
         e nós temos as opções de transporte para você aproveitar tudo. 
         E tudo isso está disponível diretamente no seu aplicativo.`;
    products.textContent = `Produtos`;
    company.textContent = `Empresa`;
    signUp.textContent = `Inscrever-se`;
    learnMore.textContent = `Saiba Mais`;
    login.textContent = `Entrar`;
}

function changedIdUsa() {
    currentLang = "usa";
    title.textContent = `Wide Coverage Location`;
    text.textContent =
        `Shared rides: There’s lots to do in
         your city, and we’ve got the rides
         to help you enjoy it all. And they’re
         all available right from your app.`;
    products.textContent = `Products`;
    company.textContent = `Company`;
    signUp.textContent = `Sign Up`;
    learnMore.textContent = `Learn More`;
    login.textContent = `Login`
}

// ----- ANIMAÇÃO DE TRANSIÇÃO -----
function fadeContent(callback) {
    document.body.style.transition = "opacity 0.7s";
    document.body.style.opacity = 0;

    setTimeout(() => {
        callback(); // muda o idioma
        document.body.style.opacity = 1;
    }, 700);
}


changedBr.addEventListener('click', () => fadeContent(changedIdBr));
changedUsa.addEventListener('click', () => fadeContent(changedIdUsa));