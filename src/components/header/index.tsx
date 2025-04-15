const Header = () => {
    return (
        <header className="grid grid-flow-col px-18 py-8 shadow-md shadow-orange">
            <section className="flex items-center">
                <img src="/public/logo.svg" alt="Logo Bug Hunters"/>
            </section>
            <section className="flex items-center font-poppins">
                <ul className="flex gap-12">
                    <li>
                        <a className="text-white font-poppins font-extralight" href="">Conteúdos</a>
                    </li>
                    <li>
                        <a href="">Atividades</a>
                    </li>
                    <li>
                        <a href="">Sobre</a>
                    </li>
                    <li>
                        <a href="">Contato</a>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;