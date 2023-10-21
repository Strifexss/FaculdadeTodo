import { handleHasNoNotification } from "@/app/features/Notifications/NotificiationSlice/hasNotificationSlices";
import { BellDotIcon, LucideGanttChartSquare } from "lucide-react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import NotificationModal from "../NotificationModal";
import { RootState } from "@/app/store"

export default function NotificationButtons() {

    const dispatch = useDispatch()
    const [showNotificationModal, setShowNotificationModal] = useState(false)
    
    const HasNotification = useSelector((state: RootState) => state.HasNotification);

    const handleOpenNotificationModal = () => {
        dispatch(handleHasNoNotification())
        setShowNotificationModal(!showNotificationModal)
      }

    return(
        <section className="flex flex-col gap-6">
        <BellDotIcon className="cursor-pointer"  onClick={() => handleOpenNotificationModal()}
          color={`${HasNotification ? "#ffa500" : "#0068FF" }`} width={30} height={30} />
          { showNotificationModal &&
            <NotificationModal HandleCloseModal={setShowNotificationModal}/>
          }
        <LucideGanttChartSquare color="#0068FF" width={30} height={30}/>
      </section>
    )
}