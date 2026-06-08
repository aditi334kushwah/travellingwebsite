'use client'
import axios from 'axios'
import {useState} from "react"


const RegisterPage = ()=> {

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
            console.log(response.data)
            alert("Registration Successfull")
            setFormData({

                username : "", 
                email : "",
                password : ""

            })
        } catch (error: any) {
            console.log("ERROR DATA:", error.response?.data);
            }
    }

  return (
         <section className = "relative w-full h-[440px] sm:h-[400px] md:h-[440px] flex justify-center align-center mt-40  ">
            <div className="flex flex-col bg-white p-10 rounded-2xl border-gray-100 shadow-gray-400 shadow-xl ">
                <div className= " text-center ">
                    <h2 className="text-2xl font-bold text-blue-700 " >Sign-up </h2>
                </div>
                    <div>
                    <form onSubmit={handleSumit}>
                        <div className ="m-2  ">
                            {/* <label>username</label> */}
                            <input type="text"
                            name="username"
                            onChange={handleChange}
                            placeholder="Username "
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                        </div>  
                        <div className ="m-2  ">
                            {/* <label>email</label> */}
                            <input type="text" 
                            name = "email" 
                            onChange={handleChange}
                            placeholder="Enter your email -"
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                        </div>
                        <div className ="m-2 mb-2 ">
                            {/* <label>password</label> */}
                            <input type="password" 
                            name = "password" 
                            onChange={handleChange}
                            placeholder="Enter your password"
                            className = "py-2 px-4 mt-2 border rounded-sm text-gray-900 border-gray-300 hover:border-blue-500"></input>
                        </div>

                        <div className = "m-2  py-2 px-4 mt-2 border rounded-sm  border-gray-300 hover:border-blue-500 bg-blue-500 text-white flex justify-center align-center"  >
                            <button >    
                                Sumit
                            </button>
                        </div> 

                        <div className="m-2">
                            <span className="text-sm text-gray-400">Already have an account ? </span>
                            <span className ="text-sm text-blue-500 ">Log-in</span>
                        </div>

                        <div className ="m-2 mb-2 ">
                            {/* <label>password</label> */}
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