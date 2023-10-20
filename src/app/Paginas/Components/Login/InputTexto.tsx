interface Props {
    placeholder: string,
    Escuro?: boolean,
    handleChangeValue?: (event: React.ChangeEvent<HTMLInputElement>) => void,
    Tamanho: "full" | "Compacto",
    Nome?: string,
    LabelColor: "Black" | "White",
    Erro?: boolean
}

export default function InputTexto({placeholder, Escuro, handleChangeValue, Tamanho, Nome, LabelColor, Erro}:Props) {
    
    return(
        <div className="flex flex-col gap-2">
              <label className={`font-semibold ${LabelColor === "Black" ? "text-black" : "text-white"} ${Erro && "text-red-500"}`} 
              htmlFor={Nome}>
                {Nome}
              </label>
              <input
                    id={Nome} 
                    type="text"
                    onChange={handleChangeValue}
                    className={`border-2 ${Tamanho == "full" ? "w-full" : "w-[25rem]"} h-[3rem] ${Escuro ? "bg-[#282834]" && "text-[white]" : "bg-[white]" && "text-[black]}"} p-2 rounded-md ${Erro && "border-red-500 border-2 outline-red-500"}`}
                    placeholder={placeholder}
                />
        </div>
    )
}