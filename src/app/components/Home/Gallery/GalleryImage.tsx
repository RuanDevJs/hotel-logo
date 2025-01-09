import Image, { StaticImageData } from 'next/image'

type imageTitleOptions = 'Rooms' | 'Dining' | 'Conferences & Meetings' | 'Service & Facilities' | 'Wedding Package';

interface IProps {
  image: StaticImageData;
  title: imageTitleOptions;
}

export default function GalleryImage({ image, title }: IProps) {
  return (
    <div className={`overflow-hidden relative group cursor-pointer ${title === 'Rooms' && 'grid-room'} absolute`}
    >
      <Image src={image.src}
        width={image.width}
        height={image.height}
        alt={title}
        className='object-cover'
        draggable={false}
      />
      <div
        className='absolute bottom-0 opacity-0 p-5 group-hover:opacity-100 group-hover:-translate-y-8 left-0 right-0 transition ease-in-out duration-[0.72s]'
      >
        <h2 className='text-center text-3xl font-bold text-white font-poppins'>{title}</h2>
      </div>
    </div>
  )
}
