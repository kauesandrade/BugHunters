'use client';

import { Plus, Minus, Asterisk, Slash, Percent, Equal, ChevronRight, ChevronLeft, Ampersand } from 'lucide-react';

const Modulo4 = () => {
    return (
        <>
            <section className="text-white px-[180px] text-justify font-light flex flex-col gap-14 pb-80">
                <div className="flex flex-col gap-10">
                    <h2 className="text-4xl font-semibold">Operadores relacionais</h2>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores aritméticos</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Plus/></span>  Adição</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Minus/></span>  Subtração</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Asterisk/></span>  Multiplicação</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Slash/></span>  Divisão</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange"><Percent /></span>  Módulo (resto da divisão)</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores relacionais</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><Equal/><Equal /></span>  Igual a</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row">!<Equal/></span>  Diferente de</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronLeft/></span>  Menor que</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronRight/></span>  Maior que</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronLeft /><Equal/></span>  Menor ou igual a</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><ChevronRight /><Equal/></span>  Maior ou igual a</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Operadores Lógicos</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange flex flex-row"><Ampersand/><Ampersand /></span>  E (AND) – retorna true se ambos forem true.</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">| |</span>  Ou (OR) – retorna true se pelo menos um for true.</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">!</span>  Não (NOT) – inverte o valor lógico.</p>
                    </div>
                </div>

                <div className="flex flex-col gap-10">
                    <h4 className="text-2xl font-medium underline underline-offset-4 decoration-orange">Ordem de precedência</h4>
                    <div className="flex flex-col gap-4">
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">1</span>  Parênteses</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">2</span>  Multiplicação, divisão, módulo</p>
                        <p className="bg-[#302B28] border-1 border-orange rounded-lg p-2 flex gap-2 font-light"><span className="font-bold text-orange">3</span>  Soma, adição</p>
                    </div>
                </div>

            </section>
        </>
    )
}

export default Modulo4;