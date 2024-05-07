
    function add(num1:number, num2: number):number{
        return num1 + num2;
    }
    
    add(4,3)
    
    const addArrow = (num1: number, num2: number): number => num1 + num2;
    
    const addArr = (num1: number, num2: number) =>{
        return num1 + num2;
    }
    
    const poorMan = {
        name: 'habibullah',
        balance: 0,
        addBalance(balance: number): string{
            return `this is my correct balance ${this.balance + balance}`;
        }
    }
    
    let arr: number[] = [1, 2, 4, 5];
    const newArr: number [] = arr.map((element : number): number => element * element)
