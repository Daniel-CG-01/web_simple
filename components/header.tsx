import React from 'react'
import logoHeader from '@/public/react-core-concepts.png';
import Image from 'next/image';

export default function Header() {
  return (
    <>
    <header>
        <Image src={logoHeader} alt="React Concepts" width={150}/>
        <div>Header</div>
    </header>
    </>
  )
}
