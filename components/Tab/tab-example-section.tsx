'use client';
import React from 'react';
import { useState } from 'react';
import TabButton from './tab-button';
import TabExample from './tab_example';
import { EXAMPLES } from '@/scripts/data';

export default function TabExampleSection() {
  const [selected, setSelected] = useState<keyof typeof EXAMPLES | null>(null); // Estado para la pestaña seleccionada
  function handleClick() {
  }
  return (
    <>
    <section id="tab_section" className='my-12 md:mx-12 mx-4 flex flex-col'>
      <div className='flex justify-start space-x-2'>
        <TabButton isSelected={true} onClick={handleClick}>{EXAMPLES.components.title}</TabButton>
        <TabButton isSelected={false} onClick={handleClick}>{EXAMPLES.jsx.title}</TabButton>
        <TabButton isSelected={false} onClick={handleClick}>{EXAMPLES.props.title}</TabButton>
        <TabButton isSelected={false} onClick={handleClick}>{EXAMPLES.state.title}</TabButton>
      </div>
      <TabExample/>
    </section>
    </>
  )
}
