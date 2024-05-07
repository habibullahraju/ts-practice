{
    
type User1 = {
    name: string;
    age: number;
}
interface UserWithLastName {
    lastName: string;
}

interface userWithRole  extends UserWithLastName {
    role: string;
}


const user1 : User1 = {
    name: 'habibullah',
    age: 20,
}

const user2 : userWithRole = {
    role: 'developer',
    lastName: 'hello'
}

// interface with array
type Role1 = number[];
interface Role2 {
    [index : number ] : number;
}

const role1 : Role2 = [1,2,3]; 


// interface with function

type Add1 = (num1: number, num2: number)=> number;
interface Add2 {
    (num1: number, num2: number) : number;
}
    const add : Add2 = (num1, num2) => num1 + num2;






























































}