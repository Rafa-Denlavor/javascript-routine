// Polimorfismo -> Permite que um mesmo nome represente vários comportamentos diferentes

// Classe base que representa um animal
class Animal {
  // Construtor é uma função especial que é chamada quando um animal é criado
  constructor(name) {
    // 'this.name' é um atributo que armazena o nome do animal
    this.name = name;
  }

  // Método que representa o som genérico que um animal faz
  makeSound() {
    // Exibe uma mensagem indicando um som genérico de animal
    console.log("Um som genérico de animal.");
  }
}

// Classe que representa um cachorro, que é um tipo específico de animal
class Dog extends Animal {
  // Sobrescreve o método makeSound da classe base
  makeSound() {
    // Exibe uma mensagem indicando o latido característico de um cachorro
    console.log("Latido de cachorro: Woof! Woof!");
  }

  // Novo método específico para cães
  fetch() {
    // Exibe uma mensagem indicando que o cachorro está buscando uma bola
    console.log(`${this.name} está buscando uma bola.`);
  }
}

// Classe que representa um gato, que é outro tipo específico de animal
class Cat extends Animal {
  // Sobrescreve o método makeSound da classe base
  makeSound() {
    // Exibe uma mensagem indicando o miado característico de um gato
    console.log("Miado de gato: Meow!");
  }

  // Novo método específico para gatos
  climbTree() {
    // Exibe uma mensagem indicando que o gato está subindo em uma árvore
    console.log(`${this.name} está subindo em uma árvore.`);
  }
}

// Função que utiliza polimorfismo para lidar com diferentes tipos de animais
function animalSounds(animal) {
  // Chama o método makeSound, que é polimórfico (comportamento varia com o tipo de animal)
  animal.makeSound();

  // Verifica se o animal é um cachorro para chamar o método fetch
  if (animal instanceof Dog) {
    // Exibe uma mensagem indicando que o cachorro está buscando uma bola
    animal.fetch();
  }

  // Verifica se o animal é um gato para chamar o método climbTree
  if (animal instanceof Cat) {
    // Exibe uma mensagem indicando que o gato está subindo em uma árvore
    animal.climbTree();
  }
}

// Criando instâncias das classes
const genericAnimal = new Animal("Animal Genérico");
const dog = new Dog("Rex");
const cat = new Cat("Whiskers");

// Usando a função com diferentes instâncias
console.log("Som do animal genérico:");
animalSounds(genericAnimal);

console.log("\nSom do cachorro:");
animalSounds(dog);

console.log("\nSom do gato:");
animalSounds(cat);
