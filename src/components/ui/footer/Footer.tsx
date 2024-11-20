
import { secundaryFont } from '@/config/fonts'
// import Image from 'next/image'
import Link from 'next/link'
import { FaInstagram, FaLinkedin, FaRegCopyright } from 'react-icons/fa6'

export default function Footer() {
    return (
        <footer className="bg-[#0E0B0A] text-white">
            <div  className={secundaryFont.className + ' text-lg font-bold container mx-auto px-4 pt-6'}>
                <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center lg:justify-between  lg:py-6">
                    <div className="w-full basis-2/3 lg:basis-2/6 xl:basis-5/12 order-2 lg:order-1 pb-3 lg:pr-4 ">
                    <p className="pb-2 lg:pb-6">  Contáctanos</p>
                    <p className="font-semibold  text-sm pb-2">  Dirección: <span className="font-light pl-4">Rosario Norte #532, Edificio Matta, oficina 1304, Las Condes.</span> </p>
                    <p className="font-semibold  text-sm pb-2">  Teléfono: <span className="font-light pl-4">+562 2232223 oficina</span> </p>
                    <p className="font-semibold  text-sm">  Email: <span className="font-light pl-4">contacto@quinzio.cl</span></p>
                    </div>
                    <div className="basis-full lg:basis-2/6 xl:basis-2/12 order-1 lg:order-2 flex justify-center items-center lg:border-x-[0.5px] lg:border-gray-600 pb-6 lg:pt-4">
                        
                    </div>
                    <div className="w-full md:basis-1/3 lg:basis-2/6 xl:basis-5/12 order-3 lg:order-3 flex md:self-start lg:justify-center">
                        <div className="flex flex-col py-3 lg:py-0 gap-3 lg:gap-6">
                            <p>Redes sociales</p>
                            <div className="flex gap-4">
                                <Link href={"https://www.linkedin.com/company/quinzio-lcp/"} target="_blank"> <FaLinkedin  className='text-2xl '/></Link>
                                <Link href={"https://www.instagram.com/quinzio_lcp/?hl=es"} target="_blank"> <FaInstagram className='text-2xl '/></Link>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full pb-3">
                    <p className="flex justify-center items-center p-2 gap-2 font-light text-xs lg:text-sm">Copyright  <FaRegCopyright /> quinziolpc.cl <span className="hidden lg:block">Todos los derechos reservados.</span></p>
                </div>
            </div>
        </footer>
    )
}
