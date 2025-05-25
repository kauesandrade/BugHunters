import exemploFluxograma from '../../../../public/ExemploFluxograma.png';
import blocoConector from '../../../../public/BlocoConector.png';
import blocoDados from '../../../../public/BlocoDados.png';
import blocoDecisao from '../../../../public/BlocoDecisao.png';
import blocoDocumento from '../../../../public/BlocoDocumento.png';
import blocoExibicao from '../../../../public/BlocoExibicao.png';
import blocoInicio from '../../../../public/BlocoInicio.png';
import blocoProcesso from '../../../../public/BlocoProcesso.png';

import fluxogramaAtividade1 from '../../../../public/FluxogramaAtividade1.png';
import fluxogramaAtividade2 from '../../../../public/FluxogramaAtividade2.png';
import fluxogramaAtividade3 from '../../../../public/FluxogramaAtividade3.png';

import { ChevronRight } from 'lucide-react';

const Modulo1 = () => {
    return (
        <>
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14 pt-49 pb-60">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Lógica de Programação</h2>
                    <div className="flex flex-col gap-4">
                        <p>A lógica de programação é o conjunto de regras e técnicas utilizadas pelos programadores para o desenvolvimento de sistemas, e a habilidade de pensar de forma lógica e estruturada, decompondo um sistema complexo em etapas mais simples.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Importância da lógica de programação</h4>
                    <div className="flex flex-col gap-4">
                        <p>A lógica de programação possui um papel essencial no desenvolvimento de softwares e resolução de problemas. Algumas das razões pela qual essa habilidade é essencial estão listadas abaixo:</p>
                        <ul className="list-disc list pl-12">
                            <li>Resolução de Problemas: Permite que os programadores abordem os problemas nos programas de forma sistemática, quebrando-os em partes menores;</li>
                            <li>Eficiência e Facilidade de Manutenção: Algoritmos bem projetados se tornam mais eficientes e economizam tempo na depuração de código e manutenção; </li>
                            <li>Adaptação: Com a compreensão da lógica, o programador pode se adaptar mais facilmente a diferentes linguagens de programação;</li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Algoritmos</h4>
                    <div className="flex flex-col gap-4">
                        <p>Algoritmos são sequências de passos a serem seguidos em direção a um objetivo determinado. Esses objetivos podem ser, por exemplo, fazer um bolo ou atravessar uma rua.</p>
                        <p>Antes mesmo de chegar nos códigos, os algoritmos podem ser representados de formas mais simples, desde uma sequência descritiva dos passos a serem realizados até a criação de fluxogramas, que serão explicados mais abaixo.</p>
                        <p>Um exemplo prático de um algoritmo pode ser o cálculo da média de notas de um aluno. Nesse contexto, pode-se dizer que será verificado se um aluno foi aprovado ou reprovado com as notas de 4 bimestres, e caso a média seja maior ou igual à 7, o aluno é aprovado.</p>
                        <ol className="list-decimal list pl-12">
                            <li>Obter a nota do primeiro bimestre;</li>
                            <li>Obter a nota do segundo bimestre;</li>
                            <li>Obter a nota do terceiro bimestre;</li>
                            <li>Obter a nota do quarto bimestre;</li>
                            <li>Somar a nota total de todos os bimestres e dividir por 4 (Calcular a média dos bimestres);</li>
                            <li>Verificar se a média é maior ou igual à 7. Caso seja, o aluno foi aprovado.</li>
                        </ol>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Fluxogramas</h4>
                    <div className="flex flex-col gap-4">
                        <p>Fluxogramas (também chamados diagramas de fluxo) são diagramas usados para representar visualmente um fluxo de trabalho ou algoritmo, através de símbolos e relações padronizadas.</p>
                        <p>Em um fluxograma, cada símbolo representa uma etapa ou processo dentro do algoritmo, esses símbolos sendo padronizados para cada tipo de ação. Ao olhar para um fluxograma, o espectador deve ser capaz de entender o algoritmo ou sistema de uma visão geral e simples.</p>

                        <img className="pt-6 pb-10" src={exemploFluxograma.src}></img>

                        <p>Na imagem acima é representada a lógica apresentada na seção anterior, em que são perguntadas as notas de um aluno em 4 bimestres, e então é calculada a média das notas e feita a verificação se o aluno está aprovado ou reprovado.</p>
                        <p>Na criação de fluxogramas existe um padrão de símbolos a ser utilizado, com cada símbolo possuindo uma função própria. Abaixo estão representados os principais símbolos utilizados para a criação de fluxogramas:</p>

                        <div className="flex flex-row mt-4 gap-8 items-center">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoProcesso.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Processo</span> – Representa um processo ou ação do sistema</p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoInicio.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Início/Fim</span> - Representa os potenciais inícios e fins do programa </p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoExibicao.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Exibição</span> - Representa saídas de texto para o usuário</p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoDados.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Dados</span> – Representa uma entrada ou saída de dados</p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoConector.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Conector</span> – Usado em gráficos maiores para conectar elementos separados</p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoDecisao.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Decisão</span> - Indica uma decisão dentro do fluxo (sim ou não), que direciona para dois possíveis fluxos diferentes </p>
                        </div>

                        <div className="flex flex-row border-t gap-8 items-center pt-4 mb-8">
                            <div className="w-1/4 flex justify-center">
                                <img src={blocoDocumento.src}></img>
                            </div>
                            <p><span className="font-medium text-orange">Documento</span> – Representa a entrada ou saída de algum documento</p>
                        </div>

                        <p className="mb-6">Em projetos de software, fluxogramas são muito úteis para definir o escopo inicial e a maior parte das lógicas que serão feitas nele. Algumas das ferramentas mais comuns para a criação de fluxogramas são o <a className="text-orange underline decoration-orange" href="https://app.diagrams.net/">draw.io</a> e o <a className="text-orange underline decoration-orange" href="https://www.lucidchart.com/">Lucidchart</a>.</p>
                    </div>
                </div>

                <div>
                    <div className="flex flex-col gap-10">
                        <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Exercícios</h4>
                        <div className="flex flex-col gap-4">
                            <p>Construa um Fluxograma para cada sistema descrito abaixo: </p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-4 pt-4'>
                        <details className="bg-[#302B28] rounded-xl">
                            <summary className="text-orange px-2 py-3 select-none cursor-pointer"><span className="text-white">Um algoritmo que leia um número diferente de zero e diga se este número é positivo ou negativo.</span></summary>
                            <div className="p-6">
                                <div className='bg-[#1F1E21] flex justify-center rounded-xl'>
                                    <img className="pt-6 pb-10 w-3/6" src={fluxogramaAtividade1.src}></img>
                                </div>
                            </div>
                        </details>
                        <details className="bg-[#302B28] rounded-xl">
                            <summary className="text-orange px-2 py-3 select-none cursor-pointer"><span className="text-white">Um algoritmo que receba 3 números e informe qual o maior entre eles.</span></summary>
                            <div className="p-6">
                                <div className='bg-[#1F1E21] flex justify-center rounded-xl'>
                                    <img className="pt-6 pb-10 w-3/5" src={fluxogramaAtividade2.src}></img>
                                </div>
                            </div>
                        </details>
                        <details className="bg-[#302B28] rounded-xl">
                            <summary className="text-orange px-2 py-3 select-none cursor-pointer"><span className="text-white">Um algoritmo que leia a idade de uma pessoa expressa em anos, meses e dias e mostre-a expressa em dias. Leve em consideração o ano com 365 dias e o mês com 30. (Ex: 3 anos, 2 meses e 15 dias = 1170 dias.).</span></summary>
                            <div className="p-6">
                                <div className='bg-[#1F1E21] flex justify-center rounded-xl'>
                                    <img className="pt-6 pb-10 w-2/5" src={fluxogramaAtividade3.src}></img>
                                </div>
                            </div>
                        </details>
                    </div>

                    <div className='pt-8'>
                        <p>Além disso, você também pode acessar o Racha Cuca para realizar desafios de lógica!</p>
                        <ol className='list-disc list-inside pt-2 pl-8 indent-[-24px]'>
                            <li className='text-orange hover:underline underline-offset-4'> <a href="https://rachacuca.com.br/logica/problemas/teste-de-einstein/">Teste de Einstein </a></li>
                            <li className='text-orange hover:underline underline-offset-4'> <a href="https://rachacuca.com.br/jogos/missionarios-e-canibais/">Missionários e canibais </a></li>
                            <li className='text-orange hover:underline underline-offset-4'> <a href="https://rachacuca.com.br/logica/problemas/carros-antigos/">Carros antigos </a></li>
                        </ol>
                    </div>
                </div>

                <div className='mt-10 flex justify-end'>
                    <a className='w-100 h-14 flex justify-center items-center cursor-pointer bg-orange rounded-xl hover:-translate-y-1 duration-300 hover:shadow-lg/20 shadow-orange'
                        href={`/conteudos/modulo2`}
                    >
                        <b className='text-lg font-bold text-black'>Próximo Módulo</b>
                        <ChevronRight className='text-black' size={30}></ChevronRight>
                    </a>
                </div>
            </section>
        </>
    )
}

export default Modulo1;