{
    //nullable 

    const searchName = (value: string | null)  =>{
        if (value) {
            console.log("searching");
        }else{
            console.log('there is nothing to search!!!');
        }
    }

    searchName(null)

    //unknown
    const getSpeedInPerMeters = (value: unknown) =>{
        if (typeof value === "number") {
            const convertedValue = (value * 1000) / 3600;
            console.log(`per speed ${convertedValue}`);
        }
        else if (typeof value === 'string') {
            const [result, unit] = value.split(' ')
            const convertedValue = (parseFloat(result)* 1000) / 3600;
            console.log(`per speed 2nd ${convertedValue}`);
        }else{
            console.log('wrong input!!!!!!');
        }
    }


    getSpeedInPerMeters(null)



    //never

    const trowError = (msg: string) : never =>{
        throw new Error(msg)
    }

    trowError('muskil se error hogeya')













}

