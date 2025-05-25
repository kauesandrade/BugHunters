import SectionModulos from "@/components/section-modulos";
import { Boxes, Brain, Cable, Code, Equal, RotateCcw, Split } from "lucide-react";

const Conteudos = () => {
    return (
        <>
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
            <span className="mb-70">
            </span>
        </>
    )
}

export default Conteudos;