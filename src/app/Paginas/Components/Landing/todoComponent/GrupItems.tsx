import IITemTodo from "@/app/models/ItemTodo"

export default function GrupsItems(Item:IITemTodo) {
    return(
        <div className="hover:bg-gray-100 border-gray-100 border-b-2 w-full h-[5rem] flex flex-row items-center">
            <div className="w-[6px] bg-[#67a2fa] h-full"/>
            <div className="flex justify-start items-center py-4 px-6 ">
                <div className="flex flex-col justify-center gap-2">
                    <h1 className="text-gray-400 font-medium">
                        {Item.data}
                    </h1>
                    <h1 className="text-black font-medium">
                        {Item.nome}
                    </h1>
                </div>
            </div>
        </div>
    )
}