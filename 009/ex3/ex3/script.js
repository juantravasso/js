function contar() {
    var ini = document.getElementById ('txti')
    var pas = document.getElementById ('txtp')
    var fim = document.getElementById ('txtf')
    var res = document.getElementById ('res')
    if(ini.value.length == 0 || pas.value.length == 0 || fim.value.length == 0){
        window.alert ('[ERRO]')
    } else {
        res.innerHTML = 'contando:' 
        var i = (Number(ini.value))
        var p = (Number(pas.value))
        var f = (Number(fim.value))
    if (i < f) {
        for (c = i; c <= f; c += p) {
            res.innerHTML += `${c} \u{1F449}`
        }
        
        } else {
            for (var c = i; c >= f; c-=p)
            res.innerHTML += `${c} \u{1F449}`
        }
        res.innerHTML += `\u{1F3C1}`
    }
}