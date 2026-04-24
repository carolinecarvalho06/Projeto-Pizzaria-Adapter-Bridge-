// Interface da Borda
class Borda{
    obterBorda(){
        throw new Error("Método precisa ser implementado");
    }
}

// Implementações de Borda
class BordaTradicional extends Borda{
    obterBorda(){
        return "Borda Tradicional";
    }
}

class BordaCatupiry extends Borda{
    obterBorda(){
        return "Borda Catupiry";
    }
}

class SemBorda extends Borda{
    obterBorda(){
        return "Sem Borda";
    }
}

// Abstração Pizza
class Pizza{
    constructor(borda){
        this.borda = borda;
    }

    montarPizza(sabores){
        throw new Error("Método precisa ser implementado")
    }
}

// Tamanho
class Brotinho extends Pizza{
    montarPizza(sabores){
        console.log(`Pizza Brotinho com ${this.borda.obterBorda()} e sabores: ${sabores.join(", ")}`);    }
}

class Tradicional extends Pizza{
    montarPizza(sabores){
        console.log(`Pizza Tradicional com ${this.borda.obterBorda()} e sabores: ${sabores.join(", ")}`);    }
}

class Grande extends Pizza{
    montarPizza(sabores){
        console.log(`Pizza Grande com ${this.borda.obterBorda()} e sabores: ${sabores.join(", ")}`);    }
}

// SABORES
// Sistema existente (Adaptee)
class SistemaSabores{
    listarSaboresDisponiveis(){
        return ["Calabresa", "Frango", "Portuguesa", "Chocolate"];
    }
}

// Adapter
class SaboresAdapter{
    constructor(sistemaSabores){
        this.sistemaSabores = sistemaSabores;
    }

    obterSaboresEscolhidos(indices){
        const sabores = this.sistemaSabores.listarSaboresDisponiveis();
        return indices.map(i => sabores[i]);
    }
}

// CLIENTE (Montando a Pizza)
// Adapter
const sistema = new SistemaSabores();
const adapter = new SaboresAdapter(sistema);

// Escolhendo 3 sabores
const saboresEscolhidos = adapter.obterSaboresEscolhidos([0, 1, 2]);

// Bridge
const borda = new BordaCatupiry();
const pizza = new Grande(borda);

// Montagem
pizza.montarPizza(saboresEscolhidos);