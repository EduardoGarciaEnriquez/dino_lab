'use client'
import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import { IoLogoWhatsapp, IoIosImages  } from "react-icons/io";

import DinoLabIcon from '../ui/dino-lab-icon';

export default function NavigationBottom() {
  const [value, setValue] = React.useState(0);

  return (
    <Box className='w-[100vw] fixed bottom-0 left-0 z-10 md:hidden border-t border-gray-200'>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Inicio" icon={<DinoLabIcon />} />
        <BottomNavigationAction label="Blog" icon={<IoIosImages className=' text-3xl' />} />
        <BottomNavigationAction href='https://wa.me/523334946342?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios%20de%20DinoLab' label="Contacto" icon={<IoLogoWhatsapp className=' text-green-600 text-3xl'/>} />
      </BottomNavigation>
    </Box>
  );
}
