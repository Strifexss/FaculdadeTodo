"use client"
import InputTexto from "../Login/InputTexto";
import { useState } from "react";
import TodoComponent from "./todoComponent/Todo";
import AreaTodos from "./AreaTodos";
import Modal from "./ModalInsert/Modal";
import ITodos from "@/app/models/Todos";
import HeaderLanding from "./header/header";
import IITemTodo from "@/app/models/ItemTodo";
export default function Main() {

    const [todos, setTodos] = useState<ITodos[]>([{
        nome: "Exemplo",
        grupo: [
            {
                nome: "Meet Ema",
                data: "27/05/2023",
                complete: true
            }
        ]
    }])

    const [openInsertModal, setOpenInsertModal] = useState(false)
    const [conteudoModal, setConteudoModal] = useState<IITemTodo | null>(null)

    function handleModal() {
        setOpenInsertModal(!openInsertModal)
    }
    
    return(
        <div className="w-full h-full flex flex-col gap-8">
            <HeaderLanding buttonsFunctionAdicionar={handleModal}/>
            <div className="w-full h-full flex justify-center items-center">
            <AreaTodos ModificarModal={setConteudoModal} setTodos={setTodos} todos={todos}/>
            {
                openInsertModal &&
                <Modal ArrayTodos={todos} setTodos={setTodos} handleCloseModal={() => setOpenInsertModal(false)}/>
            }
            </div>
            <button className="bg-black text-white" 
            onClick={() => console.log(conteudoModal)}>
                Consolar Teste
            </button>
        </div>  
    )
}