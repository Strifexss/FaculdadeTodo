interface Props {
    Texto: string,
    FuncaoConfirmar: () => void,
    FuncaoCancelar: () => void,
    TextoButao1: string,
    TextoButao2: string
}

export default function ModalConfirmation({Texto, TextoButao1, TextoButao2, FuncaoCancelar, FuncaoConfirmar}:Props) {
    
    return(
        <div className="fixed w-[20rem] h-[10rem] bg-white drop-shadow-2xl translate-x-5 flex flex-col">
        <header className="w-full h-[4rem] bg-AzulPadrao rounded-bl-2xl"/>
        <section className="w-full h-full p-6">
        <div className="w-full flex justify-center items-center">
            <h1 className="font-semibold">
                {Texto}
            </h1>
        </div>
        <section className="w-full h-full flex flex-row justify-center items-center gap-2">
            <button onClick={() => FuncaoConfirmar()} 
                className={`w-full h-[2.5rem] bg-blue-500 hover:bg-blue-700 text-white font-bold`}>
                {TextoButao1}
            </button>
            <button onClick={() => FuncaoCancelar()} 
                className={`w-full h-[2.5rem] bg-red-600 hover:bg-red-700 text-white font-bold`}>
                {TextoButao2}
            </button>
        </section>
        </section>
    </div>
    )
}