import CodeBlock from "@/components/CodeBlock";
import Image from "next/image";

import exemploFluxograma from '../../../../public/ExemploFluxogramaDecisao.png';

const page = () => {
  return (
    <main className="pt-49 pb-20 px-45 font-normal text-base text-justify">
        <h2 className="font-semibold text-[2.5rem]">Estruturas Condicionais</h2>
        <p className="mt-6">Uma estrutura condicional é baseada em uma condição que, caso seja atendida, o algoritmo irá tomar uma decisão determinada. Uma forma simples de representar uma estrutura de condição através de pseudocódigo está representada abaixo: </p>
        <CodeBlock code=
{`SE (a > b) ENTÃO 
	Exibir mensagem "o número A é maior que o número B". 
FIM SE `} 
/>
        <p className="mt-6">Esses fundamentos da estrutura condicional estão presentes em todas as linguagens, com apenas algumas diferenças na sua sintaxe. Para a linguagem C, essa estrutura é definida pelo padrão “if () {}”, da forma que está representada abaixo: </p>
        <CodeBlock code=
{`if (a > b) { 
    printf("o número %d é maior que o número %d", a, b); 
} `} 
/>
        <p className="mt-4">Seguindo esse exemplo, a condição sempre estará presente dentro dos parênteses, e caso essa condição seja verdadeira, o código dentro das chaves será executado. Se a condição for falsa, nenhuma linha de código será executada. </p>        
        <p className="mt-4">Outra forma de representar essa estrutura é por meio de fluxogramas, através do símbolo de decisão: </p>
        
        <img className="mt-8" src={exemploFluxograma.src}></img>

        <section>
            <h3 className="mt-24 font-medium text-2xl underline underline-offset-4 decoration-orange">
              Estrutura Condicional Composta
              </h3>
            <p className="mt-6">Para a estrutura condicional composta, ela se baseia numa extensão da simples, em que, caso a condição determinada seja falsa, outro código será executado: </p>
            <CodeBlock code=
{`SE (a > b) ENTÃO 
	Exibir mensagem "o número A é maior que o número B". 
SENÃO 
	Exibir mensagem "o número A é menor que o número B".`} 
/>
            <p className="mt-6">Para a linguagem C, é utilizado o termo “else” logo após a execução do “if” para determinar o que será executado caso a condição não seja atingida: </p>
            <CodeBlock code=
{`if (a > b) { 
    printf("o número %d é maior que o número %d", a, b); 
} else { 
    printf("o número %d é menor que o número %d", a, b); 
} `} 
/>
            <p className="mt-4">Com esse exemplo completo, o código apresentado irá mostrar uma mensagem diferente dependendo dos valores de “a” e “b”. </p>
            <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                <li className="mt-2">Supondo que a variável “a” tenha o valor 10, e a variável “b” o valor 5: O sistema mostrará a mensagem “o número 10 é maior que o número 5” </li>
                <li className="mt-2">Supondo que a variável “a” tenha o valor 5, e a variável “b” o valor 10: O sistema mostrará a mensagem “o número 5 é menor que o número 10” </li>
            </ul>
        </section>
        <section>
            <h3 className="mt-24 font-medium text-2xl underline underline-offset-4 decoration-orange">
              Estrutura de Decisão Múltipla
              </h3>
            <p className="mt-6">A estrutura Switch-Case, ou de Decisão Múltipla é uma estrutura usada e muito adequada para quando uma variável ou valor recebido pode receber vários valores previamente definidos (por exemplo, um menu de seleção). Possui como base a seguinte sintaxe: </p>
            <CodeBlock code=
{`switch (variável) 
{ 
   case constante1: 
     	Instruções; 
   	break; 
 
   case constante2: 
     	Instruções; 
   	break; 
 
   default: 
     Instruções; 
} `} 
/>
            <p className="mt-10">Seguindo esse exemplo, a variável definida no início da estrutura será comparada em cada bloco “case”. Passando por cada bloco, caso essa variável definida atenda uma das condições em um desses blocos, as linhas de código dentro desse “case” serão executadas.</p>
            <CodeBlock code=
{`printf ("Digite um valor de 1 a 3: "); 
scanf("%d", &valor); 

switch (valor) 
{ 
    case 1: 
        printf ("Primeira Opção"); 
        break; 

    case 2: 
        printf ("Segunda Opção"); 
        break; 

    case 3: 
        printf ("Terceira Opção"); 
        break; 

    default: 
        printf ("Valor invalido!"); 
} `} 
/>
            <p className="mt-10">No exemplo acima é possível ver um uso prático dessa estrutura, com uma variável recebendo um valor inteiro que deve ser de 1 até 3. No Switch-Case, é passado por cada valor possível e mostrada uma mensagem diferente para cada possibilidade. O uso do “break;” é muito necessário no final de cada bloco, porque evita que outra opção seja executada após a opção atual. </p>
            <p className="mt-6">No final dessa estrutura, além dos Cases, também pode ser colocado o bloco “default”, que será executado somente caso nenhum dos “cases” for executado. Ou seja, nesse exemplo a linha default será executada caso o número seja menor que 1 ou maior que 3. </p>
        </section>
        <section>
            <h3 className="mt-24 font-medium text-2xl underline underline-offset-4 decoration-orange">
                Exemplos
            </h3>
            <p className="mt-8">A seguir são mostrados dois exemplos de exercícios com suas resoluções, utilizando a estrutura condicional: </p>
            <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                <li className="mt-6">Um algoritmo para o cálculo de média de notas de um aluno. Esse algoritmo precisa buscar 3 notas de um aluno e calcular o conceito final entre A, B e C. Após o conceito, o sistema mostra se o aluno está reprovado caso o conceito seja C, ou aprovado caso contrário. (A = Maior que 8, B = Entre 6 e 8, C = Menor que 6). </li>
            </ul>
            <CodeBlock code=
{`int main() {

    // Declara as variáveis
    float nota1, nota2, nota3, media; 
    char conceito; 

    // Pede as três notas
    printf("Digite a primeira nota: "); 
    scanf("%f", &nota1); 

    printf("Digite a segunda nota: "); 
    scanf("%f", &nota2) 

    printf("Digite a terceira nota: "); 
    scanf("%f", &nota3); 

    // Calcula e mostra a média
    media = (nota1 + nota2 + nota3) / 3.0; 
    printf("Média final: %.2f", media); 

    // Através do If, calcula os conceitos
    // Se a média for >= 8, entra na primeira condição
    // Senão, se a média for >= 6, entra na segunda condição
    // Senão, entra na última condição
    if (media >= 8.0) { 
        conceito = 'A'; 
    } else if (media >= 6.0) { 
        conceito = 'B'; 
    } else { 
        conceito = 'C'; 
    } 

    printf("Conceito: %c", conceito); 

    // Através do If, mostra ao usuário se ele está aprovado ou reprovado
    // Se a média for >= 6, entra na primeira condição
    // Senão, entra na última condição
    if (media >= 6.0) { 
        printf("Situação: Aprovado"); 
    } else { 
        printf("Situação: Reprovado"); 
    } 

    return 0; 
} `} 
          />
            <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                <li className="mt-12">Um algoritmo que pede um número de 1 até 7 e retorna um dia da semana correspondente a esse número: </li>
            </ul>
            <CodeBlock code=
{`int main (void)
{ 
    // Declaração das variáveis e pedindo o valor do dia
    int valor; 
    printf ("Digite um valor de 1 a 7: "); 
    scanf("%d", &valor); 

    // Nesse exemplo é mais adequada uma estrutura "switch case", por serem todos valores predefinidos
    switch (valor) 
    { 
        case 1:
            printf ("Domingo"); 
            break; 

        case 2:
            printf ("Segunda"); 
            break; 

        case 3:
            printf ("Terça"); 
            break; 

        case 4: 
            printf ("Quarta"); 
            break; 

        case 5: 
            printf ("Quinta"); 
            break; 

        case 6: 
            printf ("Sexta"); 
            break; 

        case 7: 
            printf ("Sábado"); 
            break; 

        default: 
            printf ("Valor invalido!"); 
    } 

    return 0; 
} `} 
          />
        
        </section>
    </main>
  )
}

export default page;