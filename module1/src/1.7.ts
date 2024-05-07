const bros1 : string[] = ['rahad','kalam', 'sajjad'];
const bros2 : string[] = ['abul', 'tarek', 'sharif'];

const   allBros = bros1.push(...bros2)

const person1 = {
    name: 'al amin',
    age: 44,
    home: 'dhaka',
}
const person2 = {
    name: 'nayeem',
    age: 33,
    home: 'tangail'
}

const allPerson = {
    ...person1,
    ...person2
}


const friendsGreet =  (...friends: string[])  =>{
    friends.forEach(friend => console.log(friend));
}

friendsGreet('abul', 'tabol', 'mabol')

{
    
const person= {
    named: 'habibullah',
    location:{
        home: 'dhaka',
        village: 'gazipur',
    },
    age: 33
}

const {named, location: {village}, age} = person;
}


const myFriends: string[] = ['raju', 'kalam', 'balam','sajana', 'sazzad'];

const [,bestFriend, ...rest] = myFriends; 