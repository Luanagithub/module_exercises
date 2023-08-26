<template>
    <div style="text-align: center;">
        <img :src="img" style="width: 100px;" alt="">
        <p></p>
        <div style="width: 100px;height: 30px; border: 1px solid black; margin: auto; cursor: pointer;" id="console">{{ resultado }}</div>
        <br>
        <input v-model="campoInput" type="number" @blur="realizarOperacao(operacaoAtual)">
        <select v-model="operacaoAtual" @change="realizarOperacao(operacaoAtual)">
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
        </select>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const img = "https://static.vecteezy.com/system/resources/previews/022/480/311/non_2x/calcuolator-logo-icon-illustration-design-template-vector.jpg";

const campoInput = ref("");
const resultado = ref("");
const valoresInseridos = ref([]); // Array para armazenar os valores inseridos
const valoresParaSoma = ref([]); // Array para armazenar os valores inseridos
let somaAtiva = true;
const operacaoAtual = ref("soma"); // Operação inicial é soma

function realizarOperacao(tipo) {
    const valor = parseFloat(campoInput.value);
    if (!isNaN(valor)) {
        valoresInseridos.value.push(valor); // Armazena o valor inserido

    if (tipo === 'soma' && somaAtiva) {
        valoresParaSoma.value.push(valor); // Armazena o valor inserido apenas se a soma está ativa
        console.log("Veja o que está sendo armazenado: "+valoresParaSoma.value);
        } else {
            valoresParaSoma.value = [].concat(resultado.value+campoInput.value);
        }

        switch (tipo) {
        case 'soma':
            resultado.value = somar(valoresParaSoma.value);
            console.log(resultado.value);
            break;
        case 'subtracao':
            resultado.value = subtrair(valoresInseridos.value);
            break;
        case 'multiplicacao':
            resultado.value = multiplicar(valoresInseridos.value);
            break;
        case 'divisao':
            resultado.value = dividir(valoresInseridos.value);
            break;
        default:
            break;
        }

        campoInput.value = ""; // Limpa o campoInput após a operação
    }
}

function somar(valores) {
    somaAtiva = true;
    return valores.reduce((acc, curr) => acc + curr, 0);
}

function subtrair(valores) {
    somaAtiva = false;
    console.log("abcdefgh mensg personalizada subtrair");
    const ultimoValor = valores[valores.length - 1];
    const resultadoAtual = resultado.value;
    return resultadoAtual - ultimoValor;
}

function multiplicar(valores) {
    somaAtiva = false;
    console.log("Essa mensagem indica que você selecionou a função de multiplicar");
    const ultimoValor = valores[valores.length - 1];
    const resultadoAtual = resultado.value;
  return resultadoAtual * ultimoValor;
}

function dividir(valores) {
    somaAtiva = false;
    console.log("Essa mensagem indica que você selecionou a função de multiplicar");
    const ultimoValor = valores[valores.length - 1];
    const resultadoAtual = resultado.value;
    return resultadoAtual / ultimoValor;
}
</script>

<style scoped>
/* Estilos se necessário */
</style>