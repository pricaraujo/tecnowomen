function dicionarioEmpresas() {
    var business = {
        b1: {
            nome: "FinancialTech", logo:"logotipoempresa.png", descricao: "Somos uma empresa de fintech que utiliza das tecnologias mais atuais do mercado de software bancário", diferenciais: "Procuramos Devs que possam agregar a equipe com conhecimento e criatividade!"
        },
        b2: {
            nome: "WebDEV", logo:"logotipoempresa.png", descricao: "Somos uma empresa de desenvolvimento de websites que se destaca no mercado pela flexibilidade e qualidade no serviço entregue!", diferenciais: "Procuramos Devs Fullstack e FrontEnd, com enfoque em javascript, Reactjs e Nodejs"
        },
        b3: {
            nome: "Programaria", logo:"data:image/png;base64,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", descricao: "Empoderar mulheres através da tecnologia diminuindo o gap de gênero no mercado de trabalho.É isso que fazemos.", diferenciais: "Oferecemos cursos de capacitação para diversas mulheres no Brasil! Buscamos instrutoras, monitoras e consultoras!"
        },
        b4: {
            nome: "CloudTech", logo: "logotipoempresa.png", descricao: "Somos uma empresa de tecnologia que aplica desenvolvimento em nuvem em diversos setores.", diferenciais: "Procuramos por Cloud Engineers e Managers de todo o Brasil!"
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
  
        "<details>" +
  
        "<summary>" +
  
       "Descrição" +
  
        "</summary>" +
  
        '<p class="description">' +
  
        business[b].descricao +
  
        "</p>" +
        "</details>" +
        "<details>" +
  
        "<summary>" +
  
       "O que procura?" +
        "</summary>" +
  
        '<p class="description">' +
  
        business[b].diferenciais +
  
        "</p>" +
        "</details>" +

        '<p><button onclick="alertFunction()" class="button">' +

        "Ver empresa"

        "</button></p>" +
        
        "</div></div>";
  
    }
}

dicionarioEmpresas();

function alertFunction(){
    alert("Esta página virá na versão 2.0!")
  }
