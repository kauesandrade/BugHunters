import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";

const page = () => {
  return (
    <main className="pt-49 pb-80 px-45 font-normal text-base text-justify">
      <h2 className="font-semibold text-[2.5rem]">
        Entrada e Saída de Dados
      </h2>
      <p className="mt-6">
        Aqui aprenderemos sobre as entradas e saídas de dados utilizadas na programação em C. A seguir, você verá uma introdução sobre os conteúdos, seguidos de exemplos práticos e execícios intuitivos para melhor aprendizagem.
      </p>
      <section>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Entrada de dados
        </h3>
        <p className="mt-6">
          Sua função será fazer a leitura dos dados fornecidos por uma fonte externa
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          scanf()
        </h3>
        <p className="mt-6">
          O scanf tem o papel de fazer a leitura dos dados inseridos através do teclado.
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Sintaxe
        </h3>
        <p className="mt-6">scanf(“expressão de controle”, lista de argumentos);</p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Exemplo
        </h3>
        <p className="mt-6">
          scanf(“%f”, &total);
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Explicação
        </h3>
        <p className="mt-6">
          O comando inserido é responsável por efetuar uma leitura do teclado onde é esperada a variável em float inserida (indicada por %f). O valor lido será armazenado no endereço da variável total.<br>
          </br> Na lista de argumentos, iremos indicar os endereços das variáveis trabalhadas. Para isso, adicinaremos o símbolo "&", que será o prefixo na frente do nome da variável.
        </p>
      </section>

      <section className="text-center mt-14">
        <Image className="m-auto mt-4" src={"/modulo7-imagem2.png"} alt={"Tabela de tipos de variáveis 2"} width={442} height={101} />
        <p className="mt-6">
          Tabela de dados básicos e representação
        </p>
        <Image className="m-auto mt-14" src={"/modulo7-imagem1.png"} alt={"Tabela de tipos de variáveis"} width={321} height={211} />
        <p className="mt-6">
          Tabela 2 – Outros tipos de dados e representação
        </p>
      </section>

      <section>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Saída de dados
        </h3>
        <p className="mt-6">
          A sua função é exibir para o usuário textos ou valores de variáveis.
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          printf()
        </h3>
        <p className="mt-6">
          A função do "scanf()" é exibir os valores na tela.
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Sintaxe
        </h3>
        <p className="mt-6">
          printf(“Mensagem a ser escrita na tela”, lista de argumentos);
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Exemplo
        </h3>
        <p className="mt-6">
          printf(“Total a pagar: R$ %f”, total);
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Explicação
        </h3>
        <p className="mt-6">"%f" representa o local onde será escrita a variável float
          "total" é a variável float que será mostrada no lugar em que está o %f, substituindo-o.
        </p>
      </section>

      <section>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Exemplos de código
        </h3>
        <p className="mt-6">
          1. Faça um programa que solicite dois números ao usuário, calcule a soma desses números e imprima o resultado na tela.
        </p>
        <CodeBlock code={`
          #include <stdio.h> 

            int main(void) { 
              int iQtdSegundos, iHoras, iMinutos, iSegundos;

              printf ("Entre com o valor em segundos: ");
              scanf("%d",&iQtdSegundos);
              
              // Divisão de inteiros//
              iHoras = iQtdSegundos / 3600;
              iMinutos = (iQtdSegundos - (iHoras*3600)) /60;
              iSegundos = (iQtdSegundos (iHoras/3600)) %60;

              printf("Hora convertida %02d:%02d:%02d", iHoras, iMinutos, iSegundos);
              return 0; 
            }`
        }
        />
        <p className="mt-12">
          2. Dado um número inteiro de segundos, mostrar a quantas horas, minutos e segundos ele corresponde.
        </p>
        <CodeBlock code={`
          #include <stdio.h> 
          #include <stdlib.h>

            int main(void) { 
              //declaração de variáveis do tipo inteiro 
                int a, b, soma

                printf ("Digite um número inteiro: ");
                scanf("%d", &a); //recebe um inteiro e armazena na variável a

                printf ("Digite um número inteiro: ");
                scanf("%d", &b); //recebe um inteiro e armazena na variável b
                soma = a + b;
                //efetua adição de a com b e armazena na variável soma
                
                printf("O valor da soma é: = %d", soma); //mostra mensagem com o resultado 

                system ("pause");
                return 0; 
              }`
        }
        />

        <section>
          <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
            Exercícios
          </h3>
          <p className="mt-6">
            1. Leia três números inteiros digitados em uma única linha, separados por espaços, e mostre-os um por um.
          </p>
          <p className="mt-6">
            2. Leia três letras (caracteres) do usuário, uma por uma, e exiba-as todas juntas em uma linha. 
          </p>
          <p className="mt-6">
            3. Peça ao usuário um número decimal (float) e mostre o mesmo número com 1, 2 e 3 casas decimais, usando printf(). Dica: printf(“%.2f”, num); 
          </p>
          <p className="mt-6">
            4. Crie um programa que leia o nome, a idade e o peso de uma pessoa, e depois mostre todas essas informações. 
          </p>
          <p className="mt-6">
            5. O que faz o seguinte programa em C? 
          </p>
          <CodeBlock code={`
            #include <stdio.h> 

              int main(void) { 
                int i = 2

                printf ("O valor de i = %d ", i); 
                return 0; 
              }`
          }
          />
          <p>a) Nada</p>
          <p>b) Imprime: O valor de i = 2	</p>
          <p>c) Imprime: \n O valor de i = %d </p>
          <p>d) Pula para a próxima linha e imprime: O valor de i = 2 </p>
        </section>
      </section>
    </main>
  )
}

export default page;