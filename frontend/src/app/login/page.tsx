'use client'
import axios from 'axios'
import {useState} from "react"
import Link from 'next/link';
import { useRouter } from 'next/navigation';


const LoginPage = ()=> {

    const router = useRouter();

    const [errors , setErrors] = useState({
        message :""
    })
    const [formData,setFormData] = useState({
        username : "",
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
            const response = await axios.post('http://127.0.0.1:8000/api/accounts/login/',formData)
            console.log("LOGIN SUCCESS", response.data);
            console.log("laksdfkdsj nfkdjn kjfdsn skjdf :login")
            localStorage.setItem("access_token",response.data.access_token);
            localStorage.setItem("username", response.data.username);
            window.location.href = "/";

            setErrors({
                message : ""
            })
            alert("Login Successfully")
            
            setFormData({

                username : "", 
                password : ""

            })

            router.push('/')
        } catch (error: any) {
            console.log("ERROR DATA:", error.response?.data);
            
            setErrors({
                message: error.response?.data?.message || ""
            });
        }
    }

  return (
         <section className = "relative w-full h-full flex justify-center align-center mt-40  ">
            <div className="flex flex-col bg-gray-100 p-10 rounded-2xl border-gray-100 shadow-gray-400 shadow-xl ">
                <div className= " text-center ">
                    <h2 className="text-2xl font-bold text-blue-700 " >Login </h2>
                </div>
                    <div>
                    <form onSubmit={handleSumit}>

                        {
                            (errors.message) && (
                                <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-2 rounded mt-4">

                                {errors.message && <p>{errors.message}</p>}
                               
                                </div>
                            )
                        }
                        
                        <div className ="m-2  ">
                           
                            <input type="text"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Username "
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                        </div>  
                       
                        <div className ="m-2 mb-2 ">
                      
                            <input type="password" 
                            name = "password" 
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                        </div>

                        <div className = "m-2 mt-4 py-2 px-4 mt-2 border rounded-sm  border-gray-300 hover:border-blue-500 bg-blue-500 text-white flex justify-center align-center"  >
                            <button >    
                                Sumit
                            </button>
                        </div> 

                        <div className="m-2">
                            <span className="text-sm text-gray-400">don't have account? </span>
                            <Link href="/register" className ="text-sm text-blue-500 ">register</Link>
                        </div>

                       
                    </form>
                </div>
            </div>
        </section>
  )
}



export default LoginPage