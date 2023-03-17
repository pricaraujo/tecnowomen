function dicionarioAjuda() {
        var questions = {
            q1: {
                question: "Como faço para adicionar uma vaga?", answear: "Para adicionar uma vaga você deve estar em um perfil de empresa e criar um formulário para a vaga do interesse da sua empresa. "
            },
            q2: {
                question: "Como faço para adicionar uma vaga?", answear: "Para se candidatar a uma vaga vocẽ deve estar fora do perfil de empresa e deve buscar na página 'Vagas Disponíveis' a vaga do seu interesse!"
            },
            q3: {
                question: "Como faço para fazer login?", answear: "Para fazer login você deve colocar seu usuário e senha, caso sua conta seja de empresa vocẽ será redirecionada a um perfil de empresa. "
            },
            q4: {
                question: "Onde vejo as empresas que sigo?", answear: "Você pode visualizar os perfis de empresas do seu interesse atravês da página 'Acompanhe quem você segue'. "
            }
        };
        var cont = document.getElementById("cont");
    
        for (var q in questions) {
      
          cont.innerHTML +=
          '<button class="accordion">'+
          questions[q].question+
          "</button>" +
          '<div class="panel">' +
            "<p>"+
            questions[q].answear+
            "</p>"
        }
    }
    
    dicionarioAjuda();

    var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
    
        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
          panel.style.display = "none";
        } else {
          panel.style.display = "block";
        }
      });
    } 
