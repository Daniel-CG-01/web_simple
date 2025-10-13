import Image from "next/image";
import Header from "@/components/header";
import componentsImg from "@/public/components.png";
import jsxImg from "@/public/jsx-ui.png";
import propsImg from '@/public/config.png';
import stateImg from "@/public/state-mgmt.png";

export default function Home() {
  return (
  <>
  <Header/>
  <section id="conceptos" className="m-12 flex flex-col justify-center bg-violet-800 min-w-44">
    <h1 className="text-2xl font-extrabold text-slate-100 p-3 mx-auto mb-6 overflow-clip">
      Conceptos básicos de React
    </h1>
    <ul className="m-3 md:m-8 flex flex-col md:flex-row space-y-16 md:space-y-0 md:space-x-6">
      <li className="flex flex-col items-center justify-center">
        <Image src={componentsImg} alt="componentes" className="w-32"/>
        <h2 className="text-x1 font-bold text-slate-100">Componentes</h2>
        <p className="p-3 mt-2 text-slate-200">
          El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa.
        </p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Image src={jsxImg} alt="jsxImg" className="w-32"/>
        <h2 className="text-x1 font-bold text-slate-100">Componentes</h2>
        <p className="p-3 mt-2 text-slate-200">
          El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa.
        </p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Image src={propsImg} alt="propsImg" className="w-32"/>
        <h2 className="text-x1 font-bold text-slate-100">Componentes</h2>
        <p className="p-3 mt-2 text-slate-200">
          El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa.
        </p>
      </li>
      <li className="flex flex-col items-center justify-center">
        <Image src={stateImg} alt="stateImg" className="w-32"/>
        <h2 className="text-x1 font-bold text-slate-100">Componentes</h2>
        <p className="p-3 mt-2 text-slate-200">
          El núcleo de React son los componentes. Un componente es una pieza reutilizable de código que representa una parte de la interfaz de usuario. Los componentes pueden ser tan simples como un botón o tan complejos como una página completa.
        </p>
      </li>
    </ul>
  </section>
  </>
  );
}
