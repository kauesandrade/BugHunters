'use client';

import { ReactElement } from "react";

type cardModuloType = {
    icon?: ReactElement<string, string>
    titulo: string
    texto: string
    link: string
}

export type { cardModuloType };

//exemplo import: <CardModulo icon={<Lightbulb className="text-orange" size={"48px"}/>} titulo="Lógica de programação" texto="texto texto texto texto texto texto texto texto texto texto texto texto" />

const CardModulo = ({ titulo, texto, icon, link}: cardModuloType) => {
    return (
        <article className="hover:-translate-y-4 duration-300 hover:shadow-lg/20 shadow-orange text-white bg-[#302B28] rounded-3xl py-10 px-11 flex flex-col justify-between gap-6 w-full">
            <div className="flex flex-col gap-6">
                <>{icon}</>
                <div className="flex flex-col gap-2">
                    <p className="text-[20px] font-medium">{titulo}</p>
                    <p className="font-light">{texto}</p>
                </div>
            </div>
            <a className="text-orange hover:underline underline-offset-6 w-fit" href={`/conteudos${link}`} >Veja completo</a>
        </article>
    )
}

export default CardModulo;