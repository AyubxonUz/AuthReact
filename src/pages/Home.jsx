import {useContext} from "react"
import {GlobalContext} from "../context/GlobalContext"

function Home() {
  const {dispatch} = useContext(GlobalContext)
  return (
    <div className="m-1">
      <h1>Home</h1>
    </div>
  )
}

export default Home
