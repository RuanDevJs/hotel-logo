import { useRef, useState } from 'react'

import { Baby, CalendarDays, User } from 'lucide-react'
import { Calendar } from 'primereact/calendar'

import { MultiSelect } from 'primereact/multiselect'
import { Nullable } from 'primereact/ts-helpers'

export default function Booking() {
  const calendarRef = useRef<Calendar>(null);
  const [calendarDate, setCalendarDate] = useState<Nullable<Date> | null>(null);

  const formatedDate = calendarDate?.toLocaleDateString('pt-BR');

  const OPTIONS_ADULT = ['Room for 1 adult', 'Room for 2 adults'];
  const OPTIONS_CHILDREN = ['No children', '1 child', '2 children', '3 children'];

  function handleClick() {
    if (calendarRef && calendarRef.current) {
      calendarRef.current.show()
    }
  }

  const selectedItemTemplate = () => {
    return (
      <div className='w-full flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <User size={24} color='#000' />
          <p className='text-base block font-semibold text-black'>Adults</p>
        </div>
        <p>2</p>
      </div>
    )
  }

  const selectedChildrenItemTemplate = () => {
    return (
      <div className='w-full flex items-center justify-between gap-3'>
        <div className='flex items-center gap-3'>
          <Baby size={24} color='#000' />
          <p className='text-base block font-semibold text-black'>Child</p>
        </div>
        <p>2</p>
      </div>
    )
  }

  const itemTemplate = (option: string) => {
    return (
      <p className='text-base block font-normal text-zinc-800'>
        {option}
      </p>
    )
  }

  const panelHeaderTemplate = () => {
    return (
      <p className='p-5 font-semibold text-sm text-zinc-500'>🏖️ Please select an option</p>
    )
  }

  function handleCalendarDate(event: Nullable<Date>) {
    setCalendarDate(event);
  }
  return (
    <section id='booking' className='mt-10'>
      <div className='sm:max-w-[960px] 2xl:max-w-[72%] m-auto bg-[#E9F3F6] p-5 rounded-lg shadow'>
        <div className='text-center space-y-1'>
          <h2 className='2xl:text-3xl text-xl font-medium font-poppins text-zinc-800'>Book a Room</h2>
          <p className='2xl:text-base text-sm text-zinc-700 font-poppins'>
            Discover the perfect space for you!
          </p>
        </div>
        <form className='mt-5 grid grid-cols-[1fr_1.2fr_1fr] justify-center gap-5 '>
          <div className='max-w-full overflow-hidden'>
            <p className='font-semibold text-base py-2'>Date</p>
            <div
              className='flex items-center justify-center gap-3 bg-white rounded cursor-pointer h-[48px] relative overflow-hidden'
              onClick={handleClick}
            >
              <CalendarDays size={24} />
              <p className='font-semibold text-base text-zinc-800'>
                {calendarDate ? formatedDate : 'Check Avaliable'}
              </p>
              <Calendar
                style={{ minWidth: '460px', maxWidth: '100%', height: '100%', display: 'none' }}
                value={calendarDate}
                onChange={event => handleCalendarDate(event.value)}
                id="input-calendar"
                ref={calendarRef}
                touchUI
              />
            </div>
          </div>
          <div>
            <p className='font-semibold text-base py-2'>Person</p>
            <div className='flex w-full'>
              <MultiSelect
                options={OPTIONS_ADULT}
                selectedItemTemplate={selectedItemTemplate}
                itemTemplate={option => itemTemplate(option)}
                panelHeaderTemplate={panelHeaderTemplate}
                filter={false}
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0, width: '100%' }}
              />
              <div className='flex w-full justify-between gap-3'>
                <MultiSelect
                  options={OPTIONS_CHILDREN}
                  selectedItemTemplate={selectedChildrenItemTemplate}
                  itemTemplate={option => itemTemplate(option)}
                  panelHeaderTemplate={panelHeaderTemplate}
                  filter={false}
                  style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0, width: '100%' }}
                />
              </div>
            </div>
          </div>
          <button className='h-[45px] self-end rounded bg-[#1b83e4] text-white font-semibold font-poppins' type='button'>
            Book Now
          </button>
        </form>
      </div>
    </section>
  )
}
