'use client'
import React, { ReactNode } from 'react'

import Carousel from 'react-material-ui-carousel'

function Slider({children}: {children: ReactNode}) {
  return (
    <Carousel animation='slide'>
      {children}
    </Carousel>
  )
}

export default Slider
