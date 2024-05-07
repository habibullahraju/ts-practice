{

    // type FrontendDeveloper = 'fokiraDeveloper' | 'juniorDeveloper';
    // type FullstackDeveloper = 'frontendDeveloper' | 'fullstackDeveloper';

    // type developer = FrontendDeveloper | FullstackDeveloper;

    // const  newDevelopers : developer = 'juniorDeveloper'




type FrontendDeveloper ={
    skills: string[];
    designation1: 'frontendDeveloper';
}
type BackendDeveloper = {
    skills: string[];
    designation2: 'backendDeveloper';
}

type FullstackDeveloper = FrontendDeveloper & BackendDeveloper;

const fullstackDeveloper : FullstackDeveloper = {
    skills: ['html', 'css', 'express'],
    designation1: 'frontendDeveloper',
    designation2: 'backendDeveloper',
}







}