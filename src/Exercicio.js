class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const Alunos = [];

//função que adc ao array
function AdicionarAluno(nome, nota) {
        const aluno = new Aluno(nome, nota);
        Alunos.push(aluno);
    }

AdicionarAluno("Noah", 8);
AdicionarAluno("Liz", 10);
AdicionarAluno("Alberto", 5);
AdicionarAluno("Bianca", 5);
<<<<<<< HEAD

//Exemplo1

console.log(Alunos);
console.log("------------")
//---------------------------------------------------

const AlunosPassados= Alunos.filter((item)=> {
    return item.nota >=7;
=======


//Exemplo1
console.log(Alunos);
console.log("------------")
//---------------------------------------------------

const AlunosPassados= Alunos.filter((item)=> {
    return item.nota >=7;
    
>>>>>>> 74cc7ef33bc1d1416226faa41b9f084c2b686a4c
});

console.log(AlunosPassados);
