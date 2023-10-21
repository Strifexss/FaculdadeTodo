"use client"
import { Menu, BellDotIcon, LucideGanttChartSquare } from "lucide-react"
import NotificationModal from "./Components/LayoutAside/NotificationModal"
import {useState} from "react"
import { useSelector } from "react-redux/es/hooks/useSelector"
import { handleHasNoNotification } from "../features/Notifications/NotificiationSlice/hasNotificationSlices"
import { useDispatch } from "react-redux"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {

    const dispatch = useDispatch()
    const [showNotificationModal, setShowNotificationModal] = useState(false)
    const HasNotification = useSelector((state: {HasNotification:boolean}) => state.HasNotification)

    const handleOpenNotificationModal = () => {
      console.log(HasNotification)
      dispatch(handleHasNoNotification())
      setShowNotificationModal(!showNotificationModal)
    }

    return (
      <div  className="w-screen h-screen flex flex-col md:flex-row md:items-center">
        <div className="hidden w-[3%] h-full bg-BrancoBg px-10 py-8 drop-shadow-2xl items-center md:flex flex-col justify-between">
          <Menu color="#0068FF" width={30} height={30}/>
          <section className="flex flex-col gap-6">
            <BellDotIcon className="cursor-pointer"  onClick={() => handleOpenNotificationModal()}
              color={`${HasNotification ? "#ffa500" : "#0068FF" }`} width={30} height={30} />
              { showNotificationModal &&
                <NotificationModal HandleCloseModal={setShowNotificationModal}/>
              }
            <LucideGanttChartSquare color="#0068FF" width={30} height={30}/>
          </section>
        </div>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    )
  }