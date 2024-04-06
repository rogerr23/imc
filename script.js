function calcularIMC(){
   

    // const - uma constante /  um valor que nao pode ser modificado / que o seu nao pode ser mudado
    // let - protege o nome da variavel e nao pode ser recriada

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let resultado = document.querySelector('#result');


    if(peso != '' && altura != ''){

    let imc = peso / (altura*altura);

    if(imc <= 18.5){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está com magreza!</h3>`;
    }

    else if(imc >= 18.6 && imc < 25){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está normal!</h3>`
    }

    else if(imc >= 25 && imc < 30){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está sobrepeso!</h3>`
    }

    else if(imc >= 30 && imc < 35){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está com obesidade!</h3>`
    }

    else if(imc >= 35 && imc < 40){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está com obesidade grave, procure um médico!</h3>`
    }

    else if(imc > 39.5){
        resultado.innerHTML = `<h3> Seu IMC é ${imc.toFixed(1)} \n Você está com obesidade grave 2, procure um médico!</h3>`
    }
    //alert(imc.toFixed(1));

    //Escrevendo um conteudo HTML
    //resultado.innerHTML = `<h3> Seu IMC ficou ${imc.toFixed(1)}</h3>`;


    }
    else{
        alert('Preencha todos os campos!')
    }
}