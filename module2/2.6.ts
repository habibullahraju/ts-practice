{

    const studentNextLevelWebDev =  <T extends {id: number, name: string, email: string}>(student : T) =>{
        const course = "now you are next level web developer";
        return {
            ...student,
            course,
        }
    }
    
    const student1 = studentNextLevelWebDev<{id: number, name: string, email: string}>({id: 10, name: 'ahmed raju', email: 'd@gmail.com'});

    console.log(student1);














}