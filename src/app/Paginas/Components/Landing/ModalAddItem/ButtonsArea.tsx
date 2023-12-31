import { IDIncrement } from "@/app/features/IDITems/IDItemsSlice";
import adicionarNovoObjeto from "@/app/hooks/TodoComponent/useAdicionarNovoItem";
import IITemTodo from "@/app/models/ItemTodo";
import ITodos from "@/app/models/Todos";
import { useDispatch, useSelector } from "react-redux";
import { addNotification, INotification } from "@/app/features/Notifications/NotificiationSlice/NotificationSlices";
import { handleHasNotification } from "@/app/features/Notifications/NotificiationSlice/hasNotificationSlices";
import { SetStateAction } from "react";
import useHoraAtual from "@/app/hooks/useHoraAtual";

interface Props {
    NomeTodoToAdd: string,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    handleModalAddVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    handleCancel: React.Dispatch<React.SetStateAction<boolean>>;
    TituloToADD: string,
    DataToADD: string,
    ConteudoToAdd: string,
    setErro: React.Dispatch<SetStateAction<boolean>>
}

export default function ButtonsArea({ConteudoToAdd, handleCancel, DataToADD, TituloToADD, handleModalAddVisibility, NomeTodoToAdd, setTodos, setErro}:Props) {

    const idState = useSelector((state: {ID: number}) => state.ID)
    const dispatch = useDispatch()
    const hora = useHoraAtual()

    function add() {
        const newNotification: INotification = {
            Mensagem: `Item ${TituloToADD} foi adicionado ao grupo ${NomeTodoToAdd}`,
            hora: hora 
        }

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
        if(TituloToADD == "") {
            setErro(true)
            setTimeout(() => {
                setErro(false)
            },5000)
        }
        else {
            adicionarNovoObjeto({nomeTodo: NomeTodoToAdd, novoObjeto, setTodos});
            dispatch(addNotification(newNotification))
            dispatch(handleHasNotification())
            handleModalAddVisibility(false)
        }
    }

    return(
        <section className="w-full p-6 flex items-center justify-around gap-2 bg-gray-200">
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