import CodeBlock from "@/components/CodeBlock";

const modulo6 = () => {
    return(
        <main className="pt-49 pb-80">
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14">
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
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                        Oque é Estrutura de Repetição?
                    </h3>
                    <p>
                        Uma Estrutura de repetição é uma lógica que repete as ações de um determinado bloco de código 
                        por um número de vezes determinado a partir do tipo de repetição.
                    </p>
                </div>
            </section>
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14">
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
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h3 className="mt-14 font-medium text-2xl underline underline-offset-4 decoration-orange">
                        Tipos de Estrutura de Repetição?
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
                            Apartir das alterações alterações dentro do código, o valor condicional deve ser alterado a 
                            fim de evitar "loops infinitos" e como consequências travar o programa.
                        </p>
                        <p className="mt-4 underline underline-offset-4 decoration-orange">
                            Exemplo while:
                        </p>
                        <CodeBlock code={`
int main(){ 
    // Contador de numeros até 10 

    // Contador com o nome de "i"
    int i = 0 

    // Enquanto contador for menor que 10
    while(i <= 10){ 

    // Escreve o numero
    printf(“%i”, i); 

    // Soma mais 1 ao "i"
    i++; 
    } 

    return 0; 

} 
                            `} />
                    </div>
                    <div>
                        <h4 className="font-medium text-xl underline underline-offset-4 decoration-orange">
                            1 - Do While
                        </h4>
                        <p className="mt-4">
                           O "Do While" funciona da mesma forma que um "while" normal, mas diferentemente do "while" que primeiro faz a 
                           verificação da condição antes de rodar o código, o "Do While" primeiro roda o 
                           código e em seguida faz a verificação. 
                        </p>
                        <p className="mt-4 underline underline-offset-4 decoration-orange">
                            Exemplo Do while:
                        </p>
                        <CodeBlock code={`
int main(){ 
    // contador de numeros até 10 

    // Contador com o nome de "i"
    int i = 0 
    
    // Roda o bloco de código que está dentro da estrutura de repetição
    do{ 

    printf(“%i”, i); 

    i++; 

    // Faz a verificação da condição
    } while(i < 10); 

return 0; 

} 
                            `} />
                    </div>
                    <div>
                        <h4 className="font-medium text-xl underline underline-offset-4 decoration-orange">
                            1 - For
                        </h4>
                        <p className="mt-4">
                            O for tem uma estrutura um pouco mais complexa que o While e Do While, ele possui três pilares  
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
                            Além disso, já que ele possui uma sintaxe mais rígida, é difícil ter problemas com “loop infinito”. 
                        </p>
                        <p className="mt-4 underline underline-offset-4 decoration-orange">
                            Exemplo for:
                        </p>
                        <CodeBlock code={`
int main(){ 
    // contador de numeros até 10 

    // sintaxe basica do for
    for(int i = 0; i <= 10; i++){ 

    printf(“%i”, i); 

    } 

return 0; 

}  
                            `} />
                    </div>
                </div>
            </section>
        </main>
    );
}

export default modulo6;