import { ChevronDown } from 'lucide-react';

const Cover = () => {
    return (
        <section className="grid grid-rows-10 justify-items-center items-stretch h-screen" >
            <h1 className="row-span-9 text-xl sm:text-3xl md:text-4xl xl:text-5xl self-center font-bold align-middle">Programação de um jeito <span className="text-orange">SIMPLES</span></h1>
            <a href='#banner' className='animate-bounce row-span-1 self-end pb-20'><ChevronDown className=' md:size-15 xl:size-20'/></a>
        </section>
    )
}

export default Cover;