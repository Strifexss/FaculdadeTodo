import InputTexto from "../../Login/InputTexto";
import { UserCircle2 } from "lucide-react";
import ButtonsHeader from "./buttons";

interface Props {
    buttonsFunctionAdicionar: () => void
}

export default function HeaderLanding({buttonsFunctionAdicionar}:Props) {
    return(
        <header className="w-full h-[30%] bg-blue-700 flex flex-col gap-6 justify-start p-8 rounded-b-[3rem]">
            <div className="w-full flex flex-col items-start md:flex-row md:justify-between gap-4 md:gap-0">
                <h1 className="text-[white] font-bold text-[1rem] hidden md:block">
                    TO-DO List
                </h1>
                <div className="w-full h-full md:w-auto md:h-auto flex flex-row-reverse md:flex-row justify-center gap-4 items-center cursor-pointer">
                    <h1 className="text-[white] font-bold text-[1rem">
                        Matheus Henrique
                    </h1>
                    <UserCircle2 color="white" width={40} height={40}/>
                </div>
            </div>
            <section className="w-full flex flex-col md:flex-row md:justify-between md:items-center gap-6">
                <InputTexto LabelColor="White" Nome="Pesquisar" Tamanho="full" placeholder="Pesquisar" />
                <section className="flex flex-row justify-center bg-[#2180D6] rounded-3xl">
                    <ButtonsHeader Click={buttonsFunctionAdicionar} texto="Adicionar Grupo"/>
                </section>
            </section> 
        </header>
    )
}
