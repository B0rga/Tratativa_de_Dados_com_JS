class Pessoa{
    constructor(){
        this.arrayPessoas =[];
    }

    LerDados(){
        let pessoa = {};
        pessoa.nome = document.querySelector("#nome").value;
        pessoa.idade = Number(document.querySelector("#idade").value);
        pessoa.linguagem = document.querySelector("#linguagem").value;

        if(document.getElementsByName("option")[0].checked==true){
            pessoa.programacao = 'Gosta';
        }
        else if(document.getElementsByName("option")[1].checked==true){
            pessoa.programacao = 'Não gosta';
        }
        else{
            pessoa.programacao = '';
        }

        return pessoa;
    }

    ElementoVisivel(){
        document.querySelector("#resultado").style.visibility="visible";
    }

    LimparCampos(){
        let campos = document.querySelectorAll(".campo");
        campos.forEach((campo) => campo.value="");

        let radios = document.querySelectorAll("input[type=radio]");
        radios.forEach((radio) => radio.checked=false);
    }

    ValidarCampos(pessoa){
        if(pessoa.nome=="" || pessoa.linguagem=="" || pessoa.programacao==""){
            this.ElementoVisivel();
            document.getElementsByTagName("p")[0].innerHTML = "Preencha todos os campos!";
            document.getElementsByTagName("p")[1].innerHTML = "";
            return false;
        }
        else if(pessoa.idade>100 || pessoa.idade<1){
            this.ElementoVisivel();
            document.getElementsByTagName("p")[0].innerHTML = "Insira uma idade válida!";
            document.getElementsByTagName("p")[1].innerHTML = "";
            return false;
        }
        else{
            return true;
        }
    }

    AdicionarNaArray(pessoa){
        this.arrayPessoas.push(pessoa);
        console.log(this.arrayPessoas);
    }

    ExibirDados(pessoa){
        this.ElementoVisivel();
        document.getElementsByTagName("p")[0].innerHTML = `Olá ${pessoa.nome}, você tem ${pessoa.idade} anos e já está aprendendo ${pessoa.idade}!`;
        if(pessoa.programacao == "Gosta"){
            document.getElementsByTagName("p")[1].innerHTML = `\nQue bom que está gostando de programação! Continue estudando e você terá muito sucesso!`;
        }
        else if(pessoa.programacao == "Não gosta"){
            document.getElementsByTagName("p")[1].innerHTML = `\nQue pena que não está gostando de programação... Já tentou aprender outras linguagens?`;
        }
    }

    EnviarDados(){
        let pessoa = this.LerDados();
        if(this.ValidarCampos(pessoa)){
            this.AdicionarNaArray(pessoa);
            this.ExibirDados(pessoa);
            this.LimparCampos();
        }
    }
}

const pessoa = new Pessoa();