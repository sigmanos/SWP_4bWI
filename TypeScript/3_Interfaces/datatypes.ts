interface Person{
    firstname:string;
    lastname:string;
    age:string;
    isMale?: boolean;
}

const person = {

    "firstname":"Hans",
    "lastname":"Müller",
    age: 70,
}

function printName(person: any) {

    console.log(person.isMale);
}

printName(person);