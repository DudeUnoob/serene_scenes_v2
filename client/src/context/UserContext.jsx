import React, { useState, useEffect, useContext } from 'react';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth"
import { validateAuth } from '../functions/validateAuth';

export const UserContext = React.createContext()
export const UserUpdateContext = React.createContext()


export function useUser() {
    return useContext(UserContext);
}

export function useUserUpdate() {
    return useContext(UserUpdateContext);
}

export function UserProvider({ children }) {
    const [userData, setUserData] = useState(null);
    const [token, setToken] = useState("")

    useEffect(() => {
        authCall()
    }, []);




    async function authCall() {

        const authListener = await getAuth().onAuthStateChanged((user) => {
            if(user){
                user.getIdToken().then((token) => {
                    validateAuth(token).then(response => {
                        if (response.statusCode == 200){
                            setUserData(response.userData)
                            return setToken(token)
                        }
                    })
                })
                // return setUserData(user)
            } else {
                setToken(null)
                return setUserData(null)
            }
        })

        


        return () => {

        }
    }

    async function googleLogin() {
        const auth = getAuth()
        const provider = new GoogleAuthProvider()
        signInWithPopup(auth, provider).then((userCred) => {
            userCred.user.getIdToken().then((token) => {
                validateAuth(token).then((response) => {
                    if(response.statusCode == 200){
                        setUserData(response.userData)
                        setToken(token)
                    }
                })
            })
            // setUserData({ ...userCred.user, ...userCred._tokenResponse })
        }).catch((error) => {
            setUserData(null)
            return error
        })
    }

    async function googleLogout() {

        const auth = getAuth()
        auth.signOut().then((state) => {
            setUserData(null)
            setToken(null)
        })
    }

    return (
        <UserContext.Provider value={{ userData, token }}>
            <UserUpdateContext.Provider value={{ googleLogin, googleLogout }}>
                {children}
            </UserUpdateContext.Provider>
        </UserContext.Provider>
    )

}