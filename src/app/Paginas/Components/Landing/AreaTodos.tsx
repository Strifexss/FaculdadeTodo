import IITemTodo from "@/app/models/ItemTodo";
import TodoComponent from "./todoComponent/Todo"
import ITodos from "@/app/models/Todos"

interface Props {
    todos: ITodos[] | null,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ModificarModal: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
}

export default function AreaTodos({todos, setTodos, ModificarModal}:Props) {
    return(
        <div className="w-full h-full flex flex-row justify-center gap-6 flex-wrap overflow-y-scroll px-8">
        { todos?.map(todo => {
            return(
                <TodoComponent  ModificarModal={ModificarModal} setTodos={setTodos} Item={todo} key={todo.nome}/>
            )
        })
        }
    </div>
    )
}