import React, { useState, useEffect, useRef } from 'react'
import { useKeenSlider } from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import Img from "../assets/logoipsum.png"

const logos = [
  Img,
  Img,
  Img,
  Img,
  Img,
 
]

export default function LogoCarousel() {
  const timer = useRef()
  const [pause, setPause] = useState(false)

  const [sliderRef, slider] = useKeenSlider({
    loop: true,
    slides: {
      perView: 3,
      spacing: 15,
    },
    rubberband: true, // adds elastic dragging
    renderMode: 'performance',
    defaultAnimation: {
    duration: 2000,
    easing: (t) => t, // linear or smooth easing function
  },
    breakpoints: {
      '(max-width: 768px)': {
        slides: { perView: 2, spacing: 10 },
      },
      '(max-width: 480px)': {
        slides: { perView: 1, spacing: 8 },
      },
    },
  })

  useEffect(() => {
    if (!slider) return

    timer.current = setInterval(() => {
      if (!pause) {
        slider.current?.next()
      }
    }, 2000)

    return () => {
      clearInterval(timer.current)
    }
  }, [pause, slider])

  return (
    <div
  ref={sliderRef}
  className="keen-slider logo-carousel-section w-full max-w-full sm:max-w-xl md:max-w-2xl overflow-hidden"
  onMouseEnter={() => setPause(true)}
  onMouseLeave={() => setPause(false)}
  style={{
    maskImage:
      'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)',
    WebkitMaskImage:
      'linear-gradient(to right, rgba(0,0,0,0) 0%, rgb(0,0,0) 12.5%, rgb(0,0,0) 87.5%, rgba(0,0,0,0) 100%)',
  }}
>
  {logos.map((logo, index) => (
    <div
      key={index}
      className="keen-slider__slide flex justify-center items-center px-2 sm:px-4"
    >
      <img
        src={logo}
        alt={`logo-${index}`}
        className="object-contain max-h-25 w-auto"
      />
    </div>
  ))}
</div>

  )
}



