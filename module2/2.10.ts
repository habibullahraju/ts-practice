{
// mapped  types

const arrayOfNumbers : number[]  = [1,3,5];

const arrayOfStrings : string[] =arrayOfNumbers.map(number =>number.toString());
console.log(arrayOfStrings);



type areaNumber = {
    height: string;
    width : number;
}

type areaString<T> = {
    [key in keyof T] : T[key]
}

const area1 : areaString<{name: string; age: number}> = {
    name: 'raju ahmed',
    age: 20,
}
console.log(area1);



}