import ITodos from "@/app/models/Todos"
import GrupsItems from "./GrupItems"
import IITemTodo from "@/app/models/ItemTodo"
import adicionarNovoObjeto from "@/app/hooks/TodoComponent/useAdicionarNovoItem";

interface Props {
    Item: ITodos,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ArrayTodos?: ITodos[]
}

export default function TodoComponent({Item, setTodos}:Props) {

    function add() {
        const novoObjeto: IITemTodo = {
            nome: "Adicionou!",
            complete: false,
            data: "asdasd"
        }
        adicionarNovoObjeto({nomeTodo: Item.nome, novoObjeto, setTodos});
    }

    return(
        <div className="w-[20rem] h-[25rem] bg-white rounded-xl flex flex-col items-center cursor-pointer shadow-xl">
            <div className="w-full h-[5rem] bg-AzulPadrao rounded-t-xl flex justify-around items-center">
                <h1 className="text-white text-[1.2rem] font-semibold">
                    <h1>{Item?.nome}</h1>
                </h1>
                <h1 onClick={() => add()} 
                className="text-white text-[1.2rem] font-semibold px-2 rounded-[50%] border-white border-2">
                    +
                </h1>
            </div>
            <div className="w-full h-full flex flex-col items-center overflow-y-scroll">
                {   
                    Item.grupo.map(items => {
                        return(
                            <GrupsItems key={items.nome} nome={items.nome} data={items.data} complete={false} />
                        )
                    })
                }
            </div>
        </div>
    )
}