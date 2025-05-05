
const banner = () => {

    return (
        <section id="banner" className="flex lg:flex-row flex-col bg-linear-to-r from-orange from-30% to-orange-600 to-100% lg:h-135 h-full w-full lg:px-45 px-20 py-20 gap-10 justify-between items-center ">

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

            <div className="lg:w-[calc(100%-450px)] h-full flex flex-col justify-start items-start text-white gap-10">
                <h1 className="text-4xl font-bold">A linguagem C</h1>
                <p className="">A linguagem C é uma linguagem de programação de propósito geral, desenvolvida por Dennis Ritchie entre 1969 e 1973 na Bell Labs. É uma das linguagens de programação mais populares e influentes, sendo amplamente utilizada em sistemas operacionais, software embarcado e aplicações de alto desempenho.</p>
                <div className="w-full h-full relative overflow-hidden rounded-md">
                    <div
                        className="absolute inset-0"
                        style={{
                            backgroundImage:
                                "repeating-linear-gradient(45deg, rgba(255,255,255,0.3), rgba(255,255,255,0.3) 1px, transparent 1px, transparent 6px)",
                            backgroundSize: "8px 8px",
                        }}
                    ></div>
                </div>
            </div>

        </section>
    )

}

export default banner;