{
    //instanceOf 
    class Animal {
        name: string;
        species: string
        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound () {
            console.log(`i am sounding ...............`);
        }
    }

    class Dog extends Animal {
        constructor(name : string, species: string) {
            super(name, species)
        }
        makeBard() {
            console.log(`i am barking`);
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }
        makeMeaw() {
            console.log(`i am meawing`);
        }
    }

    const isDog = (animal : Animal) : animal is Dog =>{
        return animal instanceof Dog;
    }
    const isCat = (animal : Animal) : animal is Cat =>{
        return animal instanceof Cat;
    }


    const getAnimal = (animal : Animal) =>{
        if (isDog(animal)) {
            animal.makeBard();
        }else if (isCat(animal)) {
            animal.makeMeaw();
        }else{
            animal.makeSound();
        }
    }

    const dog = new Dog('Dog bhai','dog')
    const cat = new Cat('cat bhai','cat')
    
    getAnimal(cat)

















}