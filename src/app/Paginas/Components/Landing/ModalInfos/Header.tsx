import { X, File } from "lucide-react";

interface Props {
    handleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    titulo: string | null
}

export default function Header({handleModalVisibility, titulo}:Props) {
    return(
        <div className="w-full h-[10rem] md:h-[5rem] flex justify-between items-center bg-AzulPadrao p-6 rounded-bl-[3rem]">
            <div className="flex justify-center items-center gap-2">
                <File color="white"/>
                <h1 className="font-semibold text-[1.2rem] text-white">
                    {titulo}
                </h1>
            </div>
                <X  onClick={() => handleModalVisibility(false)}
                    className="cursor-pointer"
                    color="white"/>
        </div>
    )
}