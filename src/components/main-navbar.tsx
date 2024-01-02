'use client'
import Link from "next/link"
import { SkoolyLogo, PlusIcon } from "./icons"
import { useState } from "react"


function MainNavbar() {

  const [showOptions, setShowOptions] = useState(false);

  return (
    <header className="text-white">
        <nav className="flex justify-between items-center py-4 px-10 border-b border-light-white border-solid">
            <Link href="/">
                <SkoolyLogo width="140" height="35" />
            </Link>
            <div className="relative flex items-center">
           
                <button className="p-1 hover-primary" onClick={() => setShowOptions(!showOptions)}>
                    <PlusIcon width="20" height="20" />
                </button>

                <div className={`absolute bg-primary top-full right-full border-all-white flex flex-col w-fit transition-transform duration-200 ease-in origin-top-right ${showOptions? "scale-100": "scale-0"}`}>
                    <button className="py-2 px-5 whitespace-nowrap hover-primary">Crear Curso</button>
                    <button className="py-2 px-5 whitespace-nowrap hover-primary">Unirse Curso</button>
                </div>
            </div>
        </nav>
    </header>
  )
}

export default MainNavbar