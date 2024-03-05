import React from 'react'
import Link from 'next/link'

import { Button } from '@mui/material'
import { IoLogoWhatsapp } from 'react-icons/io'

import DinoLabIcon from '../ui/dino-lab-icon'

function NavigationTop() {

  return (
    <header className='hidden md:flex items-center justify-between px-4 py-4 border-b border-gray-200 dark:border-gray-800 fixed top-0 w-full z-10 bg-white dark:bg-gray-900'>
      <DinoLabIcon />
      <nav className='hidden md:flex items-center gap-4 text-sm font-medium'>
    
        <Link className='text-gray-900 hover:underline dark:text-gray-50' href='#'>
          <Button>Blog</Button>
        </Link>

        <Link className='text-green-600 text-3xl animate-bounce hover:animate-none' href='https://wa.me/523334946342?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios%20de%20DinoLab' target='_blank'>
          <IoLogoWhatsapp/>
        </Link>
      </nav>
    </header>
  )
}

export default NavigationTop
