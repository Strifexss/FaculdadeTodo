import {CopyPlusIcon, XCircle} from "lucide-react"

interface Props {
    HandleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({HandleCloseModal}:Props) {
    return(
        <div className="w-full">
        <div className="w-full flex justify-between items-center">
        <section className="flex gap-2">
            <CopyPlusIcon color="black" />
            <h1 className="font-semibold">
                Adicionar Items
            </h1>
        </section>
        <XCircle onClick={() => HandleCloseModal()} 
        className="cursor-pointer" color="black"/>
    </div>
    <h1 className="text-gray-400 font-semibold">
        Adiciona um Item ao Grupo
    </h1>
    </div>
    )
}