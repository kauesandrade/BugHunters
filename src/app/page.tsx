import Cover from '@/components/home/cover';
import Banner from '@/components/home/banner';
import { Lightbulb, Section, Terminal } from 'lucide-react';
import SectionModulos from '@/components/section-modulos';

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
          texto: "texto texto texto texto texto texto texto texto texto texto texto texto",
          id: "1"
        },
        {
          icon: <Terminal className="text-orange" size={"48px"} />,
          titulo: "Introdução à programação em C",
          texto: "Veja o básico do básico para colocar a mão na massa!",
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
    </>
  );
}
