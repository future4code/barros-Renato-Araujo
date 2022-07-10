import styled from "styled-components";

export const Logotipo=styled.div`
background-color: lightblue;
height: 100px;
display: flex;
align-items: center;
border-radius: 0 0 20px 20px;
padding: 0px 10px;
`

export const Labelogo=styled.img`
height: 100%;
`

export const Logotitle=styled.span`
font-size: 3rem;
font-weight: bolder;

`

export const CabecaStyle=styled.header`
display: flex;
justify-content: center;
background-image: linear-gradient(lightblue, darkcyan);
;
`
export const CorpoStyle=styled.body`
background-color: darkcyan;
display: flex;
justify-content: center;
`

export const Formularios=styled.div`
display: flex;
flex-direction: column-reverse;
background-color: white;
width: 80%;
height: 100%;
min-height: calc(100vh - 165px);
justify-content: end;
border-radius: 20px 20px 0 0;
margin-top: 10px;
margin-bottom: 50px;
`

export const FormulariosBox=styled.form`
color: white;
width: 50%;
text-align: center;
display: flex;
align-items: flex-end;
justify-content: space-around;
padding: 0 30% 10px 5%;
position: fixed;
bottom: 25px;
z-index: 200;
background-color: darkcyan;
height: 40px;
`

export const FormularioInputR=styled.input`
border-radius: 8px;
width: 10vw;
border: 0;
height: 50%;
padding-left: 8px;
`
export const FormularioInputM=styled.input`
border-radius: 8px;
width: 20vw;
border: 0;
height: 50%;
padding-left: 8px;
`

export const Mensagens=styled.div`
display: flex;
background-color: transparent;
width: 100%;
justify-content: end;
`

export const Mensagem=styled.div`
background-color: lightgreen;
&:hover {background-color: lightpink}
border-radius: 5px;
margin: 3px 100px;
padding: 0 10px;
word-wrap: break-word;
max-width: 20vw;
`

export const Nominho=styled.p`
font-size: 0.8rem;
font-weight: bold;
font-style: italic;
`

export const Textinho=styled.p`
font-size: 0.9rem;
`

export const Enviar=styled.button`
background-color: lightgreen;
color: darkcyan;
border-radius: 10px;
border: 0;
font-size: 20px`

export const Deletar=styled.div`

display: flex;
position: fixed;
width: 100px;
justify-content: end;
background-color: aquamarine;
`

export const PeStyle=styled.footer`
background-color: gray;
text-align: center;
position: fixed;
bottom: 0;
width: 100%;
height: 25px;
z-index: 200;
`