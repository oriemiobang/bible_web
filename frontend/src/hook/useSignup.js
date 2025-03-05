import { useState } from "react";
import { useAuthContext } from "./useAuthContext" 


export const useSignup = ()=> {

    const [error, setError] = useState(null)
    const [isLoading, setIsLoading] = useState(null)
    const {dispatch} = useAuthContext()
    const backendUrl = process.env.VITE_BACKEND_URL;

    const signup = async (email, password) => {

        setIsLoading(true)
        setError(null)

        const response = await fetch(`${backendUrl}/api/user/signup`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        })
       
        const json = await response.json()
        // const data = await dataResponse.json()

        if(!response.ok){
            setIsLoading(false)
            setError(json.error)
        }

        if(response.ok){
            // save the user to local storage
            localStorage.setItem('user', JSON.stringify(json))

            // update the auth context
            dispatch({type: 'LOGIN', payload: json})
            setIsLoading(false)
            return json

        }
    }

    return {
        signup, isLoading, error
    }
}