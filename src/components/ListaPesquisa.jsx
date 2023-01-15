import React from 'react'
import './main.css'



export function ListaPesquisa({name}){

  
  
  let urlImg = `./img/${name}.svg`

  return(
    <li><a href=""><img src={urlImg} alt="" />{name}</a></li>
  )
}


export default ListaPesquisa