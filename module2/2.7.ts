{
    type Vehicle = {
        bike: string;
        car: string;
        ship: string;
    };
    
    type Owner = 'bike' | 'car' | 'ship';
    
    type Owner2 = keyof Vehicle;
    
    const person1 : Owner2 = "ship"; 

    const getPropertyValue = <x,y extends keyof x> (ojb : x, key : y) =>{
        return ojb[key];
    }

    const user = {
        name: 'habibullah',
        age: 20,
        location: 'dhaka'
    }

    const result1 = getPropertyValue(user, 'location');














}