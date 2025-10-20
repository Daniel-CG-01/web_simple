<<<<<<< HEAD
import React from 'react';
import Header from '@/components/header';

export default function Home() {
  return (
    <>
    <Header />
    <div className='font-sixtyfour'>Esta es la página principal</div>
    </>
=======
import Image from "next/image";
import Header from "@/components/header";
import componentsImg from "@/public/components.png";
import jsxImg from "@/public/jsx-ui.png";
import propsImg from '@/public/config.png';
import stateImg from "@/public/state-mgmt.png";
import CoreConcepts from "@/components/core-concepts";
import CoreConceptsList from "@/components/core-concepts-list";
import TabExampleSection from "@/components/Tab/tab-example-section";

export default function Home() {
  return (
  <>
  <Header/>
  <CoreConceptsList/>
  <TabExampleSection/>
  </>
>>>>>>> e2601414e773cac1cdf10365dc643017659130ab
  );
}
