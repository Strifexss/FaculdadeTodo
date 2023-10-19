import { IDIncrement } from "@/app/features/IDITems/IDItemsSlice";
import adicionarNovoObjeto from "@/app/hooks/TodoComponent/useAdicionarNovoItem";
import IITemTodo from "@/app/models/ItemTodo";
import ITodos from "@/app/models/Todos";
import { useDispatch, useSelector } from "react-redux";

interface Props {
    NomeTodoToAdd: string,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    handleModalAddVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
    TituloToADD: string,
    DataToADD: string,
    ConteudoToAdd: string
}

export default function ButtonsArea({ConteudoToAdd, handleCancel, DataToADD, TituloToADD, handleModalAddVisibility, NomeTodoToAdd, setTodos}:Props) {

    const idState = useSelector((state: {ID: number}) => state.ID)
    const dispatch = useDispatch()

    function add() {
        dispatch(IDIncrement())
        console.log(idState)
        const novoObjeto: IITemTodo = {
            nome: TituloToADD,
            complete: false,
            data: DataToADD,
            Conteudo: ConteudoToAdd,
            id: idState
        }
        console.log(novoObjeto)
        adicionarNovoObjeto({nomeTodo: NomeTodoToAdd, novoObjeto, setTodos});
        handleModalAddVisibility(false)
    }

    return(
        <section className="w-full p-6 flex items-center justify-around gap-2">
                <button onClick={add} 
                className="w-full h-[2.5rem] text-white font-semibold bg-green-500">
                    Adicionar
                </button>
                <button onClick={() => handleCancel(false)}
                 className="w-full h-[2.5rem] text-white font-semibold bg-red-500">
                    Cancelar
                </button>
        </section>
    )
}