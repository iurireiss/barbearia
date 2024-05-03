

export function Header() {
    return (
        <div className="shadow-xl">
            <nav className="bg-black border-gray-200 dark:bg-gray-900 t">
                <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src="https://images.vexels.com/media/users/3/132674/isolated/preview/5de3fc4efa4d8ff72773bfc119c1a8e9-bigode-branco-hipster-3.png" className="h-20" alt="Flowbite Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default ">
                        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4   rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0  dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#" className=" py-2 px-1 text-white hover:text-yellow-600 rounded font-extralight text-lg">Home</a>
                            </li>
                            <li>
                                <a href="#" className=" py-2 px-1 text-white hover:text-yellow-600 rounded font-extralight text-lg">Sobre</a>
                            </li>
                            <li>
                                <a href="#" className=" py-2 px-1 text-white hover:text-yellow-600 rounded font-extralight text-lg">Serviços</a>
                            </li>
                            <li>
                                <a href="#" className=" py-2 px-1 text-white hover:text-yellow-600 rounded font-extralight text-lg">Quem Somos</a>
                            </li>
                            <li>
                                <a href="#" className=" py-2 px-1 text-white hover:text-yellow-600 rounded font-extralight text-lg">Contatos</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <button className="rounded-lg font-medium bg-yellow-600 hover:bg-yellow-500 text-white px-6 py-2">
                            Agendar
                        </button>
                    </div>
                </div>
            </nav>
            
        </div>
    )
}