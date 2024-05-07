{

type a1 = number;
type b1 = [number];

type x = a1 extends null? true : b1 extends number? true : string;

type Sheikh = {
    bike: string;
    car:string;
    ship: string;
}

type vehicle<T> = T extends keyof Sheikh ? true : false;

type hasBus = vehicle<"shipddfdfd">













}