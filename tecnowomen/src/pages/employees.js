function dicionarioVagas() {
    var employees = {
        empl01: {
            nome: "Marcela Santos", img:"", funcao: "", diferenciais: ""
        },
        empl02: {
            nome: "Taís Pereira", img:"", funcao: "", diferenciais: ""
        },
        empl03: {
            nome: "Priscila Araújo", img:"", funcao: "", diferenciais: ""
        },
        empl04: {
            nome: "Luna Matias", logo: "", funcao: "", diferenciais: ""
        }
    };
    var content = document.getElementById("content");

    for (var empl in employees) {
  
      content.innerHTML +=
  
        '<div class="smallerCard"><div class="description-container">' +
  
        '<img src="' +
  
        employees[empl].img +
  
        '"/>' +
  
        "<h4>" +
  
        employees[empl].nome +
  
        "</h4>" +
  
        '<p class="description">' +
  
        employees[empl].funcao +
  
        "</p>" +
  
        "<p>" +
  
        employees[empl].diferenciais +
  
        "</p>" +
        '<p><button class="button">' +

        "Ver vaga"

        "</button></p>"+
        
        "</div></div>";
  
    }
}

dicionarioVagas();