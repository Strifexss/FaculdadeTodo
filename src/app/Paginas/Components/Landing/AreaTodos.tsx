import TodoComponent from "./todoComponent/Todo"
import ITodos from "@/app/models/Todos"

interface Props {
    todos: ITodos[] | null,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

export default function AreaTodos({todos, setTodos}:Props) {
    return(
        <div className="w-full h-full flex flex-row justify-center gap-6 flex-wrap overflow-y-scroll px-8">
        { todos?.map(todo => {
            return(
                <TodoComponent setTodos={setTodos} Item={todo} key={todo.nome}/>
            )
        })
        }
    </div>
    )
}