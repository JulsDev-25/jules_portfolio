import React from 'react'

function Hero() {
  return (
    <div className='h-[100vh] bg-gray-800 '>
      <div className='h-full grid grid-cols-2 justify-center items-center'>
        <div className='col-span-1 flex flex-col'>
           <h1>Introduction</h1>
           <p>Salut, je suis</p>
           <p>Jules Loïc</p>
           <p>NGNIPIBEO</p>
           <div><p>Developpeur fullstack, dans la conception d'application web et mobile. je transforme les idées en solutions digitales concrètes et performantes partant de l'analyse jusqu'à la réalisaton</p></div>
        </div>
        <div className="col-span-1 ">
          <img src="./src/assets/img/logo.jpg" alt="logo" />
        </div>
      </div>
    </div>
  )
}

export default Hero