
import CardCategorias from "../cardcategorias/CardCategorias";
import { useState, useEffect } from "react";
import { buscar } from "../../../services/Service";
import { DNA } from "react-loader-spinner";
import type Categoria from "../../../models/Categoria";

function ListaCategorias() {

    const [isLoading, setIsLoading] = useState<boolean>(false)

    const [categorias, setCategorias] = useState<Categoria[]>([])

    async function buscarCategorias() {
        setIsLoading(true)
        await buscar('/categorias', setCategorias)
        setIsLoading(false)
    }
    
    useEffect(() => {
        buscarCategorias()    
    }, [categorias.length])
       
    
    return (
        <>
        {isLoading && (
                <DNA
                visible={true}
                height="200"
                width="200"
                ariaLabel="dna-loading"
                wrapperStyle={{}}
                wrapperClass="dna-wrapper mx-auto"
                />
            )}
            <div className="flex justify-center w-full my-4">
                <div className="container flex flex-col">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {categorias.map((categoria) => (
                            <CardCategorias key={categoria.id} categoria={categoria} />
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}
export default ListaCategorias;