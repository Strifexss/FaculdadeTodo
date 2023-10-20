import IITemTodo from "@/app/models/ItemTodo"
import {Check} from "lucide-react"
import {motion} from "framer-motion"

interface Props {
    ModificarModal: React.Dispatch<React.SetStateAction<IITemTodo | null>>;
    Item:IITemTodo,
    handleModalItemVisibility: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function GrupsItems({Item, ModificarModal, handleModalItemVisibility}:Props) {


    function HandleModalInfos() {
        handleModalItemVisibility(true)
        ModificarModal(Item)
    }

    return(
        <motion.div onClick={() => HandleModalInfos()}
        initial={{x: "-10"}}
        animate={{x: 0}}
        transition={{duration: 0.1}}    
        className="hover:bg-gray-100 border-gray-100 border-b-2 w-full h-[5rem] flex flex-row items-center">
            <div className="w-[6px] bg-[#67a2fa] h-full"/>
            <div className="flex w-full h-full justify-between items-center py-4 px-6 ">
                <div className="flex flex-col justify-center gap-2">
                    <h1 className="text-gray-400 font-medium">
                        {Item.data}
                    </h1>
                    <h1 className="text-black font-medium">
                        {Item.nome}
                    </h1>
                </div>
                <div 
                    className="flex justify-center items-center h-[2rem] w-[2rem] border-2">
                    {   Item.complete &&
                        <Check color="green"/>
                    }
                </div>
            </div>
        </motion.div>
    )
}