'use client';

import React from "react";

import { ChevronRight } from 'lucide-react';
import { useRouter } from "next/navigation";

const Footer = () => {

    const router = useRouter();

    const handleNavigation = (path: string) => {
        router.push(path);
    }

    return (
        <footer className="bg-orange rounded-4xl px-16 py-14 text-black m-3">
            <div className="border-b border-white pb-16 grid grid-flow-col grid-cols-3">
                <section className="col-span-2 flex flex-col gap-8">
                    <p className="w-1/2 font-semibold text-2xl">Domine o código, transforme ideias em realidade — comece a programar hoje!</p>
                    <button onClick={() => handleNavigation("/conteudos")} className="cursor-pointer font-medium bg-white rounded-lg text-black px-6 py-3 flex w-fit">
                        Saiba mais
                        <ChevronRight className="text-orange hover:translate-x-2 duration-200" />
                    </button>
                </section>
            </div>
        </footer>
    )

}

export default Footer;