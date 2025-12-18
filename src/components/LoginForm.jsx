import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import axios from "axios"

const LoginForm = () => {
    const [username, setusername] = useState('');
    const passwordRef = useRef('');
    const navigate=useNavigate()

    const handleNameChange = (e) => {
        setusername(e.target.value);
    }
    
    const handleSumbit = async (e) => {
        e.preventDefault();
        console.log(username, passwordRef.current.value)

        const {data}=await axios.post("https://vite-backend-1.onrender.com/auth/login",{
            email:username,
            password:passwordRef.current.value
        })
        console.log("response=>",data);
        toast.success(data.message);
        sessionStorage.setItem('token',data.token);
        sessionStorage.setItem('isLogged',true)
        navigate('/products')
        
    }

    

    return (
        <>
            <div className="mt-10 w-[400px] flex flex-col justify-center items-center mx-auto p-2 bg-violet-200 shadow-lg rounded-xl">
                <h1 className="font-bold text-2xl mb-5 pt-5">Login</h1>
                <input type="text" placeholder="Username" className="border p-2 rounded-[5px] w-[80%]"
                    value={username} onChange={handleNameChange} />
                <input type="password" placeholder="Password" className="border p-2 rounded-[5px] my-5 w-[80%]"
                    ref={passwordRef} />
                <button className="bg-orange-600 text-white text-lg px-3 py-1 rounded-lg mb-4" onClick={handleSumbit}>Login</button>
            </div>

        </>
    )
}

export default LoginForm;