import express,{Request,Response} from 'express'
import {users} from './data'
import cors from 'cors'
import { User} from './types'

//------- CONFIG. INICIAIS EXPRESS ----------

const app = express()
app.use(express.json())
app.use(cors())


//--------------------ENDPOINT 3 --------------------

// app.get('/user',(req:Request,res:Response)=>{
//    let errorCode = 400

//     try {
//         const allUsers = users

//     if(!allUsers) {
//         throw new Error("List not found")
//     }
   
//     res.send(users)

//     } catch (error:any) {
//         res.status(errorCode).send(error.message) 
//     }

// })
//--------------------ENDPOINT 1 --------------------

app.get('/user',(req:Request,res:Response)=>{
   let errorCode = 400

    try {
        const userName = req.query.name as string
        if (!userName) {
        errorCode = 400
        throw new Error ("Missing parameter: name")
    }

    const userSearched = users.find((user)=> {
        return user.name.toLowerCase() === userName.toLowerCase() }
    )

    if(!userSearched) {
        throw new Error("User not found")
    }
  
    res.status(200).send(userSearched)

    } catch (error:any) {
        res.status(errorCode).send(error.message) 
    }

})

//--------------------ENDPOINT 2 --------------------

app.get('/users/:id',(req:Request, res:Response)=>{

 let errorCode = 400
    try {
       
        const userId = Number(req.params.id)

        if(isNaN(userId)){
            throw new Error("Parameter missing: id as number in parameter")
        }

        const userSearchedById = users.find((user)=>{
            return user.id === userId
        })

        if (!userSearchedById) {
            errorCode = 404
            throw new Error("Can't find this user Id")
        }

        res.status(200).send(userSearchedById)
        
    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
}) 

//--------------------ENDPOINT 4 REQUISIÇÃO POR TYPE ESPECÍFICO--------------------
// 4.a) A diferença entre POST e PUT é que o primeiro cria e o segundo substitui
app.post('/users',(req:Request,res:Response)=>{
    let errorCode = 400
    try {
        const {userName,userEmail,userType,userAge} = req.body

        if (!userName || !userEmail || !userType || !userAge){
            errorCode = 422
            throw new Error ("Error: missing Parameter!")
        }
        // 2. b) GARANTIR QUE APENAS TYPES VÁLIDOS SEJAM ENVIADOS
        // nesse caso, foram apenas duas opções do ENUM, outra opção pode ser um for... of 
        // passando por cada item do enum e validando
        if(userType.toUpperCase() !== "ADMIN" && userType.toUpperCase() !== "NORMAL") {
            errorCode = 402
            throw new Error ("Error: user type not valid. Expected: ADMIN || NORMAL")
        }

        const newUser : User = {
            id: Math.random(),
            name: userName, 
            email: userEmail, 
            type: userType.toUpperCase(),
            age: userAge
        }

            users.push(newUser)

            res.status(201).send(users)
            return users

    } catch (error:any) {
        res.status(400).send(error.message)
    }
})

//--------------------ENDPOINT 4 --------------------

app.patch('/users/:id',(req:Request, res:Response)=>{
    let errorCode = 400
    try {
        const userId = Number(req.params.id)
        let {newName, newEmail} = req.body 

        if(!newName || !newEmail){
            errorCode = 422
            throw new Error ("Error: must pass Name and/or Email")
        }

        const userExists = users.find((user)=>{
            return user.id === userId
            if (!userExists){
                errorCode = 404
            throw new Error ("Error: user don't exist")
            }
        })
        
        for (let user of users){
            if (userId === user.id) {
            user.name = newName
            user.email = newEmail
            }
        }

        res.status(201).send(users)

    } catch (error:any) {
        res.status(errorCode).send(error.message)
    }
})




//------- CONFIG. INICIAIS EXPRESS PORTA ----------

app.listen(3003,()=>{
    console.log('Servidor rodando na porta 3003')
})