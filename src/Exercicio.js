class Aluno {
    constructor(nome, nota) {
        this.nome = nome;
        this.nota = nota;
    }
}

const Alunos = [];

//função que adc ao array
function AdicionarAluno(nome, nota) {
    if (nota >= 6) {
        const aluno = new Aluno(nome, nota);
        Alunos.push(aluno);
    }
}

AdicionarAluno("Noah", 8);
AdicionarAluno("Liz", 10);

//Exemplo1
console.log(Alunos);

//Exemplo2
for (const aluno of Alunos) {
    console.log(`Nome: ${aluno.nome}, Nota: ${aluno.nota}`);
}
//Exemplo3
console.table(Alunos);