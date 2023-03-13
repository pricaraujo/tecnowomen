function dicionarioEmpresas() {
    var business = {
        b1: {
            nome: "Empresa X", logo:"", descricao: "", diferenciais: ""
        },
        b2: {
            nome: "Empresa Y", logo:"", descricao: "", diferenciais: ""
        },
        b3: {
            nome: "Empresa A", logo:"", descricao: "", diferenciais: ""
        },
        b4: {
            nome: "Empresa B", logo: "", descricao: "", diferenciais: ""
        }
    };
    var conteudo = document.getElementById("conteudo");

    for (var b in business) {
  
      conteudo.innerHTML +=
  
      '<div class="smallerCard"><div class="description-container">' +
  
        '<img src="' +
  
        business[b].logo +
  
        '"/>' +
  
        "<h4>" +
  
        business[b].nome +
  
        "</h4>" +
  
        '<p class="description">' +
  
        business[b].descricao +
  
        "</p>" +
        
        "<p>"+
  
        business[b].diferenciais +

        "</p>" +

        '<p><button class="button">' +

        "Ver empresa"

        "</button></p>" +
        
        "</div></div>";
  
    }
}

dicionarioEmpresas();