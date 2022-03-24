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
  const resultado = document.querySelector("#resultado");

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
      return;
    }

    const adultos = quantidadeAdultos.value;
    const adultossemalcool = quantidadeAdultosquenaobebem.value;
    const criancas = quantidadeCriancas.value;
    const duracao = duracaoChurrasco.value;

    const carnePorPessoa = (duracao) => {
      return duracao >= 4 ? 650 : 400;
    };

    const cervejaPorPessoa = (duracao) => {
      return duracao >= 4 ? 2000 : 1200;
    };

    const bebidaPorPessoa = (duracao) => {
      return duracao >= 4 ? 1500 : 1000;
    };

    const quantidadeTotalCarne =
      carnePorPessoa(duracao) * adultos +
      (carnePorPessoa(duracao) / 2) * criancas;

    const quantidadeTotalCerveja = cervejaPorPessoa(duracao) * adultos;

    const quantidadeTotalBebida =
      bebidaPorPessoa(duracao) * adultos +
      (bebidaPorPessoa(duracao) / 2) * criancas;

    console.log(quantidadeTotalCarne);
    console.log(quantidadeTotalCerveja);
    console.log(quantidadeTotalBebida);

    const totalCarne = document.createElement("div");
    totalCarne.classList.add("carne");
    totalCarne.insertAdjacentHTML(
      "beforeend",
      `${quantidadeTotalCarne / 1000} Kg de carne`
    );

    const totalCerveja = document.createElement("div");
    totalCerveja.classList.add("cerveja");
    totalCerveja.insertAdjacentHTML(
      "beforeend",
      `${Math.ceil(quantidadeTotalCerveja / 350)} latas de cerveja`
    );

    const totalRefriAgua = document.createElement("div");
    totalRefriAgua.classList.add("refriagua");
    totalRefriAgua.insertAdjacentHTML(
      "beforeend",
      `${Math.ceil(quantidadeTotalBebida / 2000)} garrafas de refrigerante`
    );

    const botaoVoltar = document.createElement("div");
    botaoVoltar.classList.add(
      "btn",
      "btn-primary",
      "btn-lg",
      "mx-auto",
      "mt-3"
    );
    botaoVoltar.setAttribute("type", "submit");
    botaoVoltar.setAttribute("id", "botaovoltar");
    botaoVoltar.insertAdjacentHTML("beforeend", "Voltar");

    resultado.appendChild(totalCarne);
    resultado.appendChild(totalCerveja);
    resultado.appendChild(totalRefriAgua);
    resultado.appendChild(botaoVoltar);

    resultado.classList.add("active");

    botaoVoltar.addEventListener("click", (e) => {
      resultado.innerText = "";
      resultado.classList.remove("active");
      console.log("oi");
    });

    quantidadeAdultos.value = "";
    quantidadeAdultosquenaobebem.value = "";
    quantidadeCriancas.value = "";
    duracaoChurrasco.value = "";
  });
});
