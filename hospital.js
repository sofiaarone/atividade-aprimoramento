// hospital.js

// Classe Fila
class Fila {
    constructor() {
        this.itens = [];
    }

    // Adiciona um elemento ao final da fila
    enfileirar(elemento) {
        this.itens.push(elemento);
    }

    // Remove o primeiro elemento da fila
    desenfileirar() {
        return this.itens.shift();
    }

    // Retorna o primeiro da fila sem remover
    frente() {
        return this.itens[0];
    }

    // Verifica se a fila está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Retorna todos os itens da fila
    imprimir() {
        return this.itens;
    }
}

// Classe Pilha
class Pilha {
    constructor() {
        this.itens = [];
    }

    // Adiciona um elemento ao topo da pilha
    empilhar(elemento) {
        this.itens.push(elemento);
    }

    // Remove o elemento do topo da pilha
    desempilhar() {
        return this.itens.pop();
    }

    // Retorna o topo da pilha sem remover
    topo() {
        return this.itens[this.itens.length - 1];
    }

    // Verifica se a pilha está vazia
    estaVazia() {
        return this.itens.length === 0;
    }

    // Retorna todos os itens da pilha
    imprimir() {
        return this.itens;
    }
}

// Simulação Hospitalar

// Instanciando a fila de atendimento e a pilha de prontuários
const filaAtendimento = new Fila();
const pilhaProntuarios = new Pilha();

// Adicionando 5 pacientes à fila
filaAtendimento.enfileirar("Lucas");
filaAtendimento.enfileirar("Rebeca");
filaAtendimento.enfileirar("Sofia");
filaAtendimento.enfileirar("Ana");
filaAtendimento.enfileirar("Isabela");

console.log("Fila inicial de pacientes:");
console.log(filaAtendimento.imprimir());

// Mostra quem será o próximo a ser atendido
console.log("\nPróximo paciente a ser atendido:");
console.log(filaAtendimento.frente());

// Simula o atendimento de dois pacientes
for (let i = 0; i < 2; i++) {
    const pacienteAtendido = filaAtendimento.desenfileirar();
    console.log(`\nAtendendo paciente: ${pacienteAtendido}`);

    // Após atendimento, adiciona à pilha de prontuários
    pilhaProntuarios.empilhar(pacienteAtendido);
}

// Estado final da fila e da pilha
console.log("\nFila restante de pacientes:");
console.log(filaAtendimento.imprimir());

console.log("\nPilha de prontuários:");
console.log(pilhaProntuarios.imprimir());
