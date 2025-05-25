import React from 'react';
import CardModulo, { cardModuloType } from  '../card-modulo/index';

type sectionModulesType = {
    title: string;
    description: string;
    modulos: cardModuloType[];
}

const SectionModulos = ({title, description, modulos}:sectionModulesType) => {

    return (
        <section className='flex flex-col gap-24 mt-50 w-full xl:px-45 px-20 min-h-screen mb-10'>
            <div className='flex flex-col justify-center items-center gap-3'>
                <h1 className='text-4xl font-bold'>{title}</h1>
                <p className='text-lg font-light text-center'>{description}</p>
            </div>
            <div className='grid xl:grid-cols-3 grid-cols-1 gap-10 w-full'>
                {modulos.map((modulo, index) => (
                    <CardModulo key={index} icon={modulo.icon} titulo={modulo.titulo} texto={modulo.texto} link={modulo.link} />
                ))}
            </div>
        </section>
    )

}

export default SectionModulos;