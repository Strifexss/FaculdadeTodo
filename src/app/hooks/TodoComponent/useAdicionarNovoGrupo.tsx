import ITodos from "@/app/models/Todos";

export default function handleTextChange (event: React.ChangeEvent<HTMLInputElement>, setTodoUsuario: React.Dispatch<React.SetStateAction<ITodos | null>>){
    console.log(event.target.value);
    const NovoGrupo: ITodos = { 
        nome: event.target.value,
        grupo: [{
            nome: "teste",
            data: "!23123",
            complete: false,
            id:0 
        }]
     };
    setTodoUsuario(NovoGrupo);
};