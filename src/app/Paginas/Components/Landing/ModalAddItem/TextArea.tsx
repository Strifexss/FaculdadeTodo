import InputTexto from "../../Login/InputTexto";

interface Props {
    setTitulo: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setData: (event: React.ChangeEvent<HTMLInputElement>) => void;
    setConteudo: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

export default function TextArea({setConteudo, setData, setTitulo}:Props) {
    return(
        <div className="mt-5 mb-6 w-full h-full flex flex-col gap-4">
        <InputTexto handleChangeValue={setTitulo} LabelColor="Black" Nome="Titulo" Tamanho="full" placeholder="Insira o Titulo Aqui" />
        <InputTexto handleChangeValue={setData} LabelColor="Black" Nome="Data" Tamanho="full" placeholder="Insira o Titulo Aqui" />
        <label className="font-semibold" htmlFor="TextoConteudo">
            Conteudo
        </label>
        <textarea onChange={setConteudo} id="TextoConteudo" 
            className="w-full h-[6rem] p-4 bg-gray-100"
        />
    </div>
    )
}