import React from 'react'
import PButton from './PButton'
import Link from 'next/link'
import ThemeToggle from './ThemeToggle'

const linkStyle = `
    flex-1 md:flex-initial
`
const buttonStyle = `
    w-full md:w-fit
`

export default function PNavigation() {
  return (
    <nav className='flex justify-center gap-2 md:gap-5 flex-wrap'>
        <>       
            <Link className={linkStyle} href="#skills">
                <PButton className={buttonStyle} label='Skills' />
            </Link>
            <Link className={linkStyle} href="#experience">
                <PButton className={buttonStyle} label='Experience' />
            </Link>
            <Link className={linkStyle} href="#projects">
                <PButton className={buttonStyle} label='Projects' />
            </Link>
            <Link className={linkStyle} href="#contact">
                <PButton className={buttonStyle} label='Contact' />
            </Link>
        </>
        <ThemeToggle />
    </nav>
  )
}
