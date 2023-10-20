import ITodos from "@/app/models/Todos";

export default function useAdicionarGrupo (event: React.ChangeEvent<HTMLInputElement>, setTodoUsuario: React.Dispatch<React.SetStateAction<ITodos | null>>){
    const NovoGrupo: ITodos = { 
        nome: event.target.value,
        grupo: []
     };
    setTodoUsuario(NovoGrupo);
};