import Cover from '@/components/home/cover';
import Banner from '@/components/home/banner';
import { ChevronUp, GraduationCap, Boxes, Brain, Cable, Code, Equal, RotateCcw, Split } from 'lucide-react';
import SectionModulos from '@/components/section-modulos';
import Link from 'next/link';

export default function Home() {
  return (
    <>
    <Cover />
    <Banner />
    <SectionModulos 
      title="Módulos" 
      description="Aprenda os conceitos básicos da linguagem C!" 
      modulos={[
        {
          icon: <Brain className="text-orange" size={"48px"} />,
          titulo: "M1 - Lógica de programação",
          texto: "A lógica de programação é o conjunto de regras e técnicas utilizadas pelos programadores para o desenvolvimento de sistemas, e a habilidade de pensar de forma lógica e estruturada, decompondo um sistema complexo em etapas mais simples. ",
          link: "/modulo1"
        },
        {
          icon: <Code className="text-orange" size={"48px"} />,
          titulo: "M2 - Introdução à Programação em C",
          texto: "Durante o curso dos estudos e atividades, nós utilizaremos da linguagem C. A seguir se encontra uma breve introdução aos principais tópicos que se deve atentar ao iniciarmos a programar nela!",
          link: "/modulo2"
        },
        {
          icon: <Boxes className="text-orange" size={"48px"} />,
          titulo: "M3 - Tipos de Dados e Variáveis",
          texto: 'Em "Tipos de Dados e Variáveis", aprende-se a declarar, utilizar e entender os principais tipos de dados básicos da linguagem, como int, float, char e double, além de como armazenar e manipular valores na memória por meio de variáveis!',
          link: "/modulo3"
        },
        {
          icon: <Equal className="text-orange" size={"48px"} />,
          titulo: "M4 - Operadores e Expressões",
          texto: "Os operadores em C são usados para comparar valores, realizar contas e concatenar expressões.",
          link: "/modulo4"
        },
        {
          icon: <Split className="text-orange" size={"48px"} />,
          titulo: "M5 - Estruturas Condicionais",
          texto: "Uma estrutura condicional é baseada em uma condição que, caso seja atendida, o algoritmo irá tomar uma decisão determinada.",
          link: "/modulo5"
        },
        {
          icon: <RotateCcw className="text-orange" size={"48px"} />,
          titulo: "M6 - Estruturas de Repetição",
          texto: "As estruturas de repetição em C são usadas para executar um bloco de código várias vezes, como o for, while e do-while, que repetem o código enquanto uma condição for verdadeira.",
          link: "/modulo6"
        },
        {
          icon: <Cable className="text-orange" size={"48px"} />,
          titulo: "M7 - Entrada e Saída de Dados",
          texto: "Entrada e saída de dados em C referem-se à forma como o programa interage com o usuário ou com o sistema, utilizando funções como scanf() para entrada de dados e printf() para exibição de resultados.",
          link: "/modulo7"
        },
      ]}
    />
    <span className='mb-70'></span>
    {/* <section className='relative w-201 h-75 m-auto mt-40 mb-80'>
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
    </section> */}
    </>
  );
}
