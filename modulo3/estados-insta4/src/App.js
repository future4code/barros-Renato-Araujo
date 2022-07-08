import React, { useState } from 'react';
import Post from './components/Post/Post';
import './style.css'

function App() {
  const [elementos, setElementos]=useState([
    {nomeUsuario: "Karoden", fotoUsuario: "https://picsum.photos/50/50?random=1", fotoPost:"https://picsum.photos/200/150?random=1"},
    {nomeUsuario: "Wakartus", fotoUsuario: "https://picsum.photos/50/50?random=2", fotoPost:"https://picsum.photos/200/150?random=2"},
    {nomeUsuario: "Dothorien", fotoUsuario: "https://picsum.photos/50/50?random=3", fotoPost:"https://picsum.photos/200/150?random=3"}
  ])

  const[inputName,setInputName]=useState("")
  const[inputProfile, setInputProfile]=useState("https://picsum.photos/50/50?random=4")
  const[inputImage, setInputImage]=useState("https://picsum.photos/200/150?random=4")

  const updateName=(e)=>{
    setInputName(e.target.value)
    }
  const updateProfile=(e)=>{
    setInputProfile(e.target.value)
    }
  const updateImage=(e)=>{
    setInputImage(e.target.value)
    }

    const addPost=(e)=>{
      e.preventDefault() 
      const elementosAtualizados=[...elementos,{nomeUsuario:inputName,fotoUsuario:inputProfile,fotoPost:inputImage}]
      setElementos(elementosAtualizados)
      setInputName("")
      setInputProfile("")
      setInputImage("")
  }

  const elementosMap = elementos.map((element,index)=>{
    return (
      <div className='MainContainer' key={index}><Post
      nomeUsuario={element.nomeUsuario}
      fotoUsuario={element.fotoUsuario}
      fotoPost={element.fotoPost} />
      <button onClick={()=>RemovePost(index)}>Remover</button>
      <br></br>
      </div>
      
    )
  })

const RemovePost=(indexRemove)=>{
  const elementosAtualizados=elementos.filter((item, index)=> {
      return index !== indexRemove
  })
  setElementos(elementosAtualizados)
}

return(
  <div className='MainContainer'>
    <form action=''>
    <input type='text' required placeholder='Nome' value={inputName} onChange={updateName}></input>
    <input type='text' required placeholder='Imagem de Perfil' value={inputProfile} onChange={updateProfile}></input>
    <input type='text' required placeholder='Imagem do Post' value={inputImage} onChange={updateImage}></input>
    <button onClick={addPost}>Adicionar</button>
    </form>
 
  <div >
          <ul>
            {elementosMap}
          </ul>
  </div>
 </div>
)


  
}


export default App;
