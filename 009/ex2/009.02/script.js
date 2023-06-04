function tabuada() {
    let num =document.getElementById ('txtn')
    let tab = document.getElementById ('seltab')
    if (num.value.length == 0) {
        window.alert ('[erro]')
    } else {
        let n = Number (num.value)
        let c = 1
        tab.innerHTML = ''
        for (let c =1;c <=20; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
    
}