"use client"
import { Menu} from "lucide-react"
import NotificationButtons from "./Components/LayoutAside/notifcationButtons/NotificationButtons"


export default function RootLayout({
  children,
  }: {
    children: React.ReactNode
  }) {

    return (
      <div  className="w-screen h-screen flex flex-col md:flex-row md:items-center">
        <div className="hidden w-[3%] h-full bg-BrancoBg px-10 py-8 drop-shadow-2xl items-center md:flex flex-col justify-between">
          <Menu color="#0068FF" width={30} height={30}/>
        <NotificationButtons/>
        </div>
        <div className="w-full h-full">
          {children}
        </div>
      </div>
    )
  }