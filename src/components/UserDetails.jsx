import { useContext, useEffect, useState } from "react";
import GlobalContext from "../contexts/GlobalContext";

const UserDetails = () => {

    const {currentPage} =useContext(GlobalContext);

    const [userData, setUserData] = useState({})
    const [loading,setLoading]=useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${currentPage}`)
            const data = await res.json()
            setLoading(false);
            console.log(data)
            setUserData(data)
        }
        fetchData()
    }, [currentPage])

    return (

        <div className="w-[400px] p-4 m-3 mt-5 bg-orange-300 rounded-[15px] shadow-lg mx-auto flex flex-col justify-center">
            <h1 className="text-xl mb-2 font-bold text-center">User Details</h1>
            {loading ? (
                <p>Loading....</p>
            ) : (
            <>
            <div ><strong>Name :</strong> {userData.name}</div>
            <div ><strong>Email :</strong> {userData.email}</div>
            <div ><strong>Company :</strong> {userData.company.name}</div>
            <div><strong>Website :</strong>{userData.website}</div>
            <div ><strong>Address :</strong>{userData.address.street} , {userData.address.city} , {userData.address.zipcode}</div>
            </>
            )}
        </div>
    )
}

export default UserDetails;