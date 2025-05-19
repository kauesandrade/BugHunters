import CodeBlock from "@/components/CodeBlock";
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
        </main>
    )
}

export default page;