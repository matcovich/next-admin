'use client'
import { secundaryFont } from "@/config/fonts"
import Image from "next/image"
import Link from "next/link"
import MenuIcon from "./MenuIcon"
import { usePathname } from "next/navigation"


export const TopMenu = () => {
    const router = usePathname();
    return (
        <nav className="bg-gray-900 w-full h-[94px]">
            <div className="container mx-auto px-4 py-6 flex justify-center md:justify-between items-center w-full h-[94px]">
                {/**Logo */}
                <MenuIcon  />
                <div>
                    <Link href="/">
                        <Image src="./img/logo.svg" alt="logo" width={136} height={100} quality={100} />
                    </Link>
                </div>

                {/**Menu */}

                <div className={`${secundaryFont.className} font-extralight gap-3 lg:gap-9 text-white lg:text-lg hidden md:flex`}>
                    <Link href="/"
                    className={`hover:text-orange-200 ${router === '/' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>Inicio</span>
                    </Link>
                    <Link href="nuestras-ventajas"
                    className={`hover:text-orange-200 ${router === '/nuestras-ventajas' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>Nuestras ventajas</span>
                    </Link>
                    <Link href="areas-de-practica"
                    className={`hover:text-orange-200 ${router === '/areas-de-practica' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>Areas de practica</span>
                    </Link>
                    <Link href="equipo"
                    className={`hover:text-orange-200 ${router === '/equipo' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>El equipo</span>
                    </Link>
                    <Link href="contacto"
                    className={`hover:text-orange-200 ${router === '/contacto' ? 'border-b-[0.5px] border-white' : ''}`}
                    >
                        <span>Contacto</span>
                    </Link>
                </div>

            </div>

        </nav>
    )
}
