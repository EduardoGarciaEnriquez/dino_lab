import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Logo from '../../../app/favicon.ico'

function DinoLabIcon() {
  return (
    <Link className='flex items-center space-x-2 text-xl font-medium' href='/'>
      <Image
          alt='Logo'
          src={Logo}
          width={40}
        />
      </Link>
  )
}

export default DinoLabIcon