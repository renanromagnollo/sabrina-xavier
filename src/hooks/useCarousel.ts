import { useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import type { EmblaOptionsType } from 'embla-carousel'

export function useCarousel(options: EmblaOptionsType) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options)

  const scrollPrev = useCallback(() => {
    emblaApi?.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    emblaApi?.scrollNext()
  }, [emblaApi])

  return { emblaRef, scrollPrev, scrollNext }
}