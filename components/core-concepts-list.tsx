import React from 'react';
import Image from "next/image";
import componentsImg from "@/public/components.png";
import jsxImg from "@/public/jsx-ui.png";
import propsImg from '@/public/config.png';
import stateImg from "@/public/state-mgmt.png";
import CoreConcepts from "@/components/core-concepts";

export default function CoreConceptsList() {
  return (
    <>
    <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
    <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">
      Conceptos básicos de React
    </h1>
    <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
      <CoreConcepts 
        title="Componentes"
        description="El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa."
        image={componentsImg}/>
      <CoreConcepts 
        title="Componentes"
        description="El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa."
        image={jsxImg}/>
      <CoreConcepts 
        title="Componentes"
        description="El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa."
        image={propsImg}/>
      <CoreConcepts 
        title="Componentes"
        description="El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa."
        image={stateImg}/>
    </ul>
    </section>
    </>
  )
}
