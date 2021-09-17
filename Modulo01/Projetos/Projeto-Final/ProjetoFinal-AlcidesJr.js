const prompt = require('prompt-sync')();

// Inicio das Class

class Dia {
    constructor(horas, minutos) {
        this.horas = 7,
        this.minutos = 0
    }

    relogio() {
        return `${("0" + this.horas).slice(-2)}:${("0" + this.minutos).slice(-2)}`
    }

    relogioAvanca(minutos) {
        this.minutos += minutos
        while(this.minutos >= 60){
            this.minutos -= 60
            this.horas += 1
        }   
    }

    diaDaSemana() {
        return ['segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-sexta', 'sábado', 'domingo']
    }

    resetHora() {
        this.horas = 7,
        this.minutos = 0
    }

    limitehora() {
        return this.horas
    }
}

class Pessoa {
    constructor(nome) {
        this.nome = nome,
        this.gasolina = 5,
        this.dinheiro = 0,
        this.corridas = 0,
        this.cafe = 0,
        this.abastece = 0,
        this.fome = true,
        this.cansado = false,
        this.final = false,
        this.limiteHora = false
    }

    somaCorridas() {
        this.corridas += 1
    }

    somaGasolina(litros) {
        this.gasolina += litros
    }

    subGasolina(gastoGasolina) {
        this.gasolina -= gastoGasolina
    }

    dinheiroCorrida(soma) {
        this.dinheiro += soma
    }

    apresentacao() {
        console.log(`Seu nome é ${this.nome} você é motorista de aplicativo e mora sozinho com ${_animal.dog()} Sua vida é muita corrida e você faz suas refeições fora de casa. Seu turno é de 4h de trabalho, seu tempo é válioso corra para sobreviver.`)
    }

    estadoPessoa() {
        if (this.cansado == true) {
        return `Você trabalhou demais já são ${_hora.relogio()} e você está muito cansado é hora de ir para casa. Você fez ${this.corridas} corridas e terminou o dia com R$ ${this.dinheiro.toFixed(2)}, seu tanque está com ${this.gasolina.toFixed(2)} litros de gasolina.`  
        } else {
            return `[${_hora.relogio()}] - Hoje é ${_hora.diaDaSemana()[dia - 1]} você acorda disposto, porém com fome e sai para trabalhar às ${_hora.relogio()} horas. Você tem R$ ${this.dinheiro.toFixed(2)} em sua conta e seu carro tem R$ ${this.gasolina.toFixed(2)} litros de gasolina. Você fez ${this.corridas} corrida(s) no dia. Lembre-se: Seu carro faz 8.5 km/l.`
        }
    }
    
    dados() {
        if (this.fome == true) {
            return `São ${_hora.relogio()} horas. Você está com fome e tem R$ ${this.dinheiro.toFixed(2)} em sua conta e seu carro tem ${this.gasolina.toFixed(2)} litros de gasolina. Você fez ${this.corridas} corrida(s) no dia.`
        } else {
            return `São ${_hora.relogio()} horas. Você está sem fome, tem R$ ${this.dinheiro.toFixed(2)} em sua conta e seu carro tem ${this.gasolina.toFixed(2)} litros de gasolina. Você fez ${this.corridas} corrida(s) no dia.`
        }
    }

    fim() {
        if (this.final == true) {
            return `Você finalizou o jogo às ${_hora.relogio()} com R$ ${this.dinheiro.toFixed(2)} em sua conta e realizou um total de ${this.corridas} corrida(s). `
        }
    }

    finalExpe() {
        if (this.limiteHora == true) {
            return `Seu expediente chegou ao final já passa das 12 horas. Você está muito cansado é hora de ir para casa. Você fez ${this.corridas} corridas e terminou o dia com R$ ${this.dinheiro.toFixed(2)}, seu tanque está com ${this.gasolina.toFixed(2)} litros de gasolina.`
        }
    }
        
    reset() {
        this.fome = true,
        this.corridas = 0
        this.cansado = false
    }

    gastos(abastece, cafe) {
        this.abastece = abastece,
        this.cafe = cafe,
        this.abastecer1 = true,
        this.dinheiro = this.dinheiro - this.abastece - this.cafe 
    }
}

class Corrida{
    constructor() {
        this.km = [3, 5, 6, 7, 9, 10, 11, 13, 14, 15, 18, 20, 25, 27, 30]
    }
    corridaAletoria(){
       return (this.km[Math.floor(Math.random() * this.km.length)])
    }
}

class Animal extends Pessoa {
    constructor(nome, raca) {
        super(nome);
        
        this.raca = raca
    }
    dog() {
        return `seu cachorro da raça ${this.raca} que se chama ${this.nome}.`
    }
}

// Final das class

// Inicio Objetos

var _hora = new Dia();
var _pessoa = new Pessoa('Adalberto');
var _corrida = new Corrida();
var _animal = new Animal('Thor', 'Rottweiler')

// Final dos objetos

// Inicio variáveis

var valorCorrida = 1.40; // fator em reais para estipular o preço da corrida para cada km.
var horasXcorrida = 2; // estima que leva-se 2 minutos para cada km rodado.
var gasolina = 5.70; // preço da gasolina.
var litrosKm = 8.5; // autonomia do carro.
var dia = 1;        // começa o dia da semana na segunda feira.

// Final variáveis

// Inicio das funções

function apresentacao(){
    _pessoa.apresentacao();
}

function resete() {
_pessoa.reset();
_hora.resetHora();
_pessoa.reset();
console.log();
console.log(_pessoa.estadoPessoa());
}
console.log();

function inicio() {
    
    while (true) {
        if (_hora.limitehora() >= 12) {
            _pessoa.limiteHora = true
            console.log()
            console.log(_pessoa.finalExpe());
            dia++
            if (dia < 6) {
            } else {
                dia = 1
            }
            resete();
            inicio();
            break
        }

        console.log();
        console.log('                   Ações');
        console.log('_____________________________________________')
        console.log('1 - Tomar café da manhã');
        console.log('2 - Abastecer o carro')
        console.log('3 - Ligar o aplicativo e começar a trabalhar');
        console.log('4 - Ir para casa descansar');
        console.log('5 - Sair do jogo');
        console.log('_____________________________________________')
        let acao = +prompt('Escolha sua ação: ');
        console.log();

        if (acao == 1 && _pessoa.dinheiro < 15) {
            _hora.relogioAvanca(5);
            console.log(`[${_hora.relogio()}] - Você tem R$ ${_pessoa.dinheiro} em sua conta e o café custa R$ 15,00.`);
        } else if (acao == 1 && _pessoa.dinheiro > 15) {
            _pessoa.gastos(0, 15);
            _hora.relogioAvanca(5);
            console.log(`[${_hora.relogio()}] - Café tomado!! O café custou R$ 15,00.`);
            _pessoa.fome = false;
            console.log(_pessoa.dados());
        }
    
        if (acao == 2 && _pessoa.dinheiro < gasolina) {
            _hora.relogioAvanca(7)
            console.log(`[${_hora.relogio()}] - Você tem R$ ${_pessoa.dinheiro} em sua conta. O preço da gasolina está em R$ ${gasolina.toFixed(2)}.`);

        } else if (acao == 2 && _pessoa.dinheiro > gasolina) {
            console.log(`A gasolina custa ${gasolina.toFixed(2)} - Quantos Reais você gostaria de abastecer?`)
            abastecer = parseFloat(prompt('> '));
            
                if (abastecer > _pessoa.dinheiro) {
                    console.log(`[${_hora.relogio()}]  ** Saldo insuficiente ** Você tem R$ ${_pessoa.dinheiro.toFixed(2)} em sua conta. `)
                }
                else {
                    litros = abastecer / gasolina;
                    _pessoa.somaGasolina(litros)
                    _pessoa.gastos(abastecer, 0);
                    _hora.relogioAvanca(20);
                    console.log(`[${_hora.relogio()}] - Muito bem você acaba de abastecer R$ ${litros.toFixed(2)} litros de gasolina.`);
                    console.log(_pessoa.dados());
                }
        }

        if (acao == 3) {
            sorteio = _corrida.corridaAletoria()
            console.log(`O trajeto solicitado da corrida é de ${sorteio} km. Aceitar? [S/N]`);
            escolha();
            
            function escolha() {
                var vazio = prompt('');
                if (vazio.toLowerCase() == 's') {
                    noGasolina();
                    function noGasolina() {
                        soma = sorteio / litrosKm
                        if (soma > _pessoa.gasolina) {
                            _hora.relogioAvanca(7)
                            console.log(`[${_hora.relogio()}] - *** Você tem ${_pessoa.gasolina.toFixed(2)} litros de gasolina *** é necessário R$ ${soma.toFixed(2)} litros para este trajeto. Você precisa abastecer. Você tem ${_pessoa.dinheiro.toFixed(2)} em sua conta.`)
                    
                        } else if (soma < _pessoa.gasolina) {
                            soma = sorteio * valorCorrida;
                            gastoGasolina = sorteio / litrosKm; // diminuti a gasolina por km rodado
                            console.log(`Parabéns você recebeu ${soma.toFixed(2)} pela corrida. `);
                            _pessoa.somaCorridas();
                            _pessoa.subGasolina(gastoGasolina);
                            _pessoa.dinheiroCorrida(parseFloat(soma.toFixed(2)));
                            _hora.relogioAvanca(horasXcorrida * sorteio); // reologio avança 2 por km rodado
                            console.log(_pessoa.dados());
                        }
                    }
                } else if (vazio.toLowerCase() == 'n') {
                    _hora.relogioAvanca(5)
                    console.log(_pessoa.dados());
                }
            }
        }
                    
        if (acao == 4) {
            _pessoa.cansado = true
            console.log(_pessoa.estadoPessoa());
            dia++
            if (dia < 6) {
            } else {
                dia = 1
            }
            resete();
            inicio();
            break
        }

        if (acao == 5) {
            _pessoa.final = true;
            console.log(_pessoa.fim());
            console.log();
            console.log('Jogo concluído volte sempre.');
            break
        }
    }
}

apresentacao();
resete();
inicio();




