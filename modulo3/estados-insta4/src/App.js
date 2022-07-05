import React from 'react';
import Post from './components/Post/Post';
import './style.css'

const postElementos=[
  {nomeUsuario: "Karoden", fotoUsuario: "https://picsum.photos/50/50?random=1", fotoPost:"https://picsum.photos/200/150?random=1"},
  {nomeUsuario: "Wakartus", fotoUsuario: "https://picsum.photos/50/50?random=2", fotoPost:"https://picsum.photos/200/150?random=2"},
  {nomeUsuario: "Dothorien", fotoUsuario: "https://picsum.photos/50/50?random=3", fotoPost:"https://picsum.photos/200/150?random=3"}

]

const listaDeElementos=postElementos.map((dado, index)=>{
  return console.log (<li key={index}>{dado}</li>)
})

function App() {
return(
  console.log(listaDeElementos.dado),
  <div className='MainContainer'>
           <Post
            nomeUsuario={'Nartain'}
            fotoUsuario={'https://picsum.photos/50/50?random=1'}
            fotoPost={'https://picsum.photos/200/150?random=1'}
          />
           <Post
            nomeUsuario={'Tuta'}
            fotoUsuario={'https://picsum.photos/50/50?random=2'}
            fotoPost={'https://picsum.photos/200/150?random=2'}
          />
           <Post
            nomeUsuario={'Chub'}
            fotoUsuario={'https://picsum.photos/50/50?random=3'}
            fotoPost={'https://picsum.photos/200/150?random=3'}
          />
  </div>

)

}


export default App;
