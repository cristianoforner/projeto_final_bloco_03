import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { buscar, deletar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function DeletarCategoria() {

    const navigate = useNavigate()

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categoria, setCategoria] = useState<Categoria>({} as Categoria)
    
    const { id } = useParams<{ id: string }>()

    async function buscarCategoriaPorId(id: string) {
        await buscar(`/categorias/${id}`, setCategoria)
    }

    useEffect(() => {
        if (id !== undefined) {
            buscarCategoriaPorId(id)
        }
    }, [id])

    async function deletarCategoria() {
        setIsLoading(true)

        try {
            await deletar(`/categorias/${id}`)
            alert("Categoria excluida com sucesso!")

        } catch (error: any) {
            alert("Erro ao excluir a categoria!")
            console.error(error)
        }
        setIsLoading(false)
        retornar()
        }

        function retornar(){
            navigate("/categorias")
        }
    return (
        <div className='container w-1/3 mx-auto'>
            <h1 className='text-4xl text-center my-4'>Deletar categoria</h1>
            <p className='text-center font-semibold mb-4'>
                Você tem certeza de que deseja apagar a categoria a seguir?</p>
            <div className='border flex flex-col rounded-2xl overflow-hidden justify-between'>
                <header 
                    className='py-2 px-6 bg-slate-800 text-white font-bold text-2xl'>
                    Categoria
                </header>
                <p className='p-8 text-3xl bg-slate-200 h-full'>{categoria.nome}</p>
                <div className="flex">
                    <button 
                        className='text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2'
                        onClick={retornar}
                    >
                        Não
                    </button>
                     <button 
                        className='w-full text-slate-100  bg-slate-700 hover:bg-slate-800 flex items-center justify-center'
                        onClick={deletarCategoria}
                    >
                        {isLoading ? (
                            <RotatingLines strokeColor="white"strokeWidth="5"animationDuration="0.75"width="24"visible={true}/> 
                            ) : ( 
                            <span>Sim</span>
                        )}
                    </button>
                </div>
            </div>
        </div>
    )
}
export default DeletarCategoria