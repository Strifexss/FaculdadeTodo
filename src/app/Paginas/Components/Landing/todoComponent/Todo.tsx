import ITodos from "@/app/models/Todos"
import GrupsItems from "./GrupItems"
import IITemTodo from "@/app/models/ItemTodo"
import {Trash, Plus} from "lucide-react"
import useExcluirGrupo from "@/app/hooks/TodoComponent/setExcluirGrupo";
import {motion} from "framer-motion"
import { useDispatch } from "react-redux";
import { handleHasNotification } from "@/app/features/Notifications/NotificiationSlice/hasNotificationSlices";
import { addNotification, INotification } from "@/app/features/Notifications/NotificiationSlice/NotificationSlices";
import ModalConfirmation from "../ModalInfos/ModalConfirmation";
import {useState} from "react"
import useHoraAtual from "@/app/hooks/useHoraAtual";


interface Props {
    Item: ITodos,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ModificarModal: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    ArrayTodos?: ITodos[],
    handleModalInfoVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    handleModalAddVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    setNomeTodoToADD: React.Dispatch<React.SetStateAction<string>>;
}

export default function TodoComponent({handleModalAddVisibility, Item, ModificarModal, handleModalInfoVisibility, setNomeTodoToADD, setTodos}:Props) {

    const dispatch = useDispatch()
    const [modalExcluirGrupo, setModalExcluirGrupo] = useState(false)
    const hora = useHoraAtual()

    const ExcluirGrupo = () => {
        const newNotificaion: INotification = {
            Mensagem: `Grupo ${Item.nome} excluido!`,
            hora: hora
        }  
        useExcluirGrupo({nomeTodo: Item.nome, setTodos: setTodos})
        dispatch(addNotification(newNotificaion))
        dispatch(handleHasNotification())
    }
    

    const handleAddButton = () => {
        handleModalAddVisibility(true)
        setNomeTodoToADD(Item.nome)
    }


    return(
        <motion.div 
        initial={{scale: 0.5}}
        animate={{scale: 1}}
        transition={{duration: 0.2}}
        exit={{scale: 0.5}}
        className="w-[20rem] h-[30rem] bg-white rounded-xl flex flex-col items-center cursor-pointer shadow-xl">
            <header className="w-full h-[5rem] bg-AzulPadrao rounded-t-xl flex justify-between items-center px-6 overflow-hidden whitespace-nowrap">
                <h1 className="text-white text-[1.2rem] font-semibold text-left">
                    <h1>{Item?.nome}</h1>
                </h1>
            </header>
            {   modalExcluirGrupo &&
                <ModalConfirmation Texto="Deseja Excluir o grupo?" FuncaoConfirmar={ExcluirGrupo} TextoButao1="Sim" TextoButao2="Não" FuncaoCancelar={() => setModalExcluirGrupo(false)} />
            }
            <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
                {   
                    Item.grupo.map(items => {
                        return(
                            <GrupsItems handleModalItemVisibility={handleModalInfoVisibility} ModificarModal={ModificarModal} key={items.nome} Item={items} />
                        )
                    })
                }
            </div>
            <div className="w-full h-[4rem] bg-gray-200 flex justify-end items-center gap-6 px-4">
                <button onClick={() => handleAddButton()}
                    className="bg-AzulPadrao w-[4rem] h-[2rem] flex justify-center items-center rounded-md">
                <Plus 
                    color="white" 
                    className="rounded-[50%] border-2 border-AzulPadrao "/>
                </button>
                <button onClick={() => setModalExcluirGrupo(true)} 
                    className="bg-AzulPadrao w-[4rem] h-[2rem] flex justify-center items-center rounded-md">
                <Trash 
                    color="white" 
                    className="rounded-[50%] border-2 border-AzulPadrao "/>
                </button>
            </div>
        </motion.div>
    )
}