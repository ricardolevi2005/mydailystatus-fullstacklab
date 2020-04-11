import React from 'react'
import Link from 'next/link'

const NavLink = ({ href, children }) => {
  return (  
    <Link href= {href}>
      <a className= 'p-2 hover:text-red-800 hover:underline'>{children}</a>
    </Link>
  )
}

const NavBar = () => {
  return (
    <div className= 'bg-gray-500 py-4 text-center'>
      <NavLink href= '/sobre'>Sobre</NavLink>
      <NavLink href= '/cadastro'>Cadastre-se</NavLink>
      <NavLink href= '/entrar'>Entrar</NavLink>
    </div>
  )
}

export default NavBar