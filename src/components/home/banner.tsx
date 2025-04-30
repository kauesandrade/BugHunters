
const banner = () => {

    return (
        <section className="flex bg-linear-to-r from-orange from-30% to-orange-600 to-100% h-135 w-full p-8 justify-between items-center">

        <div className="bg-white rounded-3xl p-6 size-100 pt-1 shadow-lg relative">

            <div className="absolute top-0 right-0 w-75 h-11 rounded-t-2xl bg-white z-10"></div>
            <div className="absolute top-0 right-0 w-75 h-10 bg-orange z-9"></div>

            <div className="absolute bottom-0 left-0 w-11 h-75 rounded-l-3xl bg-white z-10"></div>
            <div className="absolute bottom-0 left-0 w-10 h-75 bg-orange z-9"></div>

            <div className="absolute top-0 left-0 w-25 h-25 rounded-br-3xl bg-orange z-10">
                <div className="absolute w-20 h-20 bg-white rounded-full border-4 z-10"></div>
            </div>

            <img className="absolute mix-blend-multiply inset-25" src='/C.png'></img>


        </div>

        </section>
    )

}

export default banner;