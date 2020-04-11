import React from 'react'
import NavBar from '../components/NavBar'

const Header = () => {
  return (
    <div className="py-4 text-center bg-gray-400" >
      MyDailyStatus é um projeto criado durante o FullStack Lab do DevPleno.
      <br/>
      Implementado por : {' '}
      <a href="https://www.linkedin.com/in/ricardo-levi-campos-21a60014">Ricardo Levi</a>
    </div>
  )
}


export default Header