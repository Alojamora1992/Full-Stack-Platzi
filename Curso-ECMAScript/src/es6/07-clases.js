//Declaración de una clase
class user{

  //métodos: 
   grettin(){ return 'Hello';}
};

const CAPC = new user();
console.log(CAPC.grettin());

//Herencia:

const developer = new user();
console.log(developer.grettin());

//Constructor: Inicializa los elementos de una clase cuando es llamado.

class user{
    //constructor
    constructor(){
        console.log('Nuevo Usuario');
    }

    //métodos: 
    grettin(){ return 'Hello';}
}

const carlos = new user();

//This: Hace referencia al elemento padre que lo contiene.

class user {
    //Constructor:
    constructor(name){
        this.name = name;
    }
    //Métodos:
    speak(){
        return 'Hello';
    }
    gretting(){
        return `${this.speak()} ${this.name}`;
    }

}

const Angel = new user('Angel');
console.log(Angel.gretting());

//Setters & Getters

class user {
    //Constructor y atributos:
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    //Métodos:
    speak(){
        return 'Hola';
    }
    gretting(){
        return `${this.speak()} ${this.name} tienes ${this.age}`;
    }

    get uAge(){
        return this.age;
    }

    set uAge(age){
        this.age = age;
    }
}

const bebeloper1 = new user('David', 34);
console.log(bebeloper1.uAge);
console.log(bebeloper1.uAge = 31);