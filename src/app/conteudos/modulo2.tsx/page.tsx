
const Modulo2 = () => {
    return (
        <>
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Introdução à Programação em C</h2>
                    <div className="flex flex-col gap-4">
                        <p>A linguagem C foi criada como sucessora para linguagem B, sendo desenvolvida em 1972 por Dennis Ritchie na compania Bell Labs. Seu propósito inicial era construir utilidades para o sistema operacional da época, o UNIX.</p>
                        <p>Com o passar do tempo, começou a ganhar popularidade, até chegar na década de 80, se tornando uma das linguagens mais utilizadas para programação. Hoje é reconhecida como a mãe de boa parte das linguagens atuais como Python, Java e Javascript.</p>
                        <p>Apesar de sua defasagem em prol da utilização de linguagens mais modernas, por ser uma linguagem de mais baixo nível, ou seja, mais próxima da linguagem de máquina e com poucas abstrações, ela ainda encontra o seu uso em sistemas operacionais: o famoso Linux, sucessor do UNIX, é escrito em boa parte em C.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Introdução à Programação em C</h4>
                    <div className="flex flex-col gap-4">
                        <p>Para iniciar a programar, precisamos antes de tudo de um arquivo de extensão “.c”. Feita essa etapa, podemos começar a editá-lo no seu aplicativo de preferência.</p>
                        <p>A estrutura básica de um programa em C seria a inclusão de bibliotecas (códigos previamente desenvolvidos e que podem ser reaproveitados) e depois a criação da função <span className="font-semibold text-orange">main</span> (onde o programa será de fato implementado) (principal). O código abaixo demonstra o mais simples que podemos chegar.</p>
                    </div>
                </div>

                {/* aqui tem que ir o trecho de código */}

                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-4">
                        <p>A primeira linha está importando a biblioteca <span className="font-semibold text-orange">stdio</span> (entra e saída padrão) com a palavra-chave <span className="font-semibold text-orange">#include</span>. Nela, encontra-se as principais funções para entrada e saída de dados.</p>
                        <p>A segunda linha define a função <span className="font-semibold text-orange">main</span>. Entre parênteses, encontra-se a palavra-chave <span className="font-semibold text-orange">void</span>. Ela representa o que será recebido como entrada (dados) quando o programa é chamado; nesse caso, nada. O <span className="font-semibold text-orange">int</span> (número inteiro) representa que tipo de dado será retornado pela função. Isso condiz com a linha 4: <span className="font-semibold text-orange">return 0</span>;</p>
                        <p>Quando a função principal retorna 0, significa que rodou como esperado. Qualquer outro número representa uma exceção durante a execução. O significado de cada número dependerá do programador.</p>
                        <p>As linhas 3 e 5 abrem e fecham as chaves, representando o escopo (bloco) da função; delimitadores para o compilador compreender quando a função começa e quando ela termina.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Como compilar e executar um programa em C (podem citar compiladores como GCC, Dev C++, CodeBlocks)</h4>
                    <div className="flex flex-col gap-4">
                        <p>Para poder utilizar ou até mesmo testar seu código, é necessário que ele seja executado. Alcançar isso vai depender de cada linguagem. No caso do C, é necessário a etapa de compilação, processo que basicamente traduz o código no arquivo “.c” em linguagem de máquina. </p>    
                        <p>Existem várias maneiras de compilar. Caso você esteja utilizando um sistema operacional Linux, é possível atingir o objetivo em três simples comandos. Primeiro, instale o famoso compilador para C: GCC. Por exemplo, para a distribuição Ubuntu, digite no terminal sudo apt-get install gcc, e depois confirme (“S” em SOs em português). Com o compilador instalado, utilize-o através do comando gcc –o main.out main.c, o mais básico que podemos chegar. main.out representa o arquivo executável que será gerado, enquanto main.c representa o arquivo onde está o código de fato. Para executar, abrimos o mais novo arquivo com o comando ./main.out e a mensagem é exibida no terminal.</p>                    
                        {/* Aqui vão duas imagens */}
                        <p>A instalação do GCC para o sistema operacional mais utilizado para desktop, o Windows, é um pouco mais complicado e longo. Para simples exercícios e testes, recomendamos a utilização do OnlineGDB, um compilador online. Acesse em <a className="text-orange underline decoration-orange" href="https://www.onlinegdb.com/">GDB online Debugger | Compiler - Code, Compile, Run, Debug online C, C++</a>. Também é possível instalar uma IDE (Integrated Development Environment, ambiente que auxilia na codificação e execução de programas) dedicada para a linguagem C, como o Dev-C++ através do link <a className="text-orange underline decoration-orange" href="https://bloodshed.net/">Home - Dev-C++ Official Website</a> e clicando no botão “Download original  Dev-C++ 5”. Após feita a instalação padrão e aberto o programa, podemos usar os comandos <span className="font-semibold text-orange">Ctrl+N</span> para abrir um novo arquivo e, após escrevermos o código, apertar <span className="font-semibold text-orange">F11</span> para compilá-lo e executá-lo. </p>                    
                        {/* Aqui vai uma imagem */}|
                        <p>Essas são as maneiras mais simples para atingir o mesmo objetivo. Mas caso queira algo mais amigável, você pode tentar fazer C ser executado pela IDE Visual Studio Code. Felizmente, eles disponibilizam um tutorial: <a className="text-orange underline decoration-orange" href="https://code.visualstudio.com/docs/languages/cpp">C/C++ for Visual Studio Code</a>. Tente-se aventurar, mas sempre com segurança!</p>                    
                        <p></p>                    
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Sintaxe básica (comentários, identação, boas práticas)</h4>
                    <div className="flex flex-col gap-4">
                        {/* Aqui vai um trecho de código */}
                        <p>Vamos fazer uma breve análise deste código e compreender alguns conceitos importantes de grande parte das linguagens. Ele é parecido com o que vimos, com algumas adições. As linhas 3 e 6 são o que chamamos de comentários, servindo para auxiliar no entendimento do código. Eles são delimitados por duas barras //. Outro ponto importante é o espaçamento na esquerda das linhas 6, 7 e 8. Isso se chama de indentação e é feito para auxiliar na compreensão da hierarquia do código; o que está dentro do que. Neste exemplo, representa que as linhas anteriormente mencionadas estão dentro da função <span className="font-semibold text-orange">main</span>.</p>    
                        <p>Outras dicas de boas práticas são:</p>

                        <ul className="list-disc list pl-12">
                            <li>Nomes claros e simples: você vai nomear muitas coisas durante a programação, portanto, tente ser descritivo com os seus significados;</li>
                            <li>Evite redundância: se você estiver fazendo o mesmo procedimento várias vezes, considere criar uma função para isso;</li>
                            <li>Declaração de variáveis: quando possível, tente sempre declará-las logo no início de seu escopo; </li>
                            <li>Funções enxutas: não coloque muitas linhas na mesma função; tente separar em tarefas menores;</li>
                            <li>Números mágicos: os famosos números mágicos são aqueles números arbitrários que você escreve no código. Ao em vez disso, tente utilizar de uma constante ou variável.</li>
                        </ul>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modulo2;