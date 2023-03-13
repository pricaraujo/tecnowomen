function dicionarioVagas() {
    var jobOffers = {
        jobOffer02: {
            nome: "Estagiário", logo:"", descricao: "", diferenciais: ""
        },
        jobOffer03: {
            nome: "Desenvolvedor Pleno", logo:"", descricao: "", diferenciais: ""
        },
        jobOffer04: {
            nome: "Desenvolvedor Sênior", logo:"", descricao: "", diferenciais: ""
        },
        jobOffer05: {
            nome: "Software Engineer", logo: "", descricao: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa", diferenciais: ""
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
  
        '<p class="description">' +
  
        jobOffers[jobOffer].descricao +
  
        "</p>" +
  
        "<p>" +
  
        jobOffers[jobOffer].diferenciais +
  
        "</p>" +
        '<p><button class="button">' +

        "Ver vaga"

        "</button></p>"+
        
        "</div></div>";
  
    }
}

dicionarioVagas();