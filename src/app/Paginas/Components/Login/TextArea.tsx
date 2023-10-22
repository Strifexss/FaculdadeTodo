"use client"
import { useState } from "react";
import InputTexto from "./InputTexto";
import { RotaLanding } from "@/app/hooks/usePaginas";

export default function TextArea() {

    const rotaLogar = RotaLanding()
    const [nome, setNome] = useState("")
    const [senha, setSenha] = useState("")
    const [alerta, setAlerta] = useState(false)

    function handleNome(event:React.ChangeEvent<HTMLInputElement>) {
        setNome(event.target.value)
    }
    function handleSenha(event:React.ChangeEvent<HTMLInputElement>) {
        setSenha(event.target.value)
    }

    function Logar() {
        if (nome !== "Usuario" && senha !== "Senha") {
            setAlerta(true)
            setTimeout(() => {
                setAlerta(false)
            },5000)
        }
        else {
            rotaLogar()
        }
    }

    return(
        <div className="bg-BrancoBg drop-shadow-xl w-full h-full md:w-[30%] 2xl:w-[25%] md:h-auto rounded-md flex flex-col items-center  justify-center gap-2  ">
                <header
                className="w-full h-[20rem] md:h-[10rem] flex justify-center items-center bg-AzulPadrao rounded-bl-[5rem]"
                >
                <div className="w-full flex justify-center items-center">
                    <h1 className="text-white text-[3rem] font-bold">
                        To-Do
                    </h1>
                </div>
                </header>
            <section className="w-full h-full py-6 px-10 flex flex-col gap-6">
                <div className="w-full my-2 flex items-center justify-center">
                    <h1 className="text-black font-semibold  text-[1.5rem]">
                        Login
                    </h1>
                </div>
               {    alerta &&
                    <div className="w-full flex justify-start items-center font-semibold">
                        <h1 className="text-red-500">
                            Usuario ou Senha incorreto
                        </h1>
                    </div>
                }
                <div className="w-full flex flex-col gap-y-4">
                    <InputTexto handleChangeValue={handleNome} LabelColor="Black" Tamanho="full" Nome="Usuario" placeholder="Insira o seu Usuario"/>
                    <InputTexto PasswordType handleChangeValue={handleSenha} LabelColor="Black" Tamanho="full" Nome="Senha" placeholder="Insira a sua Senha"/>
                </div>
                <div className="w-full flex flex-col gap-6 justify-between items-center">
                    <button onClick={() => Logar()} 
                    className="bg-AzulPadrao w-full p-2 justify-center items-center flex rounded-md font-semibold text-white">
                        Logar
                    </button>
                    <h1 className="text-AzulPadrao cursor-pointer">
                        Esqueceu a senha?
                    </h1>
                </div>
            </section>
        </div>
    )
} 