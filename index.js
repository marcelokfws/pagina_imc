const form = document.querySelector('#formulario');

form.addEventListener('submit', function(e){
    e.preventDefault();
    const inputPeso = e.target.querySelector(`#peso`);
    const inputAltura = e.target.querySelector(`#altura`);
    
    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    

    if (!peso){
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura){
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura);
    const nivelImc = getNivelImc(imc);
    const pnormal = pesoNormal(altura);
    const perderpeso = perderPeso(peso,pnormal);
    
    const msg = `Seu IMC é = ${imc}, Você está com ${nivelImc}.</br>
    Seu peso ideal é até ${pnormal} kg.</br>
    Você tem que emagrecer ${perderpeso} kg.`;
    
    setResultado(msg, true);

});

function getNivelImc(imc){
    const nivel = ['Baixo Peso', 'Peso Normal', 'Sobrepeso', 'Obeso', 'SuperObeso', 'Obesidade Mórbida'];

    if (imc >=39.9){return nivel[5];}
    if (imc >=34.9){return nivel[4];}
    if (imc >=29.9){return nivel[3];}
    if (imc >=24.9){return nivel[2];}
    if (imc >=18.5){return nivel[1];}
    if (imc < 18.5){return nivel[0];}
}

function getImc(peso, altura){
    const imc = peso / altura ** 2;
    return imc.toFixed(2);
}
function pesoNormal(altura){
    const pesonormal = (altura**2) * 24.9;
    return pesonormal.toFixed(2);
}

function perderPeso(peso,pnormal){
    const perderpeso = peso-pnormal;
    return perderpeso.toFixed(2);
}

function criaP(){
    const p = document.createElement(`p`);
    return p;
    
}

function setResultado(msg, isvalid){
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = ``;

    const p = criaP();

    if (isvalid) {
        p.classList.add('paragrafo-resultado')
    }else{
        p.classList.add('bad')
    }

    p.innerHTML = msg;
    resultado.appendChild(p)


}