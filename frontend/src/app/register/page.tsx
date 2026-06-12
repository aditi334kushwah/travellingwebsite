'use client'
import axios from 'axios'
import {useState} from "react"
import Link from 'next/link'
import { useRouter } from "next/navigation";


const RegisterPage = ()=> {

    const router = useRouter()

    const [error , setError] = useState({
        username : "",
        email : "",
        password : ""
    });
    const [formData,setFormData] = useState({
        username : "",
        email : "",
        password : ""
    })

    const handleChange = (e:React.ChangeEvent<
        HTMLInputElement |
        HTMLTextAreaElement|
        HTMLSelectElement >) => {

            setFormData({
                ...formData , 
                [e.target.name] : e.target.value
            })

    }

    const handleSumit = async (e:React.FormEvent)=>{
        e.preventDefault()
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/accounts/register/',formData)
            console.log("REGISTRATION SUCCESS", response.data);

            setError({
                username : "",
                email : "",
                password : ""
            })
            alert("Registration Successfully")
            
            setFormData({

                username : "", 
                email : "",
                password : ""

            })

            router.push("/login")

        } catch (error: any) {

            console.log("ERROR DATA:", error.response?.data);

            setError({
                username: error.response?.data?.username?.[0] || "",
                email: error.response?.data?.email?.[0] || "",
                password: error.response?.data?.password?.[0] || "",
            });

            }
        }

  return (
         <section className = "relative w-full h-full flex justify-center align-center mt-40  ">
            <div className="flex flex-col bg-gray-100 p-10 rounded-2xl border-gray-100 shadow-gray-400 shadow-xl ">
                <div className= " text-center ">
                    <h2 className="text-2xl font-bold text-blue-700 " >Sign-up </h2>
                </div>
                    <div>
                    <form onSubmit={handleSumit}>
                        
                        <div className ="m-2  ">
                           
                            <input type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username "
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                            {error.username &&
                             <p className="bg-red-100 border border-red-200 text-red-700 px-4 text-md rounded my-2">
                            {error.username}</p>}
                        </div>  
                        <div className ="m-2  ">
                            
                            <input type="text" 
                            name = "email" 
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email -"
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>

                            {error.email && 
                            <p  className="bg-red-100 border border-red-200 text-red-700 px-4 text-md rounded my-2">
                            {error.email}</p>}
                        </div>
                        <div className ="m-2 mb-2 ">
                      
                            <input type="password" 
                            name = "password" 
                            value={formData.password}   
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>


                            {error.password &&
                            <p  className="bg-red-100 border border-red-200 text-red-700 px-4 text-md rounded my-2">
                            {error.password}</p>}
                        </div>

                        <div className = "m-2  py-2 px-4 mt-2 border rounded-sm  border-gray-300 hover:border-blue-500 bg-blue-500 text-white flex justify-center align-center"  >
                            <button >    
                                Sumit
                            </button>
                        </div> 

                        <div className="m-2">
                            <span className="text-sm text-gray-400">Already have an account ? </span>
                            <Link href="/login" className ="text-sm text-blue-500 ">Log-in</Link>
                        </div>

                        <div className ="m-2 mb-2 ">
                       
                            <input type="text" 
                            name = "google" 
                            placeholder="Sign-up with google"
                            className = "py-1 px-4 mt-2 border rounded-sm text-black border-gray-900 "></input>
                        </div>
                    </form>
                </div>
            </div>
        </section>
  )
}



export default RegisterPage