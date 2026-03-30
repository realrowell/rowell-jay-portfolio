import { useState } from 'react' 
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackwardIosIcon from '@mui/icons-material/ArrowBackIos';


type CarouselProps = {
  items: string[]
}

export default function Carousel({ items }: CarouselProps) {
  const [current, setCurrent] = useState(0)

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? items.length - 1 : prev - 1))
  }

  const nextSlide = () => {
    setCurrent((prev) => (prev === items.length - 1 ? 0 : prev + 1))
  }

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {items.map((item, index) => (
          <div key={index} className="min-w-full">
            <div className="relative h-full max-h-[60vh] w-full">
              <img
                src={item?.toString() || "/images/banner-placeholder.jpg"} 
                className="h-full w-full object-cover"
              />

              {/* <div className="absolute inset-0 bg-black/30" />

              <div className="absolute bottom-0 left-0 z-10 p-6 text-left text-white">
                <h3 className="text-2xl font-semibold">Image title</h3>
                <p className="mt-2 max-w-xl text-sm">Image description</p>
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={prevSlide}
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 bg-white/80 px-4 py-2 text-black shadow hover:bg-white hover:cursor-pointer"
      >
        <ArrowBackwardIosIcon fontSize='small'/>
      </button>

      <button
        type="button"
        onClick={nextSlide}
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 bg-white/80 px-4 py-2 text-black shadow hover:bg-white hover:cursor-pointer"
      >
        <ArrowForwardIosIcon fontSize='small'/>
      </button>

      <div className="absolute bottom-4 left-1/2 z-20 flex -translate-x-1/2 gap-2">
        {items.map((item, index) => (
          <button
            key={item+index}
            type="button"
            onClick={() => setCurrent(index)}
            className={`h-3 w-3 rounded-full ${
              current === index ? 'bg-white' : 'bg-white/40'
            }`}
          />
        ))}
      </div>
    </div>
  )
}
