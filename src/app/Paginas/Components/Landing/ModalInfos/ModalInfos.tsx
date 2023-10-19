import {X} from "lucide-react"
import Header from "./Header"
import IITemTodo from "@/app/models/ItemTodo";
import ITodos from "@/app/models/Todos";
import {motion} from "framer-motion"
import { useMediaQuery } from "react-responsive";

interface Props {
    handleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    HandleComplete: React.Dispatch<React.SetStateAction<ITodos[]>>;
    handleItemInfos: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    Item: IITemTodo | null
}


export default function ModalInfos({handleModalVisibility, Item, HandleComplete, handleItemInfos}:Props) {

    const isMobile = useMediaQuery({ maxWidth: 640 });

    function Complete() {
        if (Item) {
            // Cria uma cópia do objeto Item com complete invertido
            const itemCompleto = {...Item, complete: !Item.complete};

            // Atualiza o estado com o item modificado
            HandleComplete(prevState => {
                if (prevState) {
                    return prevState.map(todo => {
                        if (todo.grupo.some(item => item.nome === itemCompleto.nome)) {
                            const novoGrupo = todo.grupo.map(item => {
                                if (item.nome === itemCompleto.nome) {
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

            // Chama a função handleItemInfos com o novo Item
            handleItemInfos(itemCompleto);
        }
    }

    function Excluir() {
        if (Item) {
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
        }
        handleModalVisibility(false)
    }

    return(
        <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -50 }}
            animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : -150 }}
            transition={{duration: 0.2}}
             className=" top-0 md:top-auto md:-translate-y-32 absolute w-screen h-screen md:w-[25rem] md:h-[35rem] bg-white drop-shadow-2xl flex flex-col gap-2">
            <Header titulo={Item && Item.nome} handleModalVisibility={handleModalVisibility}/>
            <section className="flex flex-col p-6 gap-4 w-full h-full">
            <h1 className="text-gray-400 font-semibold">
                {Item && Item.data}
            </h1>
            <div className="w-full h-full flex flex-col gap-2 items-start">
                <h1 className="font-semibold">
                    Conteudo:
                </h1>
                <section className="w-full h-full bg-gray-100 rounded-2xl p-6 overflow-scroll">
                    <h1 className="font-medium">
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
            <div>
            <button onClick={() => Excluir()} 
                className={`w-full h-[2.5rem] bg-red-600 text-white font-bold`}>
               Apagar
            </button>
            </div>
            </section>
        </motion.div>
    )
}