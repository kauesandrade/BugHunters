'use client';

import React from "react";
import { useRouter } from "next/navigation";

const Header = () => {

    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    }

    return (
        <header className="grid grid-flow-col px-18 py-8 shadow-md shadow-orange fixed w-screen z-50 bg-background">
            <section className="flex items-center">
                <img className="cursor-pointer" onClick={() => handleNavigation("/")} src="/logo.svg" alt="Logo Bug Hunters"/>
            </section>
            <section className="flex items-center font-extralight">
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
        </header>
    )
}

export default Header;