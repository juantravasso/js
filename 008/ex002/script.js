function Verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById ('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 ||Number(fano.value) > ano){
        window.alert ('[ERRO]Verifique os dados')
    } else {
        var fsex = document.getElementsByName ('radsex')
        var time = document.getElementsByName ('radtim')
        var idade = ano - Number(fano.value)
        var genero = ''
        var tim = ''
        var img = document.createElement('img')
        img.setAttribute ('id', 'foto')

        if (fsex[0].checked){
            genero = 'homem'
            if (idade >=0 && idade <3){
                //bebe
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 16){
                //crianca
                img.setAttribute('src', 'menino.jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'homem.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idoso.jpg')
            }
        } else {
            genero = 'mulher'
            if (idade >=0 && idade <3){
                //bebe
                img.setAttribute('src', 'bebe.jpg')
            } else if (idade < 16){
                //crianca
                img.setAttribute('src', 'menina (1).jpg')
            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'mulher.jpg')
            } else {
                //idoso
                img.setAttribute('src', 'idosa.jpg')
            }
        }

        if (time[0].checked){
            tim = 'tricolor'
        } else if (time[1].checked){
            tim = 'flamenguista'
        }else if (time[2].checked){
            tim = 'vascaino'
        }else {
            tim = 'botafoguense'
        }
        
        res.style.textAlign = 'center'
        res.innerHTML = `detectamos ${tim} ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}