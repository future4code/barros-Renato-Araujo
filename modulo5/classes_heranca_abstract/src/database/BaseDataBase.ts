import knex from "knex";

   export class BaseDatabase {
    protected static connection = knex({
    client: "mysql",
    connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_DATABASE,
    multipleStatements: true
    },
    });
   }

   export class UserDatabase extends BaseDatabase {
    public static TABLE_USERS = "Labe_Users"
    public async getAllUsers() {
    const result = await BaseDatabase
    .connection(UserDatabase.TABLE_USERS)
    .select()
   
    return result
    }
   }

   export class ProductsDatabase extends BaseDatabase {
    public static TABLE_PRODUCTS = "Labe_Products"
    public async getAllUsers() {
    const result = await BaseDatabase
    .connection(ProductsDatabase.TABLE_PRODUCTS)
    .select()
   
    return result
    }
   }