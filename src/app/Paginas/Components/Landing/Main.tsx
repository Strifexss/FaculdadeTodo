"use client"
import { useState } from "react";
import AreaTodos from "./AreaTodos";
import Modal from "./ModalInsert/Modal";
import ITodos from "@/app/models/Todos";
import HeaderLanding from "./header/header";
import IITemTodo from "@/app/models/ItemTodo";
import ModalInfos from "./ModalInfos/ModalInfos";
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
    const [HandleInfoModal, setHandleInfoModal] = useState(false)

    function handleModal() {
        setOpenInsertModal(!openInsertModal)
    }
    
    function HandleInfosMoldal() {
        setHandleInfoModal(!HandleInfoModal)
        console.log(conteudoModal)
    }

    return(
        <div className="w-full h-full flex flex-col gap-8 overflow-y-scroll overflow-x-hidden">
            <HeaderLanding buttonsFunctionAdicionar={handleModal}/>
            <div className="w-full h-full flex justify-center items-center">
                <AreaTodos handleModalInfoVisibility={setHandleInfoModal} ModificarModal={setConteudoModal} setTodos={setTodos} todos={todos}/>
            {
                HandleInfoModal && <ModalInfos handleItemInfos={setConteudoModal} HandleComplete={setTodos} Item={conteudoModal} handleModalVisibility={setHandleInfoModal}/>
            }
            {
                openInsertModal && <Modal ArrayTodos={todos} setTodos={setTodos} handleCloseModal={() => setOpenInsertModal(false)}/>
            }
            </div>
        </div>  
    )
}