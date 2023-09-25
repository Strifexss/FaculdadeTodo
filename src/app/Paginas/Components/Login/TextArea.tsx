"use client"
import InputTexto from "./InputTexto";
import { RotaLanding } from "@/app/hooks/usePaginas";

export default function TextArea() {

    const Logar = RotaLanding()

    return(
        <div className="bg-[#1E1E26] w-full h-full md:w-[25%] md:h-[50%] rounded-md flex flex-col items-center  justify-center gap-6 px-10 ">
            <div className="w-full">
                <h1 className="text-[white] text-[2rem] font-bold">
                    To-Do
                </h1>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-4">
                <InputTexto LabelColor="White" Tamanho="Compacto" Nome="Email" placeholder="Insira o seu Email"/>
                <InputTexto LabelColor="White" Tamanho="Compacto" Nome="Senha" placeholder="Insira a sua Senha"/>
            </div>
            <div className="w-full flex flex-row justify-between items-center">
                <h1 className="text-gray-400 hover:text-white cursor-pointer">
                    Esqueceu a senha?
                </h1>
                <button onClick={() => Logar()} 
                className="bg-[#F9D88B] w-[8rem] p-2 justify-center items-center flex rounded-md font-semibold">
                    Logar
                </button>
            </div>
        </div>
    )
}