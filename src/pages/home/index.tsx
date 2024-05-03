import { Header } from "../header"

export function Home() {
    return (

        <div >
            <Header />

            <section className="flex w-full h-96 shadow-lg bg-local bg-no-repeat bg-cover flex-col justify-center items-center bg-gray-800 bg-[url('https://nucleocursos.com.br/blog/wp-content/uploads/2023/08/curso-de-barbeiro-em-Blumenau.jpg')]">

                <div className="bg-gray-950/90  w-full h-screen flex flex-col items-center justify-center">
                    <p className="text-white font-bold mt-20 text-sm lg:text-3xl md:text-2xl sm:text-md mx-4 ">

                        ESTILO É UM REFLEXO DA SUA ATITUDE E SUA PERSONALIDADE .
                    </p>

                    <strong className="font-extralight mt-4 text-white mb-10 mx-4">
                        Horario de funcionameno das 08:00 as 19:00
                    </strong>
                    <button className="bg-yellow-600 rounded px-4 py-2 hover:bg-yellow-500 font-semibold text-white ">
                        Agendar Horario
                    </button>
                </div>

            </section>

            <section className="w-full p-4 items-center justify-center bg-gray-950 flex flex-col lg:flex-row">
                <div className="min-w-72 p-4 ml-10 items-center   justify-center flex-1 ">
                    <img
                        src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2017/12/18220109/corte-ondulado-moicano-low-fade.jpg"
                        alt=""
                        className="w-72 rounded-3xl"
                    />
                </div>
                <div className=" items-center justify-center h-1/2 p-20 text-white flex-1 ">
                    Desde 1992, a Barbearia Torres traz para os mineiros as mais novas tendências e técnicas de cortes de cabelo e barba. Oferecendo serviços de alta qualidade, em ambientes descolados e com excelente localização, ela garante a satisfação dos clientes e muita prosa boa. Fundada por Mr.Torres, barber referência no mercado, a barbearia conta com uma equipe de primeira. Agende o seu horário e viva uma experiência única.

                </div>
            </section>

            <section className="w-full flex flex-col items-center justify-center gap-4 mb-10">
                <h1 className="font-bold text-4xl py-4">Serviços</h1>
                <p className="p-4">
                    Barbeiro é uma pessoa cuja ocupação principal é cortar, pentear e fazer a barba de homens e meninos.

                </p>
                <div className="flex md:flex-row lg:flex-row gap-4 mt-10 flex-col p-4">
                    <div className="border-2 border-yellow-600 shadow-lg bg-yellow-600 rounded-3xl">
                        <img
                            src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2017/12/18220109/corte-ondulado-moicano-low-fade.jpg"
                            alt=""
                            className="w-72 hover:scale-110 duration-300  rounded-3xl"
                        />
                        <div className="flex w-full p-4 gap-8">
                            <p className="font-medium">
                                Corte Ameriacano
                            </p>
                            <strong>R$ 29,90</strong>
                        </div>

                    </div>
                    <div className="border-2 border-yellow-600 shadow-lg bg-yellow-600 rounded-3xl">
                        <img
                            src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2017/12/18220109/corte-ondulado-moicano-low-fade.jpg"
                            alt=""
                            className="w-72 hover:scale-110 duration-300 rounded-3xl"
                        />
                        <div className="flex w-full p-4 gap-8">
                            <p className="font-medium">
                                Corte Padrão
                            </p>
                            <strong>R$ 15,90</strong>
                        </div>

                    </div>
                    <div className="border-2 border-yellow-600 bg-yellow-600 shadow-lg rounded-3xl">
                        <img
                            src="https://st4allthings4p4ci.blob.core.windows.net/allthingshair/allthingshair/wp-content/uploads/sites/2/2017/12/18220109/corte-ondulado-moicano-low-fade.jpg"
                            alt=""
                            className="w-72 hover:scale-110 duration-300 rounded-3xl"
                        />
                        <div className="flex w-full p-4 gap-8">
                            <p className="font-medium">
                                Corte Personalizado
                            </p>
                            <strong>R$ 35,90</strong>
                        </div>

                    </div>
                </div>
            </section>
            
            <section className="w-full bg-black text-white p-4 flex flex-col items-center justify-center">
                <div className="w-full p-4 flex flex-col items-center justify-center">
                    <p className="font-bold text-3xl mb-4">
                        Agendar Horario
                    </p>
                    <div className="w-full p-4 flex flex-row items-center justify-center gap-4">
                    
                        <input
                            type="text"
                            className="bg-slate-200 text-black outline-none rounded-md w-80 h-10 px-2"
                            placeholder="Digite seu nome Completo"
                        />

                    </div>
                    <div className="w-full p-4 flex flex-row items-center justify-center gap-4">
                    
                        <input
                            type="date"
                            className="bg-slate-200 text-black outline-none rounded-md w-80 h-10 px-2"
                            placeholder="00/00/0000"
                        />

                    </div>
                    <div className="w-full p-4 flex flex-row items-center justify-center gap-4" >
                                               
                        <input
                            type="time"
                            className="bg-slate-200 text-black outline-none rounded-md w-80 h-10 px-2"
                            placeholder="00:00"
                        />
                    </div>
                    <button className="bg-yellow-600 rounded-md text-white w-80 h-10 px-2">
                        Agendar
                    </button>
                </div>
            </section>

        </div>

    )
}