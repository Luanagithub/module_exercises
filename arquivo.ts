function Multiplicar(x: number, y: number): number {
    return x * y;
}

console.log(Multiplicar(3, 6));

function Saudacao(nome: string): string {
    return "Olá " + nome;
    // ou return `Olá ${nome}`;
}

//tsc arquivo.ts