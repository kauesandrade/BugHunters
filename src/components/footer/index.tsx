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
                    <button onClick={() => handleNavigation("/")} className="cursor-pointer font-medium bg-white rounded-lg text-black px-6 py-3 flex w-fit">
                        Saiba mais
                        <ChevronRight className="text-orange hover:translate-x-2 duration-200" />
                    </button>
                </section>

                <section className="col-span-1 grid grid-cols-3 gap-x-12">
                    <div>
                        <h6 className="font-semibold text-2xl pb-2">Modulos</h6>
                        <p>Modulo 1</p>
                        <p>Modulo 2</p>
                        <p>Modulo 3</p>
                        <p>Modulo 4</p>
                        <p>Modulo 5</p>
                        <p>Modulo 6</p>
                        <p>Modulo 7</p>
                    </div>

                    <div>
                        <h6 className="font-semibold text-2xl pb-2">Modulos</h6>
                        <p>Modulo 1</p>
                        <p>Modulo 2</p>
                        <p>Modulo 3</p>
                        <p>Modulo 4</p>
                        <p>Modulo 5</p>
                        <p>Modulo 6</p>
                        <p>Modulo 7</p>
                    </div>

                    <div>
                        <h6 className="font-semibold text-2xl pb-2">Modulos</h6>
                        <p>Modulo 1</p>
                        <p>Modulo 2</p>
                        <p>Modulo 3</p>
                        <p>Modulo 4</p>
                        <p>Modulo 5</p>
                        <p>Modulo 6</p>
                        <p>Modulo 7</p>
                    </div>
                </section>
            </div>
        </footer>
    )

}

export default Footer;