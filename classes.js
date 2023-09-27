class usuario {
    constructor(nome, email){
        this.nome = nome;
        this.email = email;
        this.contas = [];
    } 
}

adicionarConta(conta){
    this.contas.push(conta);
}

class conta {
    constructor(banco, descricao){
        this.banco = banco;
        this.descricao = descricao;
        this.despesas = [];
        this.receitas = [];
    }
}

adicionarDespesa(Despesa){
    this.despesas.push(Despesa);
}

adicionarReceita(Receita){
    this.receita.push(Receita)
}

class Despesa {
    constructor (valor, categoria){
        this.valor = valor;
        this.categoria = categoria
    }
}

class Receita {
    constructor (valor, descricao, categoria){
        this.valor = valor;
        this.descricao = descricao;
        this.valor = valor;
    }
}

class Meta {
    constructor (data, valor, desconto){
        this.data = data;
        this.valor = valor;
        this.desconto = desconto;
    }  
}

class Orcamento {
    constructor (desconto, valor, data){
        this.desconto = desconto;
        this.valor = valor;
        this.data = data;
    }
} 

class Investimento { 
    constructor(valor, data ){
        this.valor = valor;
        this.data = data;
    }
}
atualizarValor(valor){
    this.valorAtual += valor; 
}

const usuario1 = new usuario ();

const conta1 = new conta("conta corrente")
const conta2 = new conta2 ("conta poupança")

usuario1 = adicionarConta("conta1")
usuario2 = adicionarConta("conta2")

const Despesa1 = new Despesa1("Aluguel")
const Receita1 = new Receita1 ("Salário")

conta1.adicionarDespesa(Despesa1)
conta1.adicionarReceita(Receita1)

const Meta1 = new Meta1 ("Comprar carro")

