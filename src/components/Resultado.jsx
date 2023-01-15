import React from 'react'
import './main.css'



export function Resultado(){
  return(
    <div class="colResultado">
       <div className="chamadaResultPokemon">
            <img src="/img/pokebola-result.svg" alt="" />
            <div className="legenda">
                <h4>Search Result</h4>
                <p>Showing 3 results for: 'Fire'</p>
            </div>
       </div>
       <div className="contentCardsResult">
            <div className="cardResult">
                <div className="contentType">
                    <div className="typePokemon fire">
                        <img src="/img/charmander.svg" alt="" />
                    </div>
                </div>
                <div className="legendas">
                    <span># 004</span>
                    <div className="nomeType">
                        <p>Charmander</p>
                        <img src="/img/Fire.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="cardResult">
                <div className="contentType">
                    <div className="typePokemon fire">
                        <img src="/img/charmilion.svg" alt="" />
                    </div>
                </div>
                <div className="legendas">
                    <span># 004</span>
                    <div className="nomeType">
                        <p>Charmilion</p>
                        <img src="/img/Fire.svg" alt="" />
                    </div>
                </div>
            </div>
            <div className="cardResult">
                <div className="contentType">
                    <div className="typePokemon fire">
                        <img src="/img/charizard.svg" alt="" />
                    </div>
                </div>
                <div className="legendas">
                    <span># 004</span>
                    <div className="nomeType">
                        <p>Charizard</p>
                        <img src="/img/Fire.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}


export default Resultado