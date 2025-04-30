import { ChevronDown } from 'lucide-react';

const cover = () => {
    return (
        <section className="grid grid-rows-10 justify-items-center items-stretch h-screen" >
            <h1 className="row-span-9 text-5xl self-center font-bold align-middle">Programação de um jeito <span className="text-orange">SIMPLES</span></h1>
            <span className='animate-bounce row-span-1  self-end pb-20'><ChevronDown className='size-20'/></span>
        </section>
    )
}

export default cover;