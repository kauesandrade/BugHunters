
const banner = () => {

    return (
        <section className="flex bg-linear-to-r from-orange from-30% to-orange-600 to-100% h-135 w-full p-45 gap-10 justify-between items-center ">

        <div className="bg-white rounded-4xl p-6 size-90 pt-1 shadow-lg relative">

            <div className="absolute top-0 right-0 w-65 h-11 rounded-t-4xl bg-white z-10"></div>
            <div className="absolute top-0 right-0 w-65 h-10 bg-orange z-9"></div>

            <div className="absolute bottom-0 left-0 w-11 h-65 rounded-l-4xl bg-white z-10"></div>
            <div className="absolute bottom-0 left-0 w-10 h-65 bg-orange z-9"></div>

            <div className="absolute top-0 left-0 w-25 h-25 rounded-br-4xl bg-orange z-10">
                <div className="absolute w-20 h-20 bg-white rounded-full border-4 z-10"></div>
            </div>

            <img className="absolute mix-blend-multiply inset-25 size-40" src='/C.png'></img>
        </div>

        <div className="w-[calc(100%-450px)] flex flex-col justify-center items-start text-white gap-10">
            <h1 className="text-4xl font-bold">A linguagem C</h1>
            <p className="">A linguagem C é uma linguagem de programação de propósito geral, desenvolvida por Dennis Ritchie entre 1969 e 1973 na Bell Labs. É uma das linguagens de programação mais populares e influentes, sendo amplamente utilizada em sistemas operacionais, software embarcado e aplicações de alto desempenho.</p>
            <div className="mt-4 h-16 bg-[repeating-linear-gradient(45deg,transparent,transparent_10px,rgba(255,255,255,0.2)_10px,rgba(255,255,255,0.2)_20px)] rounded-md"></div>
        </div>

        </section>
    )

}

export default banner;