import ITodos from "@/app/models/Todos";

interface Props {
    nomeTodo: string,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
}

export default function useExcluirGrupo({nomeTodo, setTodos}:Props) {
    setTodos(prevTodos => {
        const novoArray = prevTodos.filter(todoList => todoList.nome !== nomeTodo )
        return novoArray
    })
}