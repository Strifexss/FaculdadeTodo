import ITodos from "@/app/models/Todos";
import InputTexto from "../../Login/InputTexto";
import { useState } from "react";
import { X, Folder } from "lucide-react";
import handleTextChange from "@/app/hooks/TodoComponent/useAdicionarNovoGrupo";

interface Props {
    handleCloseModal: () => void,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ArrayTodos: ITodos[]
}

export default function Modal({handleCloseModal, setTodos, ArrayTodos}:Props) {

    const [TodoUsuario, setTodoUsuario] = useState<ITodos | null>(null)

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        handleTextChange(event, setTodoUsuario);
      }
    
    const Adicionar = () => {
        if (TodoUsuario !== null) {
            setTodos([...ArrayTodos, TodoUsuario]); // Assuming setTodos expects an array
        }
        handleCloseModal()
    }

    return(
        <div 
        className="rounded-md absolute w-full h-full md:w-[35rem] md:h-auto top-0 md:top-auto bg-white md:-translate-y-52 flex flex-col items-start gap-16 drop-shadow-2xl">
            <div className="w-full h-[10rem] md:h-[5rem] flex justify-between px-6 py-4 bg-AzulPadrao rounded-bl-[3rem]">
                <section className="flex justify-center items-center gap-2">
                    <Folder color="white"/>
                    <h1 className="text-white font-bold md:font-semibold">
                        Adicionar Novo Grupo
                    </h1>
                </section>
                <button onClick={handleCloseModal}>
                    <X color="white"/>
                </button>
            </div>
            <div className="w-full px-6">
                <InputTexto LabelColor="Black" Tamanho="full" Nome="Nome do Grupo" handleChangeValue={handleChange} placeholder="Insira o nome do Grupo"/>
            </div>
            <div className="w-full h-[5rem] md:bg-gray-200 flex md:justify-end items-center px-6">
                <button className="text-white w-full md:w-auto h-[3rem] font-bold p-2 rounded-md bg-AzulPadrao" onClick={() => Adicionar()}>
                    <h1>Adicionar</h1>
                </button>
            </div>
        </div>
    )
}