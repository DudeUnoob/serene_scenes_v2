
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { UserContext, useUser, useUserUpdate } from "../context/UserContext"
import { useEffect } from "react"
import { validateAuth } from "../functions/validateAuth"

export default function Login() {

    const { userData, token } = useUser()
    const provider = new GoogleAuthProvider()
    const updateUser = useUserUpdate().googleLogin
    const updateUserLogout = useUserUpdate().googleLogout

    useEffect(() => {
        if (token != null && userData != null){

            // const response = validateAuth(token)
            // response.then(data => console.log(data))
        }

    }, [userData, token])
  
    const loginWithGoogle = async () => {
        // const auth = getAuth()
        // signInWithPopup(auth, provider).then((cred) => console.log(cred))
        updateUser()
    }

    const logoutWithGoogle = async() => {
        updateUserLogout()
    }

    return (
        
           
        
            <>
            <button onClick={loginWithGoogle}>Login with Google</button>
            <br />
            <br />
            <button onClick={logoutWithGoogle}>Google Logout</button>
            </>
        
        
    )
}