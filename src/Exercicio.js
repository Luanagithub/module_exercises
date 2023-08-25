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

//Exemplo1

console.log(Alunos);
console.log("------------")
//---------------------------------------------------

const AlunosPassados= Alunos.filter((item)=> {
    return item.nota >=7;
});

console.log(AlunosPassados);
