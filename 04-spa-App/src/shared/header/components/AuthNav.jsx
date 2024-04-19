import { Link } from "react-router-dom"
import { Logo } from "../hooks/Logo"


export const AuthNav = () => {
  return (
    <div className="sticky z-50 top-0 w-full bg-slate-50 border border-b-slate-200 p-3">
        <div className="flex justify-between items-center">
          <Logo />
        </div>
      </div>
  )
}
