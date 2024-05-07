{
    // OOP inheritance
    class Person {
        name: string;
        age: number;
        address: string;
        constructor(name: string, age: number, address: string) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(sleepOfHours : number) {
            return (`${this.name} will sleep ${sleepOfHours} Hours`);
        }
    }

    class Student extends Person {
        constructor(name: string, age: number, address: string) {
           super(name, age, address)
        }
        
    }

    const student1 = new Student('Mr student', 20, 'dhaka');
    console.log(student1);
    console.log(student1.getSleep(5));






    class Teacher extends Person {
        designation: string
        constructor(name: string, age: number, address: string, designation : string) {
            super(name, age, address)
            this.designation = designation;
        };
        takeClass (takeNumberOfClass : number) {
            return (`${this.name} will take class ${takeNumberOfClass}`);
            
        }
    }

    const teacher1 = new Teacher('Mr Teacher', 40, 'dhaka', 'professor');
    console.log(teacher1);
    console.log(teacher1.takeClass(4));



}