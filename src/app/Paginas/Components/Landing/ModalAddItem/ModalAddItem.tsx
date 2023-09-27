import InputTexto from "../../Login/InputTexto"
import Header from "./Header"
import {motion} from "framer-motion"
import { useMediaQuery } from 'react-responsive';

interface Props {
    HandleCloseModal: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function ModalAddItem({HandleCloseModal}:Props) {

    const isMobile = useMediaQuery({ maxWidth: 640 });

    return(
        <motion.div 
        initial={{ opacity: 0, scale: 0.8, y: -50 }}
        animate={{ opacity: 1, scale: 1, y: isMobile ? 0 : -150 }}
        transition={{duration: 0.2}}
        className="p-6 top-0 md:top-auto w-screen h-screen md:w-[25rem] md:min-h-[35rem] md:h-auto bg-white drop-shadow-2xl absolute flex flex-col items-start gap-2">
            <Header HandleCloseModal={HandleCloseModal}/>
            <div className="mt-5 mb-6 w-full h-full flex flex-col gap-4">
                <InputTexto LabelColor="Black" Nome="Titulo" Tamanho="full" placeholder="Insira o Titulo Aqui" />
                <InputTexto LabelColor="Black" Nome="Data" Tamanho="full" placeholder="Insira o Titulo Aqui" />
                <label className="font-semibold" htmlFor="TextoConteudo">
                    Conteudo
                </label>
                <textarea id="TextoConteudo" 
                    className="w-full h-[6rem] p-4 bg-gray-100"
                />
            </div>
            <section className="w-full flex items-center justify-around gap-2">
                <button className="w-full h-[2.5rem] text-white font-semibold bg-green-500">
                    Adicionar
                </button>
                <button className="w-full h-[2.5rem] text-white font-semibold bg-red-500">
                    Cancelar
                </button>
            </section>
        </motion.div>
    )
}