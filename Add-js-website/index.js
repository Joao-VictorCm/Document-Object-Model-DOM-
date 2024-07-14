// Selecionando elemntos pela TagName
document.getElementsByTagName("li")[0].style.color = "red"



// Selecionando elemntos pela ClassName
document.getElementsByClassName("btn")[0].innerHTML = "click "
document.getElementsByClassName("btn")[0].style.backgroundColor =  "aqua"
// Selecionando com qualquer tag
document.querySelector("p.randonTag").style.color = "blue"


// Selecionando varios elementos
// ducument.querySelectorAll("#list .item")[1].style.color = "red"


document.querySelector("paragrafoInicio")[0].classList.add("P1")