function topNavbar() {
    var x = document.getElementById("topNav");
    if (x.className === "topnav") {
      x.className += "responsive";
    } else {
      x.className = "topnav";
    }
  } 

  function alertFunction(){
    alert("Esta página virá na versão 2.0!")
  }
