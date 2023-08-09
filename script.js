function ReceitaPrincipal(qtdAcucar, qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos){
    this.qtdAcucar = qtdAcucar;
    this.qtdFarinha = qtdFarinha;
    this.qtdManteiga = qtdManteiga;
    this.qtdFermento = qtdFermento;
    this.qtdLeite = qtdLeite;
    this.quantosOvos = quantosOvos;

    let contemAcucar = true; 
    let contemFarinha = true; 
    let contemManteiga = true; 

    const _ingredientePrincipal="canela";

    this.GETingredientePrincipal=function(){
        console.log( `O ingrediente principal desta receita é: '${_ingredientePrincipal}'`);
    }


    this.contemAcucar = function() {
        if (contemAcucar){
            console.log("OBS: Essa receita leva açúcar");
        } else {
            console.log("OBS: Essa receita não leva açúcar");
        }
    }

    this.contemManteiga = function() {
        if (contemManteiga) {
            console.log("OBS: Essa receita é amanteigada");
        } else {
            console.log("OBS: Essa receita não é amanteigada");
        }
    }

    this.contemFarinhaBranca = function() {
        if (contemFarinha) {
            console.log("OBS: Essa receita tem farinha branca, não é integral");
        } else {
            console.log("OBS: Essa receita é integral");
        }
    }

    this.getReceita=function(){
    console.log(`Essa receita é feita com os seguintes ingredientes:
    ${this.qtdAcucar} de açúcar,
    ${this.qtdFarinha} de farinha,
    ${this.qtdManteiga} de manteiga,
    ${this.qtdFermento} de fermento,
    ${this.qtdLeite} de leite,
    ${this.quantosOvos} ovos`);


    this.contemAcucar();
    this.contemManteiga();
    this.contemFarinhaBranca();

    }
}
//---------------------------------------------------
let minhaReceita = new ReceitaPrincipal("100g","200g","50g","1 colher","200ml",3);

minhaReceita.getReceita();

minhaReceita.GETingredientePrincipal();
//---------------------------------------------------

function ReceitaMenu(qtdAcucar, qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos) {
    // Chamar o construtor da classe pai usando .call
    ReceitaPrincipal.call(this, qtdAcucar, qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos);

    // Sobrescrever o método getIngredientePrincipal
    this.GETingredientePrincipal = function() {
        console.log("O ingrediente principal desta receita do menu é um segredo!");
    };
}

let receitaMenu=new ReceitaMenu("200g","300g","100g", "2 colheres","300ml",4)

console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")

receitaMenu.contemAcucar();
receitaMenu.getReceita();
receitaMenu.GETingredientePrincipal();

console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")

function ReceitaParaIdosos(qtdAcucar, qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos) {
    ReceitaPrincipal.call(this, qtdAcucar, qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos);


    this.GETingredientePrincipal = function() {
        console.log("O ingrediente principal desta receita do menu é um segredo!");
    };
}

//-------------------------------------------------
//-------------------------------------------------
function ReceitaParaIdosos(qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos, extra) {
    ReceitaPrincipal.call(this, "", qtdFarinha, qtdManteiga, qtdFermento, qtdLeite, quantosOvos);

    this.extra=extra;

    let contemAcucar = false;
    let contemFarinha = false; 
    let contemManteiga = false; 

    this.contemAcucar = function() {
        if (contemAcucar){
            console.log("OBS: Essa receita leva açúcar");
        } else {
            console.log("OBS: Essa receita não leva açúcar");
        }
    }

    this.contemManteiga = function() {
        if (contemManteiga) {
            console.log("OBS: Essa receita é amanteigada");
        } else {
            console.log("OBS: Essa receita não é amanteigada");
        }
    }

    this.contemFarinhaBranca = function() {
        if (contemFarinha) {
            console.log("OBS: Essa receita tem farinha branca, não é integral");
        } else {
            console.log("OBS: Essa receita é integral");
        }
    }

    
        this.getReceita = function() {
            console.log(`Essa receita é feita com os seguintes ingredientes:
            50g de adoçante,
            ${this.qtdFarinha} de farinha integral,
            ${this.qtdManteiga} de margarina,
            ${this.qtdFermento} de fermento,
            ${this.qtdLeite} de leite,
            ${this.quantosOvos} ovos,
            com a diferença de ter
            ${this.extra}.`);
            
            this.contemAcucar();
            this.contemManteiga();
            this.contemFarinhaBranca();
        }
    }


let receitaLight=new ReceitaParaIdosos("200g","300g","100g", "2 colheres",4,"chia")
let receitaDiet=new ReceitaParaIdosos("200g","300g","100g", "2 colheres",4,"Ingredients escolhidos")
let receitaIntegral=new ReceitaParaIdosos("200g","300g","100g", "2 colheres",4,"castanhas")

console.log("------------------------------")
console.log("------------------------------")
console.log("------------------------------")


receitaDiet.getReceita();
