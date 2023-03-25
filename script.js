const btns = document.querySelector('.botoes')
const input = document.querySelector('input')
const btnCalcular = document.querySelector('.calcular')
const btnDeletar = document.querySelector('.deletar')
const btnLimpar = document.querySelector('.limpar')

const PegarValorInput = (e)=>{
    const digito = e.target.innerText

    if(digito !== "=" && digito !== "<" && digito !== "C"){
        input.value += digito
    }
}

const calcular = ()=>{
    input.value = eval(input.value)
}

const apagarDigito = ()=>{
    const valor = input.value
    input.value = valor.slice(0,-1)
} 

const limpar = ()=>{
    input.value = ''
}

btns.addEventListener('click',PegarValorInput)
btnCalcular.addEventListener('click',calcular)
btnDeletar.addEventListener('click',apagarDigito)
btnLimpar.addEventListener('click',limpar)


