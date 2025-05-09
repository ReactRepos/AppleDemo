import React from 'react'
import { appleImg, bagImg, searchImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
    <header className={'w-full py-5 sm:px-10 px-5 items-center justify-between flex'}>
      <nav className={'flex w-full screen-max-width'}>
        <img src={appleImg} alt='apple' width={14} height={18}/>

      <div className={'flex flex-1 justify-center max-sm:hidden'}>
        {navLists.map((nav,i)=>
        <div key={i} className={'px-5 text-sm cursor-pointer text-gray-300 hover:text-white transition-all'}>
          {nav}
        </div>
      )}
      </div>

      <div className={'flex max-sm:justify-end max-sm:flex-1 items-baseline gap-7'}>
        <img src={searchImg} height={18} width={18} alt='search'/>
        <img src={bagImg} height={18} width={18} alt='bag'/>
      </div>

      </nav>
    </header>
  )
}

export default Navbar