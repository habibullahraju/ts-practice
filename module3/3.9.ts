{
    interface Vehicle {
        startEngine(): void;
        stopEngine() : void;
        move() : void;
    }
    class Car implements Vehicle {
        startEngine(): void {
            console.log(`i am starting the car engine`);
        }
        stopEngine(): void {
            console.log(`i am stopping the car engine`);
        }
        move(): void {
            console.log(`i am moving the car`);
        }
        test() : void{
            console.log(`I am just testing....`);
        }
    }

    const toyotaCar = new Car();
    toyotaCar.startEngine();

    abstract class Car2 {
        abstract startEngine(mango : string) : void;
        abstract stopEngine() : void;
        abstract move () : void;
        test () {
            console.log('i am testing');
        }

    }
    class toyota extends Car2{
        startEngine(mango : string): void {
            console.log(`i am starting the car engine abb ${mango}`);
        }
        stopEngine(): void {
            console.log(`i am stopping the car engine abb`);
        }
        move(): void {
            console.log(`i am stopping the car abb`);
        }
        test(): void {
            console.log(`a am testing `);
        }
        apple() : void{
            console.log('print raju');
        }
    }

    const hondaCar = new toyota();
    hondaCar.startEngine('abstract')


}