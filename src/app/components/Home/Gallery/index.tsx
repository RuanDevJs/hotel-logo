import RoomImage from "@/app/assets/Rooms.jpg"
import DiningImage from "@/app/assets/Dining.jpg"
import ConferencesImage from "@/app/assets/Conferences & Meetings.jpg"
import ServiceImage from "@/app/assets/Service.jpg"
import WeddingImage from "@/app/assets/Wedding.jpg"
import GalleryImage from "./GalleryImage"

export default function Gallery() {
  return (
    <section className="mt-12 border-t-2 border-t-zinc-100 pt-10 pb-5">
      <div className='sm:w-[960px] 2xl:w-[72%] m-auto gap-5 grid-qualitys'>
        <GalleryImage image={RoomImage} title="Rooms" />
        <GalleryImage image={DiningImage} title="Dining" />
        <GalleryImage image={ConferencesImage} title="Conferences & Meetings" />
        <GalleryImage image={ServiceImage} title="Service & Facilities" />
        <GalleryImage image={WeddingImage} title="Wedding Package" />
      </div>
    </section>
  )
}
