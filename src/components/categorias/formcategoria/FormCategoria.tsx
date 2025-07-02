import { useState, useEffect, type ChangeEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { buscar, atualizar, cadastrar } from "../../../services/Service"
import { RotatingLines } from "react-loader-spinner"

function FormCategoria() {

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
        } else {
            setCategoria({
                id: undefined,
                nome:""
            })
        }
    }, [id])

    function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
        setCategoria({
            ...categoria,
            [e.target.name]: e.target.value
        })
    }

    async function gerarNovaCategoria(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        setIsLoading(true)

        if(id !== undefined){
            try {
                await atualizar("/categorias", categoria, setCategoria)
                alert("A Categoria foi atualizada com sucesso!")
            } catch (error: any) {
                alert("Erro ao atualizar a Categoria!")
                console.error(error)
            }
        } else {
            try {
                await cadastrar("/categorias", categoria, setCategoria)
                alert("A Categoria foi atualizada com sucesso!")
            } catch (error: any) {
                alert("Erro ao atualizar a Categoria!")
                console.error(error)
                }
            }
        setIsLoading(false)
        retornar()
    }

    function retornar(){
        navigate("/categorias")
    }

    return (
        <div className="container flex flex-col items-center justify-center mx-auto">
            <h1 className="text-4xl text-center my-8">
                {id === undefined ? "Cadastrar Categoria" : "Editar Categoria"}
            </h1>

            <form className="w-1/2 flex flex-col gap-4" 
                onSubmit={gerarNovaCategoria}>
                <div className="flex flex-col gap-2">
                    <label htmlFor="nome">Nome da Categoria</label>
                    <input
                        type="text"
                        placeholder="Descreva o nome da categoria"
                        name='nome'
                        className="border-2 border-slate-700 rounded p-2"
                        value={categoria.nome}
                        onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
                    />
                </div>
                <button
                    className="rounded text-slate-100 bg-slate-700 cursor-pointer
                               hover:bg-slate-800 w-1/2 py-2 mx-auto flex justify-center"
                    type="submit">
                        
                    {
                        isLoading ? (
                            <RotatingLines strokeColor="white"strokeWidth="5"animationDuration="0.75"width="24"visible={true}/> 
                        ) : (
                            <span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
                        )
                    }
                </button>
            </form>
        </div>
    );
}

export default FormCategoria;