function dicionarioAjuda() {
        var questions = {
            q1: {
                question: "Como faço para adicionar uma vaga?", answear: "Para adicionar uma vaga você deve estar em um perfil de empresa e criar no formulário a "
            },
            q2: {
                question: "Como faço para adicionar uma vaga?", answear: "Para adicionar uma vaga você deve estar em um perfil de empresa e criar no formulário a "
            },
            q3: {
                question: "Como faço para me cadastrar?", answear: "Para adicionar uma vaga você deve estar em um perfil de empresa e criar no formulário a "
            },
            q4: {
                question: "Onde vejo as empresas que sigo?", answear: "Para adicionar uma vaga você deve estar em um perfil de empresa e criar no formulário a "
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

