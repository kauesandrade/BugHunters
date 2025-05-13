const modulo6 = () => {
    return(
        <main>
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
                    </div>
                </div>
            </section>
        </main>
    );
}

export default modulo6;