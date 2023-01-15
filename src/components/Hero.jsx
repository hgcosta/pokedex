import React from 'react'
import './main.css'
import Header from './Header.jsx';
import InformacoesHero from './InformacoesHero.jsx';
import Pokebola from './Pokebola.jsx';


export function Hero(){
  return(
    <div className='hero'>
        <Header/>
        <InformacoesHero/>
        <Pokebola/>
    </div>
  )
}


export default Hero