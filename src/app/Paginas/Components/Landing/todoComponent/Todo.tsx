import ITodos from "@/app/models/Todos"
import GrupsItems from "./GrupItems"
import IITemTodo from "@/app/models/ItemTodo"
import adicionarNovoObjeto from "@/app/hooks/TodoComponent/useAdicionarNovoItem";
import {Trash, Plus} from "lucide-react"
import useExcluirGrupo from "@/app/hooks/TodoComponent/setExcluirGrupo";
import {motion} from "framer-motion"

interface Props {
    Item: ITodos,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ModificarModal: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    ArrayTodos?: ITodos[],
    handleModalInfoVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function TodoComponent({Item, setTodos, ModificarModal, handleModalInfoVisibility}:Props) {

    function add() {
        const novoObjeto: IITemTodo = {
            nome: "Adicionou!",
            complete: false,
            data: "asdasd"
        }
        adicionarNovoObjeto({nomeTodo: Item.nome, novoObjeto, setTodos});
    }

    const ExcluirGrupo = () => useExcluirGrupo({nomeTodo: Item.nome, setTodos: setTodos})

    return(
        <motion.div 
        initial={{scale: 0.5}}
        animate={{scale: 1}}
        transition={{duration: 0.2}}
        exit={{scale: 0.5}}
        className="w-[20rem] h-[30rem] bg-white rounded-xl flex flex-col items-center cursor-pointer shadow-xl">
            <div className="w-full h-[5rem] bg-AzulPadrao rounded-t-xl flex justify-between items-center px-6">
                <h1 className="text-white text-[1.2rem] font-semibold">
                    <h1>{Item?.nome}</h1>
                </h1>
            </div>
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
                <button onClick={() => add()}  
                    className="bg-AzulPadrao w-[4rem] h-[2rem] flex justify-center items-center rounded-md">
                <Plus 
                    color="white" 
                    className="rounded-[50%] border-2 border-AzulPadrao "/>
                </button>
                <button onClick={() => ExcluirGrupo()} 
                    className="bg-AzulPadrao w-[4rem] h-[2rem] flex justify-center items-center rounded-md">
                <Trash 
                    color="white" 
                    className="rounded-[50%] border-2 border-AzulPadrao "/>
                </button>
            </div>
        </motion.div>
    )
}