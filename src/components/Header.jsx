import React from 'react'
import './main.css'



export function Header(){
  return(
    <header>
        <div className="container">
            <div className="brand">
                <a href=""><img src="/img/nome-pokemon.svg" alt="" /></a>
            </div>
            <div className="menu">
                <img src="/img/menu-hamburger.png" alt="" />
            </div>
        </div>
    </header>
  )
}


export default Header