import IITemTodo from "@/app/models/ItemTodo";
import TodoComponent from "./todoComponent/Todo"
import ITodos from "@/app/models/Todos"

interface Props {
    todos: ITodos[] | null,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
    ModificarModal: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    handleModalInfoVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function AreaTodos({todos, setTodos, ModificarModal, handleModalInfoVisibility}:Props) {
    return(
        <div className="w-full h-full flex flex-row justify-center gap-6 flex-wrap px-8">
        { todos?.map(todo => {
            return(
                <TodoComponent handleModalInfoVisibility={handleModalInfoVisibility}  ModificarModal={ModificarModal} setTodos={setTodos} Item={todo} key={todo.nome}/>
            )
        })
        }
    </div>
    )
}