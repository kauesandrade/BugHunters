'use client';

import React from "react";
import { useRouter } from "next/navigation";

import { icons, Lightbulb } from 'lucide-react';

type cardModuloType = {
    icon?: Element | any
    titulo: string
    texto: string
}

//exemplo import: <CardModulo icon={<Lightbulb className="text-orange" size={"48px"}/>} titulo="Lógica de programação" texto="texto texto texto texto texto texto texto texto texto texto texto texto" />

const CardModulo = ({ titulo, texto, icon }: cardModuloType) => {
    return (
        <article className="hover:-translate-y-4 duration-300 hover:shadow-lg/20 shadow-orange text-white bg-[#302B28] rounded-3xl py-10 px-11 flex flex-col gap-6 w-full">
            <>{icon}</>
            <div className="flex flex-col gap-2">
                <p className="text-[20px] font-medium">{titulo}</p>
                <p className="font-light">{texto}</p>
            </div>
            <a className="text-orange hover:underline underline-offset-6 w-fit" href="#">Veja completo</a>
        </article>
    )
}

export default CardModulo;