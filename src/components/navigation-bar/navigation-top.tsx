import React from 'react'
import Link from 'next/link'

import { IoLogoWhatsapp } from 'react-icons/io'

import DinoLabIcon from '../ui/dino-lab-icon'
import ToggleTheme from '../ui/toggle-theme'

function NavigationTop() {
  return (
    <header
      className='hidden md:flex items-center justify-between px-4 py-4 border-b border-gray-200 fixed top-0 w-full z-10 bg-white 
    dark:bg-gray-950 dark:text-gray-50 dark:border-gray-800'
    >
      <DinoLabIcon />
      <nav className='hidden md:flex items-center gap-4 text-sm font-medium'>
        <ToggleTheme />

        <Link
          className='text-green-600 text-3xl animate-bounce hover:animate-none'
          href='https://wa.me/523334946342?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios%20de%20DinoLab'
          target='_blank'
        >
          <IoLogoWhatsapp />
        </Link>
      </nav>
    </header>
  )
}

export default NavigationTop
