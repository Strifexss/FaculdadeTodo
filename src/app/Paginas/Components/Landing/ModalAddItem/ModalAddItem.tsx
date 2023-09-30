import InputTexto from "../../Login/InputTexto"
import Header from "./Header"
import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive';
import TextArea from "./TextArea";
import ButtonsArea from "./ButtonsArea";
import IITemTodo from "@/app/models/ItemTodo";
import adicionarNovoObjeto from "@/app/hooks/TodoComponent/useAdicionarNovoItem";
import ITodos from "@/app/models/Todos";
import { useState } from "react";

interface Props {
    HandleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
    NomeTodoToAdd: string,
    setTodos: React.Dispatch<React.SetStateAction<ITodos[]>>;
}

export default function ModalAddItem({HandleCloseModal, NomeTodoToAdd, setTodos}:Props) {

    const [titulo, setTitulo] = useState<string>("")
    const [data, setData] = useState<string>("")
    const [conteudo, setConteudo] = useState<string>("")

    const isMobile = useMediaQuery({ maxWidth: 640 });
    
    const HandleTitulo = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitulo(event.target.value)
        console.log(titulo)
    }
    const HandleData = (event: React.ChangeEvent<HTMLInputElement>) => {
        setData(event.target.value)
        console.log(data)
    }
    const HandleConteudo = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setConteudo(event.target.value)
        console.log(conteudo)
    }
    

    return(
        <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : -150 }}
        transition={{duration: 0.2}}
        className="top-0 md:top-auto w-screen h-screen md:w-[25rem] md:min-h-[35rem] md:h-auto bg-white drop-shadow-2xl absolute flex flex-col items-start gap-2">
            <Header HandleCloseModal={HandleCloseModal}/>
            <div className="px-6">
                <h1 className="text-gray-400 font-semibold">
                    Adiciona um Item ao Grupo
                </h1>
            </div>
            <TextArea setConteudo={HandleConteudo} setTitulo={HandleTitulo} setData={HandleData}/>
            <ButtonsArea ConteudoToAdd={conteudo} handleCancel={HandleCloseModal} DataToADD={data} TituloToADD={titulo} handleModalAddVisibility={HandleCloseModal} NomeTodoToAdd={NomeTodoToAdd} setTodos={setTodos}/>
        </motion.div>
    )
}