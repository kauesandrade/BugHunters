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
                header.classList.remove('shadow-md', 'shadow-orange', 'bg-background/80', 'backdrop-blur-sm' );
            } else {
                header.classList.add('shadow-md', 'shadow-orange', 'bg-background/80', 'backdrop-blur-sm' );
            }

            setLastScroll(window.scrollY);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [lastScroll]);

    return (
        <header id="header" className="grid grid-flow-col px-18 py-8 shadow-md/60 shadow-orange fixed w-screen z-50 bg-background">
            <section className="flex items-center">
                <img className="cursor-pointer" onClick={() => handleNavigation("/")} src="/logo.svg" alt="Logo Bug Hunters" />
            </section>
            <section className="flex items-center font-extralight">
                <ul className="flex gap-24">
                    <li>
                        <a className="cursor-pointer hover:underline underline-offset-8" onClick={() => handleNavigation("/conteudos")}>Módulos</a>
                    </li>
                    {/* <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/atividades")}>Atividades</a>
                    </li> */}
                    <li>
                        <a className="cursor-pointer hover:underline underline-offset-8" onClick={() => handleNavigation("/sobre")}>Sobre</a>
                    </li>
                </ul>
            </section>
            {/* <section className="flex xl:hidden items-center font-extralight">
                <ul className="flex gap-24">
                    <li>
                        <a className="cursor-pointer" onClick={() => handleNavigation("/conteudos")}>Conteúdos</a>
                    </li>
                </ul>
            </section> */}
        </header>
    )
}

export default Header;