1.
a) Usar strings para id é interessante pois permite que sejam usados números e caracteres, aumentando a segurança. Inclusive, hexadecimal usa letras.

b) export function generateId(): string {
    return v4();
  }

2.
a) A linha "as string" serve para determinar que o dado resultante de JWT_KEY será lido como uma string e não como um número ou como lógica.

b)type AuthenticationData = {id:string}

import * as jwt from "jsonwebtoken"
const expiresIn = "10min"
const generateToken(input: AuthenticationData): string {
const token = jwt.sign({id:input.id},
process.ennf.JWT_KEY as string,
{expiresIn})
return token
}
}

3.
a) app.post("/user/signup", async (req: Request, res: Response) => {
  try {
	if (!req.body.emaill || !req.body.email.includes("@")) {
throw new Error ("Invalid Email")
}
	if (!req.body.password || req.password.lenght < 6) {
throw new Error ("Invalid Password")
}

const userData = {
email: req.body.email,
password: req.body.password
}

const id = generateId()

await createUser(id, usarData.email, usarData.password)

const token = generateToken({id})

res.status(200).send({token})
} catch (error) {
res.status(400).send({message: error.message})
}
}

4.
a) const getUserByEmail = async(email: string): Promise<any> => {
   const result = await connection
     .select("*")
     .from(userTableName)
     .where({ email });

   return result[0];
  }
}

5.
a) 

app.post("/user/signup", async (req: Request, res: Response) => {
  try {
	if (!req.body.emaill || !req.body.email.includes("@")) {
throw new Error ("Invalid Email")
}
	if (!req.body.password || req.password.lenght < 6) {
throw new Error ("Invalid Password")
}

const userData = {
email: req.body.email,
password: req.body.password
}

const token = generateToken({id})

res.status(200).send({token})
} catch (error) {
res.status(400).send({message: error.message})
}
}

