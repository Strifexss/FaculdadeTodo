import { X, File } from "lucide-react";

interface Props {
    handleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    titulo: string | null,
    handleChangeTitulo: (event: React.ChangeEvent<HTMLDivElement>) => void
}

export default function Header({handleModalVisibility, titulo, handleChangeTitulo}:Props) {
    return(
        <div className="w-full h-[10rem] md:h-[auto] md:max-h-[6rem] overflow-hidden flex justify-between items-center bg-AzulPadrao p-6 rounded-bl-[3rem]">
            <div className="flex justify-center items-center gap-2">
                <File color="white"/>
                <h1 
                onInput={handleChangeTitulo}
                className="font-semibold text-[1.2rem] text-white" contentEditable>
                    {titulo}
                </h1>
            </div>
                <X  onClick={() => handleModalVisibility(false)}
                    className="cursor-pointer"
                    color="white"/>
        </div>
    )
}