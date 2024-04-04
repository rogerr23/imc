function calcularIMC(){
   

    // const - uma constante /  um valor que nao pode ser modificado / que o seu nao pode ser mudado
    // let - protege o nome da variavel e nao pode ser recriada

    let peso = document.querySelector('#peso').value;
    let altura = document.querySelector('#altura').value;
    let resultado = document.querySelector('#result');


    if(peso != '' && altura != ''){

    let imc = peso / (altura*altura);

    //alert(imc.toFixed(1));

    //Escrevendo um conteudo HTML
    resultado.innerHTML = `<h3> Seu IMC ficou ${imc.toFixed(1)}</h3>`;


    }
    else{
        alert('Preencha todos os campos!')
    }
}