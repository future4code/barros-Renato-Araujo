import { users } from './data'
import * as allTypes from './type'
import  express, { Request, Response} from 'express'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())




// ---------- EXPLICAÇÃO EXPRESS --------- 

app.get("/teste/:id",(req:Request, res:Response)=>{

 const id = req.params.id
 const password = req.headers.password

 console.log(id, password)

 res.status(201).send('Deu bom')
})

// ----------- GET ALL PLAYLIST ----------

app.get("/playlist",(req:Request, res:Response)=>{

    const playlists = users.map((user)=>{
        return user.playlists
    })

    res.status(200).send(playlists)
})


//------------ GET PLAYLIST TRACKS --------

app.get("/playlists/tracks",(req:Request, res:Response)=>{

    const playlistId = req.query.idPlaylist 
    const userId = req.headers.iduser


    if(!playlistId && !userId){
        res.status(400).send("Colocar obrigatoriament um id")
    }

    const userFiltered = users.find((user)=>{
        return user.id === userId
    })
    
    let playlistFiltered 

    if(userFiltered){
    
        playlistFiltered = userFiltered.playlists.find((playlist)=>{
            return playlist.id === playlistId
        })
        
    }else{
        res.status(200).send("Não há um usuário com o id informado")
    }

    if(playlistFiltered ){
       const allTracks = playlistFiltered.tracks
        res.status(200).send(allTracks)
    }else{
        res.status(200).send("Não há um playlist com o id informado")
    }  
})

//------------ DELETE PLAYLIST -----------

app.delete("/playlists/playlist",(req:Request, res:Response)=>{
    
        const playlistId = req.query.idPlaylist 
        const userId = req.headers.iduser
    
        if(!playlistId && !userId){
            res.status(400).send("Colocar obrigatoriament um id")
        }
    
        const userFiltered = users.find((user)=>{
            return user.id === userId
        })
        
        let playlistsActual
    
        if(userFiltered){

            playlistsActual = userFiltered.playlists.filter((playlist)=>{
                return playlist.id !== playlistId
            })
            userFiltered.playlists = playlistsActual
            res.status(200).send(userFiltered)
        }else{
            res.status(200).send("Não há um usuário com o id informado")
        }   
    
    })

    

//------------- DELETE TRACK --------------

app.delete("/playlists/track",(req:Request, res:Response)=>{
    
        const playlistId = req.query.idPlaylist 
        const userId = req.headers.iduser
        const trackId = req.query.idtrack
    
        if(!playlistId && !userId && !trackId ){
            res.status(400).send("Colocar obrigatoriament um id")
        }
    
        const userFiltered = users.find((user)=>{
            return user.id === userId
        })
        let playlistFiltered 
    
        if(userFiltered){

            playlistFiltered = userFiltered.playlists.find((playlist)=>{
                return playlist.id === playlistId
            })

        }else{
            res.status(200).send("Não há um usuário com o id informado")
        }
        
        let trackDeleted 

        if(playlistFiltered ){
            trackDeleted = playlistFiltered.tracks.find((track)=>{
                return track.id === trackId

            })
        }else{
            res.status(200).send("Não há um playlist com o id informado")
        }  
        if(trackDeleted && playlistFiltered){

            const tracksActual = playlistFiltered.tracks.filter((track)=>{
                return track.id !== trackId
            })
    
            playlistFiltered.tracks = tracksActual
            
            res.status(200).send(playlistFiltered)

        }else{
            res.status(200).send("Não há uma faixa com o id informado, portanto ela não poderá ser deleta")
        }

    
    })

// --------------------- SEARCH PLAYLIST --------------------



// -------------------CREATE PLAYLIST -----------------------



// -------------------ADD TRACK NA PLAYLIST -------------




// -------------------PORTA PARA VERIFICAR O SERVIDOR-------------

app.listen(3003,()=>{
    console.log('Servidor executando na porta 3003')
})