import React from 'react'

export default function AboutLayout({children}) {
  return (
    <div className='space-y-4 mt-4'>
        <nav>Mission | Vision</nav>
        {children}
    </div>
  )
}
