import React from 'react'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

import { IoIosMoon, IoMdSunny } from 'react-icons/io'

function ToggleTheme() {
  const searchParams = useSearchParams()
  const theme = searchParams.get('theme')

  return (
    <Link
      className='flex items-center space-x-2 text-xl font-medium'
      href={theme === 'dark' ? '/?theme=light' : '/?theme=dark'}
    >
      {theme === 'dark' ? (
        <IoIosMoon className='dark:text-gray-50 text-3xl' />
      ) : (
        <IoMdSunny className='dark:text-gray-50 text-3xl' />
      )}
    </Link>
  )
}

export default ToggleTheme
