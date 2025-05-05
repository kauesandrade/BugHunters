'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    }

    const [lastScroll, setLastScroll] = useState(0);



    useEffect(() => {
        const handleScroll = () => {
            const header = document.getElementById('header') as HTMLDivElement;

            // if (window.scrollY > lastScroll && window.scrollY > 200) {
            //   header.classList.add('invisible');
            // } else {
            //   header.classList.remove('invisible');
            // }

            if (window.scrollY == 0) {
                header.classList.remove('shadow-md', 'shadow-orange', 'opacity-25');
            } else {
                header.classList.add('shadow-md', 'shadow-orange', 'opacity-25');
            }

            setLastScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    return (
        <header id="header" className="grid grid-flow-col px-18 py-8 shadow-md shadow-orange fixed w-screen z-50 bg-background">
            <section className="flex items-center">
                <img className="cursor-pointer" onClick={() => handleNavigation("/")} src="/logo.svg" alt="Logo Bug Hunters" />
            </section>
            <section className="hidden lg:flex items-center font-extralight">
                <ul className="flex gap-24">
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/conteudos")}>Conteúdos</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/atividades")}>Atividades</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/sobre")}>Sobre</a>
                    </li>
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/contato")}>Contato</a>
                    </li>
                </ul>
            </section>
            <section className="flex lg:hidden items-center font-extralight">
                <ul className="flex gap-24">
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/conteudos")}>Conteúdos</a>
                    </li>
                </ul>
            </section>
        </header>
    )
}

export default Header;