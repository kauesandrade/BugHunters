'use client';

import CodeBlock from '@/components/CodeBlock';
import SolutionBlock from '@/components/SolutionBlock';
import { Plus, Minus, Asterisk, Slash, Percent, Equal, ChevronRight, ChevronLeft, Ampersand } from 'lucide-react';

const Modulo4 = () => {
    return (
        <>
            <section className="pt-49 text-white px-[180px] text-justify font-light flex flex-col gap-14 pb-80">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Operadores relacionais</h2>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores aritméticos</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Plus/></span>  Adição</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Minus/></span>  Subtração</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Asterisk/></span>  Multiplicação</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Slash/></span>  Divisão</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Percent /></span>  Módulo (resto da divisão)</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores relacionais</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><Equal/><Equal /></span>  Igual a</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row">!<Equal/></span>  Diferente de</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronLeft/></span>  Menor que</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronRight/></span>  Maior que</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronLeft /><Equal/></span>  Menor ou igual a</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronRight /><Equal/></span>  Maior ou igual a</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores Lógicos</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><Ampersand/><Ampersand /></span>  E (AND) – retorna true se ambos forem true.</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">||</span>  Ou (OR) – retorna true se pelo menos um for true.</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">!</span>  Não (NOT) – inverte o valor lógico.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Ordem de precedência</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">1</span>  Parênteses</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">2</span>  Multiplicação, divisão, módulo</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">3</span>  Soma, adição</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">4</span>  Relacionais</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">5</span>  Lógicos</p>
                    </div>
                </div>
                <section>
                <h3 className="font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Exemplos de códigos
                </h3>
                <p className="mt-6 mb-14">Este programa solicita por dois números e imprime o maior na tela utilizando do operador relacional "&gt;".</p>
                <CodeBlock code=
{`#include <stdio.h> 

int main(void) { 
    int num1, num2; 
    
    printf("Digite o primeiro número:  "); 
    scanf("%i", &num1); 
    fflush(stdin); 
    
    printf("Digite o segundo número: "); 
    scanf("%i", &num2); 
    fflush(stdin); 

    if (num1 > num2) { 
        printf("%i", num1); 
    } else {  
        printf("%i", num2); 
    } 

    return 0;
}`}
/>
                <p className="mt-14 mb-14">Código que verifica se o número digitado é um número ímpar ou par.</p>
                <CodeBlock code=
{`#include <stdio.h>

int main(void)
{
    int numero;
    
    printf("Digite um número: ");
    scanf("%d", &numero);
    
    if (numero % 2 == 0)
    {
        printf("O número é par!");
    }
    else
    {
        printf("O número é ímpar!");
    }

    return 0;
}`}
/>
            </section>
            <section>
                <h3 className="font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Exercícios
                </h3>

                <div className="flex flex-col gap-4 mt-8">
                    <SolutionBlock
                        title={"Converta temperatura de Celsius para Fahrenheit"}
                        code=
{`#include <stdio.h>

int main(void)
{
    float temperatura_celsius, temperatura_fahrenheit;
    
    printf("Digite a temperatura em Celsius: ");
    scanf("%f", &temperatura_celsius);
    
    temperatura_fahrenheit = temperatura_celsius * 1.8 + 32;
    
    printf("A temperatura %.2f em Celsius é %.2f em Fahrenheit.", temperatura_celsius, temperatura_fahrenheit);

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Determine se uma pessoa é maior de idade"}
                        code=
{`#include <stdio.h>

int main(void)
{
    int idade;
    
    printf("Digite a sua idade: ");
    scanf("%d", &idade);
    
    if (idade >= 18)
    {
        printf("Você é maior de idade!");
    }
    else
    {
        printf("Você é menor de idade!");
    }

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Descubra o salário do mês de alguém, perguntando-o quanto ele ganha por hora e quantas horas foram trabalhadas"}
                        code=
{`#include <stdio.h>

int main(void)
{
    float salario_hora;
    int horas_trabalhadas;

    printf("Quanto voce ganha por hora? ");
    scanf("%f", &salario_hora);
    printf("Quantas horas voce trabalhou no mes? ");
    scanf("%d", &horas_trabalhadas);
    
    printf("O seu salário do mês foi: R$ %.2f", salario_hora * horas_trabalhadas);
    
    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Verifique se três números formam um triângulo"}
                        code=
{`#include <stdio.h>

int main(void)
{
    float lado1, lado2, lado3;

    printf("Digite o primeiro lado do triângulo: ");
    scanf("%f", &lado1);
    fflush(stdin);
    printf("Digite o segundo lado do triângulo: ");
    scanf("%f", &lado2);
    fflush(stdin);
    printf("Digite o terceiro lado do triângulo: ");
    scanf("%f", &lado3);
    fflush(stdin);

    if (lado1 + lado2 < lado3 || lado3 + lado2 < lado1 || lado1 + lado3 < lado1)
    {
        printf("Esses valores nao conseguem formar um triângulo.");
    }
    else
    {
        printf("Esses valores conseguem formar um triângulo.");
    }

    return 0;
}`}
                    />
                </div>
            </section>

            </section>
        </>
    )
}

export default Modulo4;