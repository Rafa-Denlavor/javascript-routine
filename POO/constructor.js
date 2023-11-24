// Definição da classe Person
class Person {
  // Construtor é uma função especial chamada ao criar uma nova pessoa
  constructor(name, age) {
    // 'this.name' é um atributo que armazena o nome da pessoa
    this.name = name;
    
    // 'this.age' é um atributo que armazena a idade da pessoa
    this.age = age;
  }

  // Método que retorna uma string formatada com os detalhes da pessoa
  getInfo() {
    return `Nome: ${this.name}, Idade: ${this.age} anos.`;
  }
}

// Criando instâncias da classe Person com diferentes parâmetros
const person1 = new Person("João", 25);
const person2 = new Person("Maria", 30);

// Exibindo informações das instâncias usando o método getInfo
console.log(person1.getInfo()); // Saída: Nome: João, Idade: 25 anos.
console.log(person2.getInfo()); // Saída: Nome: Maria, Idade: 30 anos.
