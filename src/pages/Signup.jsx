import {Link} from "react-router-dom"
import {useGlobalContext} from "../hooks/useGlobalContext"
import {auth, GoogleProvider} from "../firebase/firebaseConfig"
import {GoogleAuthProvider, signInWithPopup} from "firebase/auth"
import {toast} from "react-toastify"

function Signup() {
  const {dispatch} = useGlobalContext()

  const handleGoogleLogin = (e) => {
    e.preventDefault()

    signInWithPopup(auth, GoogleProvider)
      .then((result) => {
        GoogleAuthProvider.credentialFromResult(result)
        const user = result.user
        dispatch({type: "LOGIN", payload: user})
        toast.success("Welcome back !")
      })
      .catch((error) => {
        const errorMessage = error.message
        console.log(errorMessage)
        toast.error(errorMessage)
      })
  }

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <h1 className="text-3xl font-semibold text-center text-purple-700 underline">
          Sign up
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              for="text"
              className="block text-sm font-semibold text-gray-800"
            >
              User
            </label>
            <input
              type="text"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />

            <label
              for="email"
              className="block text-sm font-semibold text-gray-800"
            >
              Email
            </label>
            <input
              type="email"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              for="password"
              className="block text-sm font-semibold text-gray-800"
            >
              Password
            </label>
            <input
              type="password"
              className="block w-full px-4 py-2 mt-2 text-purple-700 bg-white border rounded-md focus:border-purple-400 focus:ring-purple-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <Link to="/" className="text-xs text-purple-600 hover:underline">
            Forget Password?
          </Link>
          <div className="mt-6">
            <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
              Enter
            </button>
            <br />
            <br />
            <button
              onClick={handleGoogleLogin}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600"
            >
              Google
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Do you have an account?{" "}
          <Link
            to="../login"
            className="font-medium text-purple-600 hover:underline"
          >
            Login up
          </Link>
        </p>
      </div>
    </div>
  )
}

export default Signup
