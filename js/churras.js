window.addEventListener("load", () => {

  const formulario = document.querySelector("#formulario");
  const quantidadeAdultos = document.querySelector("#adultos");
  const quantidadeAdultosquenaobebem = document.querySelector(
    "#adultosquenaobebem"
  );
  const quantidadeCriancas = document.querySelector("#criancas");
  const duracaoChurrasco = document.querySelector("#duracao");
  const botaoCalcular = document.querySelector("#buttoncalcular");
  const erroformulariovazio = document.querySelector("#erroformulariovazio");
  const resultado  = document.querySelector("#resultado")

  const limparerroformulario = () => {
    quantidadeAdultos.addEventListener("input", (e) => {
      erroformulariovazio.style.display = "none";
    });
    duracaoChurrasco.addEventListener("input", (e) => {
      erroformulariovazio.style.display = "none";
    });
  };

  limparerroformulario();

  formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    // console.log(quantidadeAdultos.value);

    if (!quantidadeAdultos.value || !duracaoChurrasco.value) {
      erroformulariovazio.style.display = "block";
    }

    resultado.classList.add("active")

    
    quantidadeAdultos.value = "";
    quantidadeAdultosquenaobebem.value = "";
    quantidadeCriancas.value = "";
    duracaoChurrasco.value = "";
  });
});

