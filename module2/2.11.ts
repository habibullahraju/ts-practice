{
//utility 
//pick

type Person = {
  readonly  name: string;
    age: number;
    email? : string;
    contactNo: string;
}

type nameAge = Pick<Person, 'name' | 'age'>

//Omit
type contactInfo = Omit<Person, 'name' | 'age'>

// require

type personRequire = Required<Person>;

// partial
type personPartial = Partial<Person>; 
const person1 : Person = {
    name: 'raju',
    age: 33,
    email: 'rajkfd',
    contactNo: 'efjio'
}



type MyObj = Record<string, unknown>
const myObj : MyObj = {
    a: 'aa',
    b: 'bb',
}


const emptyVariable : Record<string, unknown> = {};







}