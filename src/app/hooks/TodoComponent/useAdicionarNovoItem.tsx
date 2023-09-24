import IITemTodo from "@/app/models/ItemTodo";
import ITodos from "@/app/models/Todos";

interface Props {
    nomeTodo: string,
    novoObjeto: IITemTodo,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>
}

export default function adicionarNovoObjeto ({nomeTodo, novoObjeto, setTodos}:Props) {
    setTodos(prevTodos => {
        return prevTodos.map(todo => {
            if (todo.nome === nomeTodo) {
                return {
                    ...todo,
                    grupo: [...todo.grupo, novoObjeto]
                };
            }
            return todo;
        });
    });
};