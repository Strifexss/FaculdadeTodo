import { X, File } from "lucide-react";

interface Props {
    handleModalVisibility: React.Dispatch<React.SetStateAction<boolean>>;
    titulo: string | null
}

export default function Header({handleModalVisibility, titulo}:Props) {
    return(
        <div className="w-full flex justify-between items-center">
            <div className="flex justify-center items-center gap-2">
                <File color="black"/>
                <h1 className="font-semibold text-[1.2rem] ">
                    {titulo}
                </h1>
            </div>
                <X  onClick={() => handleModalVisibility(false)}
                    className="cursor-pointer"
                    color="black"/>
        </div>
    )
}