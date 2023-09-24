interface Props {
    texto: string,
    Click?: () => void
}

export default function ButtonsHeader({texto, Click}:Props) {
    return(
        <button onClick={Click} 
        className="bg-[#2180D6] w-[10rem] p-2 rounded-3xl hover:bg-white text-gray-300 hover:text-[#2180D6] font-semibold transition-[0.2s]">
            <h1>
                {texto}
            </h1>
        </button>
    )
}