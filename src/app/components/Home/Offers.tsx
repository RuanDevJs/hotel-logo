import Honeymoon from "@/app/assets/Honeymoon.jpg"
import Meetings from "@/app/assets/Meetings.jpg"
import RomanticDining from "@/app/assets/Romantic Dining.jpg"
import { User } from "lucide-react"

import Image from 'next/image'

export default function Offers() {
  return (
    <section id="special-offers" className='mt-20 mb-10 p-8 sm:max-w-[960px] 2xl:max-w-[72%] mx-auto'>
      <div>
        <h2 className='text-[#65AEF2] text-lg font-medium font-poppins'>Special Offers</h2>
        <div className='flex items-center justify-between'>
          <div>
            <h1 className='text-4xl py-3 font-medium font-poppins text-black'>Best offer of the month</h1>
            <p className='text-base text-zinc-500 font-normal leading-6 font-poppins'>Experience Fantastic Benefits and Obtain Better Rates When You <br /> Make a Direct Booking on Our Official Website</p>
          </div>
          <a href="#" className='text-[#2584dd] text-lg font-poppins font-normal'>View All</a>
        </div>
      </div>
      <div className='grid grid-cols-3 gap-8 mt-8'>
        <div className='box-border p-4 rounded-3xl shadow transition ease-in-out hover:-translate-y-6 cursor-pointer'>
          <Image
            src={Honeymoon.src}
            width={Honeymoon.width}
            height={Honeymoon.height}
            alt=""
            quality={80}
            draggable={false}
          />
          <p className='font-semibold text-sm text-zinc-800 py-2 font-poppins'>Room</p>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-xl text-zinc-900 font-poppins '>Honeymoon</h2>
            <span className='flex items-center gap-2'>
              <User size={23} color='#000' />
              <p className='font-semibold text-lg '>2</p>
            </span>
          </div>
          <p className='font-normal text-sm my-2 text-zinc-700'>Indulge in a Memorable One-Time Romantic Dinner for Two</p>
          <span className='font-semibold text-3xl text-zinc-800 text-center flex justify-center items-end mt-5 font-poppins'>
            $699 <p className='font-normal text-lg px-1'>/night</p>
          </span>
        </div>
        <div className='box-border p-4 rounded-3xl shadow transition ease-in-out hover:-translate-y-6 cursor-pointer'>
          <Image
            src={Meetings.src}
            width={Meetings.width}
            height={Meetings.height}
            alt=""
            quality={80}
            draggable={false}
          />
          <p className='font-semibold text-sm text-zinc-800 py-2'>Room</p>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-xl text-zinc-900 font-poppins'>Meetings</h2>
            <span className='flex items-center gap-2'>
              <User size={23} color='#000' />
              <p className='font-semibold text-lg'>30</p>
            </span>
          </div>
          <p className='font-normal text-sm my-2 text-zinc-700'>Experience an Exclusively Private Environment to Boost Your Productivity</p>
          <span className='font-semibold text-3xl text-zinc-800 text-center flex justify-center items-end mt-5 font-poppins'>
            $999 <p className='font-normal text-lg px-1'>/night</p>
          </span>
        </div>
        <div className='box-border p-4 rounded-3xl shadow transition ease-in-out hover:-translate-y-6 cursor-pointer'>
          <Image
            src={RomanticDining.src}
            width={RomanticDining.width}
            height={RomanticDining.height}
            alt=""
            quality={80}
            draggable={false}
          />
          <p className='font-semibold text-sm text-zinc-800 py-2'>Dining</p>
          <div className='flex items-center justify-between'>
            <h2 className='font-semibold text-xl text-zinc-900 font-poppins'>Romantic Dining</h2>
            <span className='flex items-center gap-2'>
              <User size={23} color='#000' />
              <p className='font-semibold text-lg '>2</p>
            </span>
          </div>
          <p className='font-normal text-sm my-2 text-zinc-700'>Indulge in a Memorable One-Time Romantic Dinner for Two</p>
          <span className='font-semibold text-3xl text-zinc-800 text-center flex justify-center items-end mt-5 font-poppins'>
            $499 <p className='font-normal text-lg px-1'>/table</p>
          </span>
        </div>
      </div>
    </section>
  )
}
