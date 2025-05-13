import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";

const page = () => {
  return (
    <main className="pt-49 pb-80 px-45 font-normal text-base text-justify">
        <h2 className="font-semibold text-[2.5rem]">Entrada e Saída de Dados</h2>
        <p className="mt-6">Aqui aprenderemos sobre as entradas e saídas de dados utilizadas na programação em C. A seguir, você verá uma introdução sobre os conteúdos, seguidos de exemplos práticos e execícios intuitivos para melhor aprendizagem. </p>
        <section>
            <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
              Entrada de dados!
              </h3>
            <p className="mt-6">Sua função será fazer a leitura dos dados fornecidos por uma fonte externa</p>
            <h3> scanf() </h3>
            <p className="mt-4">O scanf tem o papel de fazer a leitura dos dados inseridos através do teclado.</p>
            <h3> Sintaxe </h3>
            <p className="mt-4">scanf(“expressão de controle”, lista de argumentos);</p>
            <h3>Exemplo</h3>
            <p>scanf(“%f”, &total); </p>
            <h3>Exolicação</h3>
            <p>O comando inserido é responsável por efetuar uma leitura do teclado onde é esperada a variável em float inserida (indicada por %f). O valor lido será armazenado no endereço da variável total.<br>
            </br> Na lista de argumentos, iremos indicar os endereços das variáveis trabalhadas. Para isso, adicinaremos o símbolo "&", que será o prefixo na frente do nome da variável. </p>
        </section>
        <section>
            <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
              Saída de dados
              </h3>
            <p className="mt-6">A sua função é exibir para o usuário textos ou valores de variáveis.</p>
            <h3>printf()</h3>
            <p className="mt-4">A função do "scanf()" é exibir os valores na tela.</p>
            <h3>Sintaxe</h3>
            <p>printf(“Mensagem a ser escrita na tela”, lista de argumentos);</p>
            <h3>Exemplo</h3>
            <p>printf(“Total a pagar: R$ %f”, total);</p>
            <h3>Explicação</h3>
            <p>"%f" representa o local onde será escrita a variável float
                "total" é a variável float que será mostrada no lugar em que está o %f, substituindo-o.
            </p>
            <h3>Exercícios de código</h3>
            <p>
                Leia três números inteiros digitados em uma única linha, separados por espaços, e mostre-os um por um. 
 
                Leia três letras (caracteres) do usuário, uma por uma, e exiba-as todas juntas em uma linha. 

                Peça ao usuário um número decimal (float) e mostre o mesmo número com 1, 2 e 3 casas decimais, usando printf(). Dica: printf(“%.2f”, num); 

                Crie um programa que leia o nome, a idade e o peso de uma pessoa, e depois mostre todas essas informações. 

                O que faz o seguinte programa em C? 


                {/* #include <stdio.h> 

                int main(void) {  

                int i =2; 


                printf ("\n O valor de i = %d ", i);  

                } 

                a) Nada 

                b) Imprime: O valor de i = 2	 

                c) Imprime: \n O valor de i = %d 

                d) Pula para a próxima linha e imprime: O valor de i = 2
                            <CodeBlock code=
                {`#include <stdio.h>
                int main()
                {
                    printf("Hello, World!\\n");
                    return 0;
                }`} 
        </p> */}
            </p>

            <p className="mt-14">A primeira linha está importando a biblioteca stdio (entra e saída padrão) com a palavra-chave #include. Nela, encontra-se as principais funções para entrada e saída de dados.</p>
            <p className="mt-4">A segunda linha define a função main. Entre parênteses, encontra-se a palavra-chave void. Ela representa o que será recebido como entrada (dados) quando o programa é chamado; nesse caso, nada. O int (número inteiro) representa que tipo de dado será retornado pela função. Isso condiz com a linha 4: return 0;.</p>
            <p className="mt-4">Quando a função principal retorna 0, significa que rodou como esperado. Qualquer outro número representa uma exceção durante a execução. O significado de cada número dependerá do programador.</p>
            <p className="mt-4">As linhas 3 e 5 abrem e fecham as chaves, representando o escopo (bloco) da função; delimitadores para o compilador compreender quando a função começa e quando ela termina.</p>
        </section>
        <section>
          <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
            Como compilar e executar um programa em C
          </h3>
            <p className="mt-14">Para poder utilizar ou até mesmo testar seu código, é necessário que ele seja executado. Alcançar isso vai depender de cada linguagem. No caso do C, é necessário a etapa de compilação, processo que basicamente traduz o código no arquivo “.c” em linguagem de máquina.</p>
            <p className="mt-4">Existem várias maneiras de compilar. Caso você esteja utilizando um sistema operacional Linux, é possível atingir o objetivo em três simples comandos. Primeiro, instale o famoso compilador para C: GCC. Por exemplo, para a distribuição Ubuntu, digite no terminal sudo apt-get install gcc, e depois confirme (“S” em SOs em português). Com o compilador instalado, utilize-o através do comando gcc –o main.out main.c, o mais básico que podemos chegar. main.out representa o arquivo executável que será gerado, enquanto main.c representa o arquivo onde está o código de fato. Para executar, abrimos o mais novo arquivo com o comando ./main.out e a mensagem é exibida no terminal.</p>
            <Image className="m-auto mt-14" src={"/modulo2-imagem1.png"} alt={"Comando sudo apt-get install gcc"} width={751} height={236} />
            <Image className="m-auto mt-4" src={"/modulo2-imagem2.png"} alt={"Comando gcc -o main.out main.c"} width={438} height={66} />
            <p className="mt-14">A primeira linha está importando a biblioteca stdio (entra e saída padrão) com a palavra-chave #include. Nela, encontra-se as principais funções para entrada e saída de dados.</p>
            <p className="mt-4">A instalação do GCC para o sistema operacional mais utilizado para desktop, o Windows, é um pouco mais complicado e longo. Para simples exercícios e testes, recomendamos a utilização do OnlineGDB, um compilador online. Acesse em GDB online Debugger | Compiler - Code, Compile, Run, Debug online C, C++. Também é possível instalar uma IDE (Integrated Development Environment, ambiente que auxilia na codificação e execução de programas) dedicada para a linguagem C, como o Dev-C++ através do link Home - Dev-C++ Official Website e clicando no botão “Download original  Dev-C++ 5”. Após feita a instalação padrão e aberto o programa, podemos usar os comandos Ctrl+N para abrir um novo arquivo e, após escrevermos o código, apertar F11 para compilá-lo e executá-lo.</p>
            <Image className="m-auto mt-14" src={"/modulo2-imagem3.png"} alt={"Utilização da IDE Dev-C++"} width={601} height={110} />
            <p className="mt-14">Essas são as maneiras mais simples para atingir o mesmo objetivo. Mas caso queira algo mais amigável, você pode tentar fazer C ser executado pela IDE Visual Studio Code. Felizmente, eles disponibilizam um tutorial: C/C++ for Visual Studio Code. Tente-se aventurar, mas sempre com segurança!</p>
        </section>
        <section>
          <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
            Sintaxe básica
          </h3>
          <CodeBlock code=
            {`#include <stdio.h> 

            // Função/rotina que será executada no início do programa 
            int main(void) 
            { 
                // Exibindo mensagem do dia 
                printf("Bom dia!"); 
                return 0; 
            }`} 
          />
          <p className="mt-14">Vamos fazer uma breve análise deste código e compreender alguns conceitos importantes de grande parte das linguagens. Ele é parecido com o que vimos, com algumas adições. As linhas 3 e 6 são o que chamamos de comentários, servindo para auxiliar no entendimento do código. Eles são delimitados por duas barras //. Outro ponto importante é o espaçamento na esquerda das linhas 6, 7 e 8. Isso se chama de indentação e é feito para auxiliar na compreensão da hierarquia do código; o que está dentro do que. Neste exemplo, representa que as linhas anteriormente mencionadas estão dentro da função main.</p>
          <p className="mt-4">Outras dicas de boas práticas são:</p>
          <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
            <li className="mt-2">Nomes claros e simples: você vai nomear muitas coisas durante a programação, portanto, tente ser descritivo com os seus significados;</li>
            <li className="mt-2">Evite redundância: se você estiver fazendo o mesmo procedimento várias vezes, considere criar uma função para isso;</li>
            <li className="mt-2">Declaração de variáveis: quando possível, tente sempre declará-las logo no início de seu escopo;</li>
            <li className="mt-2">Funções enxutas: não coloque muitas linhas na mesma função; tente separar em tarefas menores;</li>
            <li className="mt-2">Números mágicos: os famosos números mágicos são aqueles números arbitrários que você escreve no código. Em vez disso, tente utilizar de uma constante ou variável. </li>
          </ul>
        </section>
    </main>
  )
}

export default page;