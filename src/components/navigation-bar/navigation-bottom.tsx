'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import { IoLogoWhatsapp, IoIosImages } from 'react-icons/io'

import DinoLabIcon from '../ui/dino-lab-icon'
import ToggleTheme from '../ui/toggle-theme'

export default function NavigationBottom() {
  return (
    <Box className='w-[100vw] fixed bottom-0 left-0 z-10 md:hidden '>
      <BottomNavigation
        className='border-t border-gray-200 dark:bg-gray-950 dark:text-gray-50 dark:border-gray-800'
        showLabels
        value={0}
      >
        <BottomNavigationAction label='' icon={<DinoLabIcon />} />
        <BottomNavigationAction label='' icon={<ToggleTheme />} />
        <BottomNavigationAction
          href='https://wa.me/523334946342?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios%20de%20DinoLab'
          label={<span className='dark:text-gray-50'>Contacto</span>}
          icon={<IoLogoWhatsapp className=' text-green-600 text-3xl' />}
        />
      </BottomNavigation>
    </Box>
  )
}
