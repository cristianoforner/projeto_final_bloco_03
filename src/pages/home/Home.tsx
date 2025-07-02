
function Home() {
    return (
        <>
            <div className="bg-gray-200 flex justify-center">
                <div className='container grid grid-cols-2 text-black min-h-[70vh] items-center'>
                    <div className="flex flex-col gap-4 items-center justify-center py-4">
                        <h2 className='text-5xl font-bold'>
                            Seja Bem Vinde!
                        </h2>
                        <p className='text-xl'>
                            Aqui você encontra Medicamentos e Cosméticos!
                        </p>

                        <div className="flex justify-around gap-4">
                            <div className='rounded text-black 
                                            border-black border-solid border-2 py-2 px-4'
                                >
                                Cadastrar Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center ">
                        <img
                            src="imghome.png"
                            alt="Imagem Página Home"
                            className='w-2/3'
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home