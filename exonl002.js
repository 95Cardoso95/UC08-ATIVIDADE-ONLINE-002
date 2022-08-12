var Participantes = ["lucas","felipe" , "camila", "lais"]

Participantes.lenght <= 100 
let DataLimite = new Date("Wed Nov 16 2022")
let DataAtual = new Date()
let idade = 18

console.log("Realize seu cadastro antes da data limite");
console.log("Data limite para o cadastro de eventos é " + DataLimite );
console.log("hoje é " + DataAtual);

if (DataAtual < DataLimite ){
    console.log(DataAtual +" evento ainda pode ser Cadastrado");
} else{
    console.log(DataAtual + " evento não pode ser mais cadstrado");
}

if(idade <= 17){
    console.log(" Cadastro não concluido, idade inferior a 18 anos ");
    console.log("sua idade é " + idade);
}else {

    console.log ("seu cadastro foi realizado com sucesso");
    console.log("ainda é possível cadastrar participantes no evento");
    console.log("tenha um ótimo evento");
    console.log("os participantes são " + Participantes);
}








