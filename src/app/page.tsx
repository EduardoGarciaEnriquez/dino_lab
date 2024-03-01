import Image from 'next/image'

import { IoIosFlask, IoIosCreate, IoIosConstruct } from 'react-icons/io'
import { Card, CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { CardActionArea } from '@mui/material'

import Slider from 'components/components/ui/carousel'
import BannerImg1 from '../assets/images/dino_lab_banner.png'
import BannerImg2 from '../assets/images/IMG_20200701_081436.jpg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen pt-8 md:pt-0'>
      <main className='flex-1'>
        <section className='w-full py-12 md:py-24 lg:py-24'>
          <div className='container px-4 md:px-6'>
            <div className='grid items-center gap-6 lg:grid-cols-[1fr_500px] lg:gap-12 xl:grid-cols-[1fr_550px]'>
              <Slider>
                <Image
                  alt='Image'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                  src={BannerImg1}
                  width={1024}
                  height={1024}
                />
                <Image
                  alt='Image'
                  className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                  src={BannerImg2}
                  width={1024}
                  height={1024}
                />
              </Slider>

              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-2'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>Diseño e impresión en 3D</h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                    Beautifully designed and crafted products for your lifestyle. Discover the perfect items to enhance
                    your home, office, and beyond.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8'>
          <div className='container px-4 md:px-6'>
            <div className='grid gap-6 lg:grid-cols-2 lg:gap-12'>
              <div className='flex flex-col justify-center space-y-2'>
                <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>Nuestros servicios</h2>
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400'>
                  Let us take care of you. We offer a range of services designed to make your life easier and more
                  enjoyable. From expert consultations to personalized recommendations, we are here to help.
                </p>
              </div>
              <div className='grid gap-6 md:grid-cols-3 text-center lg:text-left'>
                <div className='flex flex-col gap-1'>
                  <IoIosFlask className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Impresión en 3D</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Let us curate the perfect day for you with exclusive access and tailored recommendations.
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <IoIosCreate className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Diseño y modelado 3D</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Gain insights from our team of experts to elevate your knowledge and skills.
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <IoIosConstruct className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Optimización de piezas</h3>
                  <p className='text-sm text-gray-500 dark:text-gray-400'>
                    Participate in our wellness workshops to recharge your mind and body.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className='py-8 flex justify-around gap-4 flex-col items-center md:flex-row'>
          <Card className=' w-[90vw] min-w-[275px] max-w-[400px]'>
            <CardActionArea>
              <div className='bg-black text-white text-center py-6'>
                <Typography gutterBottom variant='h5' component='div'>
                  Impresión chica
                </Typography>
                <Typography gutterBottom variant='h4' component='div'>
                  $150.00 MXN
                </Typography>
              </div>
              <CardContent>
                <Typography variant='body1' color='text.principal'>
                  <ul className='list-disc px-4'>
                    <li>Piezas de entre 5cm y 10cm</li>
                    <li>
                      <b>Precio de referencia, todas las piezas deben ser analizadas y cotizadas</b>
                    </li>
                    <li>Precio de mayoreo a partir de 30 piezas</li>
                    <li>Colores disponibles Blanco y Negro</li>
                    <li>Otros colores bajo pedido</li>
                    <li>Calidad estandar resolución 0.6mm</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className=' w-[90vw] min-w-[275px] max-w-[400px]'>
            <CardActionArea>
              <div className='bg-black text-white text-center py-6'>
                <Typography gutterBottom variant='h5' component='div'>
                  Impresión mediana
                </Typography>
                <Typography gutterBottom variant='h4' component='div'>
                  $400.00 MXN
                </Typography>
              </div>
              <CardContent>
                <Typography variant='body1' color='text.principal'>
                  <ul className='list-disc px-4'>
                    <li>Piezas de entre 10cm y 15cm</li>
                    <li>
                      <b>Precio de referencia, todas las piezas deben ser analizadas y cotizadas</b>
                    </li>
                    <li>Precio de mayoreo a partir de 20 piezas</li>
                    <li>Colores disponibles Blanco y Negro</li>
                    <li>Otros colores bajo pedido</li>
                    <li>Calidad estandar resolución 0.6mm</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>

          <Card className=' w-[90vw] min-w-[275px] max-w-[400px]'>
            <CardActionArea>
              <div className='bg-black text-white text-center py-6'>
                <Typography gutterBottom variant='h5' component='div'>
                  Impresión grande
                </Typography>
                <Typography gutterBottom variant='h4' component='div'>
                  $800.00 MXN
                </Typography>
              </div>
              <CardContent>
                <Typography variant='body1' color='text.principal'>
                  <ul className='list-disc px-4'>
                    <li>Piezas de entre 15cm y 25cm</li>
                    <li>
                      <b>Precio de referencia, todas las piezas deben ser analizadas y cotizadas</b>
                    </li>
                    <li>Precio de mayoreo a partir de 10 piezas</li>
                    <li>Colores disponibles Blanco y Negro</li>
                    <li>Otros colores bajo pedido</li>
                    <li>Calidad estandar resolución 0.6mm</li>
                  </ul>
                </Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </section>
      </main>
      {/* <footer className='flex flex-col gap-2 py-4 sm:gap-4 text-sm'>
        <div className='flex items-center justify-center space-x-2 text-xs'>
          <span className='text-gray-500 dark:text-gray-400'>Made with</span>
          <HeartIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
          <span className='text-gray-500 dark:text-gray-400'>by Acme Inc.</span>
        </div>
      </footer> */}
    </div>
  )
}

function CalendarCheckIcon(props: React.SVGProps<SVGSVGElement>): JSX.Element {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <rect width='18' height='18' x='3' y='4' rx='2' ry='2' />
      <line x1='16' x2='16' y1='2' y2='6' />
      <line x1='8' x2='8' y1='2' y2='6' />
      <line x1='3' x2='21' y1='10' y2='10' />
      <path d='m9 16 2 2 4-4' />
    </svg>
  )
}
