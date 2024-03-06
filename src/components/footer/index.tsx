import React from 'react'
import Link from 'next/link'
import { IoMdHeart, IoLogoInstagram, IoLogoFacebook } from 'react-icons/io'

function Footer() {
  return (
    <footer className='flex flex-col pb-20 md:pb-4 gap-2 sm:gap-4 text-sm dark:bg-slate-900 dark:text-gray-400'>
      <div className='flex items-center justify-center space-x-2 text-xs'>
        <span className='text-gray-500 '>Hecho con</span>
        <IoMdHeart className='h-4 w-4 text-gray-500 ' />
        <span className='text-gray-500 '>por DinoLab.</span>
      </div>
      <div className='flex items-center justify-center space-x-2 text-xs'>
        <span className='text-gray-500 '>Síguenos en </span>
        <Link href='https://www.facebook.com/dino.labo'target='_blank'>
          <IoLogoFacebook className='h-5 w-5 text-blue-700 ' />
        </Link>

        <Link href='https://www.instagram.com/dinolabo/' target='_blank'>
          <IoLogoInstagram className='h-5 w-5 text-pink-400 ' />
        </Link>
      </div>
    </footer>
  )
}

export default Footer
