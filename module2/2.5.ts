{

    const createArray = (params: string): string[] =>{
        return [params];
    }

    const createArrayWithGeneric = <T>(params: T) : T[] =>{
        return [params]
    }
    const createArrayWithTuple = <T, Q>(params1: T, params2: Q) : [T, Q] =>{
        return [params1, params2];
    }
    interface User {
        id: number;
        name: string;
    }
    const resultTuple = createArrayWithTuple<string, number>('habibullah', 999);
    const resultTupleObj = createArrayWithTuple<number, {id: number, name: string}>(1000, {id: 10, name: 'habib'})
console.log(resultTupleObj);


const studentNextLevelWebDev =  <T>(student : T) =>{
    const course = "now you are next level web developer";
    return {
        ...student,
        course,
    }
}

const student1 = studentNextLevelWebDev<{id: number, name: string, email: string}>({id: 10,name: 'ahmed raju', email: 'd@gmail.com'});
console.log(student1);
const student2 = studentNextLevelWebDev<{id: number, name: string, email: string}>({id: 1010,name: 'ahmed jamil', email: 'jamil@gmail.com'});
console.log(student2);











}