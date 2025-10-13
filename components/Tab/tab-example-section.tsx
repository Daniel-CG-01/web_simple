'use client';
import React from 'react';
import TabButton from './tab-button';
import TabExample from './tab_example';
import { EXAMPLES } from '@/scripts/data';

export default function TabExampleSection() {
  function handleClick() {

  }
  return (
    <>
    <section id="tab_section" className='my-12 md:mx-12 mx-4 flex flex-col'>
      <TabButton isSelected={true} onClick={handleClick}>{EXAMPLES.state.title}</TabButton>
      <TabExample/>
    </section>
    </>
  )
}
