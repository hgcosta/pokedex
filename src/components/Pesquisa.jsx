import React from 'react'
import './main.css'
import { useEffect , useState } from 'react'
import ListaPesquisa from './ListaPesquisa.jsx';


export function Pesquisa(){

  const [typePokemon, setTypePokeon] = useState([]);

  useEffect(()=>{
    getPokemonType();
  }, [])

  function getPokemonType(){
    const urlType = 'https://pokeapi.co/api/v2/type';
    fetch(urlType)
    .then( response => response.json())
    .then(r=> {
     
      r.results.map(type=>{
        // Colocando o nome em maiusculo
        let nameTypePokemon = type.name.charAt(0).toUpperCase() +type.name.slice(1);
        const newType = {
          name:nameTypePokemon,
          id: Math.random(),
        }
        
      
        setTypePokeon(prevState=>[...prevState, newType]);
        
      })
    })
  }



  return(
    <div className="colPesquisa">
        <ul className="listaTipos">
            <li><a href=""><img src="./img/pokebola-azul.svg" alt="" />All</a></li>
            { typePokemon.map(type=> <ListaPesquisa key={type.id} name={type.name}  /> ) }
        </ul>
    </div>
  )
}


export default Pesquisa