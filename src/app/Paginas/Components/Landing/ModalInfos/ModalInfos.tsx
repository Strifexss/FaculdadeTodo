import Header from "./Header"
import IITemTodo from "@/app/models/ItemTodo";
import ITodos from "@/app/models/Todos";
import {motion} from "framer-motion"
import { useMediaQuery } from "react-responsive";
import { useDispatch } from "react-redux";
import { addNotification, INotification } from "@/app/features/Notifications/NotificiationSlice/NotificationSlices";
import { handleHasNotification } from "@/app/features/Notifications/NotificiationSlice/hasNotificationSlices";
import useEditarItems from "@/app/hooks/useEditarItems";
import { useState } from "react";
import useHoraAtual from "@/app/hooks/useHoraAtual";

interface Props {
    handleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    HandleComplete: React.Dispatch<React.SetStateAction<ITodos[]>>;
    handleItemInfos: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    Item: IITemTodo | null
}


export default function ModalInfos({handleModalVisibility, Item, HandleComplete, handleItemInfos}:Props) {

    const isMobile = useMediaQuery({ maxWidth: 640 });

    const dispatch = useDispatch()
    
    const hora = useHoraAtual()
    const [nome, setNome] = useState("")
    const [data, setData] = useState("")
    const [Conteudo, setConteudo] = useState("")
    const [alerta, setAlerta] = useState(false)
    function HandleNome(event: React.ChangeEvent<HTMLDivElement>) {
        const novoConteudo = event.target.innerText;
        setNome(novoConteudo);
        console.log(novoConteudo);
      }

    function HandleData(event: React.ChangeEvent<HTMLDivElement>) {
        const novoConteudo = event.target.innerText;
        setData(novoConteudo);
        console.log(novoConteudo);
      }


      function HandleConteudo(event: React.ChangeEvent<HTMLDivElement>) {
        const novoConteudo = event.target.innerText;
        setConteudo(novoConteudo);
        console.log(novoConteudo);
      }

    function Complete() {
        if (Item) {
            const itemCompleto = {...Item, complete: !Item.complete};

            HandleComplete(prevState => {
                if (prevState) {
                    return prevState.map(todo => {
                        if (todo.grupo.some(Grupo => Grupo.nome === itemCompleto.nome)) {
                            const novoGrupo = todo.grupo.map(item => {
                                if (item.id === itemCompleto.id) {
                                    return {...itemCompleto};
                                }
                                return item;
                            });

                            return {...todo, grupo: novoGrupo};
                        }
                        return todo;
                    });
                }
                return prevState;
            });

            handleItemInfos(itemCompleto);
        }
    }

    function Excluir() {
        if (Item) {
            const newNotification:INotification = {
                Mensagem: `Item ${Item.nome} excluido`,
                hora: hora
            }
            HandleComplete(prevState => {
                const novoApagado = prevState.map(
                    x => ({
                        ...x,
                        grupo: x.grupo.filter(y => y.id !== Item.id)
                    })
                );
                console.log(novoApagado);
                
                return novoApagado;
            });
            dispatch(addNotification(newNotification))
            dispatch(handleHasNotification())
        }
        handleModalVisibility(false)
    }

    const novasMudancas: IITemTodo = {
        complete: Item ? Item?.complete : true, 
        data: data, 
        nome: nome, 
        id: Item ? Item?.id : 0, 
        Conteudo: Conteudo
    }
    const { editarItem } = useEditarItems({id: Item ? Item?.id : 0, Mudança: novasMudancas, setTodos: HandleComplete});

    function Editar() {
        if(nome === "" || data === "" || Conteudo === "") {
                setAlerta(true)
            setTimeout(() => {
                setAlerta(false)
            }, 5000)        
        } else {
         
            editarItem(novasMudancas);
        }
    }


    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : -150 }}
            transition={{duration: 0.2}}
             className=" top-0 md:top-auto md:-translate-y-32 absolute w-screen h-screen md:w-[25rem]  md:h-[40rem] bg-white drop-shadow-2xl flex flex-col gap-2">
            <Header handleChangeTitulo={HandleNome} titulo={Item && Item.nome} handleModalVisibility={handleModalVisibility}/>
            <section className="flex flex-col p-6 gap-4 w-full h-full">
                {
                alerta &&
                <h1 className="text-red-500 font-semibold">
                    Impossivel de salvar as alterações, corrija os campos
                </h1>
                }
            <h1 onInput={HandleData}
            className="text-gray-400 font-semibold" contentEditable>
                {Item && Item.data}
            </h1>
            <div className="w-full h-full flex flex-col gap-2 items-start">
                <h1 className="font-semibold">
                    Conteudo:
                </h1>
                <section className="w-full h-full md:h-[15rem] bg-gray-100 rounded-2xl p-6 overflow-y-scroll">
                    <h1 onInput={HandleConteudo} 
                    className="font-medium" contentEditable>
                        {Item && Item.Conteudo}
                    </h1>
                </section>
            </div>
            <div className="w-full h-auto bg-gray-200">
                <button onClick={() => Complete()}  
                    className={`w-full h-[2.5rem] ${Item?.complete ? "bg-green-500" : "bg-orange-400"} text-white font-bold`}>
                    { Item?.complete ?
                    <h1>
                        Concluida
                    </h1> 
                    :
                    <h1> 
                        Concluir
                    </h1> 
                }
                </button>
            </div>
            <div className="w-full">
                <button onClick={() => Editar()} 
                    className={`w-full h-[2.5rem] bg-red-600 text-white font-bold`}>
                    Editar
                </button>
            </div>
            <div className="w-full">
                <button onClick={() => Excluir()} 
                    className={`w-full h-[2.5rem] bg-red-600 text-white font-bold`}>
                Apagar
                </button>
            </div>
            </section>
        </motion.div>
    )
}