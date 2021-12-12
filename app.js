let curso = require('./curso');


function Aluno(nome, quantidadeFaltas, notas){
    
    
    this.nome = nome;
    this.quantidadeFaltas = quantidadeFaltas;
    this.notas = notas;

   
    this.faltou = function(){
        this.quantidadeFaltas +=1;
    console.log(this.nome + ' faltou e está com ' + this.quantidadeFaltas + ' faltas');
}   

    
    this.calcularMedia = function(){
        let somaNota = 0;
        
         for(let i=0; i <this.notas.length; i++){
             somaNota += this.notas[i];   
         }
         console.log("A média das notas do(a) " + this.nome + ' é: ' + somaNota / this.notas.length);
         return somaNota / this.notas.length;
    }
}

//Matriculados
let aluno1 = new Aluno("Dulce", 5, [8, 8, 9, 7, 6]);
let aluno2 = new Aluno("Anahí", 2, [5, 5, 7, 5, 5]);
let aluno3 = new Aluno("Maíte", 2, [6, 6, 9, 7, 6]);
let aluno4 = new Aluno("Fuzz", 2, [9, 5, 8, 6, 9]);
let aluno5 = new Aluno("Zoraida", 2, [8, 5, 7, 6, 5]);



console.log(curso);


curso.curso.adcionarEstudante(aluno1); 
curso.curso.adcionarEstudante(aluno2);
curso.curso.adcionarEstudante(aluno3);
curso.curso.adcionarEstudante(aluno4);
curso.curso.adcionarEstudante(aluno5);



console.log(curso.curso.listaAlunos);


aluno1.faltou();
aluno2.faltou();


console.log(aluno2.nome);
console.log(aluno1.nome);

console.log(aluno2.quantidadeFaltas);
console.log(aluno1.quantidadeFaltas);

console.log(aluno2.notas);
console.log(aluno1.notas);

aluno1.calcularMedia();
aluno2.calcularMedia();



//Acessando o resultado dos alunos, aprovado ou reprovado
//curso.curso.resultado(aluno1);
//curso.curso.resultado(aluno2);


curso.curso.listaResultado();

//aluno2.calcularMedia();
//curso.cursoresultado(aluno2);
//console.log(curso.curso.listaResultado());

