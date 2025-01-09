import Logo from "@/assets/Logo -- Footer.svg"
import Image from "next/image"

export default function Footer() {
  return (
    <footer className='bg-[#1E1E1E] py-10'>
      <div className='sm:max-w-[960px] 2xl:max-w-[72%] m-auto flex justify-between gap-3 items-center'>
        <form className="w-[60%] box-border">
          <label htmlFor="newsletter" className="text-3xl font-normal font-poppins text-zinc-100 py-5 block">Newsletter & Special Promo</label>
          <div className="flex items-center">
            <input type="email" id="newsletter"
              className="px-5 py-4 rounded-tl-md rounded-bl-md w-[60%] outline-none font-poppins text-zinc-700 font-normal" placeholder="Enter your email here" />
            <button className="p-2.5 bg-[#196fc0] px-5 py-4 rounded-tr-md rounded-br-md font-poppins text-zinc-100 font-normal">Subscribe</button>
          </div>
        </form>
        <div className="flex flex-col items-center w-[40%] gap-5">
          <Image src={Logo} alt="" width={100} color="#fff" draggable={false} />
          <nav className="flex items-center gap-5 ml-7">
            <ul>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">About us</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Contact</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Location</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">FAQ</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Term of Use</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Privacy Police</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Services & Facilities</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">Careers</a>
              </li>
              <li>
                <a href="#" className="block py-1 px-0.5 font-poppins text-sm text-zinc-50">How to book</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
