import CodeBlock from "@/components/CodeBlock";
import SolutionBlock from "@/components/SolutionBlock";
import { ChevronRight } from "lucide-react";

const modulo6 = () => {
    return (
        <main className="pt-49 pb-80 px-45 font-normal text-base text-justify">
            <section className="text-white text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Estruturas de Repetição</h2>
                    <div className="flex flex-col gap-4">
                        <p>
                            Durante o curso nós vamos aprender mais sobre estruturas de repetição, que são de extrema
                            importância para a redução de código, fazendo com que tarefas repetitivas possam ser feitas de forma mais simples
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-white text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                        O que é Estrutura de Repetição?
                    </h3>
                    <p>
                        Uma Estrutura de repetição é uma lógica que repete as ações de um determinado bloco de código
                        por um número de vezes determinado a partir do tipo de repetição.
                    </p>
                </div>
            </section>
            <section className="text-white text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                        Quando devemos usar as Estruturas de Repetição?
                    </h3>
                    <p>
                        É usada quando deve se executar um código múltiplas vezes, seja por um número definido de vezes ou até
                        que certa condição seja atendida. Elas também são essenciais para evitar repetições desnecessárias de
                        código e tornam o programa muito mais conciso e eficiente.
                    </p>
                </div>
            </section>
            <section className="text-white text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                        Tipos de Estrutura de Repetição
                    </h3>
                    <div>
                        <h4 className="font-medium text-xl underline underline-offset-4 decoration-orange">
                            1 - While
                        </h4>
                        <p className="mt-4">
                            While é uma estrutura de repetição que utiliza um sistema condicional para verificar se a
                            repetição deve ou não continuar.
                        </p>
                        <p className="mt-4">
                            A partir das alterações dentro do código, o valor condicional deve ser alterado a
                            fim de evitar &quot;loops infinitos&quot; e como consequências travar o programa.
                        </p>
                        <p className="mt-4 mb-14 underline underline-offset-4 decoration-orange">
                            Exemplo While:
                        </p>
                        <CodeBlock code=
                            {`#include <stdio.h>
    
int main(){ 
    // Contador de numeros até 10 

    // Contador com o nome de "i"
    int i = 0;

    // Enquanto contador for menor que 10
    while(i <= 10) { 
        // Escreve o numero
        printf("%i\\n", i); 

        // Soma mais 1 ao "i"
        i++; 
    } 

    return 0; 
}`} />
                    </div>
                    <div>
                        <h4 className="font-medium text-xl underline underline-offset-4 decoration-orange">
                            2 - Do While
                        </h4>
                        <p className="mt-4">
                            O &quot;Do While&quot; funciona da mesma forma que um &quot;While&quot; normal, mas diferentemente do &quot;While&quot; que primeiro faz a
                            verificação da condição antes de rodar o código, o &quot;Do While&quot; primeiro roda o
                            código e em seguida faz a verificação.
                        </p>
                        <p className="mt-4 mb-14 underline underline-offset-4 decoration-orange">
                            Exemplo Do While:
                        </p>
                        <CodeBlock code=
                            {`#include <stdio.h>
    
int main() { 
    // contador de numeros até 10 

    // Contador com o nome de "i"
    int i = 0;
    
    // Roda o bloco de código que está dentro da estrutura de repetição
    do { 
        printf("%i\\n", i); 
        i++; 

    // Faz a verificação da condição
    } while(i <= 10); 

    return 0; 
}`} />
                    </div>
                    <div>
                        <h4 className="font-medium text-xl underline underline-offset-4 decoration-orange">
                            3 - For
                        </h4>
                        <p className="mt-4">
                            O for tem uma estrutura um pouco mais complexa que o &quot;While&quot; e &quot;Do While&quot;, ele possui três pilares
                        </p>
                        <div className="mt-4">
                            <p>
                                1 – Uma variável contadora,
                            </p>
                            <p>
                                2 – Uma condição baseada na variável,
                            </p>
                            <p>
                                3 – Um pedaço de código que é executado ao final de cada repetição
                            </p>
                        </div>
                        <p className="mt-4">
                            Além disso, já que ele possui uma sintaxe mais rígida, é difícil ter problemas com &quot;loop infinito&quot;.
                        </p>
                        <p className="mt-4 mb-14 underline underline-offset-4 decoration-orange">
                            Exemplo For:
                        </p>
                        <CodeBlock code=
                            {`#include <stdio.h>

int main() { 
    // contador de numeros até 10 

    // sintaxe básica do for
    for(int i = 0; i <= 10; i++) { 
        printf("%i\\n", i); 
    } 

    return 0; 
}`} />
                    </div>
                </div>
            </section>

            <section>
                <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                    Exercícios
                </h3>

                <div className="flex flex-col gap-4 mt-8">
                    <SolutionBlock
                        title={"Faça um programa em que o usuário entra com um número N, e calcule a soma de 1 até N"}
                        code=
                        {`#include <stdio.h>

int main() {
    int n, soma = 0;

    printf("Digite um número N: ");
    scanf("%d", &n);

    for (int i = 1; i <= n; i++) {
        soma += i;
    }

    printf("A soma de 1 até %d é %d", n, soma);

    return 0;
}
`}
                    />

                    <SolutionBlock
                        title={"Faça um programa que solicite uma idade entre 1 e 120. Se o usuário digitar fora do intervalo, o programa repete o pedido."}
                        code=
                        {`#include <stdio.h>

int main() {
    int idade;

    do {
        printf("Digite uma idade entre 1 e 120: ");
        scanf("%d", &idade);
    } while (idade < 1 || idade > 120);

    printf("Idade válida");

    return 0;
}
`}
                    />

                    <SolutionBlock
                        title={"Faça um programa que receba um número e exiba sua tabuada de 1 a 10."}
                        code=
                        {`#include <stdio.h>

int main() {
    int num;

    printf("Digite um número para ver sua tabuada: ");
    scanf("%d", &num);

    for (int i = 1; i <= 10; i++) {
        printf("%d x %d = %d\\n", num, i, num * i);
    }

    return 0;
}
`}
                    />

                    <SolutionBlock
                        title={"Faça um programa que escolha um número aleatório. O usuário tenta adivinhar até acertar."}
                        code=
                        {`#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main() {
    int chute, numero_secreto;

    srand(time(NULL));
    numero_secreto = rand() % 100 + 1;

    printf("Tente adivinhar o número entre 1 e 100!\\n");

    do {
        printf("Número: ");
        scanf("%d", &chute);

        if (chute == numero_secreto) {
            printf("Parabéns! Você acertou!");
        }
    } while (chute != numero_secreto);

    return 0;
}
`}
                    />

                    <SolutionBlock
                        title={"Faça um programa que conte de 10 até 1."}
                        code=
                        {`#include <stdio.h>

int main() {
    for (int i = 10; i >= 1; i--) {
        printf("%d\\n", i);
    }

    return 0;
}
`}
                    />
                </div>
            </section>

            <div className='mt-10 flex justify-end'>
                <a className='w-100 h-14 flex justify-center items-center cursor-pointer bg-orange rounded-xl hover:-translate-y-1 duration-300 hover:shadow-lg/20 shadow-orange'
                    href={`/conteudos/modulo7`}
                >
                    <b className='text-lg font-bold text-black'>Próximo Módulo</b>
                    <ChevronRight className='text-black' size={30}></ChevronRight>
                </a>
            </div>
        </main>
    );
}

export default modulo6;