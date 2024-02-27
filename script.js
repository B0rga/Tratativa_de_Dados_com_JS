let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let linguagem = document.querySelector("#linguagem");
let sim = document.querySelector("#yes")
let nao = document.querySelector("#no")
let res = document.querySelector("#res");
let res2 = document.querySelector("#res2");
let resultado = document.querySelector("#resultado");

function Enviar(){  
    
    res.innerText = "";
    res2.innerText = "";

    if(nome.value == '' || idade.value == '' || linguagem.value == ''){
        document.querySelector("#resultado").style.visibility = "visible";
        res.innerText = "Preencha todos os campos!";
        
    }
    else if(idade.value>120 || idade.value<1){
        document.querySelector("#resultado").style.visibility = "visible";
        res.innerText = "Insira uma idade válida!";
    }
    else{
        if(sim.checked == true){
            resultado.style.visibility = "visible";
            res.innerText = `Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`;
            res2.innerText = `\nQue bom que está gostando! Continue estudando e você terá muito sucesso.`;

            nome.value='';
            idade.value = '';
            linguagem.value = '';
            sim.checked = false;
        }
        else if(nao.checked == true){
            resultado.style.visibility = "visible";
            res.innerText = `Olá ${nome.value}, você tem ${idade.value} anos e já está aprendendo ${linguagem.value}!`;
            res2.innerText = `\nQue pena que não está gostando... Já tentou aprender outras linguagens?`;
            
            nome.value='';
            idade.value = '';
            linguagem.value = '';
            no.checked = false;
        }
        else{
            resultado.style.visibility = "visible";
            res.innerText = "Preencha todos os campos!";
        }
    }    
}