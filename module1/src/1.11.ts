{
    
    const age = 13;

    if (age >= 18) {
        console.log("adult");
    }else{
        console.log("not adult");
    }

    const isAdult = age >= 18? 'adult' : 'not adult';
    console.log({isAdult});



    const isAuthenticate = '';
    const result = isAuthenticate ?? 'guest';
    const result2 = isAuthenticate? isAuthenticate: 'guest2';
    console.log({result},{result2});



    type User ={
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress?: string;  
        }
    }

    const user : User = {
        name: 'raju',
        address: {
            city: 'tangail',
            road: 'dnmfd',
            presentAddress: 'tangail town',

        }

    }
    const permanentAddress = user?.address?.permanentAddress ?? 'no permanent Address'
    console.log(permanentAddress);

















}