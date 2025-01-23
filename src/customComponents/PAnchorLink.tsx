import Link from 'next/link'
import React from 'react'

interface ButtonType {
    label?: string;
    hrefLink: string;
}

export default function PAnchorLink({hrefLink, label}: ButtonType) {
  return (
    <Link className='
        decoration-none 
        text-blueText 
        text-base 
        hover:text-pinkShadeText 
        shadow-sm 
        hover:shadow-pinkShadeText
        ' 
        href={hrefLink}
    >
        {label}
    </Link>
  )
}
