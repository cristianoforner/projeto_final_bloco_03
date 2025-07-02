import { UserIcon, ShoppingCartIcon } from "@phosphor-icons/react"
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <>
            <div className='w-full flex justify-center py-4
            			   bg-gray-900 text-white'>
            
                <div className="container flex justify-between text-lg">
                    <Link to='/'>
                        <img className="w-[208px] h-[79.35]" src="logo.png"/>
                    </Link>

                    <div className="flex items-center flex-1 max-w-md mx-4 gap-2">
                        <input
                            type="text"
                            placeholder="Procurar"
                            className="flex-1 px-4 py-2 rounded-md bg-white text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                        <button
                            className="p-3 rounded-md bg-white hover:bg-gray-200"
                        >
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 text-black"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2"
                            >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
                            />
                            </svg>
                        </button>
                        </div>

                    <div className='flex gap-4 items-center'>
                        <div className="flex gap-8 px-8 ">
                        <Link to='/categorias' className='hover:underline'>Categorias</Link>
                        <Link to='/cadastrarcategoria' className='hover:underline'>Cadastrar categoria</Link>
                        </div>
                        <UserIcon size={36} weight="regular" />
                        <ShoppingCartIcon size={36} weight="regular" />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar