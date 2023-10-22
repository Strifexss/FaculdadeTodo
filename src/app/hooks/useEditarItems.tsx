import { SetStateAction } from "react"
import ITodos from "../models/Todos"
import IITemTodo from "../models/ItemTodo"

interface Props {
    setTodos: React.Dispatch<SetStateAction<ITodos[]>>
    id: number,
    Mudança: IITemTodo
}

export default function useEditarItems({ setTodos, id, Mudança }: Props) {
  const editarItem = (Mudança: IITemTodo) => {
    setTodos(prevTodos =>
      prevTodos.map(todo =>
        todo.grupo.some(grupo => grupo.id === id)
          ? {
              ...todo,
              grupo: todo.grupo.map(grupo =>
                grupo.id === id
                  ? { ...grupo, ...Mudança }
                  : grupo
              ),
            }
          : todo
      )
    );
  };

  return {
    editarItem
  };
}