import React from 'react'
import LogoSvg from "@/assets/Logo.svg"
import Image from 'next/image'

export default function Header() {
  return (
    <header className='w-full shadow-md p-3 rounded-3xl border bg-white m-auto'>
      <ul className='flex items-center justify-between gap-5 font-poppins'>
        <li>
          <a href='#' className='p-3 block text-base font-normal text-[#65AEF2]'>Home</a>
        </li>
        <li>
          <a href='#' className='p-3 block text-base font-normal'>About</a>
        </li>
        <li>
          <a href='#' className='p-3 block text-base font-normal'>Newsletter</a>
        </li>
        <li>
          <Image src={LogoSvg} alt="" draggable={false} />
        </li>
        <li>
          <a href='#' className='p-3 block text-base font-normal'>Rooms</a>
        </li>
        <li>
          <a href='#' className='p-3 block text-base font-normal'>Services</a>
        </li>
        <li>
          <a href='#' className='p-3 block text-base font-normal'>Pricing</a>
        </li>
      </ul>
    </header>
  )
}
