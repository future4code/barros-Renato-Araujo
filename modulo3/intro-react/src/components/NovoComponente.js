import React from 'react'
import './NovoComponente.css'


export function NovoComponente (props) {
    return (
      <div className='box'>
        <h1>Perfil</h1>
        <p>Nome: {props.nome} </p>
        <p>Idade: {props.idade} </p>
        <p>E-mail: {props.email} </p>
      </div>
    )
  }