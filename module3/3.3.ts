{
    // typeof 
    type Alphanumeric = number | string;

    const add = (param1 : Alphanumeric, param2 : Alphanumeric) : Alphanumeric =>{
        if (typeof param1 === 'number' && typeof param2 === 'number') {
            return param1 + param2
        }else {
            return param1.toString() + param2.toString();
        }
    }

    // console.log(add(10,10));

    // in guard

    type NormalUser = {
        name: string;
    }
    type AdminUser = {
        name: string;
        role: 'admin';
    }

    const getUser = (user : NormalUser | AdminUser ) =>{
        if ('role' in user) {
            console.log(`My name is ${user.name} & my role is ${user.role}`);
        }else{
            console.log(`My name is ${user.name}`);
        }
    }

    const normalUser = {
        name: 'Normal User',
    }
    const adminUser = {
        name: 'Admin user',
        role: 'admin'
    }
  getUser(adminUser);









}