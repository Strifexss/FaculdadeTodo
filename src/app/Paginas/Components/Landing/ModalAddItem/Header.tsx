import {CopyPlusIcon, XCircle} from "lucide-react"

interface Props {
    HandleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({HandleCloseModal}:Props) {
    return(
        <div className="w-full h-[10rem] md:h-[5rem] bg-AzulPadrao rounded-bl-[3rem] flex justify-center items-center px-6">
        <div className="w-full flex justify-between items-center">
        <section className="flex gap-2">
            <CopyPlusIcon color="white" />
            <h1 className="font-semibold text-white">
                Adicionar Items
            </h1>
        </section>
        <XCircle onClick={() => HandleCloseModal(false)} 
        className="cursor-pointer" color="white"/>
    </div>
    
    </div>
    )
}