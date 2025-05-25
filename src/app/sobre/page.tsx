const Sobre = () => {
    return (
        <>
            <section className="flex flex-col mt-40 min-h-screen w-full mb-80 px-45 gap-5 text-2xl">
                <h1 className="text-4xl font-bold text-center mb-10">
                    Sobre o projeto
                </h1>
                <p className="indent-16 text-justify">
                    O projeto de criação de um site voltado ao ensino da lógica de programação nasceu como uma iniciativa dentro da disciplina de PAC, com o objetivo principal de contribuir com a comunidade ao nosso redor.
                </p>
                <p className="indent-16 text-justify">
                    A lógica de programação é uma das bases fundamentais da área da computação. Ela desenvolve o raciocínio lógico, a capacidade de resolver problemas e o entendimento da estrutura por trás de qualquer linguagem de programação. Sabendo disso, identificamos a necessidade de criar uma ferramenta acessível, clara e interativa para auxiliar aqueles que desejam aprender ou aprofundar seus conhecimentos nesse tema essencial.
                </p>
                <p className="indent-16 text-justify">
                Nosso site está sendo pensado para explicar os principais conceitos de lógica de programação de maneira didática e progressiva, utilizando exemplos práticos, atividades e explicações simples. Além de ser uma forma eficaz de consolidar o conteúdo que estudamos na disciplina, o projeto também tem um caráter social, pois será disponibilizado gratuitamente para a comunidade externa – estudantes, autodidatas e qualquer pessoa interessada em dar os primeiros passos no mundo da programação.
                </p>
                <p className="indent-16 text-justify">
                Com essa iniciativa, buscamos unir teoria e prática, colaborando não apenas com nosso próprio desenvolvimento acadêmico, mas também promovendo a democratização do conhecimento em tecnologia, uma área cada vez mais essencial em diversas profissões e setores da sociedade.
                </p>
                <h1 className="mt-14 text-4xl font-bold text-center mb-10">Membros</h1>
                <ul className="text-base list-disc list-inside pl-8 indent-[-24px]">
                    <li>Bernardo Planinscheck Zapelini: pesquisa e desenvolvimento do módulo 6;</li>
                    <li>Carlos Henrique Lechner: desenvolvimento do módulo 7;</li>
                    <li>Erika Lourrana Silva de Figueiredo: pesquisa do módulo 4;</li>
                    <li>Felipe Mielke Ferreira: pesquisa e desenvolvimento do módulo 1 e 5. Desenvolvimento geral do site;</li>
                    <li>João Victor Santana: ???;</li>
                    <li>João Vitor Winter: pesquisa e desenvolvimento do módulo 2. Desenvolvimento geral do site;</li>
                    <li>Karoliny Daiana Cieply: concepção das páginas e desenvolvimento geral do site;</li>
                    <li>Kauê Schaefer de Andrade: configuração inicial do projeto e desenvolvimento geral do site;</li>
                    <li>Nícolas Augusto Gazaniga: pesquisa e desenvolvimento do módulo 7;</li>
                    <li>Nicolas Renan Dellani: pesquisa do módulo 3.</li>
                </ul>
            </section>
        </>
    )
}

export default Sobre;