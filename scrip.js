function verificar() {
    //pegar o data atual
    //pegar o ano
    //ja sei idade
    //indentificar o sexo e jogar no genero
    //ja sei genero
    //estrurura de condiçao para exibir a foto
    //se for homem:
        //se idade ...src
    //se for mulher:
        //se idade...src

    //resposta = genero de idade anos
    //exibir img


    const data = new Date();
    const ano = data.getFullYear();
    const txtnasc = document.querySelector('input#nasc');
    const idade = ano - Number(txtnasc.value);

    if (idade < 0 || idade > ano) {
        alert('[ERRO:] Idade inválida !')
        
    } else {
    let sex = document.querySelectorAll('input[name = "sex" ');
    let genero = '';
    const img = document.createElement('img');
    img.setAttribute('id', 'foto');
    

        if (sex[0].checked) {
            genero = 'Homem';
            if (idade > 0 && idade < 13) {
                img.setAttribute( 'src', 'img/criançahomem.png');
            } else if (idade < 24) {
                img.setAttribute( 'src', 'img/jovemhomem.png');
            } else if ( idade < 60) {
                img.setAttribute( 'src', 'img/adultohomem.png');
            } else if (idade < 110) {
                img.setAttribute( 'src', 'img/idosohomem.png');
            } else {
                img.setAttribute( 'src', 'img/caixao.png');
            }
        } else {
            genero = 'Mulher';
            if (idade > 0 && idade < 13) {
                img.setAttribute( 'src', 'img/criançamulher.png');
            } else if (idade < 24) {
                img.setAttribute( 'src', 'img/jovemmulher.png');
            } else if ( idade < 60) {
                img.setAttribute( 'src', 'img/adultomulher.png');
            } else if (idade < 110) {
                img.setAttribute( 'src', 'img/idosamulher.png');
            } else {
                img.setAttribute( 'src', 'img/caixao.png');
            }
        
    }

    const resposta = document.querySelector('div#res');
    resposta.innerHTML = `Dectamos: <strong>${genero}<b> com <strong>${idade}<b> anos`;
    res.appendChild(img);

    }

    
}

const btn = document.querySelector('button#botao');
btn.addEventListener('click', verificar);
