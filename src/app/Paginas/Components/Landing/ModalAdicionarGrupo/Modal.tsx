import ITodos from "@/app/models/Todos";
import InputTexto from "../../Login/InputTexto";
import { useState } from "react";
import { X, Folder } from "lucide-react";
import useAdicionarGrupo from "@/app/hooks/TodoComponent/useAdicionarNovoGrupo";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { addNotification,INotification } from "@/app/features/Notifications/NotificiationSlice/NotificationSlices";
import { handleHasNotification } from "@/app/features/Notifications/NotificiationSlice/hasNotificationSlices";
import useHoraAtual from "@/app/hooks/useHoraAtual";

interface Props {
    handleCloseModal: () => void,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ArrayTodos: ITodos[]
}

export default function Modal({handleCloseModal, setTodos, ArrayTodos}:Props) {

    const isMobile = useMediaQuery({ maxWidth: 640 });
    const [TodoUsuario, setTodoUsuario] = useState<ITodos | null>(null)
    const [erroGrupoExiste, setErroGrupoExiste] = useState(false)
    const dispatch = useDispatch()
    const hora = useHoraAtual()

    const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        
        useAdicionarGrupo(event, setTodoUsuario);
        
      }
    
    const Adicionar = () => {
        const VerificarGrupoExistente = ArrayTodos.some(Todos => Todos.nome === TodoUsuario?.nome)
        const newNotification:INotification = {
            Mensagem: `Novo grupo adicionado: ${TodoUsuario?.nome}`,
            hora: hora
        }
        console.log(VerificarGrupoExistente)
        if (VerificarGrupoExistente){
            return (
                setErroGrupoExiste(true),
                setTimeout(() => {
                    setErroGrupoExiste(false)
                }, 5000)
                )
        }
        else {
            if(TodoUsuario !== null) {
                setTodos(prevState => [...prevState, TodoUsuario]);
                handleCloseModal()
                dispatch(addNotification(newNotification))
                dispatch(handleHasNotification())
            }
    }
        
    }

    return(
        <motion.div
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : -200 }}
        transition={{duration: 0.2}} 
        className="rounded-md absolute w-full h-full md:w-[35rem] md:h-auto top-0 md:top-auto bg-white md:-translate-y-60 flex flex-col items-start gap-16 drop-shadow-2xl">
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
            <div className="w-full px-6 flex flex-col justify-center gap-2">
                <InputTexto Erro={erroGrupoExiste} LabelColor="Black" Tamanho="full" Nome="Nome do Grupo" handleChangeValue={HandleChange} placeholder="Insira o nome do Grupo"/>
                <section className="w-full flex justify-start">
                    {
                        erroGrupoExiste &&
                        <h1 className="text-red-500 font-semibold">
                            Um grupo com esse nome já existe
                        </h1>
                    }
                </section>
            </div>
            <div className="w-full h-[5rem] md:bg-gray-200 flex md:justify-end items-center px-6">
                <button className="text-white w-full md:w-auto h-[3rem] font-bold p-2 rounded-md bg-AzulPadrao" 
                onClick={() => Adicionar()}>
                    <h1>Adicionar</h1>
                </button>
            </div>
        </motion.div>
    )
}