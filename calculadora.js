// Criando o Body
const body = document.body;
const div = document.createElement("div")
const divGeral = document.createElement("div")

const h1 = document.createElement("h1")
h1.textContent = "Calculadora"
body.appendChild(h1)

body.appendChild(div)
const input = document.createElement("input")
input.setAttribute("type","number")
input.placeholder = "Insira Um numero"
div.appendChild(input)


const input2 = document.createElement("input")
input2.setAttribute("type","number")
input2.placeholder = "Insira outro Numero"
div.appendChild(input2)


const bottunAdiciona = document.createElement("button")
bottunAdiciona.textContent= "+";

const bottun = document.createElement("button")
bottun.textContent = "-";



const bottunMultiplica = document.createElement("button")
bottunMultiplica.textContent = "*";


const bottunDividir = document.createElement("button")
bottunDividir.textContent = "/";

divGeral.appendChild(bottun)
divGeral.appendChild(bottunAdiciona)
divGeral.appendChild(bottunDividir)
divGeral.appendChild(bottunMultiplica)
body.appendChild(divGeral)

h1.style.color ="white"
body.style.backgroundColor = "black"
body.style.display = "flex"
body.style.justifyContent = "center"
body.style.alignItems = "center"
body.style.height = "90vh"
body.style.flexDirection = "column"

bottun.style.backgroundColor ="red"
bottunAdiciona.style.backgroundColor = "green"
bottunDividir.style.backgroundColor ="purple"
bottunMultiplica.style.backgroundColor = "yellow"

input.style.backgroundColor ="beige"
input2.style.backgroundColor = "beige"



function soma (){
  let num1 = Number(input.value)
  let num2 = Number(input2.value)
  let soma = (num1 + num2).toFixed(2);
 
  console.log(soma)    
  alert("O Resultado é " + soma)
  
}
bottunAdiciona.addEventListener("click",soma)

function diminuir (){
  let num1 = Number(input.value)
  let num2 = Number(input2.value)
  let diminui = (num1 - num2).toFixed(2);
 
  console.log(diminui)    
  alert("O Resultado é " + diminui)
  
}
bottun.addEventListener("click",diminuir)

function multiplicar (){
  let num1 = Number(input.value)
  let num2 = Number(input2.value)
  let multiplica =  (num1 * num2).toFixed(2)
  
  console.log(multiplica)    
  alert("O Resultado é " + multiplica)
  
}
bottunMultiplica.addEventListener("click", multiplicar)

function dividir (){
  let num1 = Number(input.value)
  let num2 = Number(input2.value)
  let dividi = (num1 / num2).toFixed(2);
 
  console.log(dividi)    
  alert("O Resultado é " + dividi)
  
}
bottunDividir.addEventListener("click",dividir)
