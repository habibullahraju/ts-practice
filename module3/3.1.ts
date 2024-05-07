{
    // oop class

class Animal {
    constructor(public name: string, public species : string, public sound : string) {}
    makeSound () {
        console.log(`the ${this.name} say is ${this.sound}`);
    }
}

   const dog = new Animal('garman shepard bhai', 'gog', 'ghew ghew');
   const cat = new Animal('parsian cat', 'cat', 'meaw meaw')
   dog.makeSound();















}