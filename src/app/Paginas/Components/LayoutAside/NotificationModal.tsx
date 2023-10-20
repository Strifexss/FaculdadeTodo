import { useSelector } from "react-redux";
import { INotification } from "@/app/features/Notifications/NotificiationSlice/NotificationSlices";
import { SetStateAction } from "react";
import { X } from "lucide-react";

interface Props {
    HandleCloseModal: React.Dispatch<SetStateAction<boolean>>
}

export default function NotificationModal(Props:Props) {

    const notificationState = useSelector((state: { Notification: INotification[] }) => state.Notification);
   
    return(
        <div
        className="w-[20rem] rounded-2xl h-[15rem] flex flex-col absolute bg-BrancoBg drop-shadow-2xl translate-x-12 -translate-y-60">
            <header className="w-full bg-AzulPadrao h-[3rem] rounded-t-2xl flex justify-between items-center p-2">
                <h1 className="text-[white] font-bold">
                    Notificações
                </h1>
                <X color="white" className="cursor-pointer" 
                onClick={() => Props.HandleCloseModal(false)}/>
            </header>
            <div className="w-full h-full gap-2 overflow-y-scroll flex flex-col">
            {
                notificationState.map(x => {
                    return(
                        <div key={x.Mensagem} 
                        className="w-full h-[3rem] flex flex-col px-4">
                            <h1 className="text-black font-semibold">
                                {x.Mensagem}
                            </h1>
                            <h1 className="text-gray-400 font-semibold">
                                Hora: {x.hora}
                            </h1>
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}