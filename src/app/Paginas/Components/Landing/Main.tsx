"use client"
import { useEffect, useState } from "react";
import AreaTodos from "./AreaTodos";
import Modal from "./ModalAdicionarGrupo/Modal";
import ITodos from "@/app/models/Todos";
import HeaderLanding from "./header/header";
import IITemTodo from "@/app/models/ItemTodo";
import ModalInfos from "./ModalInfos/ModalInfos";
import ModalAddItem from "./ModalAddItem/ModalAddItem";
export default function Main() {

    const [todos, setTodos] = useState<ITodos[]>([{
        nome: "Exemplo",
        grupo: [
            {
                nome: "Meet Ema",
                data: "27/05/2023",
                complete: true,
                Conteudo: "Conteudo aqui",
                id: 0
            }
        ]
    }])

    const [pesquisar, setPesquisar] = useState(todos)

    useEffect(() => {
        setPesquisar(todos)
    },[todos])

    const [openInsertModal, setOpenInsertModal] = useState(false)
    const [conteudoModal, setConteudoModal] = useState<IITemTodo | null>(null)
    const [HandleInfoModal, setHandleInfoModal] = useState(false)
    const [ModalAdicionarItem, setModalAdicionarItem] = useState(false)
    const [nomeTodoToADD, setNomeTodoToAdd] = useState<string>("")

    function handleModal() {
        setOpenInsertModal(!openInsertModal)
    }
    
    return(
        <div className="w-full h-full flex flex-col gap-8 overflow-y-scroll overflow-x-hidden">
            <HeaderLanding setPesquisar={setPesquisar} PesquisarTodos={pesquisar} TodoOriginal={todos} buttonsFunctionAdicionar={handleModal}/>
            <div className="w-full h-full flex justify-center items-center">
                <AreaTodos handleModalAddVisibility={setModalAdicionarItem} setNomeTodoToADD={setNomeTodoToAdd} handleModalInfoVisibility={setHandleInfoModal} ModificarModal={setConteudoModal} setTodos={setTodos} todos={pesquisar}/>
            {
                HandleInfoModal && <ModalInfos handleItemInfos={setConteudoModal} HandleComplete={setTodos} Item={conteudoModal} handleModalVisibility={setHandleInfoModal}/>
            }
            {
                openInsertModal && <Modal ArrayTodos={todos} setTodos={setTodos} handleCloseModal={() => setOpenInsertModal(false)}/>
            }
            {
                ModalAdicionarItem && <ModalAddItem setTodos={setTodos} NomeTodoToAdd={nomeTodoToADD} HandleCloseModal={setModalAdicionarItem}/>
            }
            </div>
        </div>  
    )
}