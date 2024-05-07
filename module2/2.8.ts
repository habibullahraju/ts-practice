{

    type Todo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean;
    }

const getTodoFunc  =  async() : Promise<Todo> =>{
    const response  =  await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data : Todo = await response.json()
    console.log(data);
    return data
}
getTodoFunc()

















type Something = {something: string}

const createPromise = () : Promise<Something>  =>{
    return new Promise<Something>((resolve, reject) =>{
        const data : Something = {something: 'something'};
        if (data) {
            resolve(data)
        }else{
            reject('fail to load data........')
        }
    })
}

// calling createPromise function 

const showData = async () : Promise<Something> =>{
    const data : Something = await createPromise();
    return data;
}


const  result =  showData()
console.log(result);






}