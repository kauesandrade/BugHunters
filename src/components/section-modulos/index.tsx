import React from 'react';
import CardModulo, { cardModuloType } from  '../card-modulo/index';
import { Lightbulb } from 'lucide-react';

type sectionModulesType = {
    title: string;
    description: string;
    modulos: cardModuloType[];
}

const SectionModulos = ({title, description, modulos}:sectionModulesType) => {

    return (
        <section className='flex flex-col gap-24 my-50 w-full lg:px-45 px-20 min-h-screen'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-lg font-light'>{description}</p>
            </div>
            <div className='grid lg:grid-cols-3 grid-cols-1 gap-10 w-full'>
                {modulos.map((modulo, index) => (
                    <CardModulo key={index} icon={modulo.icon} titulo={modulo.titulo} texto={modulo.texto} id={modulo.id} />
                ))}
            </div>
        </section>
    )

}

export default SectionModulos;