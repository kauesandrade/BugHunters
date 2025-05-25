import CodeBlock from "@/components/CodeBlock";
import SolutionBlock from "@/components/SolutionBlock";
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
        <h3 className="mt-14 mb-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Exemplo
        </h3>
        <CodeBlock code={`#include <stdio.h> 

int main(void) { 
  float total;
  printf ("Digite o valor total: ");
  // Lê o valor total digitado pelo usuário e armazena na variável total
  scanf("%f", &total);

  return 0; 
}`
        }
        />
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
          A função do "printf()" é exibir os valores na tela.
        </p>
        <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Sintaxe
        </h3>
        <p className="mt-6">
          printf(“Mensagem a ser escrita na tela”, lista de argumentos);
        </p>
        <h3 className="mt-14 mb-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
          Exemplo
        </h3>
        <CodeBlock code={`#include <stdio.h> 

int main(void) { 
  float total;
  printf ("Digite o valor total: ");
  scanf("%f", &total);
  // Exibe o valor total na tela
  printf("Total a pagar: R$ %f", total);
}`}
        />
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
        <p className="mt-6 mb-14">
          Programa que solicita dois números ao usuário, calcula a soma desses números e imprime o resultado na tela.
        </p>
        <CodeBlock code={`#include <stdio.h>

int main(void) { 
  //declaração de variáveis do tipo inteiro 
  int a, b, soma;

  printf ("Digite um número inteiro: ");
  scanf("%d", &a); //recebe um inteiro e armazena na variável a

  printf ("Digite um número inteiro: ");
  scanf("%d", &b); //recebe um inteiro e armazena na variável b
  soma = a + b;
  //efetua adição de a com b e armazena na variável soma
                
  printf("O valor da soma é: %d", soma); //mostra mensagem com o resultado 

  return 0; 
}`
        }
        />
        <p className="mt-12 mb-14">
          Dado um número inteiro de segundos, mostra quantas horas, minutos e segundos ele corresponde.
        </p>
        <CodeBlock code={`#include <stdio.h> 

int main(void) { 
  int iQtdSegundos, iHoras, iMinutos, iSegundos;

  printf ("Entre com o valor em segundos: ");
  scanf("%d",&iQtdSegundos);
              
  // Divisão de inteiros
  iHoras = iQtdSegundos / 3600;
  iMinutos = (iQtdSegundos - (iHoras*3600)) /60;
  iSegundos = (iQtdSegundos - (iHoras/3600)) %60;

  printf("Hora convertida %02d:%02d:%02d", iHoras, iMinutos, iSegundos);
  return 0; 
}
`
        }
        />

        <section>
          <h3 className="mt-14 font-semibold text-[2.5rem]">Atividades</h3>

          <div className="flex flex-col gap-4 mt-8">
            <SolutionBlock
              title={"Escreva um programa que leia três números inteiros digitados em uma única linha, separados por espaços, e mostre-os um por um."}
              code=
              {`#include <stdio.h>

int main() {
    int a, b, c;

    printf("Digite três números inteiros separados por espaços: ");
    scanf("%d %d %d", &a, &b, &c);

    printf("Primeiro número: %d\\n", a);
    printf("Segundo número: %d\\n", b);
    printf("Terceiro número: %d\\n", c);

    return 0;
}
`}
            />

            <SolutionBlock
              title={"Escreva um programa que leia três letras (caracteres) do usuário, uma por uma, e exiba-as todas juntas em uma linha."}
              code=
              {`#include <stdio.h>

int main() {
    char l1, l2, l3;

    printf("Digite a primeira letra: ");
    scanf(" %c", &l1);  // Espaço antes do %c para ignorar enter anterior

    printf("Digite a segunda letra: ");
    scanf(" %c", &l2);

    printf("Digite a terceira letra: ");
    scanf(" %c", &l3);

    printf("Letras digitadas: %c%c%c", l1, l2, l3);

    return 0;
}
`}
            />

            <SolutionBlock
              title={"Escreva um programa que peça ao usuário um número decimal (float) e mostre o mesmo número com 1, 2 e 3 casas decimais, usando printf(). Dica: printf(“%.2f”, num);"}
              code=
              {`#include <stdio.h>

int main() {
    float num;

    printf("Digite um número decimal: ");
    scanf("%f", &num);

    printf("Com 1 casa decimal: %.1f\\n", num);
    printf("Com 2 casas decimais: %.2f\\n", num);
    printf("Com 3 casas decimais: %.3f\\n", num);

    return 0;
}
`}
            />

            <SolutionBlock
              title={"Crie um programa que leia o nome, a idade e o peso de uma pessoa, e depois mostre todas essas informações."}
              code=
              {`#include <stdio.h>

int main() {
    char nome[100];
    int idade;
    float peso;

    printf("Digite seu nome: ");
    fgets(nome, sizeof(nome), stdin);

    printf("Digite sua idade: ");
    scanf("%d", &idade);

    printf("Digite seu peso: ");
    scanf("%f", &peso);

    printf("\\nInformações:\\n");
    printf("Nome: %s", nome);
    printf("Idade: %d anos\\n", idade);
    printf("Peso: %.2f kg\\n", peso);

    return 0;
}
`}
            />
          </div>
        </section>
      </section>
    </main>
  )
}

export default page;