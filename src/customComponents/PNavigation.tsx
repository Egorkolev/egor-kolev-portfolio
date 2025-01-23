import React from 'react'
import PButton from './PButton'
import Link from 'next/link'

export default function PNavigation() {
  return (
    <nav className='flex justify-center gap-5 flex-wrap'>
        <Link href="#skills">
            <PButton label='Skills' />
        </Link>
        <Link href="#projects">
            <PButton label='Projects' />
        </Link>
        <Link href="#experience">
            <PButton label='Experience' />
        </Link>
        <Link href="#contact">
            <PButton label='Contact' />
        </Link>
    </nav>
  )
}
