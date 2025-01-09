import Header from '../Header'

export default function Main() {
  return (
    <main className='background h-[72dvh] relative p-8'>
      <div className='sm:w-[860px] 2xl:w-[72%] m-auto'>
        <Header />
        <div className='max-w-full absolute 2xl:bottom-24 sm:bottom-12'>
          <h2 className='font-semibold sm:text-4xl 2xl:text-6xl text-white 2xl:leading-tight sm:leading-tight font-poppins'>Discover Extraordinary <br />
            Comfort in Hotels</h2>
        </div>
      </div>
    </main>
  )
}
