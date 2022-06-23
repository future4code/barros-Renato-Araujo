import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
            <img src={ props.imagem } />
            
                <p className='texto-bold'>{ props.nome }: &nbsp;</p>
                <p>{ props.descricao }</p>
            
        </div>
    )
}

export default CardPequeno; 