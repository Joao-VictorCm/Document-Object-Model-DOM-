// Selecionando elemntos pela TagName
document.getElementsByTagName("li")[0].setAttribute()



// Selecionando elemntos pela ClassName
document.getElementsByClassName("btn")[0].innerHTML = "<em>click</em> "
document.getElementsByClassName("btn")[0].style.backgroundColor =  "aqua"
// Selecionando com qualquer tag
document.querySelector("p.randonTag").style.color = "blue"


// Selecionando varios elementos
// ducument.querySelectorAll("#list .item")[1].style.color = "red"



// Adicionando e removendo classes
// document.querySelector("paragrafoInicio")[0].classList.add("P1")
// document.querySelector("paragrafoInicio")[0].classList.remove("P1")

function alterarClass(){
   const h1 = document.getElementById("Ola").classList
   h1.add("rem")
}

alterarClass()