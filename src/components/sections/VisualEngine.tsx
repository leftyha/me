import { useEffect, useRef } from 'react'
import anime from 'animejs'

export default function VisualEngine() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    anime({
      targets: ref.current.querySelectorAll('.signal'),
      translateY: [-10, 10],
      opacity: [0.35, 1],
      duration: 1800,
      direction: 'alternate',
      loop: true,
      delay: anime.stagger(150),
      easing: 'easeInOutSine',
    })
  }, [])

  return (
    <section ref={ref} className="visual-engine">
      <div className="signal" />
      <div className="signal" />
      <div className="signal core" />
      <div className="signal" />
    </section>
  )
}
