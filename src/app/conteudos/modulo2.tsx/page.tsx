
const Modulo2 = () => {
    return (
        <>
            <section className="text-white px-[180px] text-justify">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Introdução à Programação em C</h2>
                    <div className="flex flex-col gap-4 font-light">
                        <p>A linguagem C foi criada como sucessora para linguagem B, sendo desenvolvida em 1972 por Dennis Ritchie na compania Bell Labs. Seu propósito inicial era construir utilidades para o sistema operacional da época, o UNIX.</p>
                        <p>Com o passar do tempo, começou a ganhar popularidade, até chegar na década de 80, se tornando uma das linguagens mais utilizadas para programação. Hoje é reconhecida como a mãe de boa parte das linguagens atuais como Python, Java e Javascript.</p>
                        <p>Apesar de sua defasagem em prol da utilização de linguagens mais modernas, por ser uma linguagem de mais baixo nível, ou seja, mais próxima da linguagem de máquina e com poucas abstrações, ela ainda encontra o seu uso em sistemas operacionais: o famoso Linux, sucessor do UNIX, é escrito em boa parte em C.</p>
                    </div>
                </div>

                <div>
                    <h4>Introdução à Programação em C</h4>
                    <div>
                        <p>Para iniciar a programar, precisamos antes de tudo de um arquivo de extensão “.c”. Feita essa etapa, podemos começar a editá-lo no seu aplicativo de preferência. </p>
                        <p>A estrutura básica de um programa em C seria a inclusão de bibliotecas (códigos previamente desenvolvidos e que podem ser reaproveitados) e depois a criação da função main (onde o programa será de fato implementado) (principal). O código abaixo demonstra o mais simples que podemos chegar.</p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Modulo2;