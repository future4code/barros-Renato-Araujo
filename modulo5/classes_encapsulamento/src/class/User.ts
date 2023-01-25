// export type User = {
//     id: string,
//     email: string,
//     password: string
// }

export class Product{
    constructor(private name: string, private email: number, private password: string){
        this.name = name;
        this.email = email;
        this.password = password;
    }
}

