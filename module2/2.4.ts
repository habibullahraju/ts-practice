{
    // generic interface 

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number;
        },
        smartWatch: T;
        bike?: X;
    }

    type emilabWatch = {
        brand: string;
        model: string;
        display: string;
    }
    interface AppleWatch {
        brand: string;
        model: string;
        sleepTrack: boolean;
        bloodPressureTrack: boolean;
    }
    interface YamahaBike {
        brand: string;
        engineCapacity: string;
    }

    const poorDeveloper: Developer<emilabWatch> = {
        name: 'habibullah',
        computer: {
            brand: 'asus',
            model: 'y33',
            releaseYear: 2011,
        },
        smartWatch: {
            brand: 'emilab',
            model: 'U44k',
            display: 'normal'
        }
    }

    const richDeveloper: Developer<AppleWatch,YamahaBike> = {
        name: 'Jamil',
        computer: {
            brand: 'HP',
            model: 'y33',
            releaseYear: 2017,
        },
        smartWatch: {
            brand: 'apple',
            model: 'U44k',
            sleepTrack: true,
            bloodPressureTrack: true,
        },
        bike: {
            brand: 'yamaha',
            engineCapacity: '100cc'
        }
    }



































}