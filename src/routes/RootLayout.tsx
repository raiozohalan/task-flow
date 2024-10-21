import { Outlet } from "react-router-dom"
import Sidebar from "../components/Sidebar"
import classNames from "../utils/classNames"

const RootLayout = () => {
  return (
    <div className={classNames("w-screen h-screen","flex divide-x-[1px] divide-gray-800")}>
      <Sidebar/>
      <div className="flex-1">
        <Outlet/>
      </div>
    </div>
  )
}

export default RootLayout