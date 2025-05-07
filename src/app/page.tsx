import Cover from '@/components/home/cover';
import Banner from '@/components/home/banner';
import { Lightbulb, Section } from 'lucide-react';
import SectionModulos from '@/components/section-modulos';
import Modulo1 from './conteudos/Modulo1/page';

export default function Home() {
  return (
    <>
    <Cover />
    <Modulo1 />
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
    </>
  );
}
