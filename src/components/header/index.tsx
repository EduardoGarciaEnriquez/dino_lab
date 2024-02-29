'use client'
import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

import Button from '@mui/material/Button'
import { Drawer, Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { IoMdMenu, IoIosClose, IoIosBook, IoIosImages, IoMdPeople } from 'react-icons/io'
import Logo from '../../app/favicon.ico'

function Header() {
  const [open, setOpen] = useState<boolean>(false)

  return (
    <header className='flex items-center justify-between px-4 sm:px-6 lg:px-8 py-4 border-b border-gray-200 dark:border-gray-800'>
      <Link className='flex items-center space-x-2 text-xl font-medium' href='/'>
      <Image
          alt='Logo'
          src={Logo}
          width={40}
          height={40}
        />
      </Link>
      <nav className=' hidden md:flex items-center gap-4 text-sm font-medium'>
        <Link className='text-gray-900 hover:underline dark:text-gray-50' href='#'>
          Catalogo
        </Link>
        <Link className='text-gray-900 hover:underline dark:text-gray-50' href='#'>
          Acerca de nosotros
        </Link>
        <Link className='text-gray-900 hover:underline dark:text-gray-50' href='#'>
          Blog
        </Link>
      </nav>

      <Button className='text-black text-2xl p-0 md:hidden' onClick={() => setOpen(true)}>
        <IoMdMenu />
      </Button>

      <Drawer anchor='right' open={open} onClose={() => setOpen(false)}>
        <div className='flex justify-end'>
          <Button className='text-black text-3xl' onClick={() => setOpen(false)}>
            <IoIosClose />
          </Button>
        </div>

        <Box sx={{ minWidth: 320, width: '100vw', maxWidth: 425, bgcolor: 'background.paper' }}>
          <nav aria-label='main mailbox folders'>
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IoIosImages className='text-black text-3xl' />
                  </ListItemIcon>
                  <ListItemText primary='Catalogo' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IoMdPeople className='text-black text-3xl' />
                  </ListItemIcon>
                  <ListItemText primary='Acerca de nosotros' />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    <IoIosBook className='text-black text-3xl' />
                  </ListItemIcon>
                  <ListItemText primary='Blog' />
                </ListItemButton>
              </ListItem>
            </List>
          </nav>
        </Box>
      </Drawer>
    </header>
  )
}

export default Header
