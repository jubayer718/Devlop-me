'use client'

import { useRef } from 'react'
import { ArrowLeftCircle, ArrowRightCircle } from 'lucide-react'
import SkillCard from './SkillCard'

const skills = [
  {
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    icon: '⚛️', 
  },
  {
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    icon: '⚛️',
  },
  {
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    icon: '⚛️', 
  },
  {
    title: 'HTML & CSS',
    description: 'Duis aute irure dolor in reprehenderit in voluptate.',
    icon: '⚛️', 
  },
  {
    title: 'JavaScript',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation.',
    icon: '⚛️',
  },
  {
    title: 'Webflow',
    description: 'Excepteur sint occaecat cupidatat non proident.',
    icon: '⚛️',
  },
]

export default function SkillsSlider() {
  const scrollRef = useRef<HTMLDivElement>(null)

  const scroll = (dir: 'left' | 'right') => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: dir === 'left' ? -320 : 320, behavior: 'smooth' })
    }
  }

  return (
    <section className="relative py-20 bg-black text-white">
      

      {/* Slider Controls */}
      <div className="absolute top-28 right-8 flex gap-2 z-10">
        <button onClick={() => scroll('left')}>
          <ArrowLeftCircle className="w-8 h-8 hover:text-green-400" />
        </button>
        <button onClick={() => scroll('right')}>
          <ArrowRightCircle className="w-8 h-8 hover:text-green-400" />
        </button>
      </div>

      {/* Scroll Container */}
      <div ref={scrollRef} className="flex overflow-x-hidden overflow-y-hidden gap-6 px-6 scrollbar-hide">
        {skills.map((skill, i) => (
          <SkillCard
            key={i}
            title={skill.title}
            description={skill.description}
            icon={skill.icon}
          />
        ))}
      </div>
    </section>
  )
}
