"use client"
import InputTexto from "./InputTexto";
import { RotaLanding } from "@/app/hooks/usePaginas";

export default function TextArea() {

    const Logar = RotaLanding()

    return(
        <div className="bg-BrancoBg drop-shadow-xl w-screen h-screen md:w-[25%] md:h-auto rounded-md flex flex-col items-center  justify-center gap-2  ">
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
                <div className="w-full flex flex-col gap-y-4">
                    <InputTexto LabelColor="Black" Tamanho="full" Nome="Email" placeholder="Insira o seu Email"/>
                    <InputTexto LabelColor="Black" Tamanho="full" Nome="Senha" placeholder="Insira a sua Senha"/>
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