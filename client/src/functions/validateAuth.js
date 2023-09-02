import axios from "axios"

export async function validateAuth (token) {

    const res = await axios.post("http://localhost:3000/api/v1/google_auth", {}, {
        headers : {"Authorization": `Bearer ${token}`, "Content-Type":"application/json"}
    })
    
    console.log(res.data)
    return res.data
}