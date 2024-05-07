{
// type assertion

let anyThing : any;
anyThing = 'next level web development';

anyThing = 500;
// (anyThing as number);

const kgToGm = (value: number | string) : number | string | undefined =>{
    if (typeof value === "string") {
        const convertedValue = parseFloat(value) * 1000;
        return `The converted value is ${convertedValue}`;
    }else if (typeof value === "number") {
        return value * 1000;
    }
}

const result1 = kgToGm(1000) as number;
const result2 = kgToGm('1000') as string;

type CustomError = {
    message: string;
}
try {

} catch (error) {
    console.log((error as CustomError).message);
}
















}