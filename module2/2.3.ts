{

type genericArray<T> = Array<T>;



const roleNumber : genericArray<number> = [1,2,3,4,5,5];
const students : genericArray<string> = ['abul', 'tabol', 'sabul', 'mabul'];
const boolArray: genericArray<boolean> = [true, false, true];


const user : genericArray<{
    name: string;
    age: number;
}> = [
    {
        name: 'raju',
        age: 100,
    },
    {
        name: 'jamil',
        age: 200,
    }
]
type genericTuple<x,y> = [x,y]
const manus : genericTuple<string,string> = ['jamai', 'bow'];

const userWithId : genericTuple<number, {name: string, email: string}> = [12345, {name: 'habibullah', email: 'a@gmail.com'}]










}


