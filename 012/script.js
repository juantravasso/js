let num =  document.querySelector('input#fnum')
let lista = document.querySelector('select#flista')
let res = document.querySelector('div#res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 400){
        return true
    }else{
        return false
    }
}


function Adicionar() {
    if (isNumero(num.value)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor ${num.value} adicionado`
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('ERRO')
    }
    num.value = ''
    num.focus()
}

function Finalizar(){
    if (valores.length == 0) {
        window.alert ('Adicione um valor')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        for(let pos in valores) {
            soma += valores[pos]
            if(valores[pos] > maior)
                maior = valores[pos]
            if (valores [pos] < menor){
                menor = valores [pos]
            }
        }
        media = soma / total
        res.innerHTML = ''
        res.innerHTML += `<p>temos ${total} despesas</p>`
        res.innerHTML += `<p>o maior valor é R$${maior}</p>`
        res.innerHTML += `<p>o menor valor é R$${menor}</p>`
        res.innerHTML += `<p>o valor da despesa total é de R$${soma}</p>`
        res.innerHTML += `<p>a media dos valores é R$${media}</p>`
    }
}