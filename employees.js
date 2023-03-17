function dicionarioVagas() {
    var employees = {
        empl01: {
            nome: "Marcela Santos", img:"fotomulher.jpg", funcao: "Dev FrontEnd Jr", diferenciais: "Trabalho em equipe, escrita profisisonal e design gráfico!"
        },
        empl02: {
            nome: "Taís Pereira", img:"fotomulher.jpg", funcao: "Estagiária UI/UX", diferenciais: "Habilidade com comunicação e trabalho em equipe, aprendo rápido!"
        },
        empl03: {
            nome: "Priscila Araújo", img:"https://scontent.fssa2-1.fna.fbcdn.net/v/t1.6435-1/120869480_1223026061411402_2298876549348952871_n.jpg?stp=dst-jpg_p320x320&_nc_cat=110&ccb=1-7&_nc_sid=7206a8&_nc_eui2=AeE-n3vU6if0rOhZWv6w0dBYp7QKkZg-hdqntAqRmD6F2iAITmPJGxCE8QTmmJxwB8ve-UttFu2yM60_abandY-3&_nc_ohc=nha_frNFcikAX-9JHfR&_nc_ht=scontent.fssa2-1.fna&oh=00_AfAwZupOAabmaG862Nznl-foAaEjvd1WPuXztGyck9uTQQ&oe=643AE78D", funcao: "Dev Full Stack Jr", diferenciais: "Escrita, inglês fluente, comunicação e trabalho em equipe"
        },
        empl04: {
            nome: "Luna Matias", img: "fotomulher.jpg", funcao: "Dev Backend Senior", diferenciais: "Habilidade com comunicação e trabalho em equipe, aprendo rápido!"
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

      "<details>" +

      "<summary>" +

     "Vaga que procuro:" +

      "</summary>" +

      '<p class="description">' +

      employees[empl].funcao +

      "</p>" +
      "</details>" +
      "<details>" +

      "<summary>" +

     "Soft Skills" +
      "</summary>" +

      '<p class="description">' +

      employees[empl].diferenciais +

      "</p>" +
      "</details>" +

      '<p><button onclick="alertFunction()" class="button">' +

      "Quero Contratá-la!"

      "</button></p>" +
      
      "</div></div>";
  
    }
}

dicionarioVagas();

function alertFunction(){
    alert("Esta página virá na versão 2.0!")
  }
