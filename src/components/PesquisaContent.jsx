import React from 'react'
import './main.css'
import Pesquisa from './Pesquisa.jsx';
import Resultado from './Resultado.jsx';

export function PesquisaContent(){
  return(
    <div className='pesquisaContent'>
        <div className="container">
            <div className="contentPesquisa">
                <Pesquisa/>
                <Resultado/>  
            </div>
        </div>
    </div>
  )
}


export default PesquisaContent