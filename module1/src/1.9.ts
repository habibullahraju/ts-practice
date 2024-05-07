{
    type Student = {
        name: string;
        age: number;
        contactNo?: string;
        gender: string;
    }
    
    
    const student1 :  Student = {
        name: 'habibullah',
        age: 44,
        contactNo: 'dhaka',
        gender: 'male'
    }
    
    const student2 : Student = {
        name: 'habibullah',
        age: 44,
        gender: 'male'
    }
    
    
    type UserName = string;
    type IsAdmin = boolean;
    const userName : UserName = "hello";
    const isAdmin : IsAdmin = true;

    type Add = (num1: number, num2: number) => number;
    const add : Add = (num1, num2) => num1 + num2;






}