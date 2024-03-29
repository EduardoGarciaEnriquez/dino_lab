import Image from 'next/image'

import { IoIosFlask, IoIosCreate, IoIosConstruct, IoMdHeart } from 'react-icons/io'
import { Card, CardContent } from '@mui/material'
import { Typography } from '@mui/material'
import { CardActionArea } from '@mui/material'
import { Button } from '@mui/material'

import Slider from '@/components/ui/carousel'
import BannerImg1 from '../assets/images/dino_lab_banner.png'
import img1 from '@/assets/images/banner_img_01.jpg'
import img2 from '@/assets/images/banner_img_02.jpg'
import img3 from '@/assets/images/banner_img_03.jpg'
import img4 from '@/assets/images/banner_img_04.jpg'
import img5 from '@/assets/images/banner_img_05.jpg'
// import img6 from '@/assets/images/banner_img_06.jpg'
import img7 from '@/assets/images/banner_img_07.jpg'

export default function Home() {
  return (
    <div className='flex flex-col min-h-screen md:pt-0 pb-12 dark:bg-slate-900 dark:text-gray-400'>
      <main className='flex-1'>
        <section className='w-full pt-6 md:py-24 lg:py-24'>
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

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                    src={img1}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-white text-black rounded-md p-2 md:p-6 lg:p-10 text-wrap text-sm sm:text-lg'>
                    <h3 className='font-bold'>Conoce más de lo que hacemos.</h3>
                    <p>Ofrecemos servicios integrales de diseño e impresión en 3D</p>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                    src={img2}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-black text-white rounded-md p-2 text-wrap text-sm sm:text-lg'>
                    <p>impresión 3D monocromo</p>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                    src={img3}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-black text-white rounded-md p-2 text-wrap text-sm sm:text-lg'>
                    <p>Diseño y optimización para impresión 3D de piezas funcionales</p>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                    src={img4}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-black text-white rounded-md p-2 text-wrap text-sm sm:text-lg'>
                    <p>Materiales flexibles (TPU-A)</p>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full'
                    src={img5}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-black text-white rounded-md p-2 text-wrap text-sm sm:text-lg'>
                    <p>Variedad de colores</p>
                  </div>
                </div>

                <div className='relative'>
                  <Image
                    alt='Image'
                    className='mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full [zoom: 2.5]'
                    src={img7}
                    width={1024}
                    height={1024}
                    loading='lazy'
                  />
                  <div className='absolute bottom-5 max-w-[calc(100%-40px)] right-5 opacity-80 bg-black text-white rounded-md p-2 text-wrap text-sm sm:text-lg'>
                    <p>Diseño personalizado e impresión por mayoreo.</p>
                  </div>
                </div>
              </Slider>

              <div className='flex flex-col justify-center space-y-4'>
                <div className='space-y-6 md:space-y-10'>
                  <h1 className='text-3xl font-bold tracking-tighter sm:text-5xl'>
                    Dino Lab: Diseño e impresión en 3D
                  </h1>
                  <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '>
                    Servicios de impresión y diseño en 3D de primera calidad para dar vida a tus ideas. ¡Permítenos
                    ayudarte a crear y <b>libera tu creatividad</b>!
                  </p>

                  <Button
                    variant='outlined'
                    href='https://wa.me/523334946342?text=¡Hola!%20Quiero%20más%20información%20sobre%20los%20servicios%20de%20DinoLab'
                    className='bg-black border-none text-white w-[100%] animate-bounce text-xl hover:animate-none hover:text-green-600 hover:border-green-600'
                    target='_blank'
                  >
                    Contáctanos
                  </Button>
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
                <p className='max-w-[600px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed '>
                  Permítenos ayudarte. Ofrecemos una variedad de servicios diseñados para hacer tu vida más fácil. Desde
                  consultas expertas hasta recomendaciones personalizadas, estamos aquí para ayudarte.
                </p>
              </div>
              <div className='grid gap-6 md:grid-cols-3 text-center lg:text-left'>
                <div className='flex flex-col gap-1'>
                  <IoIosFlask className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Impresión en 3D</h3>
                  <p className='text-sm text-gray-500 '>
                    Impresión en filamento PLA, TPU-A y PET-G en varios colores. Prototipos económicos y piezas de alta
                    calidad.
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <IoIosCreate className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Diseño y modelado 3D</h3>
                  <p className='text-sm text-gray-500 '>
                    Creación de diseños y modelos en 3D utilizando medidas especificas o diseños de referencia.
                  </p>
                </div>
                <div className='flex flex-col gap-1'>
                  <IoIosConstruct className='w-12 h-12 self-center lg:self-start' />
                  <h3 className='font-semibold'>Optimización de piezas</h3>
                  <p className='text-sm text-gray-500 '>
                    Asesoramiento <b>gratuito</b> para reducir costos, tiempo y errores de impresión, al contratar
                    cualquiera de nuestros servicios
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
              </CardContent>
            </CardActionArea>
          </Card>
        </section>
      </main>
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
