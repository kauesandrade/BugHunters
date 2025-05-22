import CodeBlock from "@/components/CodeBlock";
import SolutionBlock from "@/components/SolutionBlock";
import Image from "next/image";

const page = () => {
    return (
        <main className="pt-49 pb-80 px-45 font-normal text-base text-justify">
            <h2 className="font-semibold text-[2.5rem]">Tipos de dados</h2>
            {/* <p className="mt-6">Os tipos primitivos são a base da programação em muitas linguagens, como C. Eles representam as informações que serão processadas no programa.</p> */}
            <section>
                <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Tipos primitivos
                </h3>
                <p className="mt-6">Os tipos primitivos são a base da programação em muitas linguagens, como C. Eles representam as informações que serão processadas no programa.</p>
                <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                    <li className="mt-2">Int: Representa números inteiros (positivos ou negativos). Exemplos: -10, 5;</li>
                    <li className="mt-2">Float: Representa números reais com ponto decimal, como 3,14 ou –0.6.</li>
                    <li className="mt-2">Char: Armazena um caractere como: ‘A’;</li>
                    <li className="mt-2 mb-14">Double: Representa números reais, similar ao float, mas com maior precisão (mais casas decimais)</li>
                </ul>
                <CodeBlock code=
                    {`#include <stdio.h>
#include <stdlib.h> 
int main()
{
    int idade = 25; 
    float altura = 1.75; 
    char inicial = 'N'; 
    double pi = 3.14159265358979; 

    return 0;
}`}
                />
            </section>
            <section>
                <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Constantes
                </h3>
                <p className="mt-6">As constantes são valores fixos que não mudam durante a execução do programa. São utilizadas para garantir que determinado valor permaneça imutável.</p>
                <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                    <li className="mt-2">#define: Um pré-processador utilizado para definir constantes;</li>
                    <li className="mt-2 mb-14">Const: Uma palavra chave usada para declarar constantes.</li>
                </ul>
                <CodeBlock code=
                    {`#include <stdio.h>
int main()
{
    const int ano = 2025;
    return 0;
}`}
                />
            </section>
            <section>
                <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Regras de nomenclatura para variáveis
                </h3>
                <p className="mt-6">Seguir as regras de nomenclatura é essencial para garantir a clareza e a organização do código:</p>
                <ul className={"list-disc list-inside pl-8 indent-[-24px]"}>
                    <li className="mt-2">Os nomes devem começar com uma letra ou sublinhado;</li>
                    <li className="mt-2">Não podem conter espaços ou caracteres especiais (exceto _);</li>
                    <li className="mt-2">Use nomes descritivos para facilitar a compreensão (ex.: idadeAluno);</li>
                    <li className="mt-2 mb-14">É sensível a maiúsculas e minúsculas (ex.: Valor é diferente de valor).</li>
                </ul>

                <CodeBlock code=
                    {`#include <stdio.h>
int main()
{
    int idadeAluno;      // Correto 
    float _taxaDesconto; // Correto 
    char 1nome;          // Incorreto (não pode começar com número) 
    return 0;
}`}
                />
            </section>
            <section>
                <h3 className="mt-14 font-semibold text-[2.5rem]">Atividades</h3>

                <div className="flex flex-col gap-4 mt-8">
                    <SolutionBlock
                        title={"Escreva um programa que calcula o dobro de um número inteiro."}
                        code=
{`#include <stdio.h>

int main() {
    int numero, dobro;

    printf("Digite um número inteiro: ");
    scanf("%d", &numero);

    dobro = numero * 2;

    printf("O dobro de %d é %d\\n", numero, dobro);

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Escreva um programa que receba a base e a altura de um triângulo e calcule sua área."}
                        code=
{`#include <stdio.h>

int main() {
    float base, altura, area;

    printf("Digite a base do triângulo: ");
    scanf("%f", &base);

    printf("Digite a altura do triângulo: ");
    scanf("%f", &altura);

    area = (base * altura) / 2;

    printf("A área do triângulo é %.2f\n", area);

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Crie um programa que converta uma medida de quilômetros para milhas (1 quilômetro = 0.621371 milhas)."}
                        code=
{`#include <stdio.h>

int main() {
    float km, milhas;

    printf("Digite a distância em quilômetros: ");
    scanf("%f", &km);

    milhas = km * 0.621371;

    printf("%.2f quilômetros equivalem a %.2f milhas\n", km, milhas);

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Implemente um algoritmo que leia a idade de 3 pessoas e calcule a média das idades."}
                        code=
{`#include <stdio.h>

int main() {
    int idade1, idade2, idade3;
    float media;

    printf("Digite a idade da primeira pessoa: ");
    scanf("%d", &idade1);

    printf("Digite a idade da segunda pessoa: ");
    scanf("%d", &idade2);

    printf("Digite a idade da terceira pessoa: ");
    scanf("%d", &idade3);

    media = (idade1 + idade2 + idade3) / 3.0;

    printf("A média das idades é %.2f\n", media);

    return 0;
}`}
                    />

                    <SolutionBlock
                        title={"Desenvolva um código que leia 2 números inteiros e determine o maior valor entre eles."}
                        code=
{`#include <stdio.h>

int main() {
    int num1, num2;

    printf("Digite o primeiro número inteiro: ");
    scanf("%d", &num1);

    printf("Digite o segundo número inteiro: ");
    scanf("%d", &num2);

    if (num1 > num2) {
        printf("O maior número é %d\n", num1);
    } else if (num2 > num1) {
        printf("O maior número é %d\n", num2);
    } else {
        printf("Os dois números são iguais.\n");
    }

    return 0;
}`}
                    />
                </div>
            </section>
        </main>
    )
}

export default page;