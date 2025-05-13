import Cover from '@/components/home/cover';
import Banner from '@/components/home/banner';
import { ChevronDown, ChevronRight, ChevronUp, GraduationCap, Lightbulb, Play } from 'lucide-react';
import SectionModulos from '@/components/section-modulos';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Cover />
    <Banner />
    <SectionModulos 
      title="Módulos" 
      description="Aprenda os conceitos básicos da linguagem C, desde a sintaxe até a programação orientada a objetos." 
      modulos={[
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "Os primeiros passos para entrar no mundo da programação!",
          id: "1"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "2"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "3"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "1"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "2"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "3"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "1"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "2"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "3"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "1"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "2"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "3"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "1"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "2"
        },
        {
          icon: <Lightbulb className="text-orange" size={"48px"} />,
          titulo: "Lógica de programação",
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "3"
        },
      ]}
    />
    <section className='relative w-201 h-75 m-auto mt-40 mb-80'>
        <div className="z-2 absolute w-65 h-52 bg-orange rounded-3xl flex justify-center items-center">
          <GraduationCap className="text-black" size={"96px"} />
        </div>
        <div className="z-1 absolute w-65 h-52 bg-black">
        </div>
        <div className="z-3 absolute right-0 w-136 h-32 bg-black rounded-bl-3xl">
        </div>
        <div className="z-1 absolute right-0 bottom-0 w-168 h-43 bg-orange rounded-3xl flex justify-end items-end pr-12 pb-10 text-black">
          <Link href='/atividades' className='flex gap-2 items-center hover:underline underline-offset-6 hover:scale-105 transition'>
            <p className="font-semibold text-2xl">Acesse as atividades</p>
            <ChevronUp size={"24px"} className='rotate-90'/>
          </Link>
        </div>
        <div className="z-0 absolute right-0 bottom-0 w-168 h-43 bg-black">
        </div>
        <div className="z-[-1] w-full h-full bg-orange rounded-3xl">
        </div>
        <div className="z-4 absolute bottom-0 w-29 h-19 bg-orange rounded-3xl">
        </div>
        <div className="z-3 absolute bottom-0 bg-black rounded-tr-3xl w-33 h-23">
        </div>
    </section>
    </>
  );
}
