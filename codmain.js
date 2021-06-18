function imgofday(){
    var msg = window.document.getElementById('h')
    var img = window.document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()
    var minuto = data.getMinutes()
    if(minuto<10){
        msg.innerHTML = `<strong>Agora são ${hora}:0${minuto} horas.</strong>`
    }else{
        msg.innerHTML = `<strong>Agora são ${hora}:${minuto} horas.</strong>`
    }

    if(hora>=0 && hora<12){
        //bom dia
        img.src ='foto-manha.png'
        document.body.style.background = '#e2cd9f'
    }else if(hora>=12 && hora<18){
        //boa tarde
        img.src = 'foto-tarde.png'
        document.body.style.background = '#b9864f'
    }else{
        //boa noite
        img.src = 'foto-noite.png'
        document.body.style.background = '#515154'
    }
}