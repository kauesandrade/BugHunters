import Cover from '@/components/home/cover';
import Banner from '@/components/home/banner';
import { Lightbulb, Section } from 'lucide-react';
import SectionModulos from '@/components/section-modulos';

export default function Home() {
  function handleNavigation(arg0: string): void {
    throw new Error('Function not implemented.');
  }

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

      <section className='flex felx-row gap-3 items-end lg:px-45 px-20 py-20'>
        <img className="cursor-pointer size-14" src="/logo.svg" alt="Logo Bug Hunters" />
        <p className='text-orange font-semibold text-2xl hover:underline decoration-orange underline-offset-8'>conheça nossa equipe...</p>
      </section>
    </>
  );
}
