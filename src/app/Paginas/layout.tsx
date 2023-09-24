import { Menu, BellDotIcon, LucideGanttChartSquare } from "lucide-react"

export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <div  className="w-screen h-screen flex flex-col md:flex-row md:items-center">
        <div className=" w-[3%] h-full bg-BrancoBg px-10 py-8 drop-shadow-2xl items-center flex flex-col justify-between">
          <Menu color="#0068FF" width={30} height={30}/>
          <section className="flex flex-col gap-6">
            <BellDotIcon color="#0068FF" width={30} height={30}/>
            <LucideGanttChartSquare color="#0068FF" width={30} height={30}/>
          </section>
        </div>
        <div className="w-full h-full mt-16 md:mt-0">
          {children}
        </div>
      </div>
    )
  }