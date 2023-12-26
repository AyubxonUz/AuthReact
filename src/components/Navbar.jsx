import {useEffect, useState} from "react"
import {Link} from "react-router-dom"

import {signOut} from "firebase/auth"
import {auth} from "../firebase/firebaseConfig"
import {toast} from "react-toastify"

function Navbar() {
  const [mode, setMode] = useState("")

  const changeMode = () => {
    const newMode = mode === "light" ? "dark" : "light"
    document.documentElement.setAttribute("data-theme", newMode)
    setMode(newMode)
  }

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("sign out successfuly")
      })
      .catch((error) => {
        toast.error(error.message)
      })
  }

  return (
    <div className="navbar bg-base-100">
      <div className="max-container flex justify-between">
        <div className="">
          <Link to="/" className="p-0 btn btn-ghost text-xl">
            TodoList
          </Link>
        </div>

        <div className="flex-none ">
          <div className="flex items-center gap-6 max-[600px]:grid">
            <button
              onClick={changeMode}
              className="btn btn-sm bg-stone-950 text-white"
            >
              Change Mode
            </button>
            <p>Welcome, Ayubxon</p>
            <button onClick={logout} className="btn btn-sm btn-primary">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
