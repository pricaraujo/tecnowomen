function dicionarioVagas() {
    var jobOffers = {
        jobOffer02: {
            nome: "Estagiário FrontEnd", logo:"logotipoempresa.png", descricao: "Conhecimentos básicos de JavaScript, Css e HTML. Conhecimento básico de GIT e metodologias ágeis.", diferenciais: "Cursando gradução de tecnologia e inglês intermediário."
        },
        jobOffer03: {
            nome: "Desenvolvedor Pleno", logo:"logotipoempresa.png", descricao: "Conhecimentos sólidos em Python, desenvolvimento de backend, Docker, AWS e APIRest.", diferenciais: "Experiência de ao menos 2 anos com Python e desenvolvimento de software. Conhecimento de SCRUM e inglês intermediário."
        },
        jobOffer04: {
            nome: "Desenvolvedor FrontEnd Sênior", logo:"logotipoempresa.png", descricao: "Desenvolvedora com conhecimento em UI/UX, Reactjs e Design Gráfico", diferenciais: "Experiência de ao menos 2 anos no mercado e inglês intermediário."
        },
        jobOffer05: {
            nome: "Software Engineer", logo: "logotipoempresa.png", descricao: "Desenvolvedora com formação em Engenharia de Software e projeção de projetos na área de desenvolvimento.", diferenciais: "Inglês avançado e conhecimento de metodologias ágeis."
        }
    };
    var content = document.getElementById("content");

    for (var jobOffer in jobOffers) {
  
      content.innerHTML +=
  
      '<div class="smallerCard"><div class="description-container">' +
  
      '<img src="' +

      jobOffers[jobOffer].logo +

      '"/>' +

      "<h4>" +

      jobOffers[jobOffer].nome +

      "</h4>" +

      "<details>" +

      "<summary>" +

     "Descrição da vaga" +

      "</summary>" +

      '<p class="description">' +

      jobOffers[jobOffer].descricao +

      "</p>" +
      "</details>" +
      "<details>" +

      "<summary>" +

     "Diferenciais:" +
      "</summary>" +

      '<p class="description">' +

      jobOffers[jobOffer].diferenciais +

      "</p>" +
      "</details>" +

      '<p><button onclick="alertFunction()" class="button">' +

      "Ver vaga"

      "</button></p>" +
      
      "</div></div>";
  
    }
}

dicionarioVagas();

function alertFunction(){
    alert("Esta página virá na versão 2.0!")
  }
