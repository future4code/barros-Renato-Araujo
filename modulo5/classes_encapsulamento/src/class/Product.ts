// export type Product = {
//     id: string,
//     name: string,
//     price: number
// }

export class Product{
    constructor(private name: string, private price: number){
        this.name = name;
        this.price = price;
    }
}